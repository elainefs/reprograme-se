const axios = require("axios");

const endereco =
  "https://80c0c7a3-bf4b-4f9b-8b14-0ca48f170ba1-00-1zij9d5h7plqp.riker.replit.dev/";

module.exports = class Services {
  //VERIFICAR FUNCIONÁRIO
  static async FuncionarioLogin(req, res) {
    let valores = req.body;
    const options = {
      url: endereco + "login",
      method: "POST",
      data: valores,
    };
    axios(options).then((funcionario) => {
      if (funcionario != undefined) {
        return res.render("logado");
      }
    });
  }

  //Create funcionário
  static async FuncionarioCreate(req, res) {
    let valores = req.body;
    const options = {
      url: endereco + "funcionarios/Cadastrar",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  // Create livro
  static async LivroCreate(req, res) {
    let valores = req.body;
    const options = {
      url: endereco + "livros/Cadastrar",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  //Listar livro
  static async LivroListar(req, res) {
    const options = {
      url: endereco + "livros",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const livro = response.data;
      res.render("livros/listar", { livro });
    });
  }

  // Carrinho - Cookies
  static async CarrinhoAdicionar(req, res) {
    const Item = {
      id: req.params.id,
      titulo: req.params.titulo,
    };
    if (req.cookies.carrinho) {
      const carrinho = JSON.parse(req.cookies.carrinho);
      carrinho.push(Item);
      res.cookie("carrinho", JSON.stringify(carrinho), {
        maxAge: 900000,
        httpOnly: true,
      });
    } else {
      const carrinho = [Item];
      res.cookie("carrinho", JSON.stringify(carrinho), {
        maxAge: 900000,
        httpOnly: true,
      });
    }
    res.send("Item adicionado ao carrinho");
  }

  // Rota para remover um item do carrinho
  static async CarrinhoRemoverItem(req, res) {
    const itemDeletar = req.params.item;
    if (req.cookies.carrinho) {
      let carrinho = JSON.parse(req.cookies.carrinho);

      carrinho = carrinho.filter((item) => item.id !== itemDeletar);
      res.cookie("carrinho", JSON.stringify(carrinho), {
        maxAge: 900000,
        httpOnly: true,
      });
      res.send("Item removido do carrinho");
    } else {
      res.send("Carrinho vazio");
    }
  }

  // Listar itens do carrinho
  static async CarrinhoListar(req, res) {
    // Rota para exibir o carrinho
    if (req.cookies.carrinho) {
      const carrinho = JSON.parse(req.cookies.carrinho);
      res.render("carrinho/Listar", { carrinho });
    } else {
      res.send("Carrinho vazio");
    }
  }
};
