const { body } = require('express-validator');

const todoSchema = [
    body('id')
        .notEmpty()
        .isLength({ min: 8 })
        .withMessage('Id cannot be empty and should be atleast of 8 characters.'),
    body('title')
        .notEmpty()
        .isLength({ min: 2 })
        .withMessage('Title cannot be empty and too short.'),
];

module.exports = todoSchema;