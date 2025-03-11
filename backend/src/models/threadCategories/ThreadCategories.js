const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/database');

const ThreadCategories = sequelize.define(
  'ThreadCategories',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = ThreadCategories;
