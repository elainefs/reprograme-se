const prompt = require('prompt-sync')();

alturas = []

// Implementar a entrada de dados
for (var i = 0; i <= 9; i++) {
  alturas.push(parseFloat(prompt("Digite a altura: ")))
}

// Implementar o processamento de dados
// Fazer for dentro de for
for (var i = 0; i <= 9; i++) {
  var alunos = []
  for (var j = 0; j <= 9; j++) {
    if (alturas[i] > alturas[j]) {
      alunos.push(alturas[j])
    }
  }
// Implementar a saída de dados
console.log("Aluno " + i + ": maior que " + alunos.length + " aluno(s)")
}