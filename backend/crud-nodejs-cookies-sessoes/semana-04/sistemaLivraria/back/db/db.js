const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./livraria.sqlite",
});

try {
  sequelize.authenticate();
  console.log("Banco de dados conectado com sucesso");
} catch (erro) {
  console.log("Houve uma falha ao conectar ao banco de dados", erro);
}

module.exports = sequelize;
