const {
  SequelizeError,
  ValidationError,
} = require('../../middleware/error/errorTypes');
const User = require('../../models/user/User');
const bcrypt = require('bcryptjs');
const { createToken } = require('../../utils/util');

const userController = {
  createUser: async (req, res, next) => {
    try {
      const { fullname, username, email, password, role } = req.body;
      const user = await User.create({
        fullname,
        username,
        email,
        password,
        role,
      });

      return res
        .status(200)
        .json({ status: 'success', message: 'Register berhasil' });
    } catch (error) {
      console.log(error);
      if (error.name.startsWith('Sequelize')) {
        const message = error.errors[0].message;
        const path = error.errors[0].path;

        const sequelizeError = new SequelizeError(message);
        sequelizeError.path = path;

        next(sequelizeError);
      }

      next(error);
    }
  },
  loginUser: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        throw new ValidationError('Email atau password salah');
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new ValidationError('Email atau password salah');
      }

      const authUser = {
        fullname: user.fullname,
        username: user.username,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        status: user.status,
      };

      const token = createToken(authUser);

      // Set access token sebagai cookie untuk SPA
      res.cookie('accessToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 15 * 60 * 1000, // 15 menit
      });

      return res.status(200).json({
        status: 'success',
        message: 'berhasil login',
        authUser,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteUserById: async (req, res, next) => {
    try {
      const { id } = req.params;

      await User.destroy({ truncate: true });

      return res.json('deleted succes');
    } catch (error) {
      console.log('error to delete user', error);
    }
  },
};

module.exports = userController;
