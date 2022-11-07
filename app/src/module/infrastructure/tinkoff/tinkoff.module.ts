import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TinkoffService } from "./tinkoff.service";

@Module({
	imports: [HttpModule],
	providers: [TinkoffService],
	exports: [TinkoffService],
})
export class TinkoffModule {
}
