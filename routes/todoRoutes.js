const router = require('express').Router();
const todoControllers = require('../controllers/todoController');
const todoSchema = require('../schemas/todoSchema');
const validateRequestSchema = require('../middlewares/validateRequestSchema');
const validateUser = require('../middlewares/validateUser');


router.get('/:_id', validateUser, todoControllers.getTodo);

router.get('/', validateUser, todoControllers.getAllTodos);

router.post('/', validateUser, todoSchema.todoSchema, validateRequestSchema, todoControllers.createTodo);

router.patch('/:_id', validateUser, todoSchema.todoDoneSchema, validateRequestSchema, todoControllers.editTodo);

router.delete('/:_id', validateUser, todoControllers.deleteTodo);

module.exports = router;