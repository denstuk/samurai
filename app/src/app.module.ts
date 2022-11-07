import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { ConfigModule } from "@nestjs/config";
import { AppConfig } from "./config/app.config";

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, load: [() => AppConfig] }),
		ScheduleModule.forRoot(),
	],
})
export class AppModule {
}
