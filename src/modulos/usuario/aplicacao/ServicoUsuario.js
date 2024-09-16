const Usuario = require('../dominio/Usuario');

class ServicoUsuario {
  constructor(repositorioUsuario) {
    this.repositorioUsuario = repositorioUsuario;
  }

  async criar(dadosUsuario) {
    const usuario = new Usuario(dadosUsuario.nome, dadosUsuario.email, dadosUsuario.senha);
    return await this.repositorioUsuario.criar(usuario);
  }
}

module.exports = ServicoUsuario;

//A classe ServicoCriarUsuario tem a responsabilidade de criar um usuário a partir dos dados fornecidos
//e delegar a persistência do usuário ao AdaptadorPersistenciaUsuario.
