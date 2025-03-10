const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const Category = sequelize.define(
  'Category',
  {
    id_category: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'category sudah ada',
      },
      validate: {
        notEmpty: {
          msg: 'field name wajib diisi',
        },
        notNull: {
          msg: 'field name wajib diisi',
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

Category.addHook('beforeCreate', (category) => {
  category.name = category.name.toLowerCase();
});

module.exports = Category;
