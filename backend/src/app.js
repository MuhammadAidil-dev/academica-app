require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const routes = require('./routes');
const errorHandler = require('./middleware/error/ErrorHandler');
const { NotFoundError } = require('./middleware/error/errorTypes');

const app = express();
const PORT = 5000;

// middleware
app.use(express.json());

// routes
app.use('/api', routes);

// sinkronisasi database
sequelize
  .sync({ alter: true })
  .then(() => console.log('database sync'))
  .catch((err) => console.log('error to sync database', err));

// not found handler
app.use((req, res, next) => {
  const error = new NotFoundError('Route tidak ditemukan');
  error.statusCode = 404;
  next(error);
});
// error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running in http://localhost:${PORT}`);
});
