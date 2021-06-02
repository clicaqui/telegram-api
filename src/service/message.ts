import { AxiosStatic } from 'axios';
import config, { IConfig } from 'config';

const telegramConfig: IConfig = config.get('App.resources.Telegram');

export interface MessageType  {
    text: string,
    chat: {
      id: number
    }
}

export class MessageService {
  constructor(protected request: AxiosStatic) {}
  public async send(message: MessageType, reply: string):Promise<void> {
    await this.request
      .post(
        `${telegramConfig.get('apiUrl')}${telegramConfig.get(
          'apiKey'
        )}/sendMessage`,
        { chat_id: message.chat.id, text: reply }
      )
      .then(() => {
        console.log('Message posted');
      })
      .catch((error) => {
        console.log(error);
    });
  }
  
}
