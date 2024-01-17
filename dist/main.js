"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app.module");
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const appPort = process.env.APP_PORT || 3000;
    app.listen(appPort, () => console.log("App is listening in port", appPort));
};
bootstrap();
//# sourceMappingURL=main.js.map