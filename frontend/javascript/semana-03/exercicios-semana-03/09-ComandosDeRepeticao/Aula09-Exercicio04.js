prompt = require("prompt-sync")();

num = 1;   // valor apenas para entrar no while
maior = 0; // valor inicial, apenas para iniciar a variável

// resolução com while
while (num != 0) {
  num = parseInt(prompt('Digite um número: '));
  if (num > maior) {
    maior = num;
  }
}

console.log('O maior número digitado foi:', maior);


// resolução com do-while
var maior = 0;

do {
  num = parseInt(prompt('Digite um número: '));
  if(num > maior){
    maior = n
  }
} while(n != 0);

console.log('O maior número digitado foi:', maior);
