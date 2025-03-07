const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SequelizeError } = require('../middleware/error/errorTypes');

const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

const createToken = (payload) => {
  const SECRET_KEY = process.env.JWT_SECRET;
  const token = jwt.sign(payload, SECRET_KEY);

  return token;
};

const handleSequelizeError = (error) => {
  const sequelizeError = new SequelizeError(error.errors[0].message);
  sequelizeError.path = error?.errors[0]?.path || '';

  return sequelizeError;
};

module.exports = { hashPassword, createToken, handleSequelizeError };
