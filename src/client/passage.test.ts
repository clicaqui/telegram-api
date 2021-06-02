import { PassageBible } from '@src/client/passageBible';
import axios from 'axios';

jest.mock('axios');

describe('Fetch from API return obj', () => {
  it('cliente ', () => {
    const retorno = {
      data:
        'In the beginning was the Word, and the Word was with God, and the Word was God.',
    };

    axios.get = jest.fn().mockResolvedValue(retorno);
    const passage = 'John1.1';
    const passageBible = new PassageBible(axios);
    const response = passageBible.fetchPassage(passage,'');
    expect(response).resolves.toEqual(retorno);
  });

  it('network failed', async () => {
    const errormsg = { message: 'Network Error' };
    axios.get = jest.fn().mockRejectedValue(errormsg);
    const passage = 'John1.1';
    const passageBible = new PassageBible(axios);
    await expect(passageBible.fetchPassage(passage,'')).rejects.toThrow('Unexpected error when trying to comunicate to PassageBible:');
  });
});
