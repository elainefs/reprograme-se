prompt = require("prompt-sync")();

// resolução comm while
soma = 0;
continua = "s";

while (continua == "s" || continua == "S") {
  num = parseInt(prompt('Digite um número: '));
  soma = soma + num;
  continua = prompt('Você deseja continuar (s/n): ');
}

console.log('A soma é:', soma);

// resolução com do-while
var soma = 0;
do {
  num = parseInt(prompt('Digite um número: '));
  continua = prompt('Você deseja continuar (s/n): ');
  soma = soma + num;
} while(continua == "s" || continua == "S")

console.log('A soma é:', soma);