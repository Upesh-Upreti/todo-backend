const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    id: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: false,
    },
    isDone: {
        type: Boolean,
        required: false,
        default: false,
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now(),
    },
    dueDate: {
        type: Date,
        required: false,
        default: Date.now(),
    }
});



const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;