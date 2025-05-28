'use client';

import { cv } from '@/data/cv';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import CVSection from '@/components/CVSection';
import type {
	GallerySection,
	PaintingsData,
	PaintingMedium,
	Painting,
} from '@/types/gallery';
import { paintingsData } from '@/data/paintings';
import Footer from '@/components/Footer';
import SystemThemeHeading from '@/components/SystemThemeHeading';
import SystemThemeLogo from '@/components/SystemThemeLogo';
import InstagramSection from '@/components/InstagramSection';
import ImageModal from '@/components/ImageModal';

const S3_BASE_URL =
	'https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com';

interface CVItem {
	year: number;
	items: string[];
}

const initialGallerySections: GallerySection[] = [
	{
		title: 'Painting',
		images: [],
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
		imageUrl: '/instagram/01.jpg',
		caption: 'Recent work in progress 🎨',
		date: 'March 2024',
	},
	{
		id: '2',
		imageUrl: '/instagram/02.jpg',
		caption: 'New exhibition opening at @gallery_name',
		date: 'February 2024',
	},
	{
		id: '3',
		imageUrl: '/instagram/03.jpg',
		caption: 'Studio day ✨',
		date: 'February 2024',
	},
	{
		id: '4',
		imageUrl: '/instagram/04.jpg',
		caption: 'Detail from my latest series',
		date: 'January 2024',
	},
	{
		id: '5',
		imageUrl: '/instagram/05.jpg',
		caption: 'Behind the scenes of my creative process',
		date: 'January 2024',
	},
	{
		id: '6',
		imageUrl: '/instagram/06.jpg',
		caption: 'Opening night at @exhibition_space',
		date: 'December 2023',
	},
];

const GALLERY_PREVIEW_CATEGORIES = [
	{ title: 'Painting', key: 'painting' },
	{ title: 'Illustration', key: 'illustration' },
	{ title: 'Collage', key: 'collage' },
	{ title: 'Digital', key: 'digital' },
];

