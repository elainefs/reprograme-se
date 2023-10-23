const prompt = require("prompt-sync")();

var salarios = [];
var soma = 0;
var media;
var qtd_menores;

for (var i = 1; i <= 5; i++) {
  console.log("Pessoa ", i);
  var nome = prompt("Digite seu nome: ");
  var salario_bruto = parseFloat(
    prompt("Digite o valor do seu salário bruto: ")
  );
  var dependentes = parseInt(prompt("Quantidade de dependentes: "));

  for (var j = 1; j <= dependentes; j++) {
    var ganho = parseFloat(prompt("Digite o ganho mensal do dependente: "));
    salario_bruto = salario_bruto + ganho;
  }

  var renda_percapta = salario_bruto / (dependentes + 1);

  var ir = calcular_ir(salario_bruto, renda_percapta);

  var salario_liquido = salario_bruto - ir;
  console.log(nome, "seu salário líquido é: R$", salario_liquido, "\n");

  salarios.push(salario_liquido);
  soma = soma + salario_liquido;
}

media = soma / 5;
qtd_menores = calcular_qtd_menores(salarios, media)

console.log("A média dos salários líquidos é: ", media);
console.log("A quantidade de pessoas com salário líquido menor que a média é: ", qtd_menores);

function calcular_ir(salario_bruto, renda_percapta){
  if (renda_percapta < 500) {
    console.log("Você não precisa pagar imposto de renda.");
  } else {
    if (salario_bruto > 0.0 && salario_bruto <= 1903.98) {
      var ir = salario_bruto * 0.05;
    } else if (salario_bruto <= 2826.65) {
      var ir = salario_bruto * 0.075;
    } else {
      var ir = salario_bruto * 0.15;
    }
  }
  return ir;
}

function calcular_qtd_menores(salarios, media) {
  var qtd_menores = 0;
  for (var i = 0; i <= 4; i++) {
    if (salarios[i] < media){
      qtd_menores++;
    }
  }
  return qtd_menores;
}