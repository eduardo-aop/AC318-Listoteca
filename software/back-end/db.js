var mysql = require('mysql');

var dbData = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'listoteca',
    port: '3307'
};

exports.dbData = dbData;

/*module.exports = {
    con: mysql.createConnection(dbConn),

    sendError: function(err, status) {
        console.log('err');
        res.status('status');
        res.end()
    }
}*/