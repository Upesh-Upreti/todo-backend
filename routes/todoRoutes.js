const router = require('express').Router();
const todoControllers = require('../controllers/todoController');
const todoSchema = require('../schemas/todoSchema');
const validateRequestSchema = require('../middlewares/validateRequestSchema');


router.get('/:_id', todoControllers.getTodo);

router.get('/', todoControllers.getAllTodos);

router.post('/', todoSchema.todoSchema, validateRequestSchema, todoControllers.createTodo);

router.patch('/:_id', todoSchema.todoDoneSchema, validateRequestSchema, todoControllers.editTodo);

router.delete('/:_id', todoControllers.deleteTodo);

module.exports = router;