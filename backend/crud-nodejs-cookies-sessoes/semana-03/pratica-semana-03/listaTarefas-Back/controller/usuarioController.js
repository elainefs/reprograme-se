const Usuario = require("../model/usuarioModel");

module.exports = class usuarioController {
  // Create
  static async UsuarioCreate(req, res) {
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;

    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
    };
    await Usuario.create(usuario);
    res.json({ message: "Usuário cadastrado com sucesso!" });
  }
  // Read
  static async UsuarioListar(req, res) {
    const id_usuario = req.params.id;
    if (id_usuario) {
      const usuario = await Usuario.findOne({
        where: { id_usuario: id_usuario },
      });
      res.json(usuario);
    } else {
      const usuario = await Usuario.findAll({ raw: true });
      res.json(usuario);
    }
  }
  // Update
  static async UsuarioUpdate(req, res) {
    const id_usuario = req.params.id;
    let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;

    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
    };
    await Usuario.update(usuario, { where: { id_usuario: id_usuario } });
    res.json({
      message:
        "Usuário atualizado com sucesso! Foram atualizados as seguintes informações: ",
      dados: usuario,
    });
  }
  // Delete
  static async UsuarioDelete(req, res) {
    const id_usuario = req.params.id;
    await Usuario.destroy({ where: { id_usuario: id_usuario } });
    res.json({ message: "Usuário excluído com sucesso!" });
  }
};
