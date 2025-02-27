const errorHandler = (err, req, res, next) => {
  console.error('err', {
    name: err.name,
    status: err.statusCode,
    stack: err.stack,
    path: err.path ?? '',
  });

  switch (err.name) {
    case 'NotFoundError':
      return res.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    case 'SequelizeError':
      return res.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    case 'ValidationError':
      return res.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });

    default:
      return res.status(500).json({
        status: 'error',
        message: 'An unexpected error occurred',
      });
  }
};

module.exports = errorHandler;
