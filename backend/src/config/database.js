const { Sequelize } = require('sequelize');
const CONFIG = require('./config');

const sequelize = new Sequelize(
  CONFIG.DB_NAME,
  CONFIG.DB_USER,
  CONFIG.DB_PASSWORD,
  {
    host: CONFIG.DB_HOST,
    dialect: CONFIG.DB_DIALECT,
    logging: false,
  }
);

const testconnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('database connected successfully');
  } catch (error) {
    console.log('unable to connected database', error);
  }
};

testconnection();

// sinkronisasi database
const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database sync');
  } catch (error) {
    console.log('Error to sync database', error);
  }
};

module.exports = { sequelize, syncDatabase };
