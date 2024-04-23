const Sequelize = require("sequelize");
const database = require("../db/db");

const Livro = database.define(
  "livros",
  {
    id_livro: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    titulo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    autor: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    preco: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { database, modelname: "livro", tableName: "livros" },
);

module.exports = Livro;
