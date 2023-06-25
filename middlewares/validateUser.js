
const jwt = require("jsonwebtoken");

const userValidation = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(401).json({ 'meaasge': 'Sorry you are Unauthorized.' });

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decodedToken.userId;
        next();
    } catch (error) {
        return res.status(401).json({ 'meaasge': 'Sorry you are Unauthorized.' });
    }
};

module.exports = userValidation;