const cv = {
	exhibitions: [
		{
			year: 2021,
			items: [
				'Ongoing collaboration with ‘Short Notice’ music and arts event group. Sydney/Eora, NSW.',
				'‘Smoke and Steel’, for Teel Studios. Curated by Harry Phillips. Wollongong, NSW.',
			],
		},
		{
			year: 2022,
			items: [
				'Group show for Bad News Gallery. Curated by Tsubasa Sherwin-Ozawa. Wollongong NSW.',
				'‘Building Glass Houses’, Project Contemporary Artspace. Curated by Erin Mison, Merle Stone and Greer Harris for Make Space. Wollongong, NSW.',
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
				'‘Welcome To The Dinner Party’, group show for Platform Presents. Melbourne/Naarm, VIC.',
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
				'Donated painting for Claud Bailey’s top surgery fundraiser, Jazz ‘88.',
			],
		},
	],
};

export default function CVPage() {
	return (
		<main className='max-w-4xl mx-auto px-6 py-10'>
			<h1 className='text-4xl font-bold mb-10 text-center'>Curriculum Vitae</h1>
			<CVSection title='Selected Group Exhibitions' data={cv.exhibitions} />
			<CVSection title='Selected Residencies' data={cv.residencies} />
			<CVSection title='Selected Collaborations' data={cv.collaborations} />
		</main>
	);
}

function CVSection({
	title,
	data,
}: {
	title: string;
	data: { year: number; items: string[] }[];
}) {
	return (
		<section className='mb-12'>
			<h2 className='text-2xl font-semibold mb-4'>{title}</h2>
			<ul className='space-y-6'>
				{data.map(({ year, items }) => (
					<li key={year}>
						<h3 className='text-lg font-bold mb-1 text-gray-800'>{year}</h3>
						<ul className='list-disc pl-6 text-gray-700 space-y-1'>
							{items.map((item, i) => (
								<li key={i}>{item}</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</section>
	);
}
