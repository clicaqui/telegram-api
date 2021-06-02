import axios from 'axios';
import { MessageService, MessageType } from './message';

jest.mock('axios');

describe('Simulando o Webhook Telegram', () => {
  it('Devera buscar conforme action', async () => {
    const message:MessageType = {text: 'Olá', chat: {id: 1067356804}};
    const retorno = {};

    axios.post = jest.fn().mockResolvedValue(retorno);
    const service = new MessageService(axios);
    const response = service.send(message, 'Jest Send Message');
    expect(response).resolves.toEqual(retorno);
  });
});
