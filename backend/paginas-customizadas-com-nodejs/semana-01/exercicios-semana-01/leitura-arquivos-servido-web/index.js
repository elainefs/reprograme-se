const http = require('http');
const fs = require('fs');
const porta = 443;

const servidor = http.createServer((req, res) => {
  fs.readFile('site.html', (err, arquivo) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(arquivo);
    res.end();
  });
});

servidor.listen(porta, () => {
  console.log('Servidor rodando');
})