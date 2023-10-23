prompt = require("prompt-sync")();

carro = prompt("Digite o nome do carro: ")
km = parseFloat(prompt("Digite o número de km percorridos: "))
litros = parseFloat(prompt("Digite a quantidade de litros gastos: "))

consumo = km / litros

console.log("O consumo do carro ", carro, " é de ", consumo, " km/litro")

