import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { HeroController } from "./hero.controller";
import { HeroServece } from "./hero.service";

@Module({
	imports: [ConfigModule.forRoot()],
	controllers: [HeroController],
	providers: [HeroServece],
})
export class HeroModule {}
