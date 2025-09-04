'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface SystemThemeHeadingProps {
	name: string;
	width?: number;
	height?: number;
	className?: string;
	priority?: boolean;
}

const S3_BASE_URL =
	'https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com';

export default function SystemThemeHeading({
	name,
	width = 500,
	height = 150,
	className = '',
	priority = false,
}: SystemThemeHeadingProps) {
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

	const imagePath = isDarkMode
		? `${S3_BASE_URL}/headings-dark/${name}-invert.png`
		: `${S3_BASE_URL}/headings/${name}.png`;

	return (
		<Image
			src={imagePath}
			alt={name}
			width={width}
			height={height}
			className={`mx-auto mb-10 ${className}`}
			priority={priority}
			unoptimized
		/>
	);
}
