// Async Await

function cadastrarUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var erro = false;

      if (!erro) {
        resolve({ time: 5, message: "Sucesso!" });
      } else {
        reject();
      }
    }, 2000);
  });
}

async function main() {
  try {
    var dados = await cadastrarUsuario();

    console.log(dados);
  } catch (erro) {
    console.log("Ocorreu um erro ao cadastrar o usuário");
  }
}

main();
