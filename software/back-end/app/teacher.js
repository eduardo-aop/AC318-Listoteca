var path    = require('path');
var db = require('../db.js');
var mysql = require('mysql');

module.exports = {
    authTeacher : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        var userName = req.body.name;
        var password = req.body.password;
        connection.connect(function(err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                console.log("Connected!");
                var query = "SELECT * FROM teacher WHERE (userName = ? OR email = ?) AND password = ?";
                connection.query(query, [userName, userName, password], function (err, result, fields) {
                    if (err) {
                        console.log(err);
                        res.sendStatus(500);
                    } else if (result.length == 0) {
                        console.log('not found');
                        res.sendStatus(404);
                    } else {
                        console.log(result);
                        res.send(result);
                    }
                });
                connection.end();
            }
        });
    },
    getTeacherById : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        var id = req.params.id;
        connection.connect(function(err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                console.log("Connected!");
                var query = "SELECT * FROM teacher WHERE id = ?";
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
    getAllTeachers : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        connection.connect(function(err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                console.log("Connected!");
                var query = "SELECT * FROM teacher";
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
    saveTeacher : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;
        connection.connect(function(err) {
            var query = "INSERT INTO teacher(name, email, password) VALUES (?, ?, ?)";
            connection.query(query, [name, email, password], function (err, result, fields) {
                if (err) {
                    if (err.code == 'ER_DUP_ENTRY') {
                        console.log(err);
                        res.sendStatus(409);
                    } else {
                        console.log(err);
                        res.sendStatus(500);
                    }
                } else {
                    console.log(result);
                    res.sendStatus(200);
                }
            });
            connection.end();
        });
    },
    updateTeacher : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;
        connection.connect(function(err) {
            var query = "UPDATE teacher SET name = ?, email = ?, password = ? WHERE name = ?";
            connection.query(query, [name, email, password, name], function (err, result, fields) {
                if (err) {
                    if (err.code == 'ER_DUP_ENTRY') {
                        console.log(err);
                        res.sendStatus(409);
                    } else {
                        console.log(err);
                        res.sendStatus(500);
                    }
                } else {
                    console.log(result);
                    res.sendStatus(200);
                }
            });
            connection.end();
        });
    }
}