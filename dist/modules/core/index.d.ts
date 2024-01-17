import { AxiosInstance } from 'axios';
export type MattermostConfig = {
    accessToken: string;
    mattermostServer: string;
};
export type MattermostMessage = {
    channel_id?: string;
    message: string;
    props?: {
        attachments?: Array<any>;
    };
    metadata?: {
        priority: {
            priority: string;
        };
    };
};
export declare class Mattermost {
    private config;
    core: AxiosInstance;
    constructor(config: MattermostConfig);
    send(message: MattermostMessage): Promise<import("axios").AxiosResponse<any, any>>;
}
