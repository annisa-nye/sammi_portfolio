'use client';

interface CVSectionProps {
	title: string;
	data: { year: number; items: string[] }[];
	isExpanded: boolean;
	onToggle: () => void;
}

export default function CVSection({
	title,
	data,
	isExpanded,
	onToggle,
}: CVSectionProps) {
	return (
		<section className={`${isExpanded ? 'mb-12' : 'mb-4'}`}>
			<button
				onClick={onToggle}
				className='w-full text-left flex items-center justify-between mb-6 border-b border-gray-300 dark:border-gray-700 pb-2'
			>
				<h2 className='text-xl font-semibold'>{title}</h2>
				<span className='text-2xl'>{isExpanded ? '−' : '+'}</span>
			</button>

			{isExpanded && (
				<div className='animate-fadeIn space-y-8 text-center'>
					{data.map(({ year, items }: { year: number; items: string[] }) => (
						<div key={year} className='space-y-2'>
							<h3 className='text-lg font-bold text-gray-800 dark:text-gray-100'>
								{year}
							</h3>
							{items.map((item: string, i: number) => (
								<div key={i}>
									<p className='text-gray-700 dark:text-gray-300'>{item}</p>
									{item.includes('Welcome To The Dinner Party') && (
										<div className='flex overflow-x-auto space-x-4 mt-4'>
											{[...Array(8)].map((_, index) => (
												<div key={index} className='w-48 h-48 flex-shrink-0'>
													<img
														src={`https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/cv/platform-exhibition/0${
															index + 1
														}.jpg`}
														alt={`Exhibition Image ${index + 1}`}
														className='w-full h-full object-cover'
													/>
												</div>
											))}
										</div>
									)}
									{item.includes('Prisma Collective') && (
										<div className='flex overflow-x-auto space-x-4 mt-4'>
											{[...Array(11)].map((_, index) => (
												<div key={index} className='w-48 h-48 flex-shrink-0'>
													<img
														src={`https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/cv/prisma-residency/${
															index < 9 ? '0' : ''
														}${index + 1}.jpg`}
														alt={`Prisma Collective Image ${index + 1}`}
														className='w-full h-full object-cover'
													/>
												</div>
											))}
										</div>
									)}
									{item.includes('Buinho Creative Hub') && (
										<div className='flex overflow-x-auto space-x-4 mt-4'>
											{[...Array(4)].map((_, index) => (
												<div key={index} className='w-48 h-48 flex-shrink-0'>
													<img
														src={`https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/cv/messejana-residency/0${
															index + 1
														}.jpg`}
														alt={`Buinho Creative Hub Image ${index + 1}`}
														className='w-full h-full object-cover'
													/>
												</div>
											))}
										</div>
									)}
									{item.includes('GlogAUair') && (
										<div className='flex overflow-x-auto space-x-4 mt-4'>
											{[...Array(9)].map((_, index) => (
												<div key={index} className='w-48 h-48 flex-shrink-0'>
													<img
														src={`https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/cv/glogauair-residency/0${
															index + 1
														}.jpg`}
														alt={`GlogAUair Image ${index + 1}`}
														className='w-full h-full object-cover'
													/>
												</div>
											))}
										</div>
									)}
								</div>
							))}
						</div>
					))}
				</div>
			)}
		</section>
	);
}
