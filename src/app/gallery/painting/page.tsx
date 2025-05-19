'use client';

import { useState } from 'react';
import Image from 'next/image';
import paintingsData from '@/data/paintings.json';

const S3_BASE_URL =
	'https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com';

export default function PaintingGallery() {
	const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

	// Group paintings by year
	const paintingsByYear = paintingsData.reduce((acc, painting) => {
		const year = painting.year;
		if (!acc[year]) {
			acc[year] = [];
		}
		acc[year].push(painting);
		return acc;
	}, {} as Record<number, typeof paintingsData>);

	// Sort years in descending order
	const years = Object.keys(paintingsByYear)
		.map(Number)
		.sort((a, b) => b - a);

	const handleImageError = (paintingId: string) => {
		setImageErrors((prev) => ({ ...prev, [paintingId]: true }));
	};

	return (
		<div className='min-h-screen p-6 pt-20'>
			<div className='max-w-7xl mx-auto'>
				<h1 className='text-4xl font-bold mb-10 text-center'>Paintings</h1>

				{years.map((year) => (
					<div key={year} className='mb-12'>
						<h2 className='text-2xl font-bold mb-6'>{year}</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{paintingsByYear[year].map((painting) => {
								const paintingId = `${painting.medium}/${painting.filename}`;
								const imageUrl = `${S3_BASE_URL}/gallery/painting/${paintingId}`;

								return (
									<figure
										key={paintingId}
										className='bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden'
									>
										<div className='relative aspect-square'>
											{!imageErrors[paintingId] ? (
												<Image
													src={imageUrl}
													alt={painting.title}
													fill
													className='object-cover'
													sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
													priority={year === years[0]}
													onError={() => handleImageError(paintingId)}
													unoptimized
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
											<h3 className='font-medium text-lg mb-1'>
												{painting.title}
											</h3>
											<p className='text-sm text-gray-600 dark:text-gray-400'>
												{painting.medium
													.split('-')
													.map(
														(word) =>
															word.charAt(0).toUpperCase() + word.slice(1)
													)
													.join(' ')}
											</p>
										</figcaption>
									</figure>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
