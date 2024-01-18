import { Injectable } from "@nestjs/common";
import { Mattermost, MattermostMessage, MattermostWebhook } from "../core";

@Injectable()
export class DevopsBotService {
  mattermost: Mattermost;
  constructor() {
    this.mattermost = new Mattermost({
      accessToken: 'cii9rsoxpfrepj6cs6hky63hah',
      mattermostServer: process.env.MATTERMOST_SERVER
    })
  }

  async sendRestartDeployment(data: MattermostWebhook) {

    const post: MattermostMessage = await this.mattermost.getPostDetail(data.post_id)
    const root: MattermostMessage = await this.mattermost.getPostDetail(post.root_id);

    console.log("root is: ", root)

    await this.mattermost.send({
      message: `@${data.user_name} Okay I will rollout restart it!`,
      channel_id: data.channel_id,
      root_id: post.root_id
    });

    await this.mattermost.send({
      message: `@botkube kubectl rollout restart deployment ${root.props.deployment}`,
      channel_id: '1s9fscw8h7rx5kg4iit94k5o9r'
    })
  }

  async unknownAction(data: MattermostWebhook) {
    return this.mattermost.send({
      message: `What do you want? @${data.user_name}`,
      channel_id: data.channel_id,
      root_id: (await this.mattermost.getPostDetail(data.post_id)).root_id
    })
  }
}
