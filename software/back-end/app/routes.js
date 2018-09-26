//require express
var express = require('express');
var path    = require('path');

//create router object
var router = express.Router();

//export router
module.exports = router;

//Rotas
router.get('/client/:id', function(req, res) {
    console.log(req.params);
    res.status(200);
    res.send("foi");
});

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../front-end/index.html'));
});