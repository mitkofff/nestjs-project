import { Injectable } from "@nestjs/common";
import { Hero } from "./hero.model";

const db = {
	marvelHeroes: [
		{ name: "Spiderman", powers: ["net", "strong"], universe: "Marvel" },
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

	getFilteredHeroes(filters): Hero[] {
		const heroes = [...db.marvelHeroes, ...db.dcHeroes].filter((hero) => {
			return Object.keys(filters).every((key) => {
				if (Array.isArray(hero[key])) {
					const currentFilterArray = filters[key].split(",");

					return hero[key]
						.map((element) => element.toLocaleLowerCase())
						.some((element) =>
							currentFilterArray.includes(element),
						);
				}

				return filters[key] === hero[key];
			});
		});

		return heroes;
	}
}
