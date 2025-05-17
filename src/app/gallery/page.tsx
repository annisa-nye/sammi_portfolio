import Link from 'next/link';

const gallerySections = [
	{ title: 'Illustration', href: '/gallery/illustration' },
	{ title: 'Painting', href: '/gallery/painting' },
	{ title: 'Collage', href: '/gallery/collage' },
	{ title: 'Graphic Design', href: '/gallery/graphic-design' },
	{ title: 'Animations', href: '/gallery/animation' },
];

export default function GalleryPage() {
	return (
		<main className='max-w-4xl mx-auto px-6 py-10 pt-28'>
			<h1 className='text-4xl font-bold mb-10 text-center'>Gallery</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
				{gallerySections.map(({ title, href }) => (
					<Link
						key={href}
						href={href}
						className='block border border-gray-300 dark:border-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-200 text-center text-lg font-medium text-gray-800 dark:text-gray-100 bg-white dark:bg-zinc-900'
					>
						{title}
					</Link>
				))}
			</div>
		</main>
	);
}
