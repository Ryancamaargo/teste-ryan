const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('suinos2', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;