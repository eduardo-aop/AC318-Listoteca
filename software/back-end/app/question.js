var path = require('path');
var db = require('../db.js');
var mysql = require('mysql');
var bodyParser  = require('body-parser');

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
                    //insert id into false answers
                    console.log(result);
                    var i;
                    var f = [];
                    for (i = 0; i < answers.length; i++) {
                        var o = {};
                        o["answer"] = answers[i];
                        o["problemId"] = result.insertId;
                        f.push(o);
                    }

                    console.log(f);

                    //convert json to array
                    var array = [];
                    for (i = 0; i < f.length; i++) {
                        array[i] = Object.values(f[i]);
                    }

                    //console.log(array);

                    var query = "INSERT INTO answer(answer, exercise_id) VALUES ?";
                    connection.query(query, [array], function (err, result, fields) {
                        if (err) {
                            console.log(err);
                            res.sendStatus(500);
                        } else {
                            console.log(result);
                            res.sendStatus(200);
                        }
                    });
                    connection.end();
                }
            });
        });
    }
}