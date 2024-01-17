"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mattermost = void 0;
const axios_1 = require("axios");
class Mattermost {
    constructor(config) {
        this.config = config;
        this.core = axios_1.default.create({
            baseURL: this.config.mattermostServer,
            headers: {
                Authorization: 'Bearer ' + this.config.accessToken
            }
        });
    }
    async send(message) {
        return this.core.post("/api/v4/posts", message);
    }
}
exports.Mattermost = Mattermost;
//# sourceMappingURL=index.js.map