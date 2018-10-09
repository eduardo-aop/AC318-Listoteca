var path    = require('path');
var db      = require('../db.js');
var mysql   = require('mysql');

module.exports = {
    getQuestionById : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        var id = req.params.id;
        connection.connect(function(err) {
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
    getAllQuestions : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        connection.connect(function(err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                console.log("Connected!");
                var query = "SELECT p.id, p.question, a.text as answer, GROUP_CONCAT(CONCAT(f.text)) false_answers " +
                            "FROM problem as p LEFT JOIN false_answer as f ON p.id = f.problem_id " +
                            "JOIN answer as a ON p.answer_id = a.id GROUP BY p.id";
                            
                connection.query(query, function (err, result, fields) {
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
    saveQuestion : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        var question = req.body.question;
        var subject = req.body.subject;
        var theme = req.body.theme;
        var answer = req.body.answer;
        var falseAnswer = req.body.false_answer;
        connection.connect(function(err) {
            var query = "INSERT INTO answer(text, subject, theme) VALUES (?, ?, ?)";
            connection.query(query, [answer.text, answer.subject, answer.theme], function (err, result, fields) {
                if (err) {
                    console.log(err);
                    res.sendStatus(500);
                    connection.end();
                } else {
                    console.log(result);
                    var query = "INSERT INTO problem(question, answer_id, subject, theme) VALUES (?, ?, ?, ?)";
                    connection.query(query, [question, result.insertId, subject, theme], function (err, result, fields) {
                        if (err) {
                            console.log(err);
                            res.sendStatus(500);
                            connection.end();
                        } else {
                            //insert id into false answers
                            var i;
                            for (i = 0; i < falseAnswer.length; i++) {
                                falseAnswer[i].problemId = result.insertId;
                            }

                            //convert json to array
                            var arr = [];
                            for (i = 0; i < falseAnswer.length; i++) {
                                arr[i] = Object.values(falseAnswer[i]);
                            }

                            var query = "INSERT INTO false_answer(text, subject, theme, problem_id) VALUES ?";
                            connection.query(query, [arr], function (err, result, fields) {
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
                }
            });
        });
    }
}