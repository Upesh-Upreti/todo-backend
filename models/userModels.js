const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: false,
    }, password: {
        type: String,
        required: false
    }
    , firstName: {
        type: String,
        required: false
    }, lastName: {
        type: String,
        required: false
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;