import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { TradeUsecase } from "../../usecase/trade.usecase";

@Injectable()
export class TradeTask {
	private readonly logger = new Logger("Scheduler:Trade");
	private mutex = false;

	constructor(private readonly tradeUsecase: TradeUsecase) {
		process.nextTick(() => this.run());
	}

	@Cron(CronExpression.EVERY_MINUTE)
	async run(): Promise<void> {
		if (this.mutex) return;
		this.mutex = true;

		try {
			this.logger.debug("Started");
			await this.tradeUsecase.run();
			this.logger.debug("Finished");
		} catch (error: unknown) {
			this.logger.error(JSON.stringify(error));
		}

		this.mutex = false;
	}
}
