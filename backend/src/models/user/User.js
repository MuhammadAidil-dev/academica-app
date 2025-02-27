const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');
const { hashPassword } = require('../../utils/util');

const User = sequelize.define('User', {
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Field fullname tidak boleh kosong',
      },
    },
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'Username sudah digunakan',
    },
    validate: {
      notEmpty: {
        msg: 'Field username tidak boleh kosong',
      },
      notNull: {
        msg: 'Field username harus diisi',
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'Email sudah digunakan',
    },
    validate: {
      isEmail: {
        msg: 'Format Email tidak valid',
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8],
        msg: 'Minimal password 8 karakter',
      },
    },
  },
  role: {
    type: DataTypes.ENUM,
    values: ['admin', 'mahasiswa', 'dosen'],
    defaultValue: 'mahasiswa',
    validate: {
      isIn: {
        args: [['admin', 'mahasiswa', 'dosen']],
        msg: 'Role hanya bisa antara admin, mahasiswa, dosen',
      },
    },
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['active', 'suspended', 'banned'],
    defaultValue: 'active',
  },
});

User.addHook('beforeCreate', async (user) => {
  user.username = user.username.toLowerCase();
  user.password = await hashPassword(user.password);
});

module.exports = User;
