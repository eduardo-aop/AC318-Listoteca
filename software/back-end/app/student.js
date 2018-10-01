var path    = require('path');
var db = require('../db.js');
var error = db.sendError
var mysql = require('mysql');

module.exports = {
    getStudent : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        connection.connect(function(err) {
            if (err) {
                console.log(err);
                res.status(500);
                res.end()
            }
            else {
                console.log("Connected!");
                connection.query("SELECT * FROM student", function (err, result, fields) {
                    if (err) {
                        console.log(err);
                        res.status(500);
                        res.end()
                    }
                    else {
                        console.log(result);
                        res.status(200);
                        res.send(result)
                    }
                });
                connection.end();
            }
        });
    }
}