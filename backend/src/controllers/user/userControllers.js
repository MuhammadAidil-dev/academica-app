const { SequelizeError } = require('../../middleware/error/errorTypes');
const User = require('../../models/user/User');

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
