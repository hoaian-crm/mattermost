import { NestFactory } from "@nestjs/core";
import { AppModule } from "./modules/app.module";

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  const appPort = process.env.APP_PORT || 3000;

  app.listen(appPort, () => console.log("App is listening in port", appPort))
}

bootstrap();
