// Bibliotecas
const express = require("express");
const app = express();
const database = require("./db/db");
const routes = require("./routes/routes");

// Models
const Usuario = require("./model/usuarioModel");
const Tarefa = require("./model/tarefaModel");

// Codificação JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define o uso do arquivo routes para as rotas
app.use("/", routes);

// Sincronização com banco de dados
try {
  database.sync().then(() => {});
} catch (erro) {
  console.log("Houve uma falha ao sincronizar com o banco de dados", erro);
}

app.listen(3000);
