"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubBotService = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("../core");
let GithubBotService = class GithubBotService {
    constructor() {
        this.mattermost = new core_1.Mattermost({
            accessToken: process.env.GITHUB_BOT_ACCESSTOKEN,
            mattermostServer: process.env.MATTERMOST_SERVER
        });
    }
    async workflowRun(data) {
        if (data.action === 'in_progress') {
            return this.mattermost.send({
                message: `##### New workflow in progress: ${data.workflow_run.html_url}`,
                channel_id: '6xm1eehoxpf3pgihdruoigq3po'
            });
        }
        if (data.action === 'completed') {
            if (data.workflow_run.conclusion === 'success') {
                return this.mattermost.send({
                    message: `##### Workflow run done @all: ${data.workflow_run.html_url}`,
                    channel_id: '6xm1eehoxpf3pgihdruoigq3po',
                });
            }
            if (data.workflow_run.conclusion === 'failure') {
                return this.mattermost.send({
                    message: `##### Workflow run failed @all: ${data.workflow_run.html_url}`,
                    channel_id: '6xm1eehoxpf3pgihdruoigq3po',
                    metadata: {
                        priority: {
                            priority: 'urgent'
                        }
                    }
                });
            }
        }
    }
    async registryPackage(data) {
        return this.mattermost.send({
            message: `##### Docker page ${data.action} @all: ${data.repository.html_url}`,
            channel_id: 'iignkzboeigsud5sxa4ffwrbjy',
            props: {
                attachments: [{
                        actions: [
                            {
                                id: 'restart', name: `Rollout restart ${data.registry_package.name}`,
                                integration: {
                                    url: process.env.Bot + "/devops/deployment/restart"
                                }
                            }
                        ]
                    }]
            }
        });
    }
};
exports.GithubBotService = GithubBotService;
exports.GithubBotService = GithubBotService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GithubBotService);
//# sourceMappingURL=github_bot.service.js.map