const Produto = require("../model/produtoModel");

module.exports = class produtoController {
  // Create
  static async produtoCreate(req, res) {
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let preco = req.body.preco;
    let link = req.body.link;
    const produto = {
      nome: nome,
      descricao: descricao,
      preco: preco,
      link: link,
    };
    await Produto.create(produto);
    res.json({ message: "Produto cadastrado com sucesso!" });
  }

  //Read
  static async ProdutoListar(req, res) {
    const id_produto = req.params.id;
    if (id_produto) {
      const produto = await Produto.findOne({
        where: { id_produto: id_produto },
      });
      res.json(produto);
    } else {
      const produto = await Produto.findAll({ raw: true });
      res.json(produto);
    }
  }
  //Update
  static async ProdutoUpdate(req, res) {
    const id_produto = req.params.id;
    let nome = req.body.nome;
    let descricao = req.body.descricao;
    let preco = req.body.preco;
    let link = req.body.link;
    const produto = {
      nome: nome,
      descricao: descricao,
      preco: preco,
      link: link,
    };
    await Produto.update(produto, { where: { id_produto: id_produto } });
    res.json({
      message:
        "Cadastro atualizado com sucesso! Foram atualizados as seguintes informações: ",
      dados: produto,
    });
  }

  // Delete
  static async ProdutoDelete(req, res) {
    const id_produto = req.params.id;
    await Produto.destroy({ where: { id_produto: id_produto } });
    res.json({ message: "Produto excluído com sucesso!" });
  }
};
