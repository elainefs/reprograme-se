// Biblioteca e Módulos Utilizados
const Sequelize = require('sequelize');

// Criação e Configuração do Banco de dados
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './mercado.sqlite'
})

// Tratamento de Erros e Autenticação no Banco de Dados
try {
  sequelize.authenticate();
  console.log('Banco de Dados Conectado com Sucesso!');
} catch (erro) {
  console.log('Erro ao Conectar ao Banco de Dados', erro);
}

module.exports = sequelize;