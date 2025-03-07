const { ValidationError } = require('./error/errorTypes');

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
      const validationError = new ValidationError(error.details[0].message);
      validationError.path = error.details[0].path;
      return next(validationError);
    }
    req.body = value;
    next();
  };
};

const validateParams = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.params);

    if (error) {
      const validationError = new ValidationError(error.details[0].message);
      validationError.path = error.details[0].path;
      return next(validationError);
    }

    req.params = value;
    next();
  };
};

const validateQuery = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.query);

    if (error) {
      const validationError = new ValidationError(error.details[0].message);
      validationError.path = error.details[0].path;
      return next(validationError);
    }

    req.query = value;
    next();
  };
};

module.exports = { validateRequest, validateParams, validateQuery };
