'use client';

import { useEffect, useState, useCallback } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

const navItems = [
	{ name: 'Home', href: '#home' },
	{ name: 'About', href: '#about' },
	{ name: 'Gallery', href: '#gallery' },
	{ name: 'CV', href: '#cv' },
	{ name: 'Contact', href: '#contact' },
];

export default function Nav() {
	const [activeSection, setActiveSection] = useState('home');

	// Memoize the scroll handler to prevent unnecessary re-renders
	const handleScroll = useCallback(() => {
		const scrollPosition = window.scrollY + window.innerHeight / 3;
		let currentSection = 'home';
		let maxVisibility = 0;

		// Find the section that is currently most visible in the viewport
		navItems.forEach(({ href }) => {
			const section = document.querySelector(href);
			if (section) {
				const { top, bottom, height } = section.getBoundingClientRect();
				const offsetTop = top + window.scrollY;
				const offsetBottom = bottom + window.scrollY;
				const viewportHeight = window.innerHeight;

				// Calculate how much of the section is visible in the viewport
				const visibleTop = Math.max(0, top);
				const visibleBottom = Math.min(viewportHeight, bottom);
				const visibleHeight = visibleBottom - visibleTop;
				const visibilityRatio = visibleHeight / height;

				// Special handling for gallery section
				if (section.id === 'gallery') {
					// Check if we're in any of the gallery subsections
					const galleryCards = document.querySelectorAll(
						'#gallery .gallery-card'
					);
					galleryCards.forEach((card) => {
						const cardRect = card.getBoundingClientRect();
						const cardTop = cardRect.top + window.scrollY;
						const cardBottom = cardRect.bottom + window.scrollY;

						if (scrollPosition >= cardTop && scrollPosition < cardBottom) {
							// If we're in a gallery subsection, keep gallery as active
							currentSection = 'gallery';
							maxVisibility = 1;
						}
					});
				}

				// If this section is more visible than the current one, update the active section
				if (
					visibilityRatio > maxVisibility &&
					scrollPosition >= offsetTop &&
					scrollPosition < offsetBottom
				) {
					currentSection = section.id;
					maxVisibility = visibilityRatio;
				}
			}
		});

		setActiveSection(currentSection);
	}, []);

	useEffect(() => {
		// Set up the Intersection Observer with adjusted margins for better detection
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// For gallery section, check if we're in a subsection
						if (entry.target.id === 'gallery') {
							const galleryCards = document.querySelectorAll(
								'#gallery .gallery-card'
							);
							let inSubsection = false;

							galleryCards.forEach((card) => {
								const rect = card.getBoundingClientRect();
								if (
									rect.top <= window.innerHeight / 2 &&
									rect.bottom >= window.innerHeight / 2
								) {
									inSubsection = true;
								}
							});

							if (inSubsection) {
								setActiveSection('gallery');
							}
						} else {
							setActiveSection(entry.target.id);
						}
					}
				});
			},
			{
				rootMargin: '-20% 0px -80% 0px', // Adjusted margins for better detection
				threshold: [0, 0.25, 0.5, 0.75, 1],
			}
		);

		// Observe all sections
		navItems.forEach(({ href }) => {
			const section = document.querySelector(href);
			if (section) observer.observe(section);
		});

		// Add scroll event listener with throttling
		let ticking = false;
		const scrollListener = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', scrollListener, { passive: true });
		// Call once on mount to set initial state
		handleScroll();

		return () => {
			observer.disconnect();
			window.removeEventListener('scroll', scrollListener);
		};
	}, [handleScroll]);

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		e.preventDefault();
		const section = document.querySelector(href);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
			setActiveSection(href.replace('#', ''));
		}
	};

	return (
		<nav className='fixed top-0 left-0 right-0 z-50 bg-white text-black shadow-md px-4 sm:px-6 py-3 sm:py-4 flex justify-center items-center border-b border-gray-100'>
			<div className='flex gap-2 sm:gap-6 text-sm font-medium max-w-screen-sm mx-auto w-full justify-between sm:justify-center'>
				{navItems.map(({ name, href }) => {
					const sectionId = href.replace('#', '');
					const isActive = activeSection === sectionId;

					return (
						<Link
							key={href}
							href={href}
							onClick={(e) => handleClick(e, href)}
							className={clsx(
								'transition-colors text-sm font-medium px-2 sm:px-3 py-1 rounded-full cursor-pointer whitespace-nowrap',
								isActive
									? 'bg-black text-white'
									: 'opacity-60 hover:opacity-100'
							)}
						>
							{name}
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
