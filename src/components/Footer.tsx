'use client';

import Image from 'next/image';

export default function Footer() {
	return (
		<section id='contact' className='bg-white dark:bg-zinc-900 py-12'>
			<footer className='max-w-3xl mx-auto px-6'>
				{/* Business Card */}
				<div className='bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8 mb-8'>
					<div className='flex flex-col md:flex-row items-center gap-8'>
						{/* Profile Image */}
						<div className='relative w-32 h-32 rounded-full overflow-hidden'>
							<Image
								src='/headshot.jpg'
								alt='Sammi Carr'
								fill
								className='object-cover'
								priority
							/>
						</div>

						{/* Contact Info */}
						<div className='flex-1 text-center md:text-left'>
							<h2 className='text-2xl font-bold mb-2'>Sammi Carr</h2>
							<p className='text-gray-600 dark:text-gray-300 mb-4'>
								Visual Artist & Illustrator
							</p>
							<div className='space-y-2'>
								<p className='flex items-center justify-center md:justify-start gap-2'>
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
								<p className='flex items-center justify-center md:justify-start gap-2'>
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
								<p className='flex items-center justify-center md:justify-start gap-2'>
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

					{/* Tagline */}
					<p className='text-center mt-8 text-gray-600 dark:text-gray-300 italic'>
						An exploration of form, satire, and emotional urgency through
						painting, collage, and illustration.
					</p>
				</div>

				{/* Copyright */}
				<p className='text-center text-sm text-gray-500 dark:text-gray-400'>
					© {new Date().getFullYear()} Sammi Carr. All rights reserved.
				</p>
			</footer>
		</section>
	);
}
