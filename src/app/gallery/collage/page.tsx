const files = [
	'01.jpg',
	'02.jpg',
	'03.jpg',
	'04.jpg',
	'05.jpg',
	'06.jpg',
	'07.jpg',
	'08.jpg',
	'09.jpg',
	'10.jpg',
	'11.jpg',
	'12.jpg',
	'13.jpg',
	'14.jpg',
	'15.jpg',
	'16.jpg',
]; // Add as many as you have

export default function CollageGallery() {
	return (
		<main className='p-6'>
			<h1 className='text-3xl font-bold mb-6 text-center'>Collage</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
				{files.map((file, i) => {
					const url = `https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/gallery/collage/${file}`;
					return (
						<img
							key={i}
							src={url}
							alt={`Collage ${i + 1}`}
							className='w-full h-auto rounded shadow object-cover'
						/>
					);
				})}
			</div>
		</main>
	);
}
