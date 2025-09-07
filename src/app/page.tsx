'use client';

import { cv } from '@/data/cv';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import CVSection from '@/components/CVSection';
import type { GallerySection } from '@/types/gallery';
import { paintingsData } from '@/data/paintings';
import Footer from '@/components/Footer';
import SystemThemeHeading from '@/components/SystemThemeHeading';
import SystemThemeLogo from '@/components/SystemThemeLogo';
import InstagramSection from '@/components/InstagramSection';
import LightboxModal from '@/components/LightboxModal';

const PREVIEW_TO_ORIGINAL: Record<
	1 | 2 | 3 | 4,
	Record<'collage' | 'digital' | 'illustration' | 'painting', string>
> = {
	1: {
		collage: 'gallery/collage/01.jpg',
		digital: 'gallery/digital/02.jpg',
		illustration: 'gallery/illustration/ink/02.jpg',
		painting: 'gallery/painting/gouache/02.jpg',
	},
	2: {
		collage: 'gallery/collage/16.jpg',
		digital: 'gallery/digital/03.jpg',
		illustration: 'gallery/illustration/oil-pastel/01.jpg',
		painting: 'gallery/painting/oil/02.jpg',
	},
	3: {
		collage: 'gallery/collage/08.jpg',
		digital: 'gallery/digital/05.jpg',
		illustration: 'gallery/illustration/charcoal/04.jpg',
		painting: 'gallery/painting/oil/04.jpg',
	},
	4: {
		collage: 'gallery/collage/05.jpg',
		digital: 'gallery/digital/04.jpg',
		illustration: 'gallery/illustration/ink/05.jpg',
		painting: 'gallery/painting/acrylic/02.jpg',
	},
};

interface CVItem {
	year: number;
	items: string[];
}

const initialGallerySections: GallerySection[] = [
	{
		title: 'Painting',
		images: paintingsData.paintings.flatMap((mediumGroup) =>
			mediumGroup.images.map(
				(painting) => `${mediumGroup.medium}/${painting.filename}`
			)
		),
		paintings: paintingsData,
	},
	{
		title: 'Illustration',
		images: [
			'charcoal/01.jpg',
			'charcoal/02.jpg',
			'charcoal/03.jpg',
			'charcoal/04.jpg',
			'charcoal/05.jpg',
			'ink/01.jpg',
			'ink/02.jpg',
			'ink/03.jpg',
			'ink/04.jpg',
			'ink/05.jpg',
			'ink/06.jpg',
			'ink/07.jpg',
			'ink/08.jpg',
			'ink/09.jpg',
			'ink/10.jpg',
			'oil-pastel/01.jpg',
			'oil-pastel/02.jpg',
			'oil-pastel/03.jpg',
			'oil-pastel/04.jpg',
			'sketch/01.jpg',
			'sketch/02.jpg',
			'sketch/03.jpg',
			'sketch/04.jpg',
			'sketch/05.jpg',
			'sketch/06.jpg',
		],
	},
	{
		title: 'Collage',
		images: Array.from(
			{ length: 16 },
			(_, i) => `${String(i + 1).padStart(2, '0')}.jpg`
		),
	},
	{
		title: 'Digital',
		images: Array.from(
			{ length: 5 },
			(_, i) => `${String(i + 1).padStart(2, '0')}.jpg`
		),
	},
];

