interface CVSectionProps {
	title: string;
	data: { year: number; items: string[] }[];
	extraMargin?: boolean;
}

export default function CVSection({
	title,
	data,
	extraMargin,
}: CVSectionProps) {
	return (
		<section className={`${extraMargin ? 'mt-4' : ''} mb-12`}>
			<h2 className='text-xl font-semibold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2'>
				{title}
			</h2>
			<div className='space-y-8'>
				{data.map(({ year, items }) => (
					<div key={year} className='space-y-2'>
						<h3 className='text-lg font-bold text-gray-800 dark:text-gray-100'>
							{year}
						</h3>
						{items.map((item, i) => (
							<p key={i} className='text-gray-700 dark:text-gray-300'>
								{item}
							</p>
						))}
					</div>
				))}
			</div>
		</section>
	);
}
