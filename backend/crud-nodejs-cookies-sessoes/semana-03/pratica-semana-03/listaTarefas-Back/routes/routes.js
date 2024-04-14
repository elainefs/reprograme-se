const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuarioController");
const tarefaController = require("../controller/tarefaController");

router.get("/", (req, res) => {
  return res.json({ message: "Sistema de Lista de Tarefas" });
});

// Cadastrar - Usuario
router.post("/usuarios/Cadastrar", usuarioController.UsuarioCreate);

// Listar - Usuario
router.get("/usuarios/:id?", usuarioController.UsuarioListar);

// Update - Usuario
router.put("/usuarios/:id", usuarioController.UsuarioUpdate);

// Delete - Usuario
router.delete("/usuarios/:id", usuarioController.UsuarioDelete);

// Cadastrar - Tarefa
router.post("/tarefas/Cadastrar", tarefaController.TarefaCreate);

// Listar - Tarefa
router.get('/tarefas/:id?', tarefaController.TarefaListar);

// Update - Tarefa
router.put('/tarefas/:id', tarefaController.TarefaUpdate);

// Delete - Tarefa
router.delete('/tarefas/:id', tarefaController.TarefaDelete);

module.exports = router;
