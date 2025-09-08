'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';

interface LightboxModalProps {
	isOpen: boolean;
	onClose: () => void;
	images: {
		src: string;
		alt: string;
		title?: string;
		year?: number;
		medium?: string;
	}[];
	initialIndex?: number;
}

/* --- Added: lightweight fade/blur wrappers --- */
function LightboxMainImage({
	src,
	alt,
	priority = true,
}: {
	src: string;
	alt: string;
	priority?: boolean;
}) {
	const [loaded, setLoaded] = useState(false);

	return (
		<div className='relative w-full h-full bg-black'>
			{/* shimmer placeholder */}
			<div
				className={`absolute inset-0 animate-pulse bg-zinc-900/40 transition-opacity duration-300 ${
					loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
				}`}
				aria-hidden='true'
			/>
			{/* blurred backdrop while loading */}
			<div
				className={`absolute inset-0 blur-xl bg-zinc-800/70 transition-opacity duration-500 ${
					loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
				}`}
				aria-hidden='true'
			/>
			<Image
				src={src}
				alt={alt}
				fill
				sizes='90vw'
				priority={priority}
				quality={90}
				className={`object-contain transition duration-700 ease-out will-change-transform will-change-opacity ${
					loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
				}`}
				onLoadingComplete={() => setLoaded(true)}
				decoding='async'
				unoptimized
			/>
		</div>
	);
}

function LightboxThumb({
	src,
	alt,
	isActive,
}: {
	src: string;
	alt: string;
	isActive: boolean;
}) {
	const [loaded, setLoaded] = useState(false);
	return (
		<div
			className={`relative w-16 h-16 ${isActive ? 'ring-2 ring-white' : ''}`}
			aria-current={isActive ? 'true' : 'false'}
		>
			{/* shimmer */}
			<div
				className={`absolute inset-0 animate-pulse bg-zinc-800/40 transition-opacity duration-200 ${
					loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
				}`}
				aria-hidden='true'
			/>
			<Image
				src={src}
				alt={alt}
				fill
				className={`object-cover transition-opacity duration-300 ${
					loaded ? 'opacity-100' : 'opacity-0'
				}`}
				onLoadingComplete={() => setLoaded(true)}
				decoding='async'
				unoptimized
			/>
		</div>
	);
}
/* --- /Added --- */

export default function LightboxModal({
	isOpen,
	onClose,
	images,
	initialIndex = 0,
}: LightboxModalProps) {
	const [currentIndex, setCurrentIndex] = useState(initialIndex);

	// Identify section (painting | illustration | collage | digital) from first image
	const sectionKey = useMemo(() => {
		const firstSrc = images?.[0]?.src ?? '';
		const parts = firstSrc.split('/'); // e.g., ["", "gallery", "painting", ...] or ["", "cv", ...]
		return parts[2] || ''; // for gallery paths => "painting" | "illustration" | "collage" | "digital"
	}, [images]);

	// Detect if these are CV images (all start with "/cv/")
	const isCVSet = useMemo(() => {
		return (
			images.length > 0 && images.every((img) => img.src.startsWith('/cv/'))
		);
	}, [images]);

	// Overflow threshold for thumbnail row
	const needsHorizontalScroll = images.length > 15;

	// Collage/Digital center when no overflow
	const shouldCenterWhenNoOverflow =
		sectionKey === 'collage' || sectionKey === 'digital';

	// Compute thumbnail row classes
	const thumbRowClass = useMemo(() => {
		// CV images: hidden on small, centered on md+
		if (isCVSet) {
			return ['hidden md:flex', 'gap-2 justify-center px-4'].join(' ');
		}

		// Non-CV sets:
		// - Painting/Illustration: keep scrollable behavior always
		// - Collage/Digital: center when no overflow, otherwise scroll
		const base = ['flex', 'gap-2', 'px-4'];
		if (shouldCenterWhenNoOverflow && !needsHorizontalScroll) {
			base.push('justify-center');
		} else {
			base.push(
				'overflow-x-auto justify-start',
				'[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
			);
		}
		return base.join(' ');
	}, [isCVSet, shouldCenterWhenNoOverflow, needsHorizontalScroll]);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePrevious = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	if (!isOpen) return null;

	const currentImage = images[currentIndex];
	const hasPaintingInfo =
		currentImage.title || currentImage.year || currentImage.medium;

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center bg-black/90'
			onClick={onClose}
		>
			<div
				className='relative w-[90vw] h-[90vh] flex flex-col'
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close button */}
				<button
					onClick={onClose}
					className='absolute top-2 right-2 text-white hover:text-gray-300 z-20 bg-black/50 rounded-full p-2 backdrop-blur-sm'
					aria-label='Close modal'
				>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</button>

				{/* Painting info (title/medium/year) */}
				{hasPaintingInfo && (
					<div className='flex-shrink-0 p-4 pt-12'>
						<div className='bg-black/70 backdrop-blur-sm text-white p-4 rounded-lg max-w-md mx-auto text-center'>
							{currentImage.title ? (
								<>
									<div className='text-lg font-bold mb-1'>
										{currentImage.title}
										{currentImage.year && ` (${currentImage.year})`}
									</div>
									{currentImage.medium && (
										<div className='text-sm italic capitalize'>
											{currentImage.medium.replace('-', ' ')}
										</div>
									)}
								</>
							) : (
								<div className='text-lg italic capitalize'>
									{currentImage.medium?.replace('-', ' ')}
									{currentImage.year && ` (${currentImage.year})`}
								</div>
							)}
						</div>
					</div>
				)}

				{/* Main image */}
				<div className='flex-1 relative flex items-center justify-center min-h-0'>
					<div className='relative w-full h-full max-w-full max-h-full'>
						<button
							onClick={handlePrevious}
							className='absolute left-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm'
							aria-label='Previous image'
						>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M15 19l-7-7 7-7'
								/>
							</svg>
						</button>

						<button
							onClick={handleNext}
							className='absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2 backdrop-blur-sm'
							aria-label='Next image'
						>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M9 5l7 7-7 7'
								/>
							</svg>
						</button>

						{/* Replaced: fullscreen Image with fade/blur wrapper */}
						<LightboxMainImage
							src={currentImage.src}
							alt={currentImage.alt}
							priority
						/>
					</div>
				</div>

				{/* Thumbnails */}
				<div className='flex-shrink-0 bg-black/50 text-white p-4'>
					<div className={thumbRowClass}>
						{images.map((image, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className='flex-none'
							>
								{/* Replaced: thumb Image with fade wrapper */}
								<LightboxThumb
									src={image.src}
									alt={image.alt}
									isActive={currentIndex === index}
								/>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
