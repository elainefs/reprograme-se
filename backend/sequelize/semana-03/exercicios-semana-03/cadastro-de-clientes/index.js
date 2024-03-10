// Importando as bibliotecas e arquivos
const database = require("./db");
const Cliente = require("./models/cliente");

// Criando o servidor
const express = require("express");
const app = express();
const porta = 9443;

const bodyParser = require("body-parser");

app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Definindo rotas
app.get("/", (req, res) => {
  res.send("Bem vindo ao cadastro de clientes!");
});

app.get("/cadcliente", (req, res) => {
  res.render("formCliente");
});

app.post("/addcliente", (req, res) => {
  Cliente.create({
    nome: req.body.nome,
    nascimento: req.body.nascimento,
    cidade: req.body.cidade,
    telefone: req.body.telefone,
  }).then(() => {
    // res.send("Cliente cadastrado com sucesso!");
    res.redirect("/");
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
  } catch (error) {
    console.log(error);
  }
})();
