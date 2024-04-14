// Bibliotecas e módulos utilizados
const Sequelize = require("sequelize");

// Criando a configuração do banco de dados
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./mercado.sqlite",
});

// Tratando possíveis erros e autenticando no banco
try {
  sequelize.authenticate();
  console.log("Banco de dados conectado com sucesso!");
} catch (erro) {
  console.log("Erro ao conectar ao banco de dados", erro);
}

module.exports = sequelize;
