const http = require("http");
const port = 443;
const server = http.createServer((req, resp) => {
  resp.writeHead(200, { "Content-Type": "text/plain" });
  resp.write("Primeiro servidor Node");
  resp.end();
});

server.listen(port, () => {
  console.log("Servidor rodando");
});
