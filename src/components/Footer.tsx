'use client';

export default function Footer() {
	return (
		<section id='contact' className='bg-gray-100 dark:bg-gray-900 py-12'>
			<footer className='footer'>
				<div className='bg-gray-200 dark:bg-gray-800 py-12 flex flex-col items-center'>
					<div className='max-w-4xl mx-auto px-6'>
						{/* Business Card */}
						<div className='bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start'>
							{/* Logo/Image Container */}
							<div className='flex-shrink-0'>
								<img
									src='/headshot.jpg'
									alt='Sammi Carr'
									className='w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-sm'
								/>
							</div>

							{/* Info Container */}
							<div className='flex-grow space-y-4'>
								<div>
									<h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
										Sammi Carr
									</h2>
									<p className='text-gray-600 italic mt-1'>
										Visual Artist & Illustrator
									</p>
								</div>

								{/* Contact Information */}
								<div className='space-y-3'>
									<div className='flex items-center gap-3'>
										<div className='w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0'>
											<svg
												className='w-4 h-4 text-white'
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
										</div>
										<a
											href='mailto:scarrjam@gmail.com'
											className='text-gray-700 hover:underline'
										>
											scarrjam@gmail.com
										</a>
									</div>

									<div className='flex items-center gap-3'>
										<div className='w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0'>
											<svg
												className='w-4 h-4 text-white'
												fill='currentColor'
												viewBox='0 0 24 24'
											>
												<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
											</svg>
										</div>
										<a
											href='https://www.instagram.com/scarrjam/'
											target='_blank'
											rel='noopener noreferrer'
											className='text-gray-700 hover:underline'
										>
											@scarrjam
										</a>
									</div>

									<div className='flex items-center gap-3'>
										<div className='w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0'>
											<svg
												className='w-4 h-4 text-white'
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
										</div>
										<span className='text-gray-700'>
											Illawarra/Dharawal land, NSW
										</span>
									</div>
								</div>

								{/* Tagline */}
								<p className='text-gray-600 mt-4 text-sm md:text-base'>
									An exploration of form, satire, and emotional urgency through
									painting, collage, and illustration.
								</p>
							</div>
						</div>

						{/* Copyright */}
						<p className='text-center text-gray-600 dark:text-gray-400 mt-8'>
							© {new Date().getFullYear()} Sammi Carr. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</section>
	);
}
