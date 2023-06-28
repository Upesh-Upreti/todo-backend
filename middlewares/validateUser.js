
const jwt = require("jsonwebtoken");

const userValidation = (req, res, next) => {
    const token = req.headers['authorization'];
    const nonExistingUser = {
        'meaasge': 'Please login or sign up .', "todoItems": [
            {
                "_id": "649869a4480a901c820c18ac",
                "title": "Signup as a new user.",
                "isDone": false,
                "createdAt": "2023-06-25T16:21:43.176Z",
                "dueDate": "2023-06-25T16:21:43.176Z",
                "userId": "64985defdcdb3c9675da538b",
                "__v": 0
            },
            {
                "_id": "64986a05eba732a59351aed4",
                "title": "Login with your account.",
                "isDone": false,
                "createdAt": "2023-06-25T16:23:11.697Z",
                "dueDate": "2023-06-25T16:23:11.697Z",
                "userId": "64985defdcdb3c9675da538b",
                "__v": 0
            }
        ]
    };

    if (!token) return res.status(401).json(nonExistingUser);

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decodedToken.userId;
        next();
    } catch (error) {
        return res.status(401).json(nonExistingUser);
    }
};

module.exports = userValidation;