const Todo = require('../models/todoModels');
const User = require('../models/userModels');

const getAllTodos = async (req, res) => {

    const userId = req.body.userId;

    try {
        const todoItems = await Todo.find({ userId });
        return res.status(200)
            .json({ 'message': 'Todo items found successfully', todoItems });
    } catch (error) {
        return res.status(500)
            .json({ 'message': error.message });
    }
}

const getTodo = async (req, res) => {
    const _id = req.params._id;
    try {
        const todoItem = await Todo.find({ _id });
        if (todoItem === null)
            return res.status(400)
                .json({ 'message': 'No such item sxists.' });
        return res.status(200)
            .json({ 'message': 'Todo items found successfully', todoItem });
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400)
                .json({ 'message': 'No item with such id sxists.' });
        }
        return res.status(500)
            .json({ 'message': error });
    }
}

const createTodo = async (req, res) => {
    const { title, isDone, userId } = req.body;
    console.log(userId);
    const newTodoItem = new Todo({ title, isDone, userId });

    try {
        const savedTodo = await newTodoItem.save();
        return res.status(201)
            .json({ "message": "Todo added successfully!", "data": savedTodo });
    } catch (error) {
        return res.status(500)
            .json({ "message": "error occured", "error": error.message });
    }
}

const deleteTodo = async (req, res) => {
    const _id = req.params._id;
    try {
        const deletedItem = await Todo.deleteOne({ _id });
        if (deletedItem.deletedCount == 1)
            return res.status(200)
                .json({ "message": "Todo deleted successfully", "deleted item": deletedItem });
        return res.status(400)
            .json({ "message": "No such item found!", });
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400)
                .json({ 'message': 'No item with such id sxists.' });
        }
        return res.status(500)
            .json({ "message": "error occured", "error": error.message });
    }

}

const editTodo = async (req, res) => {
    const _id = req.params._id
    const isDone = req.body.isDone;

    try {
        await Todo.updateOne({ _id }, { $set: { isDone } });
        return res.status(200).json({ 'message': 'Item updated successfully.' });
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400)
                .json({ 'message': 'No item with such id sxists.' });
        }
        return res.status(500)
            .json({ "message": "error occured", "error": error.message });
    }
}



module.exports = {
    getAllTodos,
    getTodo,
    createTodo,
    deleteTodo,
    editTodo,
}