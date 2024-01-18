import { Mattermost } from "../core";
export declare class DevopsBotService {
    mattermost: Mattermost;
    constructor();
    sendRestartDeployment(query: {
        deployment: string;
    }): Promise<import("axios").AxiosResponse<any, any>>;
}
