const { body } = require('express-validator');

const todoSchema = [

    body('title')
        .notEmpty()
        .isLength({ min: 2, max: 50 })
        .withMessage('Title cannot be empty or title must contain at least 2 characters not exceeding 50.'),
];

const todoDoneSchema = [

    body('isDone')
        .notEmpty()
        .withMessage('Please supply the state of the task.'),
];

module.exports = { todoSchema, todoDoneSchema, };