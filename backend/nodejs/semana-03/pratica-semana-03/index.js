const fs = require("fs");
const prompt = require("prompt-sync")();

function adicionarCarro(lista, carro) {
  lista.push(carro);
  json = JSON.stringify({ carros: lista });

  return new Promise((resolve, reject) => {
    fs.writeFile("bd.json", json, (erro) => {
      if (erro) {
        reject(erro);
      } else {
        resolve('Carro adicionado');
      }
    });
  });
}

function obterCarros() {
  return new Promise((resolve, reject) => {
    fs.readFile("./bd.json", "utf-8", (erro, data) => {
      if (erro) {
        reject(erro);
      } else {
        resolve(data);
      }
    });
  });
}

async function listarCarros() {
  try {
    var json = await obterCarros();
    var carros = JSON.parse(json).carros;

    console.table(carros);
  } catch (erro) {
    console.log("Ocorreu um erro ao buscar os carros: " + erro);
  }
}

async function incluirCarro() {
  var placa = prompt("Digite a placa do carro: ");
  var nome = prompt("Digite o nome do carro: ");
  var montadora = prompt("Digite a montadora do carro: ");

  var carro = { placa: placa, nome: nome, montadora: montadora };

  try {
    var carros = await obterCarros();
    var lista = JSON.parse(carros).carros;

    adicionarCarro(lista, carro);
    console.log("Carro cadastrado com sucesso...");
  } catch (erro) {
    console.log("Ocorreu um erro ao adicionar o carro: " + erro);
  }
}

async function main() {
  var op;

  do {
    console.log(`Sistema de cadastro de carros

    1 - Listar carros
    2 - Cadastrar carros
    0 - Sair
    `);

    op = prompt("Digite a opção desejada: ");

    switch (op) {
      case "1":
        await listarCarros();
        prompt(`

Enter para continuar...`);
        console.clear();
        break;
      case "2":
        await incluirCarro();
        prompt(`

Enter para continuar...`);
        console.clear();
        break;
      case "0":
        console.log("Obrigado por usar o sistema. Até mais!");
        break;
      default:
        console.log("Entrada inválida...");
        break;
    }
  } while (op !== "0");
}

main();
