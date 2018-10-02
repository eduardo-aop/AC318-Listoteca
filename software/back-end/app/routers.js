//require express
var express = require('express');
var path    = require('path');
var student = require('./student.js');
var question = require('./question.js');

//create router object
var router = express.Router();

//export router
module.exports = router;

//Rotas
//student
router.route('/student/:id').get(student.getStudentById);
router.route('/student').get(student.getAllStudents);
router.route('/student').post(student.saveStudent);

//problem
router.route('/question/:id').get(question.getQuestionById);
router.route('/question').get(question.getAllQuestions);
router.route('/question').post(question.saveQuestion);


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../front-end/index.html'));
});