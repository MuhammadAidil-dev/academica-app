const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');
const Thread = sequelize.define('Thread', {
  id_thread: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Title tidak boleh kosong',
      },
      notNull: {
        msg: 'Title wajib diisi',
      },
    },
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Content tidak boleh kosong',
      },
      notNull: {
        msg: 'Content wajib diisi',
      },
    },
  },
  attachment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['active', 'hidden', 'deleted'],
    defaultValue: 'active',
    validate: {
      isIn: {
        args: [['active', 'hidden', 'deleted']],
        msg: "Value yang valid hanya 'active', 'hidden', 'deleted'",
      },
    },
  },
  likes_thread: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      isInt: {
        msg: 'likes_thread harus bertipe integer',
      },
    },
  },
});

module.exports = Thread;
