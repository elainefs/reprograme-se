const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const porta = 443;

app.get("/", (req, res) => {
  res.send("Enviando e-mail com o Nodemailer!");
});

app.get("/sendemail", async (req, res) => {
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8a58b6383bcd85",
      pass: "939f93189d2907",
    },
  });

  var message = {
    from: "noreplay@reprogramese.com",
    to: "elaine@reprogramese.com",
    subject: "Instrução para recuperar a senha",
    text: "Elaine. \n\n Você solicitou alteração de senha. \n\n Equipe Reprograme-se",
    html: "<p>Prezada Elaine, Você solicitou alteração de senha. <br>Equipe Reprograme-se</b></p>",
  };

  transport.sendMail(message, function (err) {
    if (err) {
      return res.status(400).json({
        erro: true,
        mensagem: "Erro: E-mail não enviado!",
      });
    } else {
      return res.json({
        erro: false,
        mensagem: "E-mail enviado com sucesso!",
      });
    }
  });
});

app.listen(porta, () => {
  console.log("Servidor rodando!");
});
