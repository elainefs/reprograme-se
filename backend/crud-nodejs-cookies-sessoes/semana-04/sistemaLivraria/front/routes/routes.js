// Bibliotecas e Módulos
const express = require("express");
const Services = require("../services/services");
const router = express.Router();

// Rotas
router.get("/", Services.LivroListar);

// Funcionários
router.post("/login", Services.FuncionarioLogin);

router.get("/login", (req, res) => {
  res.render("funcionarios/login");
});

router.get("/funcionarios/Cadastrar", (req, res) => {
  res.render("funcionarios/Cadastrar");
});

router.post("/funcionarios/Cadastrar", Services.FuncionarioCreate);

// Livros
router.get("/livros/Cadastrar", (req, res) => {
  res.render("livros/Cadastrar");
});

router.post("/livros/Cadastrar", Services.LivroCreate);

router.get("/livros/listar", Services.LivroListar);

// ROTAS PARA COOKIES DO CARRINHO
router.get("/carrinho/Adicionar/:id/:nome", Services.CarrinhoAdicionar);
router.get("/carrinho/listar", Services.CarrinhoListar);
router.get("/carrinho/remover/:item", Services.CarrinhoRemoverItem);

module.exports = router;
