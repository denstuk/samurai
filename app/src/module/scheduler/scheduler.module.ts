import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { UsecaseModule } from "../usecase/usecase.module";
import { TradeTask } from "./tasks/trade.task";

@Module({
	imports: [ScheduleModule.forRoot(), UsecaseModule],
	providers: [TradeTask],
})
export class SchedulerModule {
}
