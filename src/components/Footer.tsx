'use client';

import Image from 'next/image';
import SystemThemeHeading from './SystemThemeHeading';
import { useState, useEffect } from 'react';

export default function Footer() {
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
		return null; // Prevent hydration mismatch
	}

	const logoSrc = isDarkMode ? '/logo/logo-invert.png' : '/logo/logo.png';

	return (
		<section id='contact' className='bg-white dark:bg-[#0a0a0a] py-12'>
			<footer className='max-w-3xl mx-auto px-6'>
				{/* Contact Heading */}
				<SystemThemeHeading
					name='contact'
					width={500}
					height={150}
					className='mx-auto mb-10'
					priority
				/>

				{/* Business Card */}
				<div className='bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 md:p-8 mb-8'>
					<div className='flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8'>
						{/* Logo Image */}
						<div className='relative w-64 h-64 rounded-full overflow-hidden'>
							<Image
								src={logoSrc}
								alt='Sammi Carr Logo'
								fill
								className='object-contain'
								priority
							/>
						</div>

						{/* Contact Info */}
						<div className='flex-1 text-center md:text-left'>
							<h2 className='text-2xl font-bold mb-2 text-gray-900 dark:text-white'>
								Sammi Carr
							</h2>
							<p className='text-gray-600 dark:text-gray-300 mb-4 italic'>
								Multimedia visual artist
							</p>
							<div className='space-y-2 mt-4'>
								<p className='flex items-center justify-center md:justify-start gap-2 text-gray-700 dark:text-gray-300'>
									<svg
										className='w-5 h-5'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
										/>
									</svg>
									<a
										href='mailto:scarrjam@gmail.com'
										className='hover:underline'
									>
										scarrjam@gmail.com
									</a>
								</p>
								<p className='flex items-center justify-center md:justify-start gap-2 text-gray-700 dark:text-gray-300'>
									<svg
										className='w-5 h-5'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
										/>
									</svg>
									<a
										href='https://www.instagram.com/scarrjam/'
										target='_blank'
										rel='noopener noreferrer'
										className='hover:underline'
									>
										@scarrjam
									</a>
								</p>
								<p className='flex items-center justify-center md:justify-start gap-2 text-gray-700 dark:text-gray-300'>
									<svg
										className='w-5 h-5'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
										/>
									</svg>
									<span>Illawarra/Dharawal land, NSW</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<p className='text-center text-sm text-gray-500 dark:text-gray-400'>
					© {new Date().getFullYear()} Sammi Carr. All rights reserved.
				</p>

				{/* Credits */}
				<div className='mt-6'>
					<div className='bg-gradient-to-br from-gray-50 to-white dark:from-zinc-800 dark:to-zinc-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-4 mb-6 max-w-xs mx-auto border border-gray-100 dark:border-zinc-700'>
						<p className='text-center text-sm font-light text-gray-700 dark:text-gray-200 mb-2 tracking-wide'>
							Designed and built by{' '}
							<span className='text-blue-600 dark:text-blue-400 font-medium italic'>
								Annisa.
							</span>
						</p>
						<div className='text-center mb-3'>
							<a
								href='https://annisanye.com'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium underline decoration-blue-300 dark:decoration-blue-500 hover:decoration-blue-600 dark:hover:decoration-blue-400 underline-offset-2 text-sm'
							>
								annisanye.com
							</a>
						</div>
						<div className='flex items-center justify-center gap-5'>
							<a
								href='mailto:annisanye@outlook.com'
								className='group text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-105'
								title='Email'
							>
								<svg
									className='w-4 h-4'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={1.5}
										d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
									/>
								</svg>
							</a>
							<a
								href='https://www.linkedin.com/feed/'
								target='_blank'
								rel='noopener noreferrer'
								className='group text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-105'
								title='LinkedIn'
							>
								<svg
									className='w-4 h-4'
									fill='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
								</svg>
							</a>
							<a
								href='https://github.com/annisa-nye'
								target='_blank'
								rel='noopener noreferrer'
								className='group text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 transform hover:scale-105'
								title='GitHub'
							>
								<svg
									className='w-4 h-4'
									fill='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
}
