"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubBotModule = void 0;
const common_1 = require("@nestjs/common");
const github_bot_service_1 = require("./github_bot.service");
const github_bot_controller_1 = require("./github_bot.controller");
let GithubBotModule = class GithubBotModule {
};
exports.GithubBotModule = GithubBotModule;
exports.GithubBotModule = GithubBotModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            github_bot_service_1.GithubBotService
        ],
        exports: [
            github_bot_service_1.GithubBotService
        ],
        controllers: [
            github_bot_controller_1.GithubBotController
        ]
    })
], GithubBotModule);
//# sourceMappingURL=github_bot.module.js.map