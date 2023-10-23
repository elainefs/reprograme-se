prompt = require("prompt-sync")();

n1 = parseInt(prompt("Digite o número 1: "));
n2 = parseInt(prompt("Digite o número 2: "));

if ((n1 > 0) && (n2 > 0)){ 
    if ((n1 % 2 == 0) && (n1 % 2 == 0)) {
        console.log("Os dois números pares!");
    } else if ((n1 % 2 != 0) && (n2 % 2 != 0)) {
        console.log("Os dois números ímpares!");
    } else{ 
        console.log("Um par e um ímpar!");
    }
} else {
    console.log("Existe pelo menos um número 0 ou negativo!");
}
