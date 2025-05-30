'use client';

import Image from 'next/image';
import SystemThemeHeading from './SystemThemeHeading';

export default function Footer() {
	return (
		<section id='contact' className='bg-white dark:bg-zinc-900 py-12'>
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
				<div className='bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8'>
					<div className='flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8'>
						{/* Logo Image */}
						<div className='relative w-64 h-64 rounded-full overflow-hidden'>
							<Image
								src='/logo/logo.png'
								alt='Sammi Carr Logo'
								fill
								className='object-contain'
								priority
							/>
						</div>

						{/* Contact Info */}
						<div className='flex-1 text-center md:text-left'>
							<h2 className='text-2xl font-bold mb-2 text-gray-900'>
								Sammi Carr
							</h2>
							<p className='text-gray-600 mb-4 italic'>
								Multimedia visual artist
							</p>
							<div className='space-y-2 mt-4'>
								<p className='flex items-center justify-center md:justify-start gap-2 text-gray-700'>
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
								<p className='flex items-center justify-center md:justify-start gap-2 text-gray-700'>
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
								<p className='flex items-center justify-center md:justify-start gap-2 text-gray-700'>
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
					<div className='bg-white rounded-lg shadow-lg p-6 md:p-8 border border-blue-300 dark:border-blue-500 mb-8 max-w-2xl mx-auto'>
						<p className='text-center text-base font-medium text-gray-700 dark:text-gray-200 mb-3'>
							Designed and built by{' '}
							<span className='text-blue-700 dark:text-blue-400 font-semibold'>
								Annisa
							</span>
						</p>
						<div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-2'>
							<a
								href='mailto:annisanye@outlook.com'
								className='group flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors'
							>
								<svg
									className='w-4 h-4 text-blue-400 group-hover:text-blue-700 dark:text-blue-300 dark:group-hover:text-blue-400 transition-colors'
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
								<span className='group-hover:underline'>
									annisanye@outlook.com
								</span>
							</a>
							<span className='hidden sm:inline text-blue-300 dark:text-blue-500'>
								•
							</span>
							<a
								href='https://annisanye.com'
								target='_blank'
								rel='noopener noreferrer'
								className='group flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors'
							>
								<svg
									className='w-4 h-4 text-blue-400 group-hover:text-blue-700 dark:text-blue-300 dark:group-hover:text-blue-400 transition-colors'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
									/>
								</svg>
								<span className='group-hover:underline'>annisanye.com</span>
							</a>
							<span className='hidden sm:inline text-blue-300 dark:text-blue-500'>
								•
							</span>
							<a
								href='https://www.linkedin.com/feed/'
								target='_blank'
								rel='noopener noreferrer'
								className='group flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors'
							>
								<svg
									className='w-4 h-4 text-blue-400 group-hover:text-blue-700 dark:text-blue-300 dark:group-hover:text-blue-400 transition-colors'
									fill='currentColor'
									viewBox='0 0 24 24'
								>
									<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
								</svg>
								<span className='group-hover:underline'>LinkedIn</span>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
}
