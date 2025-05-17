'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const sections = [
	{ title: 'Painting', href: '/gallery/painting' },
	{ title: 'Illustration', href: '/gallery/illustration' },
	{ title: 'Collage', href: '/gallery/collage' },
	{ title: 'Graphic Design', href: '/gallery/graphic-design' },
	{ title: 'Animations', href: '/gallery/animation' },
];

export default function GallerySubnav() {
	const pathname = usePathname();

	return (
		<nav className='mb-6 flex justify-center gap-4 text-sm font-medium'>
			{sections.map(({ title, href }) => (
				<Link
					key={href}
					href={href}
					className={clsx(
						'px-3 py-1 rounded-full transition',
						pathname === href
							? 'bg-black text-white'
							: 'bg-gray-100 hover:bg-gray-200 text-gray-700'
					)}
				>
					{title}
				</Link>
			))}
		</nav>
	);
}
