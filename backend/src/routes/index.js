const express = require('express');
const userRoutes = require('./user/userRoute');
const routes = express.Router();

routes.use('/users', userRoutes);

module.exports = routes;
