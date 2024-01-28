const express = require('express');
const app = express();
const porta = 443;

app.get('/', (req, res) => {
  res.send('Bem vindo ao servidor web utilizando o Express!');
});

app.listen(porta, () => {
  console.log('Servidor rodando!');
});