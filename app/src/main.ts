import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.init();
}

bootstrap().catch((error): void => {
	process.exitCode = 1;
	console.error(error);
});
