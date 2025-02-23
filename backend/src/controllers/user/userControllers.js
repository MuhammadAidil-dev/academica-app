const User = require('../../models/user/User');

const userController = {
  createUser: async (req, res, next) => {
    try {
      const { name } = req.body;
      const user = await User.create({ name: name });

      return res.json({ user: user });
    } catch (error) {
      console.log('error to create user', error);
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