export default function HomePage() {
	const [activeGallerySection, setActiveGallerySection] = useState<
		string | null
	>(null);
	const [gallerySections] = useState<GallerySection[]>(initialGallerySections);
	const [expandedCVSections, setExpandedCVSections] = useState<string[]>([
		'Exhibitions',
	]);
	const [currentSet, setCurrentSet] = useState(1);
	const [selectedImage, setSelectedImage] = useState<{
		src: string;
		alt: string;
		title?: string;
		year?: number;
		medium?: string;
	} | null>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSet((prev) => (prev % 4) + 1);
		}, 10000);
		return () => clearInterval(interval);
	}, []);

	const handleGalleryToggle = (title: string) => {
		setActiveGallerySection(activeGallerySection === title ? null : title);
	};

	const handleCVToggle = (title: string) => {
		setExpandedCVSections((prev) =>
			prev.includes(title)
				? prev.filter((section) => section !== title)
				: [...prev, title]
		);
	};

	return (
		<>
			<main className='relative'>
				{/* Home Section */}
				<section
					id='home'
					className='min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-16 sm:pt-24'
				>
					<SystemThemeLogo />
				</section>

				{/* About Section */}
				<section
					id='about'
					className='min-h-screen flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24'
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
					className='min-h-screen flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24'
				>
					<div className='max-w-7xl mx-auto w-full'>
						<SystemThemeHeading
							name='gallery'
							width={500}
							height={150}
							className='mx-auto mb-10'
							priority
						/>

						{/* Gallery Cards Grid with Rotating Preview Images */}
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
							{GALLERY_PREVIEW_CATEGORIES.map(({ title, key }) => (
								<button
									key={title}
									onClick={() => handleGalleryToggle(title)}
									className={`w-full p-0 bg-white dark:bg-zinc-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center overflow-hidden flex flex-col ${
										activeGallerySection === title
											? 'ring-2 ring-black dark:ring-white'
											: ''
									}`}
								>
									<div className='relative w-full aspect-square'>
										<Image
											src={`/gallery-preview/${currentSet}_${key}.jpg`}
											alt={`${title} preview`}
											fill
											className='object-cover transition-opacity duration-500'
											sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
											priority={currentSet === 1}
										/>
									</div>
									<div className='p-6'>
										<h2 className='text-2xl font-bold mb-2'>{title}</h2>
										<p className='text-gray-600 dark:text-gray-400'>
											{title === 'Painting'
												? 'View paintings in various mediums'
												: title === 'Illustration'
												? 'Explore charcoal, ink, and sketch works'
												: title === 'Collage'
												? 'Browse mixed media collages'
												: 'Discover digital artworks'}
										</p>
									</div>
								</button>
							))}
						</div>

						{/* Animation Card - Full Width */}
						<div className='mb-12'>
							<button
								onClick={() => handleGalleryToggle('Animation')}
								className={`w-full p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center ${
									activeGallerySection === 'Animation'
										? 'ring-2 ring-black dark:ring-white'
										: ''
								}`}
							>
								<h2 className='text-2xl font-bold mb-2'>Animation</h2>
								<p className='text-gray-600 dark:text-gray-400'>
									Watch animated works and motion pieces
								</p>
							</button>
						</div>

						{/* Gallery Content */}
						{activeGallerySection && (
							<div className='animate-fadeIn mt-8'>
								{gallerySections.find(
									(section) => section.title === activeGallerySection
								) ? (
									activeGallerySection === 'Painting' ? (
										<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
											{gallerySections
												.find((section) => section.title === 'Painting')
												?.paintings?.paintings.flatMap((mediumGroup) =>
													mediumGroup.images.map((painting) => {
														const uniqueKey = `${mediumGroup.medium}-${painting.filename}`;
														return (
															<button
																key={uniqueKey}
																onClick={() =>
																	setSelectedImage({
																		src: `${S3_BASE_URL}/gallery/painting/${mediumGroup.medium}/${painting.filename}`,
																		alt:
																			painting.title ||
																			`${mediumGroup.medium} painting`,
																		title: painting.title,
																		year: painting.year,
																		medium: mediumGroup.medium
																			.split('-')
																			.map(
																				(word) =>
																					word.charAt(0).toUpperCase() +
																					word.slice(1)
																			)
																			.join(' '),
																	})
																}
																className='group aspect-square relative bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden'
															>
																<Image
																	src={`${S3_BASE_URL}/gallery/painting/${mediumGroup.medium}/${painting.filename}`}
																	alt={
																		painting.title ||
																		`${mediumGroup.medium} painting`
																	}
																	fill
																	className='object-cover transition-transform duration-300 group-hover:scale-105'
																	unoptimized
																/>
																<div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300' />
															</button>
														);
													})
												)}
										</div>
									) : (
										<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
											{gallerySections
												.find(
													(section) => section.title === activeGallerySection
												)
												?.images.map((image, index) => {
													const [medium] = image.split('/');
													const formattedMedium =
														medium
															?.split('-')
															.map(
																(word) =>
																	word.charAt(0).toUpperCase() + word.slice(1)
															)
															.join(' ') || '';

													return (
														<button
															key={index}
															onClick={() =>
																setSelectedImage({
																	src: `${S3_BASE_URL}/gallery/${activeGallerySection.toLowerCase()}/${image}`,
																	alt: `${activeGallerySection} ${image}`,
																	medium: formattedMedium,
																})
															}
															className='group aspect-square relative bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden'
														>
															<Image
																src={`${S3_BASE_URL}/gallery/${activeGallerySection.toLowerCase()}/${image}`}
																alt={`${activeGallerySection} ${index + 1}`}
																fill
																className='object-cover transition-transform duration-300 group-hover:scale-105'
																unoptimized
															/>
															<div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300' />
														</button>
													);
												})}
										</div>
									)
								) : activeGallerySection === 'Animation' ? (
									<div className='w-full bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6'>
										<div className='w-full aspect-video rounded overflow-hidden shadow'>
											<video
												src='https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/gallery/animation/01.MOV'
												autoPlay
												loop
												muted
												playsInline
												controls
												className='w-full h-full object-cover'
											/>
										</div>
									</div>
								) : null}

								{/* Image Modal */}
								<ImageModal
									isOpen={!!selectedImage}
									onClose={() => setSelectedImage(null)}
									image={selectedImage || { src: '', alt: '' }}
								/>
							</div>
						)}
					</div>
				</section>

				{/* CV Section */}
				<section
					id='cv'
					className='flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24 pb-12'
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
						/>
						<CVSection
							title='Residencies'
							data={cv.residencies.sort(
								(a: CVItem, b: CVItem) => b.year - a.year
							)}
							isExpanded={expandedCVSections.includes('Residencies')}
							onToggle={() => handleCVToggle('Residencies')}
						/>
						<CVSection
							title='Collaborations'
							data={cv.collaborations.sort(
								(a: CVItem, b: CVItem) => b.year - a.year
							)}
							isExpanded={expandedCVSections.includes('Collaborations')}
							onToggle={() => handleCVToggle('Collaborations')}
						/>
					</div>
				</section>

				{/* Instagram Section */}
				<InstagramSection posts={instagramPosts} />

				{/* Footer with Business Card */}
				<Footer />
			</main>
		</>
	);
}
