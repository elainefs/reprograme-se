const axios = require("axios");

const endereco =
  "https://841a7e23-e8c6-45de-802e-4965f447646d-00-2b4w9ne2hvgzx.kirk.replit.dev/";

module.exports = class Services {
  //VERIFICAR USUÁRIO
  static async UsuarioLogin(req, res) {
    let valores = req.body;
    const options = {
      url: endereco + "login",
      method: "POST",
      data: valores,
    };
    axios(options).then((usuario) => {
      if (usuario != undefined) {
        return res.render("logado");
      }
    });
  }

  //Create usuário
  static async UsuarioCreate(req, res) {
    let valores = req.body;
    const options = {
      url: endereco + "usuarios/Cadastrar",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  // Create produto
  static async ProdutoCreate(req, res) {
    let valores = req.body;
    const options = {
      url: endereco + "produtos/Cadastrar",
      method: "POST",
      data: valores,
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  //Listar produtos
  static async ProdutoListar(req, res) {
    const options = {
      url: endereco + "produtos",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const produto = response.data;
      res.render("produtos/listar", { produto });
    });
  }

  // Carrinho - Cookies
  static async CarrinhoAdicionar(req, res) {
    const Item = {
      id: req.params.id,
      nome: req.params.nome,
    };
    // Verifica se já existe um cookie para o carrinho
    if (req.cookies.carrinho) {
      // Se existir, adiciona o novo item
      const carrinho = JSON.parse(req.cookies.carrinho);
      carrinho.push(Item);
      res.cookie("carrinho", JSON.stringify(carrinho), {
        maxAge: 900000,
        httpOnly: true,
      });
    } else {
      // Se não existe, cria um novo carrinho com o item
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
    // Verificando se existe um cookie para o carrinho
    if (req.cookies.carrinho) {
      // Obtendo o carrinho do cookie
      let carrinho = JSON.parse(req.cookies.carrinho);

      // Removendo o item do carrinho, se existir
      carrinho = carrinho.filter((item) => item.id !== itemDeletar);
      // Atualizando o cookie com o carrinho modificado
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
      res.render("carrinhos/Listar", { carrinho });
    } else {
      res.send("Carrinho vazio");
    }
  }
};
