const prompt = require("prompt-sync")();
const verificaIdade = require("./verificaIdade");

while (true) {
  var nome = prompt("Nome completo: ");
  var rg = prompt("RG: ");
  var cpf = prompt("CPF: ");
  var nascimento = prompt("Nascimento: ");

  if (verificaIdade.eMaior(nascimento)) {
    var eleitor = prompt("Título de eleitor: ");
  } else {
    var eleitor = undefined;
  }

  console.log("Nome:", nome);
  console.log("RG:", rg);
  console.log("CPF:", cpf);
  console.log("Data de Nascimento:", nascimento);
  eleitor !== undefined ? console.log("Eleitor: ", eleitor) : console.log();

  var confirm = prompt("Confirma?");

  if (confirm == "S" || confirm == "s") {
    break;
  } else {
    console.clear();
  }
}
