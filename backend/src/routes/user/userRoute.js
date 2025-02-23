const express = require('express');
const userController = require('../../controllers/user/userControllers');
const route = express.Router();

route.post('/', userController.createUser);
route.delete('/:id', userController.deleteUserById);

module.exports = route;