const instagramPosts = [
	{
		id: '1',
		imageUrl: `/instagram/1_instagram.jpg`,
		caption: "and that's a hot girl's prerogative and pleasure",
		link: 'https://www.instagram.com/p/DIIorcNhrb2/?img_index=1',
	},
	{
		id: '2',
		imageUrl: `/instagram/2_instagram.jpg`,
		caption: 'PLEASE I NEED A STUDIO I CANT SLEEP IN HERE ANYMORE',
		link: 'https://www.instagram.com/p/DGfXUz9hW7H/',
	},
	{
		id: '3',
		imageUrl: `/instagram/3_instagram.jpg`,
		caption:
			"HEY SO I'm EXCITED for upcoming showcase at @prisma.lx where i have been BLESSED with a 2 month residency in this !!!! epic !!! lego!!! city !!!",
		link: 'https://www.instagram.com/p/C35lP49tHol/?img_index=1',
	},
	{
		id: '4',
		imageUrl: `/instagram/4_instagram.jpg`,
		caption: 'primary colours make me go so feral',
		link: 'https://www.instagram.com/p/CvuoR-ytbfB/?img_index=1',
	},
	{
		id: '5',
		imageUrl: `/instagram/5_instagram.jpg`,
		caption:
			'discarded surf board pix for unofficial headshot biz purposes. thanks 2 my day dot sista gorl @_sarahbirch 🤝🤝',
		link: 'https://www.instagram.com/p/CudS9itv2wd/?img_index=1',
	},
	{
		id: '6',
		imageUrl: `/instagram/6_instagram.jpg`,
		caption: '"throat handkerchief"',
		link: 'https://www.instagram.com/p/CtI5hYyrorF/?img_index=5',
	},
	{
		id: '7',
		imageUrl: `/instagram/7_instagram.jpg`,
		caption: 'Bratz detachable foot behaviour',
		link: 'https://www.instagram.com/p/CpOJKC4hLJT/?img_index=1',
	},
	{
		id: '8',
		imageUrl: `/instagram/8_instagram.jpg`,
		caption: 'i come to you with my hands 👉👈 and my face 🥹',
		link: 'https://www.instagram.com/p/CkLJc28NHWi/',
	},
];

const GALLERY_PREVIEW_CATEGORIES = [
	{ title: 'Painting', key: 'painting' },
	{ title: 'Illustration', key: 'illustration' },
	{ title: 'Collage', key: 'collage' },
	{ title: 'Digital', key: 'digital' },
];

type LBImage = {
	src: string;
	alt: string;
	title?: string;
	year?: number;
	medium?: string;
};

function getSectionImages(title: string): LBImage[] {
	if (title === 'Painting') {
		// Use paintingsData to include metadata
		return paintingsData.paintings.flatMap((mediumGroup) =>
			mediumGroup.images.map((painting) => ({
				src: `/gallery/painting/${mediumGroup.medium}/${painting.filename}`,
				alt: painting.title || `${mediumGroup.medium} painting`,
				title: painting.title,
				year: painting.year,
				medium: mediumGroup.medium,
			}))
		);
	}

	// Other sections: Illustration, Collage, Digital (use initialGallerySections entries)
	const section = initialGallerySections.find((s) => s.title === title);
	const images = section?.images ?? [];
	return images.map((image) => ({
		src: `/gallery/${title.toLowerCase()}/${image}`,
		alt: `${title} ${image}`,
	}));
}

