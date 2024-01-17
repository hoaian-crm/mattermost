import axios, { AxiosInstance } from 'axios';


export type MattermostConfig = {
  accessToken: string;
  // defaultChannel: string;
  mattermostServer: string;
}

export type MattermostMessage = {
  channel_id?: string;
  message: string;
  props?: {
    attachments?: Array<any>;
  },
  metadata?: {
    priority: {
      priority: string
    }
  }
}

export class Mattermost {

  core: AxiosInstance;

  constructor(private config: MattermostConfig) {
    this.core = axios.create({
      baseURL: this.config.mattermostServer,
      headers: {
        Authorization: 'Bearer ' + this.config.accessToken
      }
    })
  }

  async send(message: MattermostMessage) {
    return this.core.post("/api/v4/posts", message)
  }
}
