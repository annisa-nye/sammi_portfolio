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
		<nav className='fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white text-black rounded-full shadow-md px-6 py-2 flex gap-6 text-sm font-medium'>
			{navItems.map(({ name, href }) => {
				const isActive =
					pathname === href ||
					(href === '/gallery' && pathname?.startsWith('/gallery/'));

				return (
					<Link
						key={href}
						href={href}
						className={clsx(
							'transition-colors text-sm font-medium px-3 py-1 rounded-full',
							isActive ? 'bg-black text-white' : 'opacity-60 hover:opacity-100'
						)}
					>
						{name}
					</Link>
				);
			})}
		</nav>
	);
}
