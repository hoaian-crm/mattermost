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
  root_id?: string;
  post_id?: string;
  props?: {
    attachments?: Array<Attachment>;
    deployment?: string;
  },
  metadata?: {
    priority: {
      priority: string
    }
  }
}

export type MattermostWebhook = {
  hashtag: string;
  channel_id: string,
  channel_name: string,
  file_ids: string,
  post_id: string,
  team_domain: string,
  team_id: string,
  text: string,
  timestamp: string,
  token: string,
  trigger_word: string,
  user_id: string,
  user_name: string
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

  async getPostDetail(postId: string): Promise<MattermostMessage> {
    return this.core.get(`/api/v4/posts/${postId}`).then(response => response.data);
  }
}
