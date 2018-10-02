var path    = require('path');
var db      = require('../db.js');
var mysql   = require('mysql');
var express     = require('express');
var app         = express();

var bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = {
    getStudentById : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        var id = req.params.id;
        connection.connect(function(err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                console.log("Connected!");
                var query = "SELECT * FROM student WHERE id = ?";
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
    getAllStudents : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        connection.connect(function(err) {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            }
            else {
                console.log("Connected!");
                var query = "SELECT * FROM student";
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
    saveStudent : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;
        connection.connect(function(err) {
            var query = "INSERT INTO student(name, email, password) VALUES (?, ?, ?)";
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
    updateStudent : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;
        connection.connect(function(err) {
            var query = "UPDATE student SET name = ?, email = ?, password = ? WHERE name = ?";
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