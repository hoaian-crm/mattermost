import { DevopsBotService } from "./devops_bot.service";
export declare class DevopsBotController {
    private devopsBotService;
    constructor(devopsBotService: DevopsBotService);
    restartDeployment(query: {
        deployment: string;
    }): Promise<string>;
}
