var path    = require('path');
var db = require('../db.js');
var conn = db.con;

module.exports = {
    getStudent : function(req, res){
        conn.connect(function(err) {
            if (err) conn.sendError(err, 500)
            else {
                console.log("Connected!");
                conn.query("SELECT * FROM student", function (err, result, fields) {
                    if (err) conn.sendError(err, 500)
                    else {
                        console.log(result);
                        res.status(200);
                        res.send(result)
                    }
                });
            }
            conn.end();
        });
    }
}