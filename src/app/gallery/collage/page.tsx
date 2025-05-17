'use client';

import GalleryWrapper from '@/components/GalleryWrapper';
import GallerySubnav from '@/components/GallerySubnav';

const files = [
	'01.jpg',
	'02.jpg',
	'03.jpg',
	'04.jpg',
	'05.jpg',
	'06.jpg',
	'07.jpg',
	'08.jpg',
	'09.jpg',
	'10.jpg',
	'11.jpg',
	'12.jpg',
	'13.jpg',
	'14.jpg',
	'15.jpg',
	'16.jpg',
];

export default function CollageGallery() {
	return (
		<GalleryWrapper>
			<main className='pt-24 px-6'>
				<GallerySubnav />
				<h2 className='text-3xl font-bold mb-6 text-center'>Collage</h2>

				<div className='overflow-x-auto whitespace-nowrap flex gap-8 pb-6'>
					{files.map((file, i) => {
						const url = `https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/gallery/collage/${file}`;
						return (
							<figure
								key={i}
								className='inline-block w-[80vw] max-w-md flex-shrink-0 bg-white dark:bg-zinc-900 rounded shadow p-3'
							>
								<img
									src={url}
									alt={`Collage ${i + 1}`}
									className='w-full h-auto object-cover rounded'
								/>
								<figcaption className='mt-2 text-sm text-center text-gray-700 dark:text-gray-300'>
									Untitled
								</figcaption>
							</figure>
						);
					})}
				</div>
			</main>
		</GalleryWrapper>
	);
}
