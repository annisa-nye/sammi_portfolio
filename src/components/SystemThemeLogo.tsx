'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SystemThemeLogoProps {
	className?: string;
}

const S3_BASE_URL =
	'https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com';

export default function SystemThemeLogo({
	className = '',
}: SystemThemeLogoProps) {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		setIsDarkMode(mediaQuery.matches);

		const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
		mediaQuery.addEventListener('change', handler);

		return () => mediaQuery.removeEventListener('change', handler);
	}, []);

	if (!mounted) {
		return null; // Or a loading spinner, or fallback light mode image
	}

	const logoSrc = isDarkMode
		? `${S3_BASE_URL}/logo/logo-invert.gif`
		: `${S3_BASE_URL}/logo/logo.gif`;

	return (
		<Image
			src={logoSrc}
			alt='Sammi Carr Logo Animated'
			width={800}
			height={400}
			className={`mx-auto mb-6 object-contain w-[800px] h-auto ${className}`}
			priority
			unoptimized
		/>
	);
}
