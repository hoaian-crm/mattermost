import axios, { AxiosInstance } from 'axios';

export type Action = {
  id?: string;
  name?: string;
  integration?: {
    url?: string;
    context?: {
      action: string;
    }
  }
}

export type Attachment = {
  pretext?: string;
  text?: string;
  actions: Array<Action>;
}

export type MattermostConfig = {
  accessToken: string;
  // defaultChannel: string;
  mattermostServer: string;
}

export type MattermostMessage = {
  channel_id?: string;
  message: string;
  props?: {
    attachments?: Array<Attachment>;
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
