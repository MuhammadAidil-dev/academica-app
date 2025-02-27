const { ValidationError } = require('./error/errorTypes');

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
      const message = error.details[0].message;
      next(new ValidationError(message));
    }
    next();
  };
};

module.exports = { validateRequest };
