import { Body, Controller, Get, Header, Headers, Post, Query } from "@nestjs/common";
import { DevopsBotService } from "./devops_bot.service";
import { MattermostWebhook } from "../core";

@Controller('devops')
export class DevopsBotController {

  constructor(private devopsBotService: DevopsBotService) { }

  @Post('/webhook')
  async webhook(@Body() data: MattermostWebhook) {
    const action = data.text.replace(data.trigger_word, '').trim();
    if (action === 'restart') {
      await this.devopsBotService.sendRestartDeployment(data);
      return 'Ok';
    }

    await this.devopsBotService.unknownAction(data);
    return 'Ok';
  }
}
