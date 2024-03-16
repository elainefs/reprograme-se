// Bibliotecas e módulos utilizados
const database = require("./db/db");
const express = require("express");
const app = express();
const porta = 9443;
const Video = require("./models/Video");
const VideoRoutes = require("./routes/routesVideos");
const hand = require("express-handlebars");

// Controllers
const VideosController = require("./controllers/ControllerVideo");
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static("public"));

// Rotas
app.use("/", VideoRoutes);

try {
  database.sync().then(() => {
    app.listen(porta, () => {
      console.log("Servidor rodando");
    });
  });
} catch (erro) {
  console.log("Erro ao sincronizar com o banco de dados:", erro);
}
