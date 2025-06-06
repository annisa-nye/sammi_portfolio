import { useState } from 'react';
import Image from 'next/image';

interface LightboxModalProps {
	isOpen: boolean;
	onClose: () => void;
	images: { src: string; alt: string }[];
	initialIndex?: number;
}

export default function LightboxModal({
	isOpen,
	onClose,
	images,
	initialIndex = 0,
}: LightboxModalProps) {
	const [currentIndex, setCurrentIndex] = useState(initialIndex);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const handlePrevious = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	if (!isOpen) return null;

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center bg-black/90'
			onClick={onClose}
		>
			<div
				className='relative w-[90vw] h-[90vh] flex items-center justify-center'
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className='absolute -top-12 right-0 text-white hover:text-gray-300 z-10'
					aria-label='Close modal'
				>
					<svg
						className='w-8 h-8'
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

				<div className='relative w-full h-full flex items-center justify-center'>
					<div className='relative w-full h-full max-w-[90vw] max-h-[90vh]'>
						<button
							onClick={handlePrevious}
							className='absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10'
							aria-label='Previous image'
						>
							<svg
								className='w-8 h-8'
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
							className='absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10'
							aria-label='Next image'
						>
							<svg
								className='w-8 h-8'
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

						<Image
							src={images[currentIndex].src}
							alt={images[currentIndex].alt}
							fill
							sizes='90vw'
							priority
							quality={90}
							className='object-contain'
							unoptimized={false}
						/>
					</div>
				</div>

				<div className='absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center'>
					<div className='flex overflow-x-auto space-x-2'>
						{images.map((image, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-16 h-16 flex-none ${
									currentIndex === index ? 'border-2 border-white' : ''
								}`}
							>
								<Image
									src={image.src}
									alt={image.alt}
									width={64}
									height={64}
									className='object-cover'
								/>
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
