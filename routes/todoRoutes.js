const router = require('express').Router();
const todoControllers = require('../controllers/todoController');
const todoSchema = require('../schemas/todoSchema');
const validateRequestSchema = require('../middlewares/validateRequestSchema');

router.get('/', todoControllers.getAllTodos);

router.post('/', todoSchema, validateRequestSchema, todoControllers.createTodo);

router.delete('/:id', todoControllers.deleteTodo);

module.exports = router;