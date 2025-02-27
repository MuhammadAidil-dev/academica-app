require('dotenv').config();
const express = require('express');
const { syncDatabase } = require('./config/database');
const routes = require('./routes');
const errorHandler = require('./middleware/error/ErrorHandler');
const { NotFoundError } = require('./middleware/error/errorTypes');

const app = express();
const PORT = 5000;

// middleware
app.use(express.json());

// routes
app.use('/api', routes);

// not found handler
app.use((req, res, next) => {
  const error = new NotFoundError('Route tidak ditemukan');
  next(error);
});
// error handling
app.use(errorHandler);

// sinkronisasi database dan jalankan server setelahnya
syncDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running in http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log('gagal sinkronisasi database', err);
  });
