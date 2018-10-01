var mysql = require('mysql');

var dbData = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'listoteca'
};

var sendError = function(res, err, status) {
    console.log(err);
    res.status(status);
    res.end();
};

exports.dbData = dbData;
exports.sendError = sendError;


/*module.exports = {
    con: mysql.createConnection(dbConn),

    sendError: function(err, status) {
        console.log('err');
        res.status('status');
        res.end()
    }
}*/