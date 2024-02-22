// Antes é necessário instalar as bibliotecas
// npm install sqlite3 sequelize

// importar as bibliotecas que iremos utilizar

const { Sequelize, Model, DataTypes } = require("sequelize");

// Abrindo conexão com o Banco de Dados ou criando um novo caso não exista
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresa.sqlite",
});

(async () => {
  // Sincronismo
  await sequelize.sync({ force: true });
})();
