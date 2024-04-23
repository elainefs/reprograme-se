// Bibliotecas e Módulos
const express = require("express");
const router = express.Router();

// CONTROLLERS
const usuarioController = require("../controller/usuarioController");
const produtoController = require("../controller/produtoController");

// Rotas
router.get("/", (req, res) => {
    return res.json({ message: "Sistema de Varejo" });
});

// Rotas
//POST - CADASTRAR
// router.post("/add_usuario", usuarioController.UsuarioCreate);
router.post("/usuarios/Cadastrar", usuarioController.UsuarioCreate);


//GET - LISTAR
router.get("/usuarios/:id?", usuarioController.verificaJWT, usuarioController.UsuarioListar);

//PUT - UPDATE
router.put("/usuarios/:id", usuarioController.UsuarioUpdate);

// DELETE
router.delete("/usuarios/:id", usuarioController.UsuarioDelete);

//POST - VERIFICA LOGIN
router.post("/login", usuarioController.UsuarioVerificaLogin);

// PRODUTOS
// Post - Cadastrar
router.post("/produtos/Cadastrar", produtoController.produtoCreate);

// Get - Listar
router.get("/produtos/:id?", produtoController.ProdutoListar);

module.exports = router;
