import { AxiosStatic } from 'axios';
import { InternalError } from '@src/util/error/internalerror';
import config, { IConfig } from 'config';

export class ClientRequestError extends InternalError {
  constructor(message: string) {
    const internalMessage =
      'Unexpected error when trying to comunicate to PassageBible';
    super(`${internalMessage}:${message}`);
  }
}

const passageBibleConfig: IConfig = config.get('App.resources.PassageBible');
export class PassageBible {
  constructor(protected request: AxiosStatic) {}
  public async fetchPassage(passage: string, reply:string):Promise<string> {
     try {    
      await this.request
        .get(
          `${passageBibleConfig.get(
            'apiUrl'
          )}?passage=${passage}&key=${passageBibleConfig.get('apiKey')}`
        )
        .then((retorno: any) => {
          if (retorno.status !== 200) {
            reply = `Passage not found `;
          } else {
            reply = retorno.data + ' ' + passage.replace('.',':');
          }
        });
      } catch (error) {
        throw new ClientRequestError(error.message);
      }
      return reply;
  }
}
