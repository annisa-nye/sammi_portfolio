'use client';

import Image from 'next/image';

interface CVSectionProps {
	title: string;
	data: { year: number; items: string[] }[];
	isExpanded: boolean;
	onToggle: () => void;
	onImageClick?: (
		images: { src: string; alt: string }[],
		initialIndex: number
	) => void;
}

export default function CVSection({
	title,
	data,
	isExpanded,
	onToggle,
	onImageClick,
}: CVSectionProps) {
	const handleImageClick = (
		images: { src: string; alt: string }[],
		initialIndex: number
	) => {
		if (onImageClick) {
			onImageClick(images, initialIndex);
		}
	};

	return (
		<section className={`${isExpanded ? 'mb-12' : 'mb-4'}`}>
			<button
				onClick={onToggle}
				className='w-full text-left flex items-center justify-between mb-6 border-b border-gray-300 dark:border-gray-700 pb-2'
			>
				<h2 className='text-xl font-semibold'>{title}</h2>
				<span className='text-2xl'>{isExpanded ? '−' : '+'}</span>
			</button>

			{isExpanded && (
				<div className='animate-fadeIn space-y-8 text-center'>
					{data.map(({ year, items }: { year: number; items: string[] }) => (
						<div key={year} className='space-y-2'>
							<h3 className='text-lg font-bold text-gray-800 dark:text-gray-100'>
								{year}
							</h3>
							{items.map((item: string, i: number) => (
								<div key={i}>
									<p className='text-gray-700 dark:text-gray-300'>{item}</p>
									{item.includes('Welcome To The Dinner Party') && (
										<div className='flex overflow-x-auto space-x-4 mt-4'>
											{[...Array(8)].map((_, index) => {
												const images = [...Array(8)].map((_, imgIndex) => ({
													src: `https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/cv/platform-exhibition/0${
														imgIndex + 1
													}.jpg`,
													alt: `Exhibition Image ${imgIndex + 1}`,
												}));
												return (
													<button
														key={index}
														onClick={() => handleImageClick(images, index)}
														className='w-48 h-48 flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer'
													>
														<Image
															src={images[index].src}
															alt={images[index].alt}
															width={192}
															height={192}
															className='w-full h-full object-cover'
														/>
													</button>
												);
											})}
										</div>
									)}
									{item.includes('Prisma Collective') && (
										<div className='flex overflow-x-auto space-x-4 mt-4'>
											{[...Array(11)].map((_, index) => {
												const images = [...Array(11)].map((_, imgIndex) => ({
													src: `https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/cv/prisma-residency/${
														imgIndex < 9 ? '0' : ''
													}${imgIndex + 1}.jpg`,
													alt: `Prisma Collective Image ${imgIndex + 1}`,
												}));
												return (
													<button
														key={index}
														onClick={() => handleImageClick(images, index)}
														className='w-48 h-48 flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer'
													>
														<Image
															src={images[index].src}
															alt={images[index].alt}
															width={192}
															height={192}
															className='w-full h-full object-cover'
														/>
													</button>
												);
											})}
										</div>
									)}
									{item.includes('Buinho Creative Hub') && (
										<div className='flex overflow-x-auto space-x-4 mt-4'>
											{[...Array(4)].map((_, index) => {
												const images = [...Array(4)].map((_, imgIndex) => ({
													src: `https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/cv/messejana-residency/0${
														imgIndex + 1
													}.jpg`,
													alt: `Buinho Creative Hub Image ${imgIndex + 1}`,
												}));
												return (
													<button
														key={index}
														onClick={() => handleImageClick(images, index)}
														className='w-48 h-48 flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer'
													>
														<Image
															src={images[index].src}
															alt={images[index].alt}
															width={192}
															height={192}
															className='w-full h-full object-cover'
														/>
													</button>
												);
											})}
										</div>
									)}
									{item.includes(
										'GlogAUair, curated by Justin Ross and Laura Olea Lopez. Berlin, Germany.'
									) && (
										<div className='flex overflow-x-auto space-x-4 mt-4'>
											{[...Array(9)].map((_, index) => {
												const images = [...Array(9)].map((_, imgIndex) => ({
													src: `https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/cv/glogauair-residency/0${
														imgIndex + 1
													}.jpg`,
													alt: `GlogAUair Image ${imgIndex + 1}`,
												}));
												return (
													<button
														key={index}
														onClick={() => handleImageClick(images, index)}
														className='w-48 h-48 flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer'
													>
														<Image
															src={images[index].src}
															alt={images[index].alt}
															width={192}
															height={192}
															className='w-full h-full object-cover'
														/>
													</button>
												);
											})}
										</div>
									)}
								</div>
							))}
						</div>
					))}
				</div>
			)}
		</section>
	);
}
