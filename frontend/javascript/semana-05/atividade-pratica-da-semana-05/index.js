const prompt = require('prompt-sync')();
var array_monitores = [];

do {
  console.log("Sistema de Cadastro de Monitores");
  console.log("1 - Inserir Monitor");
  console.log("2 - Excluir Monitor");
  console.log("3 - Listar Monitores");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Monitor...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let marca = prompt("Digite a marca do monitor: ");
    let tamanho_da_tela = prompt("Digite o tamanho da tela (polegadas): ");
    let tipo_de_conexao = prompt("Digite o tipo de conexão (HDMI, DisplayPort ou USB): ");
    let estado = prompt("Digite o estado (Novo/Usado): ");

    // Neste trecho estamos declarando um objeto
    const monitor = {
      codigo: codigo,
      marca: marca,
      tamanho_da_tela: tamanho_da_tela,
      tipo_de_conexao: tipo_de_conexao,
      estado: estado
    }
    // Chamar a função inserir
    inserir_monitor(monitor);
  } else if (opcao == 2) {
    console.log("\n\nExcluindo Monitor...\n");
    let codigo = prompt("Digite o código do monitor: ");
    // Chamar a função excluir
    excluir_monitor(codigo);
  } else if (opcao == 3) {
    console.log("\n\nListando Monitores...\n");
    // Chamar a função listar
    listar_monitores();
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_monitor(monitor) {
  // Implementar corpo da função
  array_monitores.push(monitor);
}

function excluir_monitor(codigo) {
  // Implementar corpo da função
  for (let i = 0; i < array_monitores.length; i++) {
    if (array_monitores[i].codigo == codigo) {
      array_monitores.splice(i, 1);
      return;
    }
  }
}

function listar_monitores() {
  // Implementar corpo da função
  for (let i = 0; i < array_monitores.length; i++) {
    console.log(array_monitores[i].codigo, ":", array_monitores[i].marca, "-", array_monitores[i].tamanho_da_tela, "-", array_monitores[i].tipo_de_conexao, "-", array_monitores[i].estado);
  }
}

// Exemplos:
// 1 Samsung 24 HDMI Novo
// 2 Acer 17 USB Usado
// 3 Dell 34 DisplayPort Novo