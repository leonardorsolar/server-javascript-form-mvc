class ControladorUsuario {
  constructor(servicoUsuario) {
    this.servicoUsuario = servicoUsuario;
  }

  async manipulador(req, res) {
    const dto = req.body;
    try {
      const usuario = await this.servicoUsuario.criar(dto);
      res.status(201).json(usuario);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }
}

module.exports = ControladorUsuario;
