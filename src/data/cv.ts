export interface CVItem {
	year: number;
	items: string[];
}

export interface CV {
	exhibitions: CVItem[];
	residencies: CVItem[];
	collaborations: CVItem[];
}

export const cv: CV = {
	exhibitions: [
		{
			year: 2021,
			items: [
				"Ongoing collaboration with 'Short Notice' music and arts event group. Sydney/Eora, NSW.",
				"'Smoke and Steel', for Teel Studios. Curated by Harry Phillips. Wollongong, NSW.",
			],
		},
		{
			year: 2022,
			items: [
				'Group show for Bad News Gallery. Curated by Tsubasa Sherwin-Ozawa. Wollongong NSW.',
				"'Building Glass Houses', Project Contemporary Artspace. Curated by Erin Mison, Merle Stone and Greer Harris for Make Space. Wollongong, NSW.",
			],
		},
		{
			year: 2023,
			items: [
				'Selected works for Boomer Gallery. Tower Bridge, London UK.',
				'Virtual Open Studios for GlogAUair online program. Kreuzberg, Berlin.',
			],
		},
		{
			year: 2024,
			items: [
				'Group Exhibition for Ember Collaborative Festival. Glenworth Valley, NSW.',
			],
		},
		{
			year: 2025,
			items: [
				"'Welcome To The Dinner Party', group show for Platform Presents. Melbourne/Naarm, VIC.",
			],
		},
	],
	residencies: [
		{
			year: 2023,
			items: [
				'Buinho Creative Hub, curated by Monica Reis. Messejana, Portugal.',
				'GlogAUair, curated by Justin Ross and Laura Olea Lopez. Berlin, Germany.',
				'Imsouane Dream Surf Camp, curated by Anas Lamziouaq. Imsouane, Morocco.',
			],
		},
		{
			year: 2024,
			items: ['Prisma Collective. Lisbon, Portugal.'],
		},
	],
	collaborations: [
		{
			year: 2022,
			items: [
				"Stop motion animation for 'Life in Real Time' music video – Good Lekker. With Connor Duke.",
			],
		},
		{
			year: 2023,
			items: [
				'Co-designed mural with tattoo artist Ilyas Kedari. Taghazout Skate Park, Morocco.',
				"Creative direction for 'I Am Woman' project with Virginie Martinez. Imsouane, Morocco.",
			],
		},
		{
			year: 2024,
			items: [
				"Illustrated animation for Thunder Fox E.P. 'The Best.' In collaboration with Jesse Tachibana.",
			],
		},
		{
			year: 2025,
			items: [
				'Animated projections for Short Notice festival, Sassafras, NSW.',
			],
		},
	],
};
