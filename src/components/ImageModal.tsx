import { useEffect } from 'react';
import Image from 'next/image';

interface ImageModalProps {
	isOpen: boolean;
	onClose: () => void;
	image: {
		src: string;
		alt: string;
		title?: string;
		year?: number;
		medium?: string;
	};
}

export default function ImageModal({
	isOpen,
	onClose,
	image,
}: ImageModalProps) {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};

		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'unset';
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center bg-black/90'
			onClick={onClose}
		>
			<div
				className='relative max-w-[90vw] max-h-[90vh]'
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className='absolute -top-12 right-0 text-white hover:text-gray-300'
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

				<div className='relative w-full h-full'>
					<Image
						src={image.src}
						alt={image.alt}
						width={1200}
						height={1200}
						className='w-auto h-auto max-h-[90vh] object-contain'
						unoptimized
					/>
				</div>

				{(image.title || image.medium) && (
					<div className='absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center'>
						{image.title && (
							<div className='text-lg font-medium'>
								{image.title}
								{image.year && ` (${image.year})`}
							</div>
						)}
						{image.medium && (
							<div className='text-sm italic mt-1'>{image.medium}</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
