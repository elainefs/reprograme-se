const express = require("express");
const app = express();
const porta = 443;

app.get("/contato", (req, res) => {
  res.send("Contato");
});

app.get("/sobre", (req, res) => {
  res.send("Sobre");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/pagina.html");
});

app.listen(porta, () => {
  console.log("Servidor rodando");
});
