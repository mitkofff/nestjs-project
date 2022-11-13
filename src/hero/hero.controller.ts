import { Controller, Get, Param, Query } from "@nestjs/common";
import { HeroServece } from "./hero.service";

@Controller("hero")
export class HeroController {
	constructor(private heroService: HeroServece) {}

	@Get()
	getHeroes() {
		return this.heroService.getAllHeroes();
	}

	@Get("filters")
	getFilteredHeroes(@Query() params) {
		return this.heroService.getFilteredHeroes(params);
	}

	@Get(":id")
	getHeroeById(@Param("id") id: number) {
		return this.heroService.getHeroesById(+id);
	}
}
