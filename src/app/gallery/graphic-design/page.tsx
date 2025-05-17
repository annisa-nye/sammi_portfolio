'use client';

import GalleryWrapper from '@/components/GalleryWrapper';
import GallerySubnav from '@/components/GallerySubnav';

const graphicDesignImages = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

export default function GraphicDesignGallery() {
	return (
		<GalleryWrapper>
			<main className='pt-24 px-6'>
				<GallerySubnav />
				<h2 className='text-3xl font-bold mb-6 text-center'>Graphic Design</h2>

				<div className='overflow-x-auto whitespace-nowrap flex gap-8 pb-6'>
					{graphicDesignImages.map((filename, i) => (
						<figure
							key={i}
							className='inline-block w-[80vw] max-w-md flex-shrink-0 bg-white dark:bg-zinc-900 rounded shadow p-3'
						>
							<img
								src={`https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/gallery/graphic-design/${filename}`}
								alt={`Graphic Design ${i + 1}`}
								className='w-full h-auto object-cover rounded'
							/>
							<figcaption className='mt-2 text-sm text-center text-gray-700 dark:text-gray-300'>
								Untitled
							</figcaption>
						</figure>
					))}
				</div>
			</main>
		</GalleryWrapper>
	);
}
