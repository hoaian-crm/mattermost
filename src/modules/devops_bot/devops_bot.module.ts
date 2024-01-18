import { Module } from "@nestjs/common";
import { DevopsBotService } from "./devops_bot.service";
import { DevopsBotController } from "./devops_bot.controller";

@Module({
  providers: [DevopsBotService],
  exports: [DevopsBotService],
  controllers: [DevopsBotController]
})
export class DevopsBotModule { }
