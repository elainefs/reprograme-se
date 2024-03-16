const Sequelize = require('sequelize');
const database = require('../db/db');

const Filme = database.define('filme', {
  id_filme: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  categoria: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  link_sinopse: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {database, modelname:'filme', tableName:'filmes'})

module.exports = Filme;