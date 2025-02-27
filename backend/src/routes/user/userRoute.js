const express = require('express');
const userController = require('../../controllers/user/userControllers');
const { validateRequest } = require('../../middleware/validationMiddleware');
const { createUserSchema } = require('../../schemas/userSchema');
const route = express.Router();

route.post(
  '/register',
  validateRequest(createUserSchema),
  userController.createUser
);
route.delete('/:id', userController.deleteUserById);

module.exports = route;
