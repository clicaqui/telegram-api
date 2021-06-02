
describe('POST Realizando a invocação do WebHook como mensagem do Telegram', () => {
  it.skip('Mensagem randomica atraves do comando /phrases', async () => {
    const data = {
     message: {
       chat: {
          id: 1067356804,
       },
       text: '/phrases',
     }
    };
    const { body, status } = await global.testRequest.post('/').send(data);

    expect(status).toBe(200);
    expect(body).toEqual({});
  });

  /*     nock('http://127.0.0.1:58239', {"encodedQueryParams":true})
  .post('/passage')
  .reply(200, retorno);  */
  it('Mensagem de solicitação na busca de mensagem no serviço da API externa', async () => {
    const data = {
     message: {
       chat: {
          id: 1067356804,
       },
       text: '/find john 1 1',
     }
    };
    const { body, status } = await global.testRequest.post('/').send(data);

    expect(status).toBe(200);
    expect(body).toEqual({});
  });

});
