'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Painting {
	title: string;
	year: number;
	medium: string;
	filename: string;
}

interface GalleryCardProps {
	title: string;
	images: string[];
	paintings?: Painting[];
	isExpanded: boolean;
	onToggle: () => void;
}

const S3_BASE_URL =
	'https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com';

export default function GalleryCard({
	title,
	images,
	paintings,
	isExpanded,
	onToggle,
}: GalleryCardProps) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handlePrevious = () => {
		setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const getImageUrl = (section: string, filename: string, medium?: string) => {
		if (section.toLowerCase() === 'painting' && medium) {
			return `${S3_BASE_URL}/gallery/painting/${medium}/${filename}`;
		}
		return `${S3_BASE_URL}/gallery/${section.toLowerCase()}/${filename}`;
	};

	return (
		<div className='bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden gallery-card'>
			<button
				onClick={onToggle}
				className='w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors'
			>
				<h2 className='text-2xl font-bold'>{title}</h2>
				<span className='text-2xl'>{isExpanded ? '−' : '+'}</span>
			</button>

			{isExpanded && (
				<div className='p-6 animate-fadeIn'>
					{/* Image Gallery */}
					{images.length > 0 && (
						<div className='relative aspect-square mb-4 rounded-lg overflow-hidden'>
							<Image
								src={getImageUrl(title, images[currentImageIndex])}
								alt={`${title} artwork ${currentImageIndex + 1}`}
								fill
								className='object-cover'
								unoptimized // Since we're using external URLs
							/>
						</div>
					)}

					{/* Navigation Buttons */}
					{images.length > 1 && (
						<div className='flex justify-between mb-4'>
							<button
								onClick={handlePrevious}
								className='px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors'
							>
								Previous
							</button>
							<button
								onClick={handleNext}
								className='px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors'
							>
								Next
							</button>
						</div>
					)}

					{/* Paintings List */}
					{paintings && paintings.length > 0 && (
						<div className='mt-6'>
							<h3 className='text-lg font-semibold mb-4'>Paintings</h3>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
								{paintings.map((painting) => (
									<div
										key={painting.filename}
										className='relative aspect-square rounded-lg overflow-hidden'
									>
										<Image
											src={getImageUrl(
												'painting',
												painting.filename,
												painting.medium
											)}
											alt={`${painting.title} (${painting.year})`}
											fill
											className='object-cover'
											unoptimized // Since we're using external URLs
										/>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
