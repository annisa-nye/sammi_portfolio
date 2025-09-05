'use client';

import { useState, useEffect, useRef } from 'react';

// Total number of frames in the animation
const TOTAL_FRAMES = 38; // Updated to match the actual number of frames

export default function ScrollAnimation() {
	const [currentFrame, setCurrentFrame] = useState(1);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setMounted(true);
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		setIsDarkMode(mediaQuery.matches);

		// Check if it's a mobile device (including iPhone)
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
		mediaQuery.addEventListener('change', handler);

		return () => {
			mediaQuery.removeEventListener('change', handler);
			window.removeEventListener('resize', checkMobile);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return;

			const rect = containerRef.current.getBoundingClientRect();
			const scrollTop = window.scrollY;
			const containerTop = rect.top + scrollTop;
			const containerHeight = rect.height;
			const windowHeight = window.innerHeight;

			// Check if the container is in view
			const isInView = rect.top < windowHeight && rect.bottom > 0;
			setIsVisible(isInView);

			if (isInView) {
				// Calculate how far we've scrolled through the container
				const scrollProgress =
					(scrollTop - containerTop + windowHeight) /
					(containerHeight + windowHeight);

				// Calculate which frame to show based on scroll progress
				const frameNumber = Math.min(
					Math.max(Math.floor(scrollProgress * TOTAL_FRAMES) + 1, 1),
					TOTAL_FRAMES
				);

				setCurrentFrame(frameNumber);
			}
		};

		// Add scroll event listener
		window.addEventListener('scroll', handleScroll);
		// Initial check
		handleScroll();

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Format frame number to 3 digits (e.g., 1 -> "001")
	const formatFrameNumber = (num: number) => {
		return num.toString().padStart(3, '0');
	};

	if (!mounted) {
		return null; // Prevent hydration mismatch
	}

	// Use dark mode animation preview when in dark mode
	const animationFolder = isDarkMode
		? 'animation_preview-dark'
		: 'animation_preview';

	// Check if we should use fullscreen mode (dark mode + mobile)
	const shouldUseFullscreen = isDarkMode && isMobile;

	return (
		<div
			ref={containerRef}
			className='relative w-full h-[200vh] sm:h-[300vh]' // Taller on desktop for smoother scrolling
		>
			<div
				className={`sticky top-0 w-full h-screen flex items-center justify-center ${
					shouldUseFullscreen ? 'px-0' : 'px-0 sm:px-6'
				}`}
			>
				<div
					className={`relative flex items-center justify-center ${
						shouldUseFullscreen
							? 'w-full h-full'
							: 'w-full h-full sm:max-w-7xl mx-auto'
					}`}
					style={{
						willChange: 'transform',
					}}
				>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src={`/${animationFolder}/frame_${formatFrameNumber(
							currentFrame
						)}.gif`}
						alt={`Animation frame ${currentFrame}`}
						style={{
							width: shouldUseFullscreen ? '100vw' : '100%',
							height: shouldUseFullscreen ? '100vh' : '100%',
							objectFit: shouldUseFullscreen ? 'cover' : 'contain',
							transition: 'opacity 0.15s',
							willChange: 'opacity, transform',
						}}
						className={`select-none pointer-events-none ${
							isVisible ? 'opacity-100' : 'opacity-0'
						}`}
						draggable={false}
					/>
				</div>
			</div>
		</div>
	);
}
