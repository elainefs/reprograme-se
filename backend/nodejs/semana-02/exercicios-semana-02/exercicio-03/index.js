const prompt = require("prompt-sync")();

try {
  let idade = parseInt(prompt("Digite sua idade: "));
  if (isNaN(idade)) {
    throw new Error("Idade precisa ser um número inteiro");
  }

  if (idade >= 18) {
    console.log("Você é maior de idade");
  } else {
    console.log("Você é menor de idade");
  }
} catch (e) {
  console.error(`Ocorreu um erro: ${e.name} e ${e.message}`);
}
