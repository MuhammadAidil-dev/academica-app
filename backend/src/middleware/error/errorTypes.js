class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

// handle error sequelize validation
class SequelizeError extends Error {
  constructor(message) {
    super(message);
    this.name = 'SequelizeError';
    this.statusCode = 400;
  }
}

// handle validation error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}

module.exports = { NotFoundError, SequelizeError, ValidationError };
