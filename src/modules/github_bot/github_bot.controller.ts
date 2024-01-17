import { Post, Controller, Body, Headers } from "@nestjs/common";
import { GithubBotService } from "./github_bot.service";

@Controller("github")
export class GithubBotController {
  constructor(private githubBotService: GithubBotService) { }

  @Post('/webhook')
  async webhook(@Body() data: any, @Headers('x-github-event') eventName: string) {

    if (eventName === 'workflow_run') {
      const response = await this.githubBotService.workflowRun(data);
    }

    if (eventName === 'registry_package') {
      const response = await this.githubBotService.registryPackage(data);
    }

    return 'ok'
  }
}
