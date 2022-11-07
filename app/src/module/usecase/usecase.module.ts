import { Module } from "@nestjs/common";
import { TinkoffModule } from "../infrastructure/tinkoff/tinkoff.module";
import { TradeUsecase } from "./trade.usecase";

@Module({
	imports: [TinkoffModule],
	providers: [TradeUsecase],
	exports: [TradeUsecase],
})
export class UsecaseModule {
}
