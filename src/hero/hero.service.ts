import { Injectable } from "@nestjs/common";
import { Hero } from "./hero.module";

const db = {
	marvelHeroes: [
		{ name: "Spiderman", powers: ["net"], universe: "Marvel" },
		{
			name: "Captain America",
			powers: ["fly", "strong"],
			universe: "Marvel",
		},
	],
	dcHeroes: [
		{ name: "Batman", powers: ["intelect", "skills"], universe: "DC" },
		{ name: "Superman", powers: ["fly"], universe: "DC" },
	],
};

@Injectable()
export class HeroServece {
	getAllHeroes(): Hero[] {
		const heroes = [...db.marvelHeroes, ...db.dcHeroes];
		return heroes;
	}

	getHeroesByUniverse(universe: string): Hero[] {
		const heroes = [...db.marvelHeroes, ...db.dcHeroes].filter(
			(hero) => hero.universe.toLocaleLowerCase() === universe,
		);

		return heroes;
	}
}
