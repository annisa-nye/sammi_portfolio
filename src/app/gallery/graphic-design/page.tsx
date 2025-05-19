'use client';

import { useState } from 'react';
import Image from 'next/image';

const S3_BASE_URL =
	'https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com';

// Graphic design images data
const graphicDesignImages = [
	{ filename: '01.jpg', title: 'Graphic Design 1' },
	{ filename: '02.jpg', title: 'Graphic Design 2' },
	{ filename: '03.jpg', title: 'Graphic Design 3' },
	{ filename: '04.jpg', title: 'Graphic Design 4' },
	{ filename: '05.jpg', title: 'Graphic Design 5' },
];

export default function GraphicDesignGallery() {
	const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

	const handleImageError = (imageId: string) => {
		setImageErrors((prev) => ({ ...prev, [imageId]: true }));
	};

	return (
		<div className='min-h-screen p-6 pt-20'>
			<div className='max-w-7xl mx-auto'>
				<h1 className='text-4xl font-bold mb-10 text-center'>Graphic Design</h1>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{graphicDesignImages.map((image) => {
						const imageId = image.filename;
						const imageUrl = `${S3_BASE_URL}/gallery/graphic-design/${imageId}`;

						return (
							<figure
								key={imageId}
								className='bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden'
							>
								<div className='relative aspect-square'>
									{!imageErrors[imageId] ? (
										<Image
											src={imageUrl}
											alt={image.title}
											fill
											className='object-cover'
											sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
											priority={image.filename === '01.jpg'} // Prioritize loading of first image
											onError={() => handleImageError(imageId)}
											unoptimized // Since we're using S3, we don't need Next.js image optimization
										/>
									) : (
										<div className='w-full h-full flex items-center justify-center bg-gray-100 dark:bg-zinc-800'>
											<p className='text-gray-500 dark:text-gray-400 text-center p-4'>
												Image not available
											</p>
										</div>
									)}
								</div>
								<figcaption className='p-4 text-center'>
									<h3 className='font-medium text-lg mb-1'>{image.title}</h3>
								</figcaption>
							</figure>
						);
					})}
				</div>
			</div>
		</div>
	);
}
