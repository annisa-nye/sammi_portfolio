'use client';

import { cv } from '@/data/cv';
import { useState } from 'react';
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
		title: 'Graphic Design',
		images: Array.from(
			{ length: 5 },
			(_, i) => `${String(i + 1).padStart(2, '0')}.jpg`
		),
	},
];

export default function HomePage() {
	const [activeGallerySection, setActiveGallerySection] = useState<
		string | null
	>(null);
	const [gallerySections] = useState<GallerySection[]>(initialGallerySections);

	const [openCVSection, setOpenCVSection] = useState<string | null>(
		'Exhibitions'
	);

	const handleGalleryToggle = (title: string) => {
		setActiveGallerySection(activeGallerySection === title ? null : title);
	};

	const handleCVToggle = (title: string) => {
		setOpenCVSection(openCVSection === title ? null : title);
	};

	return (
		<>
			<main className='relative'>
				{/* Home Section */}
				<section
					id='home'
					className='min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-16 sm:pt-24'
				>
					<Image
						src='/logo/logo.png'
						alt='Sammi Carr Logo'
						width={800}
						height={400}
						className='mx-auto mb-6 object-contain'
						priority
					/>
					<p className='text-lg md:text-xl max-w-xl text-gray-600 dark:text-gray-300'>
						Multimedia visual artist
					</p>
				</section>

				{/* About Section */}
				<section
					id='about'
					className='min-h-screen flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24'
				>
					<div className='max-w-2xl mx-auto w-full text-center'>
						<Image
							src='/headings/about.png'
							alt='About'
							width={500}
							height={150}
							className='mx-auto mb-8'
							priority
						/>
						<div className='mb-8 relative w-64 h-64 mx-auto mt-8'>
							<Image
								src='/headshot/headshot-1.jpg'
								alt='Sammi Carr headshot'
								fill
								className='object-cover rounded border border-gray-300 shadow-sm'
								priority
							/>
						</div>
						<p className='italic text-base sm:text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
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
						<Image
							src='/headings/gallery.png'
							alt='Gallery'
							width={500}
							height={150}
							className='mx-auto mb-10'
							priority
						/>

						{/* Gallery Subsections */}
						<div className='space-y-8'>
							{gallerySections.map((section: GallerySection) => (
								<div key={section.title} className='space-y-4'>
									<button
										onClick={() => handleGalleryToggle(section.title)}
										className='w-full text-left flex items-center justify-between p-4 bg-white dark:bg-zinc-900 rounded-lg shadow hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors'
									>
										<h2 className='text-2xl font-bold'>{section.title}</h2>
										<span className='text-2xl'>
											{activeGallerySection === section.title ? '−' : '+'}
										</span>
									</button>

									{activeGallerySection === section.title && (
										<div className='animate-fadeIn'>
											{section.title === 'Painting' &&
											section.paintings?.paintings ? (
												<div className='space-y-12'>
													{(section.paintings as PaintingsData).paintings.map(
														(mediumGroup: PaintingMedium) => {
															return (
																<div
																	key={mediumGroup.medium}
																	className='space-y-4'
																>
																	<h3 className='text-xl font-semibold capitalize'>
																		{mediumGroup.medium
																			.split('-')
																			.map(
																				(word: string) =>
																					word.charAt(0).toUpperCase() +
																					word.slice(1)
																			)
																			.join(' ')}
																	</h3>
																	<div className='overflow-x-auto whitespace-nowrap flex gap-8 pb-6 -mx-6 px-6'>
																		{mediumGroup.images.map(
																			(painting: Painting) => {
																				const uniqueKey = `${mediumGroup.medium}-${painting.filename}`;
																				return (
																					<figure
																						key={uniqueKey}
																						className='inline-block w-[80vw] max-w-md flex-shrink-0 bg-white dark:bg-zinc-900 rounded shadow p-3'
																					>
																						<Image
																							src={`${S3_BASE_URL}/gallery/painting/${mediumGroup.medium}/${painting.filename}`}
																							alt={
																								painting.title ||
																								`${mediumGroup.medium} painting`
																							}
																							width={400}
																							height={400}
																							className='w-full h-auto object-cover rounded'
																							unoptimized
																						/>
																						<figcaption className='mt-2 text-sm text-center text-gray-700 dark:text-gray-300 space-y-1'>
																							{painting.title && (
																								<div>
																									<span className='font-medium'>
																										{painting.title}
																									</span>{' '}
																									({painting.year})
																								</div>
																							)}
																							<div className='italic text-gray-500'>
																								{mediumGroup.medium
																									.split('-')
																									.map(
																										(word: string) =>
																											word
																												.charAt(0)
																												.toUpperCase() +
																											word.slice(1)
																									)
																									.join(' ')}
																							</div>
																						</figcaption>
																					</figure>
																				);
																			}
																		)}
																	</div>
																</div>
															);
														}
													)}
												</div>
											) : (
												<div className='overflow-x-auto whitespace-nowrap flex gap-8 pb-6 -mx-6 px-6'>
													{section.images.map((image, i) => {
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
															<figure
																key={i}
																className='inline-block w-[80vw] max-w-md flex-shrink-0 bg-white dark:bg-zinc-900 rounded shadow p-3'
															>
																<Image
																	src={`${S3_BASE_URL}/gallery/${section.title.toLowerCase()}/${image}`}
																	alt={`${section.title} ${i + 1}`}
																	width={400}
																	height={400}
																	className='w-full h-auto object-cover rounded'
																	unoptimized
																/>
																<figcaption className='mt-2 text-sm text-center text-gray-700 dark:text-gray-300'>
																	{formattedMedium && (
																		<div className='italic text-gray-500'>
																			{formattedMedium}
																		</div>
																	)}
																</figcaption>
															</figure>
														);
													})}
												</div>
											)}
										</div>
									)}
								</div>
							))}
						</div>

						{/* Animation Section */}
						<div className='w-full bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 mt-8'>
							<h2 className='text-2xl font-bold mb-6 text-center'>Animation</h2>
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
					</div>
				</section>

				{/* CV Section */}
				<section
					id='cv'
					className='min-h-screen flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24'
				>
					<div className='max-w-3xl mx-auto w-full'>
						<Image
							src='/headings/cv.png'
							alt='Curriculum Vitae'
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
							isExpanded={openCVSection === 'Exhibitions'}
							onToggle={() => handleCVToggle('Exhibitions')}
						/>
						<CVSection
							title='Residencies'
							data={cv.residencies.sort(
								(a: CVItem, b: CVItem) => b.year - a.year
							)}
							isExpanded={openCVSection === 'Residencies'}
							onToggle={() => handleCVToggle('Residencies')}
						/>
						<CVSection
							title='Collaborations'
							data={cv.collaborations.sort(
								(a: CVItem, b: CVItem) => b.year - a.year
							)}
							isExpanded={openCVSection === 'Collaborations'}
							onToggle={() => handleCVToggle('Collaborations')}
						/>
					</div>
				</section>

				{/* Contact Section */}
				<section
					id='contact'
					className='min-h-screen flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24'
				>
					<div className='max-w-3xl mx-auto w-full'>
						<Image
							src='/headings/contact.png'
							alt='Contact'
							width={500}
							height={150}
							className='mx-auto mb-10'
							priority
						/>
						<p className='text-lg text-center mb-6'>
							Email:{' '}
							<a href='mailto:scarrjam@gmail.com' className='underline'>
								scarrjam@gmail.com
							</a>
						</p>

						<section className='mt-12 mb-12'>
							<h2 className='text-2xl font-bold mb-6 text-center'>
								Instagram Highlights
							</h2>

							<div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
								{[
									'01.jpg',
									'02.jpg',
									'03.jpg',
									'04.jpg',
									'05.jpg',
									'06.jpg',
								].map((file, i) => (
									<div key={i} className='flex flex-col gap-2'>
										<a
											href='https://www.instagram.com/scarrjam/'
											target='_blank'
											rel='noopener noreferrer'
											className='block aspect-square overflow-hidden rounded shadow hover:opacity-80 transition relative'
										>
											<Image
												src={`/instagram/${file}`}
												alt={`Instagram highlight ${i + 1}`}
												fill
												className='object-cover'
											/>
										</a>
									</div>
								))}
							</div>

							<div className='text-center mt-6'>
								<a
									href='https://www.instagram.com/scarrjam/'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition'
								>
									View More on Instagram
								</a>
							</div>
						</section>
					</div>
				</section>
			</main>

			{/* Footer with Business Card */}
			<Footer />
		</>
	);
}
