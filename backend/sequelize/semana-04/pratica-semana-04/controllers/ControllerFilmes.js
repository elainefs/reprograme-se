const Filme = require("../models/Filme");

module.exports = class FilmeController {
  static cadastrarFilme(req, res) {
    res.render("filmes/cadastrar");
  }

  static async FilmeCreate(req, res) {
    const filme = {
      titulo: req.body.titulo,
      categoria: req.body.categoria,
      genero: req.body.genero,
      link_sinopse: req.body.link_sinopse,
    };
    await Filme.create(filme);
    res.redirect("/");

  }

  static async listarFilmes(req, res) {
    const filme = await Filme.findAll({ raw: true });
    res.render("filmes/listar", { filme });
  }

  static async UpdateFilmes(req, res) {
    const id_filme = req.params.id_filme;
    const filme = await Filme.findOne({where: {id_filme: id_filme}, raw: true})
    res.render("filmes/update", {filme})    
  }

  static async FilmeUpdate(req, res){
    const id_filme = req.body.id_filme;
    const filme = {
      titulo: req.body.titulo,
      categoria: req.body.categoria,
      genero: req.body.genero,
      link_sinopse: req.body.link_sinopse,
    };
    await Filme.update(filme, { where: { id_filme: id_filme }});
    res.redirect("/");
  }

  static async removerFilme(req, res) {
    const id_filme = req.body.id_filme;
    await Filme.destroy({ where: { id_filme: id_filme }});
    res.redirect("/");
  }
};
