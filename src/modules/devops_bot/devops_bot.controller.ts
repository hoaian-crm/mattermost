import { Controller, Get, Header, Headers, Query } from "@nestjs/common";
import { DevopsBotService } from "./devops_bot.service";

@Controller('devops')
export class DevopsBotController {

  constructor(private devopsBotService: DevopsBotService) { }

  @Get('/deployment/restart')
  async restartDeployment(@Query() query: { deployment: string }) {
    await this.devopsBotService.sendRestartDeployment(query);
    return 'Ok'
  }
}
