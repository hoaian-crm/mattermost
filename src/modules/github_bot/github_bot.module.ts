import { Module } from "@nestjs/common";
import { GithubBotService } from "./github_bot.service";
import { GithubBotController } from "./github_bot.controller";

@Module({
  imports: [
  ],
  providers: [
    GithubBotService
  ],
  exports: [
    GithubBotService
  ],
  controllers: [
    GithubBotController
  ]
})
export class GithubBotModule { }
