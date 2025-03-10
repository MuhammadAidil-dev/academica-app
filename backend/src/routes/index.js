const express = require('express');
const userRoutes = require('./user/userRoute');
const threadRoutes = require('./thread/threadRoute');
const Authenticate = require('../middleware/authenticateMiddleware');
const categoryRoutes = require('./category/categoryRoute');
const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/threads', Authenticate, threadRoutes);
routes.use('/category', Authenticate, categoryRoutes);

module.exports = routes;
