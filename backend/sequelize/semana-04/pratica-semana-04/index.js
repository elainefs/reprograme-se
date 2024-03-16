// Bibliotecas e módulos utilizados
const database = require("./db/db");
const express = require("express");
const app = express();
const porta = 9443;
const Filme = require("./models/Filme");
const FilmeRoutes = require("./routes/routesFilmes");
const hand = require("express-handlebars");

// Controllers
const FilmesController = require("./controllers/ControllerFilmes");
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));

// Rotas
app.use("/", FilmeRoutes);

try {
  database.sync().then(() => {
    app.listen(porta, () => {
      console.log("Servidor rodando");
    });
  });
} catch (erro) {
  console.log("Erro ao sincronizar com o banco de dados:", erro);
}
