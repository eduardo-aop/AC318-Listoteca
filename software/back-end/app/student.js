var path    = require('path');
var db = require('../db.js');
var mysql = require('mysql');

module.exports = {
    getStudent : function(req, res){
        var connection = mysql.createConnection(db.dbData);

        connection.connect(function(err) {
            db.sendError(res, 'err', 500)
            if (err) {
                db.sendError(res, err, 500)
            }
            else {
                console.log("Connected!");
                connection.query("SELECT * FROM student", function (err, result, fields) {
                    if (err) db.sendError(err, 500)
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