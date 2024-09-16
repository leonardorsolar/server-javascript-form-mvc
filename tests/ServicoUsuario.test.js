// tests/ServicoUsuario.test.js

const ServicoUsuario = require('../src/modulos/usuario/aplicacao/ServicoUsuario');
const Usuario = require('../src/modulos/usuario/dominio/Usuario');

describe('ServicoUsuario', () => {
  let servicoUsuario;
  let repositorioUsuario;

  // Configuração antes de cada teste
  beforeEach(() => {
    repositorioUsuario = {
      criar: jest.fn(), // Mock do método criar
    };
    servicoUsuario = new ServicoUsuario(repositorioUsuario);
  });

  test('deve criar um usuário e chamar o método criar do repositório', async () => {
    const dadosUsuario = {
      nome: 'Leonardo',
      email: 'leonardo@example.com',
      senha: 'senha123',
    };
    const usuario = new Usuario(dadosUsuario.nome, dadosUsuario.email, dadosUsuario.senha);

    // Mock do método criar do repositório
    repositorioUsuario.criar.mockResolvedValue(usuario);

    const resultado = await servicoUsuario.criar(dadosUsuario);

    expect(resultado).toBe(usuario);
    expect(repositorioUsuario.criar).toHaveBeenCalledWith(usuario);
  });
});
