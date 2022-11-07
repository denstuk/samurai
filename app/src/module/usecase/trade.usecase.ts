import { Injectable } from "@nestjs/common";
import { TinkoffService } from "../infrastructure/tinkoff/tinkoff.service";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class TradeUsecase {
	constructor(
		private readonly configService: ConfigService,
		private readonly tinkoffService: TinkoffService,
	) {
	}

	async run(): Promise<void> {
		const { accounts } = await this.tinkoffService.getAccounts();
		const accountName = this.configService.get("tinkoff.accountName");
		const account = accounts.find((a) => a.name === accountName);

		console.log(JSON.stringify(accounts));
		console.log(JSON.stringify(account));
	}
}
