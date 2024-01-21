const http = require("http");
const fs = require("fs");
const porta = 443;

const servidor = http.createServer((req, res) => {
  fs.appendFile('teste.txt', 'Frase criada pelo appendFile diretamente no txt', (err) => {
    if(err) throw err;
    console.log('Arquivo criado');
    res.end();
  })
})

servidor.listen(porta, () => {
  "Servidor rodando";
});
