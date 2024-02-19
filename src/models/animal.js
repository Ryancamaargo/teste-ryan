// Animal.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection'); 

const Animal = sequelize.define('Animal', {
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantidade_racao: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});

module.exports = Animal