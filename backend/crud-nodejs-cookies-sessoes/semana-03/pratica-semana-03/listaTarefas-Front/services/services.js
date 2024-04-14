const axios = require("axios");

module.exports = class Services {
  // TAREFAS
  // Create
  static async TarefaCreate(req, res) {
    let valores = req.body;
    const options = {
      url: "https://08ecc9f1-ffdc-474d-be4f-fc1287285ab5-00-1c70xa1rgv2z2.riker.replit.dev/tarefas/Cadastrar",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }
  // Listar
  static async TarefaListar(req, res) {
    const options = {
      url: "https://08ecc9f1-ffdc-474d-be4f-fc1287285ab5-00-1c70xa1rgv2z2.riker.replit.dev/tarefas",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const tarefa = response.data;

      res.render("tarefas/listar", { tarefa });
    });
  }
  // Update
  static async TarefaUpdate(req, res) {
    let valores = req.body;
    const options = {
      url:
        "https://08ecc9f1-ffdc-474d-be4f-fc1287285ab5-00-1c70xa1rgv2z2.riker.replit.dev/tarefas/" +
        valores.id_tarefa,
      method: "PUT",
      data: valores,
    };
    axios(options);
    const mensagem = "Registro atualizado com sucesso!";
    res.render("mensagem", { mensagem });
  }
  // Delete
  static async TarefaDelete(req, res) {
    let id_tarefa = req.body.id_tarefa;
    const options = {
      url:
        "https://08ecc9f1-ffdc-474d-be4f-fc1287285ab5-00-1c70xa1rgv2z2.riker.replit.dev/tarefas/" +
        id_tarefa,
      method: "DELETE",
    };
    axios(options);
    const mensagem = "Tarefa excluída com sucesso!";
    res.render("mensagem", { mensagem });
  }

  // USUARIOS
  // Create
  static async UsuarioCreate(req, res) {
    let valores = req.body;
    const options = {
      url: "https://08ecc9f1-ffdc-474d-be4f-fc1287285ab5-00-1c70xa1rgv2z2.riker.replit.dev/usuarios/Cadastrar",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }
  // Listar
  static async UsuarioListar(req, res) {
    const options = {
      url: "https://08ecc9f1-ffdc-474d-be4f-fc1287285ab5-00-1c70xa1rgv2z2.riker.replit.dev/usuarios",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const usuario = response.data;

      res.render("usuarios/listar", { usuario });
    });
  }
  // Update
  static async UsuarioUpdate(req, res) {
    let valores = req.body;
    const options = {
      url:
        "https://08ecc9f1-ffdc-474d-be4f-fc1287285ab5-00-1c70xa1rgv2z2.riker.replit.dev/usuarios/" +
        valores.id_usuario,
      method: "PUT",
      data: valores,
    };
    axios(options);
    const mensagem = "Usuário atualizado com sucesso!";
    res.render("mensagem", { mensagem });
  }
  // Delete
  static async UsuarioDelete(req, res) {
    let id_usuario = req.body.id_usuario;
    const options = {
      url:
        "https://08ecc9f1-ffdc-474d-be4f-fc1287285ab5-00-1c70xa1rgv2z2.riker.replit.dev/usuarios/" +
        id_usuario,
      method: "DELETE",
    };
    axios(options);
    const mensagem = "Usuario excluída com sucesso!";
    res.render("mensagem", { mensagem });
  }
};
