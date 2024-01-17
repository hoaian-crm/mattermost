import { DockerbotService } from "./docker_bot.service";
export declare class DockerBotController {
    private dockerbotService;
    constructor(dockerbotService: DockerbotService);
    webhook(data: any): Promise<string>;
}
