prompt = require("prompt-sync")();

primos = 0;
n = parseInt(prompt("Digite um número: "));

for (let i = 1; i <= n; i++) {
  divisores = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      divisores = divisores + 1;
    }
  }

  if (divisores == 2) {
    primos = primos + 1;
  }
}

console.log("A quantidade de números primos entre 1 e", n, "é:", primos);