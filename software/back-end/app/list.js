var path = require('path');
var db = require('../db.js');
var mysql = require('mysql');
var bodyParser = require('body-parser');

module.exports = {
    getAllLists: function (req, res) {
        var teacherId = req.query.teacherId;
        var connection = mysql.createConnection(db.dbData);

        connection.connect(function (err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                var query = "SELECT * FROM list WHERE teacherId = ?";
                connection.query(query, [teacherId], function (err, result, fields) {
                    if (err) {
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
    getListById: function (req, res) {

    },
    generateList: function (req, res) {
        var teacherId = req.body.teacherId;
        var subject = req.body.subject;
        var theme = req.body.theme;
        var name = req.body.name;

        var connection = mysql.createConnection(db.dbData);

        connection.connect(function (err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                console.log("Connected!");
                var where = "subject = ?";
                if (theme != '' && theme != undefined) {
                    where += ' AND theme = ?';
                }
                var query = 'SELECT * FROM (SELECT id FROM exercise WHERE ' + where + ' ORDER BY RAND() LIMIT 10) T1 ORDER BY id';

                connection.query(query, [subject, theme], function (err, result, fields) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else if (result.length == 0) {
                        res.sendStatus(500);
                    } else {
                        console.log(result);
                        var query = 'INSERT INTO list(name, subject, theme, teacherId) values (?, ?, ?, ?)';
                        connection.query(query, [name, subject, theme, teacherId], function (err, resultInsert, fields) {
                            if (err) {
                                console.log(err);
                                res.sendStatus(500);
                            } else {
                                console.log(resultInsert);
                                var i;
                                for (i = 0; i < result.length; i++) {
                                    result[i].listId = resultInsert.insertId;
                                }

                                console.log(result);

                                //convert json to array
                                var array = [];
                                for (i = 0; i < result.length; i++) {
                                    array[i] = Object.values(result[i]);
                                }

                                console.log(array);
                                var query = 'INSERT INTO listHasExercise(exerciseId, listId) values ?';
                                connection.query(query, [array], function (err, resultInsert, fields) {
                                    if (err) {
                                        console.log(err);
                                        res.sendStatus(500);
                                    } else {
                                        console.log(resultInsert);
                                        res.sendStatus(201);
                                    }

                                });
                                connection.end();
                            }
                        });
                    }
                });
            }
        });
    }
}