import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppConfig } from "./config/app.config";
import { SchedulerModule } from "./module/scheduler/scheduler.module";

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, load: [() => AppConfig] }),
		SchedulerModule,
	],
})
export class AppModule {
}
