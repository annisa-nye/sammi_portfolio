'use client';

import GalleryWrapper from '@/components/GalleryWrapper';
import GallerySubnav from '@/components/GallerySubnav';

const illustrationImages = [
	'charcoal/01.jpg',
	'charcoal/02.jpg',
	'charcoal/03.jpg',
	'charcoal/04.jpg',
	'charcoal/05.jpg',
	'ink/01.jpg',
	'ink/02.jpg',
	'ink/03.jpg',
	'ink/04.jpg',
	'ink/05.jpg',
	'ink/06.jpg',
	'ink/07.jpg',
	'ink/08.jpg',
	'ink/09.jpg',
	'ink/10.jpg',
	'oil-pastel/01.jpg',
	'oil-pastel/02.jpg',
	'oil-pastel/03.jpg',
	'oil-pastel/04.jpg',
	'sketch/01.jpg',
	'sketch/02.jpg',
	'sketch/03.jpg',
	'sketch/04.jpg',
	'sketch/05.jpg',
	'sketch/06.jpg',
];

export default function IllustrationGallery() {
	return (
		<GalleryWrapper>
			<main className='pt-24 px-6'>
				<GallerySubnav />
				<h2 className='text-3xl font-bold mb-6 text-center'>Illustrations</h2>

				<div className='overflow-x-auto whitespace-nowrap flex gap-8 pb-6'>
					{illustrationImages.map((path, i) => {
						const [medium, filename] = path.split('/');
						const formattedMedium = medium
							.split('-')
							.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
							.join(' ');

						return (
							<figure
								key={i}
								className='inline-block w-[80vw] max-w-md flex-shrink-0 bg-white dark:bg-zinc-900 rounded shadow p-3'
							>
								<img
									src={`https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/gallery/illustration/${medium}/${filename}`}
									alt={`Illustration ${i + 1}`}
									className='w-full h-auto object-cover rounded'
								/>
								<figcaption className='mt-2 text-sm text-center text-gray-700 dark:text-gray-300 space-y-1'>
									<div className='italic text-gray-500'>{formattedMedium}</div>
								</figcaption>
							</figure>
						);
					})}
				</div>
			</main>
		</GalleryWrapper>
	);
}
