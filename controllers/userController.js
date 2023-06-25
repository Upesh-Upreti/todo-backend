const User = require("../models/userModels");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;

    const doesUserExist = await User.findOne({ email });

    if (doesUserExist != null) return res.status(400).json({ 'message': 'email already exists.' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        email, password: hashedPassword, firstName, lastName,
    });

    try {
        await newUser.save();
    } catch (error) {
        return res.json({ error });
    }

    return res.status(201).json({ 'message': 'User has been created successfully.' });

}

const logIn = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(401).json({ 'message': 'Invalid email or password' });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) return res.status(401).json({ 'message': 'Invalid email or password' });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ 'message': 'Login successful', 'token': token });

}



module.exports = {
    signUp,
    logIn
}