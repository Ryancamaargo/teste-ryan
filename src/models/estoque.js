// Estoque.js

const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection'); 

const Estoque = sequelize.define('Estoque', {
  data: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
});


module.exports = Estoque