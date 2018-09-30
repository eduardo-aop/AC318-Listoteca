/*Pacotes que serão usados no projeto */
var express = require('express');
var app = express();

var cors = require('cors')
var bodyParser = require('body-parser');
var router = require('./app/routers.js');

const IP_ADDRESS = "127.0.0.1"
const PORT = 8000;

var dbConn = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'listoteca'
    };

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);

var server = app.listen(PORT, function () {
	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)
});