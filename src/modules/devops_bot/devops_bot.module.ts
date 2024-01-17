import { Module } from "@nestjs/common";
import { DevopsBotService } from "./devops_bot.service";

@Module({
  providers: [DevopsBotService],
  exports: [DevopsBotService]
})
export class DevopsBotModule { }
