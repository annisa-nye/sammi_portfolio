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
			</footer>
		</section>
	);
}
