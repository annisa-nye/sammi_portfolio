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
								<p key={i} className='text-gray-700 dark:text-gray-300'>
									{item}
								</p>
							))}
						</div>
					))}
				</div>
			)}
		</section>
	);
}
