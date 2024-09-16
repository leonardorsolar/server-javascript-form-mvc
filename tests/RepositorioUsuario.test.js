// tests/RepositorioUsuario.test.js

const Usuario = require('../src/modulos/usuario/dominio/Usuario');
const RepositorioUsuario = require('../src/modulos/usuario/infra/repositorio/RepositorioUsuario');

describe('RepositorioUsuario', () => {
  let repositorio;

  // Configuração antes de cada teste
  beforeEach(() => {
    repositorio = new RepositorioUsuario();
  });

  test('deve salvar um usuário', async () => {
    const usuario = new Usuario('Leonardo', 'leonardo@example.com', 'senha123');

    const resultado = await repositorio.salvar(usuario);

    expect(resultado).toBe(usuario);
    expect(repositorio.usuarios).toContain(usuario);
  });

  //   test('deve listar todos os usuários', async () => {
  //     const usuario1 = new Usuario('Leonardo', 'leonardo@example.com', 'senha123');
  //     const usuario2 = new Usuario('Maria', 'maria@example.com', 'senha456');

  //     await repositorio.salvar(usuario1);
  //     await repositorio.salvar(usuario2);

  //     const usuarios = await repositorio.listar();

  //     expect(usuarios).toHaveLength(2);
  //     expect(usuarios).toContain(usuario1);
  //     expect(usuarios).toContain(usuario2);
  //   });
});
