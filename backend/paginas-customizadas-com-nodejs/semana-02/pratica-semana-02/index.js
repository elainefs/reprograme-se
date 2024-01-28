const http = require("http");
const fs = require("fs");
const porta = 443;

const servidor = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("home.html", (erro, arquivo) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(arquivo);
      res.end();
    });
  } else if (req.url == "/p1") {
    fs.readFile("p1.html", (erro, arquivo) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(arquivo);
      res.end();
    });
  } else if (req.url == "/p2") {
    fs.readFile("p2.html", (erro, arquivo) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(arquivo);
      res.end();
    });
  } else if (req.url == "/p3") {
    fs.readFile("p3.html", (erro, arquivo) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(arquivo);
      res.end();
    });
  } else if (req.url == "/p4") {
    fs.readFile("p4.html", (erro, arquivo) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(arquivo);
      res.end();
    });
  } else {
    res.write("<h1>Ops! Produto não encontrado</h1>");
  }
});

servidor.listen(porta, () => {
  console.log("Servidor rodando");
});
