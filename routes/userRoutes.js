const router = require('express').Router();
const userControllers = require('../controllers/userController');
const userSchema = require('../schemas/userSchema');
const validateRequestSchema = require('../middlewares/validateRequestSchema');

router.post('/sign-up', userSchema.signUpSchema, validateRequestSchema, userControllers.signUp);

router.post('/log-in', userSchema.logInSchema, validateRequestSchema, userControllers.logIn);

module.exports = router;