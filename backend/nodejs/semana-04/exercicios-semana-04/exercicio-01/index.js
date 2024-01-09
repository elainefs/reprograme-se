const axios = require("./api.js");

async function carregarEstados() {
  try {
    var response = await axios.api.get("/estados");
    console.log(response.data);
  } catch (erro) {
    console.error("Ocorreu um erro:", erro);
  }
}

async function alterarEstado() {
  try {
    return await axios.api.put("/estados/ES", {
      nome: "Espírito Santo",
    });
  } catch (erro) {
    console.error("Ocorreu um erro: ", erro);
  }
}

async function incluirEstado() {
  try {
    return await axios.api.post("/estados", {
      id: "RJ",
      nome: "Rio de Janeiro",
    });
  } catch (erro) {
    console.error("Ocorreu um erro: ", erro);
  }
}

function deletarEstado() {
  axios.api
    .delete("/estados/MG")
    .then(() => {
      console.log("Estado deletado com sucesso!");
    })
    .catch((erro) => {
      console.error("Ocorreu um erro: ", erro);
    });
}

// carregarEstados();
// alterarEstado();
// incluirEstado();
deletarEstado();
