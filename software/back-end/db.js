
var mysql = require('mysql');

var dbConn = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'listoteca'
};

module.exports = {
    con: mysql.createConnection(dbConn),
    senError: function(err, status) {
        console.log(err);
        res.status(status);
        res.end()
    }
}