const folders = [
	{ name: 'charcoal', count: 5 },
	{ name: 'ink', count: 15 },
	{ name: 'oil-pastel', count: 4 },
	{ name: 'sketch', count: 6 },
];

export default function IllustrationGallery() {
	const images = folders.flatMap(({ name, count }) =>
		Array.from({ length: count }, (_, i) => ({
			url: `https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/gallery/illustration/${name}/${String(
				i + 1
			).padStart(2, '0')}.jpg`,
			medium: name,
		}))
	);

	return (
		<main className='p-6'>
			<h1 className='text-3xl font-bold mb-6 text-center'>Illustrations</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
				{images.map(({ url, medium }, i) => (
					<figure key={url} className='bg-white rounded shadow p-1'>
						<img
							src={url}
							alt={`Illustration ${i + 1} (${medium})`}
							className='w-full h-auto object-cover rounded'
						/>
						<figcaption className='text-xs text-center mt-1 text-gray-500'>
							{medium.replace('-', ' ')}
						</figcaption>
					</figure>
				))}
			</div>
		</main>
	);
}
