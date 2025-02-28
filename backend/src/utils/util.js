const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

module.exports = { hashPassword, createToken };
