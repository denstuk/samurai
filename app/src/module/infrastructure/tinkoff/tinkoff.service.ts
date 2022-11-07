import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom } from "rxjs";
import { GetAccountsResult } from "./tinkoff.types";

/**
 * Сервис для взаимодействия с биржей Tinkoff
 * Swagger: https://tinkoff.github.io/investAPI/swagger-ui/#/
 */
@Injectable()
export class TinkoffService {
	constructor(private readonly config: ConfigService, private readonly httpService: HttpService) {
	}

	/** Получение всех доступных счетов */
	async getAccounts(): Promise<GetAccountsResult> {
		const url = `${this.config.get("tinkoff.urls.base")}${this.config.get("tinkoff.urls.usersService")}/GetAccounts`;
		const req = this.httpService.post(url, {}, {
			headers: { authorization: `Bearer ${this.config.get("tinkoff.token")}` },
		});
		return (await firstValueFrom(req))?.data;
	}
}
