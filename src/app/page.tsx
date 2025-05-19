'use client';

import { cv } from '@/data/cv';
import CVSection from '@/components/CVSection';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import GalleryCard from '@/components/GalleryCard';

interface Painting {
	title: string;
	year: number;
	medium: string;
	filename: string;
}

interface GallerySection {
	title: string;
	images: string[];
	paintings?: Painting[];
}

interface CVItem {
	year: number;
	items: string[];
}

const initialGallerySections: GallerySection[] = [
	{
		title: 'Painting',
		images: [],
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
	const [paintings, setPaintings] = useState<Painting[]>([]);
	const [gallerySections, setGallerySections] = useState<GallerySection[]>(
		initialGallerySections
	);
	const [openSections, setOpenSections] = useState({
		exhibitions: true,
		residencies: false,
		collaborations: false,
	});

	useEffect(() => {
		// Load paintings data
		fetch('/data/paintings.json')
			.then((res) => res.json())
			.then((data: Painting[]) => {
				setPaintings(data);
				// Update the paintings in the gallery sections
				const updatedSections = gallerySections.map(
					(section: GallerySection) => {
						if (section.title === 'Painting') {
							return { ...section, paintings: data };
						}
						return section;
					}
				);
				setGallerySections(updatedSections);
			})
			.catch((error) => console.error('Error loading paintings:', error));
	}, []);

	const toggleSection = (section: keyof typeof openSections) => {
		setOpenSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};

	const handleGalleryToggle = (title: string) => {
		setActiveGallerySection(activeGallerySection === title ? null : title);
	};

	return (
		<>
			<main className='relative'>
				{/* Home Section */}
				<section
					id='home'
					className='min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20'
				>
					<h1 className='text-5xl md:text-6xl font-bold mb-6'>Sammi Carr</h1>
					<p className='text-lg md:text-xl max-w-xl text-gray-600 dark:text-gray-300'>
						An exploration of form, satire, and emotional urgency through
						painting, collage, and illustration.
					</p>
				</section>

				{/* About Section */}
				<section
					id='about'
					className='min-h-screen flex flex-col items-center justify-center px-6 pt-20'
				>
					<div className='max-w-2xl mx-auto text-center'>
						<h1 className='text-3xl font-bold mb-8'>About</h1>
						<div className='mb-8'>
							<img
								src='/headshot.jpg'
								alt='Sammi Carr headshot'
								className='w-48 h-48 object-cover rounded mx-auto border border-gray-300 shadow-sm'
							/>
						</div>
						<p className='italic text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
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
					className='min-h-screen flex flex-col items-center px-6 pt-20'
				>
					<div className='max-w-7xl mx-auto w-full'>
						<h1 className='text-4xl font-bold mb-10 text-center'>Gallery</h1>

						{/* Gallery Cards */}
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
							{gallerySections.map((section: GallerySection) => (
								<GalleryCard
									key={section.title}
									title={section.title}
									images={section.images}
									paintings={section.paintings}
									isExpanded={activeGallerySection === section.title}
									onToggle={() => handleGalleryToggle(section.title)}
								/>
							))}
						</div>

						{/* Animation Section */}
						<div className='w-full bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6'>
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
					className='min-h-screen flex flex-col items-center px-6 pt-20'
				>
					<div className='max-w-3xl mx-auto w-full'>
						<h1 className='text-4xl font-bold mb-10 text-center'>
							Curriculum Vitae
						</h1>

						<CVSection
							title='Exhibitions'
							data={cv.exhibitions.sort(
								(a: CVItem, b: CVItem) => b.year - a.year
							)}
						/>
						<CVSection
							title='Residencies'
							data={cv.residencies.sort(
								(a: CVItem, b: CVItem) => b.year - a.year
							)}
						/>
						<CVSection
							title='Collaborations'
							data={cv.collaborations.sort(
								(a: CVItem, b: CVItem) => b.year - a.year
							)}
						/>
					</div>
				</section>

				{/* Socials Section */}
				<section
					id='socials'
					className='min-h-screen flex flex-col items-center px-6 pt-20'
				>
					<div className='max-w-3xl mx-auto w-full'>
						<h1 className='text-4xl font-bold mb-10 text-center'>Socials</h1>
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
											className='block aspect-square overflow-hidden rounded shadow hover:opacity-80 transition'
										>
											<img
												src={`/instagram/${file}`}
												alt={`Instagram placeholder ${i + 1}`}
												className='w-full h-full object-cover'
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
