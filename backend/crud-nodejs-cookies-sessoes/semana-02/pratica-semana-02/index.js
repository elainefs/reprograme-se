// Bibliotecas e módulos utilizados
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const database = require('./db/db');

const Funcionario = require('./model/funcionarioModel');
const funcionarioController = require('./controller/funcionarioController');

const Cliente = require('./model/clienteModel');
const clienteController = require('./controller/clienteController');

// Sincronismo com o banco de dados
try {
  database.sync().then(() => { });
} catch (erro) {
  console.log('Houve um erro ao sincronizar com o banco de dados', erro)
}

// Rotas
app.get("/", (req, res) => {
  return res.json({ message: "Seja bem vindo a nossa API!" });
});

// GET - Listar Funcionarios
app.get("/Funcionarios/:id?", funcionarioController.FuncionarioListar);

// POST - Cadastrar Funcionario
app.post("/Funcionarios", funcionarioController.FuncionarioCreate);

// PUT - Atualizar Funcionario
app.put("/Funcionarios/:id", funcionarioController.FuncionarioUpdate);

// DELETE - Deletar Funcionario
app.delete("/Funcionarios/:id", funcionarioController.FuncionarioDelete);

// GET - Listar Clientes
app.get("/Clientes/:id?", clienteController.ClienteListar);

// POST - Cadastrar Cliente
app.post("/Clientes", clienteController.ClienteCreate);

// PUT - Atualizar Cliente
app.put("/Clientes/:id", clienteController.ClienteUpdate);

// DELETE - Deletar Cliente
app.delete("/Clientes/:id", clienteController.ClienteDelete);

app.listen(3000);