"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process_1.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map