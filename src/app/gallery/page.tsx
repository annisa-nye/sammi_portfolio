import Link from 'next/link';

const gallerySections = [
	{ title: 'Illustration', href: '/gallery/illustration' },
	{ title: 'Painting', href: '/gallery/painting' },
	{ title: 'Collage', href: '/gallery/collage' },
	{ title: 'Graphic Design', href: '/gallery/graphic-design' },
	{ title: 'Animations', href: '/gallery/animations' },
];

export default function GalleryPage() {
	return (
		<main className='max-w-4xl mx-auto p-6'>
			<h1 className='text-3xl font-bold mb-6 text-center'>Gallery</h1>
			<ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
				{gallerySections.map(({ title, href }) => (
					<li key={href}>
						<Link
							href={href}
							className='block border border-gray-300 rounded-lg p-6 text-center hover:bg-gray-100 transition'
						>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
