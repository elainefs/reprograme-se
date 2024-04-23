// Bibliotecas e Módulos
const express = require("express");
const router = express.Router();

// CONTROLLERS
const funcionarioController = require("../controller/funcionarioController");
const livroController = require("../controller/livrosController");

// Rotas
router.get("/", (req, res) => {
    return res.json({ message: "Sistema de Cadastro de Livros" });
});

// Rotas
//POST - CADASTRAR
router.post("/funcionarios/Cadastrar", funcionarioController.FuncionarioCreate);


//GET - LISTAR
router.get("/funcionarios/:id?", funcionarioController.verificaJWT, funcionarioController.FuncionarioListar);

//PUT - UPDATE
router.put("/funcionarios/:id", funcionarioController.FuncionarioUpdate);

// DELETE
router.delete("/funcionarios/:id", funcionarioController.FuncionarioDelete);

//POST - VERIFICA LOGIN
router.post("/login", funcionarioController.FuncionarioVerificaLogin);

// PRODUTOS
// Post - Cadastrar
router.post("/livros/Cadastrar", livroController.LivroCreate);

// Get - Listar
router.get("/livros/:id?", livroController.LivroListar);

module.exports = router;
