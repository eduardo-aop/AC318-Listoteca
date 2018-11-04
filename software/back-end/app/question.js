var path = require('path');
var db = require('../db.js');
var mysql = require('mysql');
var bodyParser = require('body-parser');

module.exports = {
    getQuestionById: function (req, res) {
        var connection = mysql.createConnection(db.dbData);

        var id = req.params.id;
        connection.connect(function (err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                console.log("Connected!");
                var query = "SELECT * FROM problem WHERE id = ?";
                connection.query(query, [id], function (err, result, fields) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        console.log(result);
                        res.send(result);
                    }
                });
                connection.end();
            }
        });
    },
    getAllQuestions: function (req, res) {
        var connection = mysql.createConnection(db.dbData);

        connection.connect(function (err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                console.log("Connected!");
                var query = "SELECT p.id, p.question, a.text as answer, GROUP_CONCAT(CONCAT(f.text) SEPARATOR \'|\') false_answers " +
                    "FROM problem as p LEFT JOIN false_answer as f ON p.id = f.problem_id " +
                    "JOIN answer as a ON p.answer_id = a.id GROUP BY p.id";

                connection.query(query, function (err, result, fields) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        console.log(result);
                        var i;
                        for (i = 0; i < result.length; i++) {
                            result[i].false_answers = result[i].false_answers.split('|');
                        }
                        res.send(result);
                    }
                });
                connection.end();
            }
        });
    },
    getAllQuestionsFromList: function (req, res) {
        var listId = req.params.listId;
        var connection = mysql.createConnection(db.dbData);

        connection.connect(function (err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                console.log("Connected!");
                
                var query = "SELECT e.id, e.question, e.subject, e.theme, GROUP_CONCAT(CONCAT(a.answer) SEPARATOR \'|\') answers" + 
                " FROM exercise as e LEFT JOIN answer as a ON e.id = a.exerciseId " +
                " JOIN listHasExercise as le ON e.id = le.exerciseId WHERE le.listId = ? GROUP BY e.id";
                
                connection.query(query, [listId], function (err, result, fields) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else {
                        console.log(result);
                        var i;
                        for (i = 0; i < result.length; i++) {
                            if (result[i].answers != null && result[i].answers != undefined)
                                result[i].answers = result[i].answers.split('|');
                        }
                        res.send(result);
                    }
                });
                connection.end();
            }
        });
    },
    saveQuestion: function (req, res) {
        var connection = mysql.createConnection(db.dbData);

        var question = req.body.question;
        var subject = req.body.subject;
        var theme = req.body.theme;
        var answers = req.body.answers;

        console.log(req.body);
        connection.connect(function (err) {
            var query = "INSERT INTO exercise(question, subject, theme) VALUES (?, ?, ?)";
            connection.query(query, [question, subject, theme], function (err, result, fields) {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                    connection.end();
                } else {
                    if (answers != undefined && answers.length > 0) {
                        var i;
                        var f = [];
                        for (i = 0; i < answers.length; i++) {
                            var o = {};
                            o["answer"] = answers[i];
                            o["problemId"] = result.insertId;
                            f.push(o);
                        }

                        //convert json to array
                        var array = [];
                        for (i = 0; i < f.length; i++) {
                            array[i] = Object.values(f[i]);
                        }

                        var query = "INSERT INTO answer(answer, exerciseId) VALUES ?";
                        connection.query(query, [array], function (err, result, fields) {
                            if (err) {
                                console.log(err);
                                res.sendStatus(500);
                            } else {
                                console.log(result);
                                res.sendStatus(201);
                            }
                        });
                    } else {
                        console.log("200");
                        res.sendStatus(201);
                    }
                    connection.end();
                }
            });
        });
    }
}