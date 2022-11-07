import { config } from "dotenv";
import * as path from "path";

config({
	path: path.join(process.cwd(), ".env"),
});

export const AppConfig: Record<string, any> = {
	tinkoff: {
		token: process.env["TINKOFF_TOKEN"],
		accountName: process.env["TINKOFF_ACCOUNT_NAME"],
		urls: {
			base: "https://invest-public-api.tinkoff.ru/rest",
			instrumentsService: "/tinkoff.public.invest.api.contract.v1.InstrumentsService",
			marketsService: "/tinkoff.public.invest.api.contract.v1.MarketDataService",
			operationsService: "/tinkoff.public.invest.api.contract.v1.OperationsService",
			ordersService: "/tinkoff.public.invest.api.contract.v1.OrdersService",
			usersService: "/tinkoff.public.invest.api.contract.v1.UsersService",
		},
	},
	telegram: {
		token: process.env["TELEGRAM_TOKEN"],
	},
};
