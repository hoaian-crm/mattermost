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
}
