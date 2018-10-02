//require express
var express = require('express');
var path    = require('path');
var student = require('./student.js');

//create router object
var router = express.Router();

//export router
module.exports = router;

//Rotas
router.route('/student/:id').get(student.getStudentById);
router.route('/student').get(student.getAllStudents);
router.route('/student').post(student.saveStudent);

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../front-end/index.html'));
});