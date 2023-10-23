prompt = require("prompt-sync")();

a1 = parseFloat(prompt("Digite o valor do ângulo 1: "));
a2 = parseFloat(prompt("Digite o valor do ângulo 2: "));
a3 = parseFloat(prompt("Digite o valor do ângulo 3: "));

// Caso seja Triângulo
if ((a1 + a2 + a3) == 180) { 
   // Triângulo Acutângulo
   if ((a1 < 90) && (a2 < 90) && (a3 < 90)) {
         console.log("Triângulo Acutângulo!");
   }
   // Triângulo Retângulo
   else if ((a1 == 90) || (a2 == 90) || (a3 == 90)) {
      console.log("Triângulo Retângulo!");
   }
   // Triângulo Obtusângulo
   else {  
      console.log("Triângulo Obtusângulo!");
   }
// Caso não seja Triângulo
} else {  
   console.log("Não é Triângulo!");
}
