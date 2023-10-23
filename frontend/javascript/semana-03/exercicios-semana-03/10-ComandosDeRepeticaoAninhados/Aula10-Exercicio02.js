var perfeitos = 0;

i = 2;
while (perfeitos < 3) {
  soma_divisores = 0;
  j = i - 1;
  while (j > 0) {
    if (i % j == 0) {
      soma_divisores = soma_divisores + j;
    }
    j = j - 1;
  }
  if (soma_divisores == i) {
    perfeitos = perfeitos + 1;
    console.log("Perfeito:", i);
  }
  i = i + 1;
}

// for
var n = 10;
var soma = 0;
for(let j = 1; j <= n-1; j++){
  if(n % j == 0){
    soma = soma + j;
  }
}
console.log("A soma dos divisores de " + n + ": " + soma);

if(soma == n){
  console.log(n + " é um número perfeito");
} else {
  console.log(n + " NÃO é um número perfeito");
}