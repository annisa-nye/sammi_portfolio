'use client';

import Link from 'next/link';

const navItems = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About' },
	{ href: '/cv', label: 'CV' },
	{ href: '/gallery', label: 'Gallery' },
	{ href: '/art-residencies', label: 'Art Residencies' },
	{ href: '/contact', label: 'Contact' },
];

export default function Nav() {
	return (
		<nav className='flex flex-wrap gap-6 p-6 border-b border-gray-300'>
			{navItems.map(({ href, label }) => (
				<Link
					key={href}
					href={href}
					className='text-blue-700 hover:underline text-lg font-medium'
				>
					{label}
				</Link>
			))}
		</nav>
	);
}
