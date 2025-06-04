'use client';

import SystemThemeHeading from './SystemThemeHeading';
import { useState } from 'react';
import Image from 'next/image';

interface InstagramPost {
	id: string;
	imageUrl: string;
	caption?: string;
	date?: string;
	link?: string;
}

interface InstagramSectionProps {
	posts: InstagramPost[];
}

export default function InstagramSection({ posts }: InstagramSectionProps) {
	const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

	// For mobile devices (iPhones and small screens), show specific posts: 1, 2, 5, 7
	const mobilePostIds = ['1', '2', '5', '7'];
	const mobileDisplayPosts = posts.filter((post) =>
		mobilePostIds.includes(post.id)
	);

	// Show 8 posts for large devices (4x2 grid), first 4 will be visible on small devices (2x2 grid)
	const displayPosts = posts.slice(0, 8);

	const handlePostClick = (post: InstagramPost) => {
		if (post.link) {
			window.open(post.link, '_blank', 'noopener,noreferrer');
		} else {
			setSelectedPost(post);
		}
	};

	return (
		<section
			id='instagram'
			className='flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-24 pb-12'
		>
			<div className='max-w-6xl mx-auto w-full'>
				<SystemThemeHeading
					name='instagram'
					width={500}
					height={150}
					className='mx-auto mb-10'
					priority
				/>

				{/* Instagram Grid - Mobile shows specific 4 posts (1,2,5,7), Large devices show first 8 posts */}
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
					{/* Mobile View - Show specific posts (1, 2, 5, 7) */}
					<div className='lg:hidden contents'>
						{mobileDisplayPosts.map((post) => (
							<div
								key={post.id}
								className='relative cursor-pointer'
								onClick={() => handlePostClick(post)}
								style={{
									width: '100%',
									aspectRatio: '1/1',
									backgroundColor: 'white',
									borderRadius: '8px',
									overflow: 'hidden',
									boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
									transition: 'transform 0.3s ease',
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.transform = 'scale(1.02)')
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.transform = 'scale(1)')
								}
							>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src={post.imageUrl}
									alt={post.caption || 'Instagram post'}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										display: 'block',
									}}
								/>

								{/* Overlay with caption on hover */}
								<div
									className='absolute inset-0 flex items-end'
									style={{
										background:
											'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
										opacity: 0,
										transition: 'opacity 0.3s ease',
									}}
									onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
									onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
								>
									<div className='p-3 sm:p-4 text-white'>
										{post.caption && (
											<p className='text-xs sm:text-sm line-clamp-2'>
												{post.caption}
											</p>
										)}
									</div>
								</div>
							</div>
						))}
					</div>

					{/* Desktop View - Show first 8 posts */}
					<div className='hidden lg:contents'>
						{displayPosts.map((post) => (
							<div
								key={post.id}
								className='relative cursor-pointer'
								onClick={() => handlePostClick(post)}
								style={{
									width: '100%',
									aspectRatio: '1/1',
									backgroundColor: 'white',
									borderRadius: '8px',
									overflow: 'hidden',
									boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
									transition: 'transform 0.3s ease',
								}}
								onMouseEnter={(e) =>
									(e.currentTarget.style.transform = 'scale(1.02)')
								}
								onMouseLeave={(e) =>
									(e.currentTarget.style.transform = 'scale(1)')
								}
							>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src={post.imageUrl}
									alt={post.caption || 'Instagram post'}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										display: 'block',
									}}
								/>

								{/* Overlay with caption on hover */}
								<div
									className='absolute inset-0 flex items-end'
									style={{
										background:
											'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
										opacity: 0,
										transition: 'opacity 0.3s ease',
									}}
									onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
									onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
								>
									<div className='p-3 sm:p-4 text-white'>
										{post.caption && (
											<p className='text-xs sm:text-sm line-clamp-2'>
												{post.caption}
											</p>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Instagram Link */}
				<div className='text-center mt-6 sm:mt-8'>
					<a
						href='https://www.instagram.com/scarrjam/'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors'
					>
						<svg
							className='w-4 h-4 sm:w-5 sm:h-5'
							fill='currentColor'
							viewBox='0 0 24 24'
							aria-hidden='true'
						>
							<path
								fillRule='evenodd'
								d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
								clipRule='evenodd'
							/>
						</svg>
						Follow on Instagram
					</a>
				</div>

				{/* Modal for full-size image view */}
				{selectedPost && (
					<div
						className='fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4'
						onClick={() => setSelectedPost(null)}
					>
						<div className='relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-zinc-900 rounded-lg overflow-hidden'>
							<button
								className='absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors'
								onClick={() => setSelectedPost(null)}
							>
								<svg
									className='w-6 h-6'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
							<div className='relative aspect-square'>
								<Image
									src={selectedPost.imageUrl}
									alt={selectedPost.caption || 'Instagram post'}
									fill
									className='object-contain'
									unoptimized
								/>
							</div>
							{selectedPost.caption && (
								<div className='p-4 text-gray-800 dark:text-gray-200'>
									<p className='text-sm'>{selectedPost.caption}</p>
									{selectedPost.date && (
										<p className='text-xs mt-2 text-gray-500'>
											{selectedPost.date}
										</p>
									)}
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
