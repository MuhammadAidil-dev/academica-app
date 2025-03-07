const {
  SequelizeError,
  NotFoundError,
} = require('../../middleware/error/errorTypes');
const { User, Thread } = require('../../models/association');
const { handleSequelizeError } = require('../../utils/util');

const threadController = {
  createThread: async (req, res, next) => {
    try {
      const { title, content, status, likes_thread } = req.body;
      const { id_user } = req.user;

      const user = await User.findByPk(id_user);

      if (!user) {
        throw new NotFoundError('User tidak ditemukan');
      }

      const thread = await user.createThread({
        title,
        content,
        status,
        likes_thread,
      });

      return res.status(201).json({
        status: 'success',
        message: 'Berhasil membuat thread',
        data: {
          thread,
        },
      });
    } catch (error) {
      // error sequelize
      if (error.name.startsWith('Sequelize')) {
        // sequelize validation error
        return next(handleSequelizeError(error));
      }

      return next(error);
    }
  },
  getAllThreads: async (req, res, next) => {
    try {
      const { page } = req.query;
      const limit = 5;
      const offset = (page - 1) * limit;

      const { count, rows: threads } = await Thread.findAndCountAll({
        attributes: { exclude: 'id_user' },
        limit: parseInt(limit),
        offset,
        include: [
          {
            model: User,
            as: 'author',
            attributes: ['id_user', 'username', 'avatar'],
          },
        ],
      });

      return res.status(200).json({
        status: 'success',
        message: 'Berhasil mengambil semua thread',
        data: {
          threads,
          pagination: {
            total: count,
          },
        },
      });
    } catch (error) {
      return next(error);
    }
  },
  getThreadsByUser: async (req, res, next) => {
    try {
      const { id_user } = req.params;
      const { page } = req.query;
      const limit = 5;
      const offset = (page - 1) * limit;

      const userexist = await User.findByPk(id_user);

      if (!userexist) {
        throw new NotFoundError('User tidak ditemukan');
      }

      const { count, rows: threads } = await Thread.findAndCountAll({
        where: { id_user },
        attributes: { exclude: ['id_user'] },
        limit,
        offset,
        include: {
          model: User,
          as: 'author',
          attributes: ['id_user', 'username', 'avatar'],
        },
      });

      return res.json({
        status: 'success',
        message: 'Berhasil mengambil thread',
        data: {
          user: {
            id_user: userexist.id_user,
            username: userexist.username,
            avatar: userexist.avatar,
          },
          threads,
          pagination: {
            total: count,
          },
        },
      });
    } catch (error) {
      next(error);
    }
  },
  getThreadById: async (req, res, next) => {
    try {
      const { id_thread } = req.params;

      const thread = await Thread.findByPk(id_thread);

      if (!thread) {
        throw new NotFoundError('Thread tidak ditemukan');
      }

      return res.status(200).json({
        status: 'success',
        message: 'thread didapatkan',
        data: { thread },
      });
    } catch (error) {
      next(error);
    }
  },
  updateThread: async (req, res, next) => {
    try {
      const { id_thread } = req.params;
      const updatesData = req.body;
      const { id_user } = req.user;

      const thread = await Thread.findOne({ where: { id_thread, id_user } });
      if (!thread) {
        throw new NotFoundError('Thread tidak ditemukan');
      }

      const updatedThread = await thread.update(updatesData);

      return res.status(200).json({
        status: 'success',
        message: 'Thread berhasil diupdate',
        data: {
          thread: updatedThread,
        },
      });
    } catch (error) {
      if (error.name && error.name.startsWith('Sequelize')) {
        // sequelize validation error
        return next(handleSequelizeError(error));
      }

      return next(error);
    }
  },
  deletedThread: async (req, res, next) => {
    try {
      const { id_thread } = req.params;
      const { id_user } = req.user;

      const thread = await Thread.findOne({
        where: {
          id_thread,
          id_user,
        },
      });

      if (!thread) {
        throw new NotFoundError('Thread tidak ditemukan');
      }

      await thread.destroy();

      return res.status(200).json({
        status: 'success',
        message: 'Thread berhasil dihapus',
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = threadController;
