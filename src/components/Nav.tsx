'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navItems = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'CV', href: '/cv' },
	{ name: 'Gallery', href: '/gallery' },
	{ name: 'Residencies', href: '/residencies' },
	{ name: 'Contact', href: '/contact' },
];

export default function Nav() {
	const pathname = usePathname();

	return (
		<nav className='fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md shadow-md px-6 py-2 rounded-full flex gap-6'>
			{navItems.map((item) => (
				<Link
					key={item.name}
					href={item.href}
					className={clsx(
						'transition-colors text-sm font-medium',
						pathname === item.href
							? 'bg-black text-white rounded-full px-3 py-1'
							: 'opacity-60 hover:opacity-100'
					)}
				>
					{item.name}
				</Link>
			))}
		</nav>
	);
}
