import supertest from 'supertest';

describe('Testando as funcionalidades de retorno API', () => {
    it('Get Realizando a chamada no servidor', async () => {
        const {body, text} =  await supertest.agent().get('/');
        expect(body).not.toBe(undefined);
    });
});