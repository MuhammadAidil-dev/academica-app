const errorHandler = (err, req, res, next) => {
  console.error('err', {
    name: err.name,
    status: err.statusCode,
    stack: err.stack,
  });

  switch (err.name) {
    case 'NotFoundError':
      return res.status(err.statusCode).json({
        status: 'error',
        type: err.name,
        message: err.message,
      });

    default:
      return res.status(500).json({
        status: 'error',
        type: 'UnknownError',
        message: 'An unexpected error occurred',
      });
  }
};

module.exports = errorHandler;
