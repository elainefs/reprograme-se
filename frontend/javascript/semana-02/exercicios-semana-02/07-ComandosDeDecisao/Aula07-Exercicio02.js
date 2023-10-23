prompt = require("prompt-sync")();

nome = prompt("Digite o nome do Aluno: ");
nota1 = parseFloat(prompt("Digite a nota 1: "));
nota2 = parseFloat(prompt("Digite a nota 2: "));
nota3 = parseFloat(prompt("Digite a nota 3: "));

media = (nota1 + nota2 + nota3) / 3;
	   
if (media >= 6){
  	resultado = "Aprovado";
}else if (media > 3){
  	resultado = "Recuperação";
}else{
  	resultado = "Reprovado";
}
  
console.log("Nome do Aluno: " , nome);
console.log("Média: " , media);
console.log("Resultado: " , resultado);

