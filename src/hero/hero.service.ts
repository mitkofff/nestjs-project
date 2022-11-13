import { Injectable } from "@nestjs/common";
import { Hero } from "./hero.model";

const db = {
	marvelHeroes: [
		{
			id: 1,
			name: "Spiderman",
			powers: ["net", "strong"],
			universe: "Marvel",
		},
		{
			id: 2,
			name: "Captain America",
			powers: ["fly", "strong"],
			universe: "Marvel",
		},
	],
	dcHeroes: [
		{
			id: 3,
			name: "Batman",
			powers: ["intelect", "skills"],
			universe: "DC",
		},
		{
			id: 4,
			name: "Superman",
			powers: ["fly"],
			universe: "DC",
		},
	],
};

@Injectable()
export class HeroServece {
	getAllHeroes(): Hero[] {
		const heroes = [...db.marvelHeroes, ...db.dcHeroes];
		return heroes;
	}

	getHeroesById(id: number): Hero {
		const hero = [...db.marvelHeroes, ...db.dcHeroes].find(
			(hero) => hero.id === +id,
		);

		return hero;
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
				const filterValue = +filters[key] || filters[key];

				return filterValue === hero[key];
			});
		});

		return heroes;
	}
}
