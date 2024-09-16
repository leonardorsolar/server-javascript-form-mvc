class RepositorioUsuario {
  constructor() {
    // Inicializa um array vazio para armazenar usuários
    this.usuarios = [];
  }

  // Método para salvar um usuário
  async salvar(usuario) {
    this.usuarios.push(usuario); // Adiciona o usuário ao array
    return usuario; // Retorna o usuário salvo
  }

  // Método para listar todos os usuários (opcional, para facilitar testes)
  async listar() {
    return this.usuarios;
  }
}

module.exports = RepositorioUsuario;
