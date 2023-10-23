const prompt = require("prompt-sync")();

x = parseFloat(prompt("Digite o valor de x: "));
y = parseFloat(prompt("Digite o valor de y: "));
z = parseFloat(prompt("Digite o valor de z: "));

if (x + y > z && x + z > y && y + z > z) {
  if (x == y && y == z) {
    console.log("Triângulo Equilátero!");
  } else if (x == y || x == z || y == z) {
    console.log("Triângulo Isósceles!");
  } else {
    console.log("Triângulo Escaleno!");
  }
} else {
  console.log("Os lados não formam um triângulo!");
}
