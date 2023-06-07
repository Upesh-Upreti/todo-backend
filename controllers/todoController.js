const Todo = require('../models/todoModels');

const getAllTodos = async (req, res) => {

    try {
        const todoItems = await Todo.find();
        return res.status(200)
            .json({ 'message': 'Todo items found successfully', todoItems });
    } catch (error) {
        return res.status(500)
            .json({ 'message': error.message });
    }
}

const createTodo = async (req, res) => {
    const { id, title, isDone } = req.body;
    const newTodoItem = new Todo({ id, title, isDone });

    try {
        const savedTodo = await newTodoItem.save();
        return res.status(200)
            .json({ "message": "Todo added successfully!", "data": savedTodo });
    } catch (error) {
        return res.status(500)
            .json({ "message": "error occured", "error": error.message });
    }
}

const deleteTodo = async (req, res) => {
    const id = req.params.id;
    try {
        const deletedItem = await Todo.deleteOne({ id });
        if (deletedItem.deletedCount == 1)
            return res.status(200)
                .json({ "message": "Todo deleted successfully", "deleted item": deletedItem });
        return res.status(400)
            .json({ "message": "No such item found!", });
    } catch (error) {
        return res.status(500)
            .json({ "message": "error occured", "error": error.message });
    }

}

module.exports = {
    getAllTodos,
    createTodo,
    deleteTodo,
}