export default function HomePage() {
	const [expandedCVSections, setExpandedCVSections] = useState<string[]>([
		'Exhibitions',
	]);
	const [currentSet, setCurrentSet] = useState(1);
	const [currentAnimation, setCurrentAnimation] = useState(1);
	const [selectedImage, setSelectedImage] = useState<{
		src: string;
		alt: string;
		title?: string;
		year?: number;
		medium?: string;
	} | null>(null);
	const [imageLoadError, setImageLoadError] = useState<Record<string, boolean>>(
		{}
	);
	const [isLoading, setIsLoading] = useState(true);
	const [lightboxImages, setLightboxImages] = useState<LBImage[]>([]);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsLoading(true);
			setCurrentSet((prev) => (prev % 4) + 1);
			setCurrentAnimation((prev) => (prev % 4) + 1); // Sync animation with gallery rotation
			setImageLoadError({}); // Reset errors when changing sets
		}, 10000);
		return () => clearInterval(interval);
	}, []);

	const handleImageError = (key: string) => {
		setImageLoadError((prev) => ({ ...prev, [key]: true }));
		setIsLoading(false);
	};

	const handleImageLoad = () => {
		setIsLoading(false);
	};

	const handleCVToggle = (title: string) => {
		setExpandedCVSections((prev) =>
			prev.includes(title)
				? prev.filter((section) => section !== title)
				: [...prev, title]
		);
	};

	const handleExhibitionImageClick = (
		images: { src: string; alt: string }[],
		initialIndex: number
	) => {
		setSelectedImage(images[initialIndex]);
		setLightboxImages(images);
	};

	return (
		<>
			<main className='relative'>
				{/* Home Section */}
				<section
					id='home'
					className='bg-white dark:bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-16 sm:pt-24'
				>
					<SystemThemeLogo />
				</section>

				{/* About Section */}
				<section
					id='about'
					className='bg-white dark:bg-[#0a0a0a] min-h-screen flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24'
				>
					<div className='max-w-2xl mx-auto w-full text-center'>
						<SystemThemeHeading
							name='about'
							width={500}
							height={150}
							className='mx-auto mb-8'
							priority
						/>
						<div className='mb-8 mx-auto mt-8 w-full max-w-md'>
							<Image
								src='/headshot/headshot-1.jpg'
								alt='Sammi Carr headshot'
								width={600}
								height={400}
								className='w-full h-auto object-cover rounded border border-gray-300 shadow-sm'
								priority
								unoptimized
							/>
						</div>
						<p className='italic text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed text-center'>
							Born and raised in Western Australia, Sammi Carr currently lives
							and practices from the Illawarra/Dharawal land in New South Wales.
							Her working process prioritises open-ended exploration and
							experimenting with a variety of mediums. Favouring dynamic colour,
							form and shape, she uses satire and personal annotation to comment
							on current political, social and environmental landscapes. Sammi
							is self-taught and has evolved her practice by playing with
							concepts through abstract and figurative expression.
						</p>
					</div>
				</section>

				{/* Gallery Section */}
				<section
					id='gallery'
					className='bg-white dark:bg-[#0a0a0a] min-h-screen flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24'
				>
					<div className='max-w-7xl mx-auto w-full'>
						<SystemThemeHeading
							name='gallery'
							width={500}
							height={150}
							className='mx-auto mb-10'
							priority
						/>

						{/* Gallery Cards Grid with Rotating Preview Images (PREVIEW-ONLY in grid) */}
						<div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-12'>
							{GALLERY_PREVIEW_CATEGORIES.map(({ title, key }) => {
								const imageKey = `${currentSet}_${key}`;
								const hasError = imageLoadError[imageKey];

								// 1) Always use the cropped preview for the grid
								const previewSrc = `/gallery-preview/${imageKey}.jpg`;

								// 2) Use the map ONLY to pick the initial lightbox image
								const mappedPathForLightbox =
									PREVIEW_TO_ORIGINAL[currentSet as 1 | 2 | 3 | 4]?.[
										key as 'collage' | 'digital' | 'illustration' | 'painting'
									];
								const mappedFullSrcForLightbox = mappedPathForLightbox
									? `/${mappedPathForLightbox}`
									: null;

								return (
									<button
										key={title}
										onClick={() => {
											const imagesForSection = getSectionImages(title);

											// Prefer opening the lightbox on the mapped original if available
											let initialIndex = 0;
											if (mappedFullSrcForLightbox) {
												const idx = imagesForSection.findIndex(
													(img) => img.src === mappedFullSrcForLightbox
												);
												if (idx >= 0) initialIndex = idx;
											}

											setLightboxImages(imagesForSection);
											setSelectedImage(imagesForSection[initialIndex]);
										}}
										className='w-full p-0 bg-white dark:bg-zinc-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center overflow-hidden flex flex-col'
									>
										<div className='relative w-full aspect-square'>
											{isLoading && !hasError && (
												<div className='absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-zinc-800'>
													<div className='w-8 h-8 border-4 border-gray-300 border-t-black dark:border-t-white rounded-full animate-spin' />
												</div>
											)}

											{!hasError ? (
												<Image
													src={previewSrc}
													alt={`${title} preview`}
													fill
													className={`object-cover transition-opacity duration-500 ${
														isLoading ? 'opacity-0' : 'opacity-100'
													}`}
													sizes='(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw'
													priority={currentSet === 1}
													onError={() => handleImageError(imageKey)}
													onLoad={handleImageLoad}
													loading={currentSet === 1 ? 'eager' : 'lazy'}
													quality={75}
													unoptimized
												/>
											) : (
												<div className='absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-zinc-800'>
													<span className='text-gray-500 dark:text-gray-400'>
														Image unavailable
													</span>
												</div>
											)}
										</div>

										<div className='p-3 sm:p-6'>
											<h2 className='text-lg sm:text-2xl font-bold text-center'>
												{title}
											</h2>
										</div>
									</button>
								);
							})}
						</div>

						{/* Animation Card - Full Width */}
						<div className='mb-6 sm:mb-12'>
							<div className='w-full bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden'>
								<div className='p-4 sm:p-6 text-center'>
									<h2 className='text-lg sm:text-2xl font-bold'>Animation</h2>
								</div>
								<div className='relative w-full aspect-video h-[500px]'>
									<Image
										src={`/animation/${currentAnimation}_animation.gif`}
										alt={`Animation ${currentAnimation}`}
										fill
										className='object-contain'
										sizes='100vw'
										quality={75}
										unoptimized
									/>
									{/* Navigation Controls */}
									<div className='absolute inset-0 flex items-center justify-between p-4'>
										<button
											onClick={() => {
												const newSet = currentSet === 1 ? 4 : currentSet - 1;
												setCurrentSet(newSet);
												setCurrentAnimation(newSet);
											}}
											className='bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200'
											aria-label='Previous set'
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
											onClick={() => {
												const newSet = currentSet === 4 ? 1 : currentSet + 1;
												setCurrentSet(newSet);
												setCurrentAnimation(newSet);
											}}
											className='bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200'
											aria-label='Next set'
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
									</div>
									{/* Animation Indicator */}
									<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
										{[1, 2, 3, 4].map((num) => (
											<button
												key={num}
												onClick={() => {
													setCurrentAnimation(num);
													setCurrentSet(num); // Sync gallery preview with animation
												}}
												className={`w-2 h-2 rounded-full transition-colors duration-200 ${
													currentSet === num
														? 'bg-white'
														: 'bg-white/50 hover:bg-white/75'
												}`}
												aria-label={`Go to set ${num}`}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CV Section */}
				<section
					id='cv'
					className='bg-white dark:bg-[#0a0a0a] flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24 pb-12'
				>
					<div className='max-w-3xl mx-auto w-full'>
						<SystemThemeHeading
							name='cv'
							width={500}
							height={150}
							className='mx-auto mb-10'
							priority
						/>

						<CVSection
							title='Exhibitions'
							data={cv.exhibitions.sort(
								(a: CVItem, b: CVItem) => b.year - a.year
							)}
							isExpanded={expandedCVSections.includes('Exhibitions')}
							onToggle={() => handleCVToggle('Exhibitions')}
							onImageClick={handleExhibitionImageClick}
						/>
						<CVSection
							title='Residencies'
							data={cv.residencies.sort(
								(a: CVItem, b: CVItem) => b.year - a.year
							)}
							isExpanded={expandedCVSections.includes('Residencies')}
							onToggle={() => handleCVToggle('Residencies')}
							onImageClick={handleExhibitionImageClick}
						/>
						<CVSection
							title='Collaborations'
							data={cv.collaborations.sort(
								(a: CVItem, b: CVItem) => b.year - a.year
							)}
							isExpanded={expandedCVSections.includes('Collaborations')}
							onToggle={() => handleCVToggle('Collaborations')}
							onImageClick={handleExhibitionImageClick}
						/>
					</div>
				</section>

				{/* Instagram Section */}
				<InstagramSection posts={instagramPosts} />

				{/* Footer with Business Card */}
				<Footer />
			</main>

			{/* Lightbox Modal */}
			{selectedImage && lightboxImages.length > 0 && (
				<LightboxModal
					isOpen={!!selectedImage}
					onClose={() => setSelectedImage(null)}
					images={lightboxImages}
					initialIndex={lightboxImages.findIndex(
						(image) => image.src === selectedImage.src
					)}
				/>
			)}
		</>
	);
}
