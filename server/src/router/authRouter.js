const authRouter = require('express').Router();
const checkToken = require('../middlewares/checkToken');
const validators = require('../middlewares/validators');
const userController = require('../controllers/userController');

authRouter.post(
  '/registration',
  validators.validateRegistrationData,
  userController.registration
);

authRouter.post('/login', validators.validateLogin, userController.login);

authRouter.get('/user', checkToken.checkAuth);

module.exports = authRouter;
