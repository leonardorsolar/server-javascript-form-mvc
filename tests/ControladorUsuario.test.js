// tests/ControladorUsuario.test.js

const Usuario = require('../src/modulos/usuario/dominio/Usuario');
const ControladorUsuario = require('../src/modulos/usuario/infra/controladora/web/ControladorUsuario');

describe('ControladorUsuario', () => {
  let controladorUsuario;
  let servicoUsuario;
  let req;
  let res;

  beforeEach(() => {
    // Mock do serviço de usuário
    servicoUsuario = {
      criar: jest.fn(),
    };

    // Instância do ControladorUsuario com o mock do serviço
    controladorUsuario = new ControladorUsuario(servicoUsuario);

    // Mock para req e res
    req = {
      body: {
        nome: 'Leonardo',
        email: 'leonardo@example.com',
        senha: 'senha123',
      },
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  test('deve responder com status 201 e o usuário criado em caso de sucesso', async () => {
    const usuario = new Usuario(req.body.nome, req.body.email, req.body.senha);

    // Configura o mock do método criar para retornar o usuário
    servicoUsuario.criar.mockResolvedValue(usuario);

    await controladorUsuario.manipulador(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(usuario);
  });

  test('deve responder com status 500 e mensagem de erro em caso de falha', async () => {
    const erro = new Error('Erro ao criar usuário');

    // Configura o mock do método criar para lançar um erro
    servicoUsuario.criar.mockRejectedValue(erro);

    await controladorUsuario.manipulador(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ erro: erro.message });
  });
});
