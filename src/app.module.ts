import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { HeroController } from "./hero/hero.controller";
import { HeroServece } from "./hero/hero.service";

@Module({
	imports: [ConfigModule.forRoot()],
	controllers: [AppController, HeroController],
	providers: [AppService, HeroServece],
})
export class AppModule {}
