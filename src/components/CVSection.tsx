'use client';

import Image from 'next/image';

interface CVSectionProps {
	title: string;
	data: { year: number; items: string[] }[];
	isExpanded: boolean;
	onToggle: () => void;
	onImageClick?: (
		images: { src: string; alt: string }[],
		initialIndex: number
	) => void;
}

export default function CVSection({
	title,
	data,
	isExpanded,
	onToggle,
	onImageClick,
}: CVSectionProps) {
	const handleImageClick = (
		images: { src: string; alt: string }[],
		initialIndex: number
	) => {
		if (onImageClick) onImageClick(images, initialIndex);
	};

	return (
		<section className={`${isExpanded ? 'mb-12' : 'mb-4'}`}>
			<button
				onClick={onToggle}
				className='w-full relative mb-6 border-b border-gray-300 dark:border-gray-700 pb-2'
			>
				<h2 className='text-xl font-semibold text-center'>{title}</h2>
				<span className='absolute right-0 top-1/2 -translate-y-1/2 text-2xl'>
					{isExpanded ? '−' : '+'}
				</span>
			</button>

			{isExpanded && (
				<div className='animate-fadeIn space-y-6'>
					{data.map(({ year, items }: { year: number; items: string[] }) => (
						<div
							key={year}
							className='rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900 p-4 shadow-sm'
						>
							<h3 className='text-lg font-bold text-gray-800 dark:text-gray-100 text-center mb-4'>
								{year}
							</h3>

							<div className='space-y-4'>
								{items.map((item: string, i: number) => {
									// ✅ Item text
									const content = (
										<p className='text-gray-700 dark:text-gray-300 text-center font-medium'>
											{item}
										</p>
									);

									// ✅ Inject YouTube embed only for the specific collaboration line
									const isThunderFox =
										title === 'Collaborations' &&
										item.includes('Illustrated animation for Thunder Fox E.P.');

									if (isThunderFox) {
										return (
											<div key={i} className='space-y-3'>
												{content}
												<div className='relative w-full aspect-video rounded-lg overflow-hidden shadow'>
													<iframe
														src='https://www.youtube.com/embed/1SyTzt6LW1A'
														title="Thunder Fox — 'The Best.' (Illustrated animation)"
														className='absolute inset-0 w-full h-full'
														frameBorder='0'
														allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
														allowFullScreen
													/>
												</div>
											</div>
										);
									}

									// 🔽 Existing thumbnail galleries below stay unchanged
									if (item.includes('Welcome To The Dinner Party')) {
										const images = [...Array(8)].map((_, imgIndex) => ({
											src: `/cv/platform-exhibition/0${imgIndex + 1}.jpg`,
											alt: `Exhibition Image ${imgIndex + 1}`,
										}));
										return (
											<div key={i} className='space-y-3'>
												{content}
												<div className='relative'>
													<div className='w-full overflow-x-auto px-4 scroll-px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
														<div className='flex gap-3 w-max mx-auto snap-x snap-mandatory'>
															{images.map((img, index) => (
																<button
																	key={index}
																	onClick={() =>
																		handleImageClick(images, index)
																	}
																	className='w-40 h-40 flex-shrink-0 snap-start hover:opacity-80 transition-opacity cursor-pointer'
																>
																	<Image
																		src={img.src}
																		alt={img.alt}
																		width={160}
																		height={160}
																		className='w-full h-full object-cover rounded'
																		unoptimized
																	/>
																</button>
															))}
															<div
																className='shrink-0 w-1'
																aria-hidden='true'
															/>
														</div>
													</div>
													<div
														className='pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white/90 dark:from-[#0a0a0a]/90 to-transparent rounded-l'
														aria-hidden='true'
													/>
													<div
														className='pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/90 dark:from-[#0a0a0a]/90 to-transparent rounded-r'
														aria-hidden='true'
													/>
												</div>
											</div>
										);
									}

									if (item.includes('Prisma Collective')) {
										const images = [...Array(11)].map((_, imgIndex) => ({
											src: `/cv/prisma-residency/${imgIndex < 9 ? '0' : ''}${
												imgIndex + 1
											}.jpg`,
											alt: `Prisma Collective Image ${imgIndex + 1}`,
										}));
										return (
											<div key={i} className='space-y-3'>
												{content}
												<div className='relative'>
													<div className='w-full overflow-x-auto px-4 scroll-px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
														<div className='flex gap-3 w-max mx-auto snap-x snap-mandatory'>
															{images.map((img, index) => (
																<button
																	key={index}
																	onClick={() =>
																		handleImageClick(images, index)
																	}
																	className='w-40 h-40 flex-shrink-0 snap-start hover:opacity-80 transition-opacity cursor-pointer'
																>
																	<Image
																		src={img.src}
																		alt={img.alt}
																		width={160}
																		height={160}
																		className='w-full h-full object-cover rounded'
																		unoptimized
																	/>
																</button>
															))}
															<div
																className='shrink-0 w-1'
																aria-hidden='true'
															/>
														</div>
													</div>
													<div
														className='pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white/90 dark:from-[#0a0a0a]/90 to-transparent rounded-l'
														aria-hidden='true'
													/>
													<div
														className='pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/90 dark:from-[#0a0a0a]/90 to-transparent rounded-r'
														aria-hidden='true'
													/>
												</div>
											</div>
										);
									}

									if (item.includes('Buinho Creative Hub')) {
										const images = [...Array(4)].map((_, imgIndex) => ({
											src: `/cv/messejana-residency/0${imgIndex + 1}.jpg`,
											alt: `Buinho Creative Hub Image ${imgIndex + 1}`,
										}));
										return (
											<div key={i} className='space-y-3'>
												{content}
												<div className='relative'>
													<div className='w-full overflow-x-auto px-4 scroll-px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
														<div className='flex gap-3 w-max mx-auto snap-x snap-mandatory'>
															{images.map((img, index) => (
																<button
																	key={index}
																	onClick={() =>
																		handleImageClick(images, index)
																	}
																	className='w-40 h-40 flex-shrink-0 snap-start hover:opacity-80 transition-opacity cursor-pointer'
																>
																	<Image
																		src={img.src}
																		alt={img.alt}
																		width={160}
																		height={160}
																		className='w-full h-full object-cover rounded'
																		unoptimized
																	/>
																</button>
															))}
															<div
																className='shrink-0 w-1'
																aria-hidden='true'
															/>
														</div>
													</div>
													<div
														className='pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white/90 dark:from-[#0a0a0a]/90 to-transparent rounded-l'
														aria-hidden='true'
													/>
													<div
														className='pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/90 dark:from-[#0a0a0a]/90 to-transparent rounded-r'
														aria-hidden='true'
													/>
												</div>
											</div>
										);
									}

									if (
										item.includes(
											'GlogAUair, curated by Justin Ross and Laura Olea Lopez. Berlin, Germany.'
										)
									) {
										const images = [...Array(9)].map((_, imgIndex) => ({
											src: `/cv/glogauair-residency/0${imgIndex + 1}.jpg`,
											alt: `GlogAUair Image ${imgIndex + 1}`,
										}));
										return (
											<div key={i} className='space-y-3'>
												{content}
												<div className='relative'>
													<div className='w-full overflow-x-auto px-4 scroll-px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
														<div className='flex gap-3 w-max mx-auto snap-x snap-mandatory'>
															{images.map((img, index) => (
																<button
																	key={index}
																	onClick={() =>
																		handleImageClick(images, index)
																	}
																	className='w-40 h-40 flex-shrink-0 snap-start hover:opacity-80 transition-opacity cursor-pointer'
																>
																	<Image
																		src={img.src}
																		alt={img.alt}
																		width={160}
																		height={160}
																		className='w-full h-full object-cover rounded'
																		unoptimized
																	/>
																</button>
															))}
															<div
																className='shrink-0 w-1'
																aria-hidden='true'
															/>
														</div>
													</div>
													<div
														className='pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white/90 dark:from-[#0a0a0a]/90 to-transparent rounded-l'
														aria-hidden='true'
													/>
													<div
														className='pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/90 dark:from-[#0a0a0a]/90 to-transparent rounded-r'
														aria-hidden='true'
													/>
												</div>
											</div>
										);
									}

									// Default (no thumbnails / no embed)
									return (
										<div key={i} className='space-y-3'>
											{content}
										</div>
									);
								})}
							</div>
						</div>
					))}
				</div>
			)}
		</section>
	);
}
