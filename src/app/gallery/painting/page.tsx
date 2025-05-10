import paintings from '@/data/paintings.json';

export default function PaintingGallery() {
	return (
		<main className='p-6'>
			<h1 className='text-3xl font-bold mb-6 text-center'>Paintings</h1>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
				{paintings.map(({ title, filename, medium, year }) => {
					const imageUrl = `https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/gallery/painting/${medium}/${filename}`;
					return (
						<figure key={imageUrl} className='bg-white rounded shadow p-2'>
							<img
								src={imageUrl}
								alt={title}
								className='w-full h-auto object-cover rounded'
							/>
							<figcaption className='mt-2 text-sm text-center text-gray-700'>
								<span className='font-medium'>{title}</span> ({year})
							</figcaption>
						</figure>
					);
				})}
			</div>
		</main>
	);
}
