const express = require("express");
const Services = require("../services/services");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Seja bem vindo ao nosso sistema de Tarefas");
});

router.get("/tarefas/Cadastrar", (req, res) => {
  res.render("tarefas/cadastrar");
});

// TAREFAS
// Rota para services create
router.post("/tarefas/Create", Services.TarefaCreate);

// Rota para services listar
router.get("/tarefas/listar", Services.TarefaListar);

// Rota para formulário update
router.get("/tarefas/Atualizar/:id_tarefa/:titulo/:descricao", (req, res) => {
  let tarefas = {
    id_tarefa: req.params.id_tarefa,
    titulo: req.params.titulo,
    descricao: req.params.descricao,
  };
  res.render("tarefas/update", { tarefas });
});

// Rota para services update
router.post("/tarefas/Update", Services.TarefaUpdate);

// Rota para services delete
router.post("/tarefas/Delete", Services.TarefaDelete);

// USUARIOS
router.get("/usuarios/Cadastrar", (req, res) => {
  res.render("usuarios/cadastrar");
});

// Rota para services create
router.post("/usuarios/Create", Services.UsuarioCreate);

// Rota para services listar
router.get("/usuarios/listar", Services.UsuarioListar);

// Rota para formulário update
router.get("/usuarios/Atualizar/:id_usuario/:nome/:email/:senha", (req, res) => {
  let usuarios = {
    id_usuario: req.params.id_usuario,
    nome: req.params.nome,
    email: req.params.email,
    senha: req.params.senha,
  };
  res.render("usuarios/update", { usuarios });
});

// Rota para services update
router.post("/usuarios/Update", Services.UsuarioUpdate);

// Rota para services delete
router.post("/usuarios/Delete", Services.UsuarioDelete);

module.exports = router;
