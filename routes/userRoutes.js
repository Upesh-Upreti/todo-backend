const router = require('express').Router();
const userControllers = require('../controllers/userController');
const userSchema = require('../schemas/userSchema');
const validateRequestSchema = require('../middlewares/validateRequestSchema');
const validateUser = require('../middlewares/validateUser');

router.post('/sign-up', userSchema.signUpSchema, validateRequestSchema, userControllers.signUp);

router.post('/login', userSchema.logInSchema, validateRequestSchema, userControllers.logIn);

router.post('/change-password', validateUser, userSchema.changePasswordSchema, validateRequestSchema, userControllers.changePassword);


module.exports = router;