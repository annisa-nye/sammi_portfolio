'use client';

import { useState, useEffect } from 'react';

interface SystemThemeLogoProps {
	className?: string;
}

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

	const logoSrc = isDarkMode ? '/logo/logo-invert.gif' : '/logo/logo.gif';

	return (
		<img
			src={logoSrc}
			alt='Sammi Carr Logo Animated'
			className={`mx-auto mb-6 object-contain w-[800px] h-auto ${className}`}
		/>
	);
}
