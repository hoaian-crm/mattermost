import { Injectable } from "@nestjs/common";
import { Mattermost } from "../core";

@Injectable()
export class DevopsBotService {
  mattermost: Mattermost;
  constructor() {
    this.mattermost = new Mattermost({
      accessToken: 'cii9rsoxpfrepj6cs6hky63hah',
      mattermostServer: process.env.MATTERMOST_SERVER
    })
  }

  sendRestartDeployment(query: { deployment: string }) {
    return this.mattermost.send({
      message: `@botkube kubectl rollout restart deployment ${query.deployment}`,
      channel_id: '1s9fscw8h7rx5kg4iit94k5o9r'
    })
  }
}
