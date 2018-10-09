//require express
var express = require('express');
var path    = require('path');
var student = require('./student.js');
var question = require('./question.js');
var teacher = require('./teacher.js');

//create router object
var router = express.Router();

//export router
module.exports = router;

//Rotas
//student
router.route('/student/:id').get(student.getStudentById);
router.route('/student').get(student.getAllStudents);
router.route('/student').post(student.saveStudent);
router.route('/student').post(student.updateStudent);

//teacher
router.route('/teacher/:id').get(teacher.getTeacherById);
router.route('/teacher').get(teacher.getAllTeachers);
router.route('/teacher').post(teacher.saveTeacher);
router.route('/teacherp').post(teacher.updateTeacher);

//problem
router.route('/question/:id').get(question.getQuestionById);
router.route('/question').get(question.getAllQuestions);
router.route('/question').post(question.saveQuestion);


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../front-end/index.html'));
});