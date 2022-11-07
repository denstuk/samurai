export const AppConfig: Record<string, any> = {
	tinkoff: {
		token: process.env["TINKOFF_TOKEN"],
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
