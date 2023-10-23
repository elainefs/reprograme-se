prompt = require("prompt-sync")();

function calcular_imc(peso, altura) {
  imc = peso / (altura * altura);
  return imc;
}


function verificar_situacao(imc) {
  if (imc < 18.5)
    return 1;
  else if (imc <= 24.9)
    return 2;
  else if (imc <= 29.9)
    return 3;
  else
    return 4;
}

function exibir_situacao(codigo_situacao) {
  if (codigo_situacao == 1)
    console.log("Você está abaixo do peso ideal.\n");
  else if (codigo_situacao == 2)
    console.log("Parabéns! Você está em seu peso normal!\n");
  else if (codigo_situacao == 3)
    console.log("Você está acima de seu peso (sobrepeso).\n");
  else
    console.log("Obesidade.\n");
}

for (i = 1; i <= 6; i++) {
  console.log("PESSOA", i)
  nome = prompt("Entre com o nome: ");
  peso = parseFloat(prompt("Entre com o peso (Kg): "));
  altura = parseFloat(prompt("Entre com a altura (Metros): "));
  imc = calcular_imc(peso, altura);
  codigo_situacao = verificar_situacao(imc);
  exibir_situacao(codigo_situacao);
}