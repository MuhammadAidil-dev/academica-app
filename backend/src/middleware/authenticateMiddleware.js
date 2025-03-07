const jwt = require('jsonwebtoken');

const Authenticate = async (req, res, next) => {
  try {
    const SECRET_KEY = process.env.JWT_SECRET;

    if (!req.cookies || !req.cookies.accessToken) {
      return res
        .status(401)
        .json({
          status: 'unauthorized',
          message: 'Access token tidak tersedia',
        });
    }

    const { accessToken } = req.cookies;

    jwt.verify(accessToken, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({
            status: 'unauthorized',
            message: 'Token tidak valid atau expired',
          });
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = Authenticate;
