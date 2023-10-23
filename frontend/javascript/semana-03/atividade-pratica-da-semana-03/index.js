var n = 20
var par = 0
var impar = 0

// Implementar comando de repetição (de 1 até 20)
for (var i = 1; i <= n; i++) {
  result = i * i
  console.log(result) 
  // Implementar os comandos de decisão para verificar números quadrados pares ou ímpares  
  for (var j = 1; j <= n; j++) {    
    if (result % 2 == 0) {
      par = par + result
      break
    } else {
      impar = impar + result
      break
    }
  }
  
}
console.log("A soma de quadrados pares: " + par)
console.log("A soma de quadrados ímpares: " + impar)
