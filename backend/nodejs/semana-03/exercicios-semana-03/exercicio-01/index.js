// função callback

const prompt = require(prompt-sync)();

function obterNome(callback) {
  var nome = prompt("Entre com o seu nome: ");
  callback(nome);
}

obterNome((nome) => {
  console.log(nome);
});