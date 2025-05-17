'use client';

import GalleryWrapper from '@/components/GalleryWrapper';
import GallerySubnav from '@/components/GallerySubnav';
import paintings from '@/data/paintings.json';

export default function PaintingGallery() {
	return (
		<GalleryWrapper>
			<main className='pt-24 px-6'>
				<GallerySubnav />
				<h2 className='text-3xl font-bold mb-6 text-center'>Paintings</h2>

				<div className='overflow-x-auto whitespace-nowrap flex gap-8 pb-6'>
					{paintings.map(({ title, filename, medium, year }, i) => {
						const imageUrl = `https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/gallery/painting/${medium}/${filename}`;
						return (
							<figure
								key={i}
								className='inline-block w-[80vw] max-w-md flex-shrink-0 bg-white dark:bg-zinc-900 rounded shadow p-3'
							>
								<img
									src={imageUrl}
									alt={title}
									className='w-full h-auto object-cover rounded'
								/>
								<figcaption className='mt-2 text-sm text-center text-gray-700 dark:text-gray-300 space-y-1'>
									<div>
										<span className='font-medium'>{title}</span> ({year})
									</div>
									<div className='italic text-gray-500'>
										{medium
											.split('-')
											.map(
												(word) => word.charAt(0).toUpperCase() + word.slice(1)
											)
											.join(' ')}
									</div>
								</figcaption>
							</figure>
						);
					})}
				</div>
			</main>
		</GalleryWrapper>
	);
}
