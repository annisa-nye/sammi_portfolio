'use client';

import PageWrapper from '@/components/PageWrapper';

export default function AboutPage() {
	return (
		<PageWrapper>
			<main className='pt-32 px-6 max-w-2xl mx-auto text-center'>
				<h1 className='text-3xl font-bold mb-8'>About</h1>

				<div className='mb-8'>
					<img
						src='/headshot.jpg' // 🔁 Replace with actual file name
						alt='Sammi Carr headshot'
						className='w-48 h-48 object-cover rounded mx-auto border border-gray-300 shadow-sm'
					/>
				</div>

				<p className='italic text-lg text-gray-800 dark:text-gray-200 leading-relaxed'>
					Born and raised in Western Australia, Sammi Carr currently lives and
					practices from the Illawarra/Dharawal land in New South Wales. Her
					working process prioritises open-ended exploration and experimenting
					with a variety of mediums. Favouring dynamic colour, form and shape,
					she uses satire and personal annotation to comment on current
					political, social and environmental landscapes. Sammi is self-taught
					and has evolved her practice by playing with concepts through abstract
					and figurative expression.
				</p>
			</main>
		</PageWrapper>
	);
}
