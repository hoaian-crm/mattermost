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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerBotController = void 0;
const common_1 = require("@nestjs/common");
const docker_bot_service_1 = require("./docker_bot.service");
let DockerBotController = class DockerBotController {
    constructor(dockerbotService) {
        this.dockerbotService = dockerbotService;
    }
    async webhook(data) {
        console.log(data);
        return 'Ok';
    }
};
exports.DockerBotController = DockerBotController;
__decorate([
    (0, common_1.Post)('webhook'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DockerBotController.prototype, "webhook", null);
exports.DockerBotController = DockerBotController = __decorate([
    (0, common_1.Controller)('docker'),
    __metadata("design:paramtypes", [docker_bot_service_1.DockerbotService])
], DockerBotController);
//# sourceMappingURL=docker_bot.controller.js.map