'use client';

export default function AnimationGallery() {
	const videoUrl =
		'https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/gallery/animation/01.MOV';

	return (
		<main className='pt-24 px-6'>
			<h1 className='text-3xl font-bold mb-6 text-center'>Animations</h1>

			<div className='w-full aspect-video rounded overflow-hidden shadow'>
				<video
					src={videoUrl}
					autoPlay
					loop
					muted
					playsInline
					controls
					className='w-full h-full object-cover'
				/>
			</div>

			<p className='text-center text-sm text-gray-600 mt-4'>
				&ldquo;Untitled&rdquo; (2025) &mdash; looped animation preview
			</p>
		</main>
	);
}
