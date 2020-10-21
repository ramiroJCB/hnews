"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_module_1 = require("./app.module");
const core_1 = require("@nestjs/core");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    console.log(`Application is running on: ${await app.getUrl()}`);
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=app.js.map