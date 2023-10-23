prompt = require("prompt-sync")();

salario = parseFloat(prompt("Digite o salario: "))
ir = parseFloat(prompt("Digite o imposto de renda: "))

salario_liquido = salario - ir

console.log("O valor do salário liquido é: ", salario_liquido)

