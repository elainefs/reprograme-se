// Bibliotecas e Módulos
const express = require("express");
const Services = require("../services/services");
const router = express.Router();

// Rotas
router.get("/", Services.ProdutoListar);

// USUARIOS
router.post("/login", Services.UsuarioLogin);

router.get("/login", (req, res) => {
  res.render("usuarios/login");
});

router.get("/usuarios/Cadastrar", (req, res) => {
  res.render("usuarios/Cadastrar");
});

router.post("/usuarios/Cadastrar", Services.UsuarioCreate);

// PRODUTOS
router.get("/produtos/Cadastrar", (req, res) => {
  res.render("produtos/Cadastrar");
});

router.post("/produtos/Cadastrar", Services.ProdutoCreate);

router.get("/produtos/listar", Services.ProdutoListar);

// ROTAS PARA COOKIES DO CARRINHO
router.get("/carrinho/Adicionar/:id/:nome", Services.CarrinhoAdicionar);
router.get("/carrinho/listar", Services.CarrinhoListar);
router.get("/carrinho/remover/:item", Services.CarrinhoRemoverItem);

module.exports = router;
