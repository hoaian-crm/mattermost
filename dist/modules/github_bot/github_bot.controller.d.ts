import { GithubBotService } from "./github_bot.service";
export declare class GithubBotController {
    private githubBotService;
    constructor(githubBotService: GithubBotService);
    webhook(data: any, eventName: string): Promise<string>;
}
