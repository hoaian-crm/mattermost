import { Mattermost } from "../core";
import { RegistryPackageMessage, WorkflowRunMessage } from "./type";
export declare class GithubBotService {
    mattermost: Mattermost;
    constructor();
    workflowRun(data: WorkflowRunMessage): Promise<import("axios").AxiosResponse<any, any>>;
    registryPackage(data: RegistryPackageMessage): Promise<import("axios").AxiosResponse<any, any>>;
}
