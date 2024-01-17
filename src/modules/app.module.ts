import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { GithubBotModule } from "./github_bot/github_bot.module";
import { DevopsBotModule } from "./devops_bot/devops_bot.module";

@Module({
  imports: [
    ConfigModule.forRoot(),

    // App Module
    GithubBotModule,
    DevopsBotModule
  ]
})
export class AppModule { }
