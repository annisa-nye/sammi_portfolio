'use client';


export default function ContactPage() {
	return (
			<main className='max-w-3xl mx-auto px-6 pt-28'>
				<h1 className='text-4xl font-bold mb-10 text-center'>Contact</h1>

				<p className='text-lg text-center mb-6'>
					Email:{' '}
					<a href='mailto:scarrjam@gmail.com' className='underline'>
						scarrjam@gmail.com
					</a>
				</p>

				{/* Placeholder Instagram section (can be replaced later) */}
				<section className='mt-12'>
					<h2 className='text-2xl font-bold mb-6 text-center'>
						Instagram Highlights
					</h2>

					<div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
						{['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg'].map(
							(file, i) => (
								<div key={i} className='flex flex-col gap-2'>
									<a
										href='https://www.instagram.com/scarrjam/'
										target='_blank'
										rel='noopener noreferrer'
										className='block aspect-square overflow-hidden rounded shadow hover:opacity-80 transition'
									>
										<img
											src={`/instagram/${file}`}
											alt={`Instagram placeholder ${i + 1}`}
											className='w-full h-full object-cover'
										/>
									</a>
									<p className='text-sm text-gray-400 text-center italic'>
										Caption coming soon
									</p>
								</div>
							)
						)}
					</div>

					<div className='text-center mt-6'>
						<a
							href='https://www.instagram.com/scarrjam/'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition'
						>
							View More on Instagram
						</a>
					</div>
				</section>
			</main>
	);
}
