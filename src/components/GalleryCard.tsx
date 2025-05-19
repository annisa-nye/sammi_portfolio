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

export default function GalleryCard({
	title,
	images,
	paintings,
	isExpanded,
	onToggle,
}: GalleryCardProps) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const handlePrevious = () => {
		setCurrentImageIndex((prev) =>
			prev === 0
				? paintings
					? paintings.length - 1
					: images.length - 1
				: prev - 1
		);
	};

	const handleNext = () => {
		setCurrentImageIndex((prev) =>
			prev === (paintings ? paintings.length - 1 : images.length - 1)
				? 0
				: prev + 1
		);
	};

	if (isExpanded) {
		return (
			<div className='w-full bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 animate-fadeIn'>
				<div className='flex justify-between items-center mb-6'>
					<h2 className='text-2xl font-bold'>{title}</h2>
					<button
						onClick={onToggle}
						className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
					>
						×
					</button>
				</div>
				<div className='relative aspect-[4/3] mb-4'>
					{paintings ? (
						<>
							<img
								src={`https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/gallery/painting/${paintings[currentImageIndex].filename}`}
								alt={paintings[currentImageIndex].title}
								className='w-full h-full object-contain rounded'
							/>
							<div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b'>
								<h3 className='font-bold'>
									{paintings[currentImageIndex].title}
								</h3>
								<p>{paintings[currentImageIndex].year}</p>
								<p className='italic'>{paintings[currentImageIndex].medium}</p>
							</div>
						</>
					) : (
						<img
							src={`https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/gallery/${title.toLowerCase()}/${
								images[currentImageIndex]
							}`}
							alt={`${title} ${currentImageIndex + 1}`}
							className='w-full h-full object-contain rounded'
						/>
					)}
					<button
						onClick={handlePrevious}
						className='absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75'
					>
						←
					</button>
					<button
						onClick={handleNext}
						className='absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75'
					>
						→
					</button>
				</div>
				<div className='flex justify-center gap-2'>
					{(paintings ? paintings : images).map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentImageIndex(index)}
							className={`w-2 h-2 rounded-full ${
								index === currentImageIndex
									? 'bg-black dark:bg-white'
									: 'bg-gray-300 dark:bg-gray-600'
							}`}
						/>
					))}
				</div>
			</div>
		);
	}

	return (
		<button
			onClick={onToggle}
			className='w-full bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-left'
		>
			<h2 className='text-2xl font-bold mb-4'>{title}</h2>
			<div className='aspect-[4/3] relative'>
				<img
					src={`https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/gallery/${title.toLowerCase()}/${
						paintings ? paintings[0].filename : images[0]
					}`}
					alt={`${title} preview`}
					className='w-full h-full object-cover rounded'
				/>
			</div>
		</button>
	);
}
