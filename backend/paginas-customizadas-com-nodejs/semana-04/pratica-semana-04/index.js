const express = require("express");
const nodemailer = require("nodemailer");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");

const porta = 4000;
const app = express();

app.use(session({ secret: "1234567890" }));

app.use(bodyParser.urlencoded({ extended: true }));

var login = "admin";
var senha = "1234";

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", path.join(__dirname, "./"));

app.get("/", (req, res) => {
  if (req.session.login) {
    res.render("logado");
  } else {
    return res.render("home");
  }
});

app.post("/", (req, res) => {
  if (req.body.password == senha && req.body.login == login) {
    req.session.login = login;
    res.render("logado");
  } else {
    res.render("home");
  }
});

app.get("/email", (req, res) => {
  if (req.session.login) {
    res.render("email");
  } else {
    res.render("home");
  }
});

app.post("/email", async (req, res) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8a58b6383bcd85",
      pass: "939f93189d2907",
    },
  });
  var message = {
    from: "teste@teste.com",
    to: "elaine@reprogramese.com",
    subject: "Atividade Prática da Semana 4",
    text: "Email da atividade prática da semana 4 em Texto. \n Elaine Ferreira",
    html: "<p>Email da atividade prática da semana 4 em HTML <br> Elaine Ferreira</p>",
  };
  transport.sendMail(message, function (err) {
    if (err) {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: E-mail não enviado!",
      });
    } else {
      console.log("E-mail enviado com sucesso");
    }
  });
});

app.listen(porta, () => {
  console.log("Servidor rodando na porta 4000");
});
