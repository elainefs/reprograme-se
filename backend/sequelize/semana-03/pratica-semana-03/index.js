// Importando as bibliotecas e arquivos
const database = require("./db");
const Cliente = require("./models/cliente");
const Fornecedor = require("./models/fornecedor");

// Criando o servidor
const express = require("express");
const app = express();
const porta = 9443;

const bodyParser = require("body-parser");

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Definindo rota para a página inicial
app.get("/", (req, res) => {
  res.send("Bem vindo ao cadastro de clientes e fornecedores!");
});

// Definindo rota para página de cadastro de clientes
app.get("/cadcliente", (req, res) => {
  res.render("formCliente");
});

app.post("/addcliente", function(req, res) {
  Cliente.create({
    nome: req.body.nome,
    nascimento: req.body.nascimento,
    cidade: req.body.cidade,
    telefone: req.body.telefone
  }).then(function() {
    res.send("Cliente cadastrado com sucesso!");
  })
})

// Definindo rota para página de cadastro de fornecedores
app.get("/cadfornecedor", (req, res) => {
  res.render("formFornecedor");
})

app.post("/addfornecedor", (req, res) => {
  Fornecedor.create({
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email,
  }).then(() => {
    res.send("Fornecedor cadastrado com sucesso!");
  });
});

app.listen(porta, () => {
  console.log("Servidor rodando!");
});

// Sincronização
(async () => {
  try {
    const resultado = await database.sync();
    console.log(resultado);

    const clientes = await Cliente.findAll();
    console.log("Lista de Clientes \n", clientes);

    const fornecedores = await Fornecedor.findAll();
    console.log("Lista de Fornecedores \n", fornecedores);
  } catch (error) {
    console.log(error);
  }
})();
