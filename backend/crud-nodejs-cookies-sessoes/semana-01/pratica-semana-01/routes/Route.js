const express = require("express");
const router = express.Router();

var cidades = ["Vitoria", "Vila Velha", "Cabo Frio", "Serra"];

router.get("/", (req, res) => {
  res.render("form");
});

router.post("/", (req, res) => {
  let nome = req.body.nome;
  cidades[cidades.length] = nome;
  return res.json([cidades[cidades.length - 1]]);
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  return res.json({ cidade: cidades[id] });
});

module.exports = router;
