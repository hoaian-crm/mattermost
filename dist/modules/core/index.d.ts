import { AxiosInstance } from 'axios';
export type Action = {
    id?: string;
    name?: string;
    integration?: {
        url?: string;
        context?: {
            action: string;
        };
    };
};
export type Attachment = {
    pretext?: string;
    text?: string;
    actions: Array<Action>;
};
export type MattermostConfig = {
    accessToken: string;
    mattermostServer: string;
};
export type MattermostMessage = {
    channel_id?: string;
    message: string;
    props?: {
        attachments?: Array<Attachment>;
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
