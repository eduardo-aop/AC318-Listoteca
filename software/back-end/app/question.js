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
                var query = "SELECT * FROM problem";
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