'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Try different S3 bucket URL formats
const S3_BASE_URLS = {
	default: 'https://sammi-portfolio-images.s3.amazonaws.com',
	ap_southeast:
		'https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com',
	direct:
		'https://sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com/gallery/graphic-design',
};

// Graphic design images data with more detailed information
const graphicDesignImages = [
	{
		filename: '01.jpg',
		title: 'Graphic Design 1',
		description: 'Digital Design',
	},
	{
		filename: '02.jpg',
		title: 'Graphic Design 2',
		description: 'Digital Design',
	},
	{
		filename: '03.jpg',
		title: 'Graphic Design 3',
		description: 'Digital Design',
	},
	{
		filename: '04.jpg',
		title: 'Graphic Design 4',
		description: 'Digital Design',
	},
	{
		filename: '05.jpg',
		title: 'Graphic Design 5',
		description: 'Digital Design',
	},
];

export default function GraphicDesignGallery() {
	const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
	const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
	const [currentBaseUrl, setCurrentBaseUrl] = useState(S3_BASE_URLS.default);
	const [testResults, setTestResults] = useState<Record<string, boolean>>({});

	// Test image URLs when component mounts
	useEffect(() => {
		const testImageUrl = async (url: string) => {
			try {
				const response = await fetch(url, { method: 'HEAD' });
				return response.ok;
			} catch (error) {
				console.error(`Error testing URL ${url}:`, error);
				return false;
			}
		};

		const testUrls = async () => {
			const results: Record<string, boolean> = {};
			for (const [key, baseUrl] of Object.entries(S3_BASE_URLS)) {
				const testUrl = `${baseUrl}/gallery/graphic-design/01.jpg`;
				results[key] = await testImageUrl(testUrl);
				console.log(
					`Testing ${key} URL: ${testUrl} - ${
						results[key] ? 'Success' : 'Failed'
					}`
				);
			}
			setTestResults(results);
		};

		testUrls();
	}, []);

	const handleImageError = (imageId: string, imageUrl: string) => {
		console.error(`Failed to load image: ${imageId} from ${imageUrl}`);
		setImageErrors((prev) => ({ ...prev, [imageId]: true }));
	};

	const handleImageLoad = (imageId: string) => {
		console.log(`Successfully loaded image: ${imageId}`);
		setLoadedImages((prev) => ({ ...prev, [imageId]: true }));
	};

	const handleBaseUrlChange = (baseUrl: string) => {
		setCurrentBaseUrl(baseUrl);
		// Reset states when changing base URL
		setImageErrors({});
		setLoadedImages({});
	};

	return (
		<div className='min-h-screen p-6 pt-20'>
			<div className='max-w-7xl mx-auto'>
				<h1 className='text-4xl font-bold mb-10 text-center'>Graphic Design</h1>

				{/* URL Testing Results */}
				<div className='mb-8 p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg'>
					<h2 className='text-lg font-semibold mb-4'>S3 Bucket URL Testing</h2>
					<div className='space-y-2'>
						{Object.entries(S3_BASE_URLS).map(([key, url]) => (
							<div key={key} className='flex items-center gap-4'>
								<button
									onClick={() => handleBaseUrlChange(url)}
									className={`px-4 py-2 rounded ${
										currentBaseUrl === url
											? 'bg-blue-500 text-white'
											: 'bg-gray-200 dark:bg-zinc-700'
									}`}
								>
									Use {key} URL
								</button>
								<span className='text-sm'>
									{url} -{' '}
									{testResults[key] ? '✅ Accessible' : '❌ Not accessible'}
								</span>
							</div>
						))}
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{graphicDesignImages.map((image) => {
						const imageId = image.filename;
						const imageUrl = `${currentBaseUrl}/gallery/graphic-design/${imageId}`;
						const isLoading = !loadedImages[imageId] && !imageErrors[imageId];

						return (
							<figure
								key={imageId}
								className='bg-white dark:bg-zinc-900 rounded-lg shadow-lg overflow-hidden'
							>
								<div className='relative aspect-square'>
									{isLoading && (
										<div className='absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-zinc-800'>
											<div className='animate-pulse text-gray-400'>
												Loading...
											</div>
										</div>
									)}

									{!imageErrors[imageId] && (
										<Image
											src={imageUrl}
											alt={image.title}
											fill
											className={`object-cover transition-opacity duration-300 ${
												loadedImages[imageId] ? 'opacity-100' : 'opacity-0'
											}`}
											sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
											priority={image.filename === '01.jpg'}
											onError={() => handleImageError(imageId, imageUrl)}
											onLoad={() => handleImageLoad(imageId)}
											unoptimized
										/>
									)}

									{imageErrors[imageId] && (
										<div className='w-full h-full flex items-center justify-center bg-gray-100 dark:bg-zinc-800'>
											<div className='text-center p-4'>
												<p className='text-gray-500 dark:text-gray-400 mb-2'>
													Image not available
												</p>
												<p className='text-sm text-gray-400 dark:text-gray-500 break-all'>
													{imageUrl}
												</p>
											</div>
										</div>
									)}
								</div>
								<figcaption className='p-4 text-center'>
									<h3 className='font-medium text-lg mb-1'>{image.title}</h3>
									<p className='text-sm text-gray-600 dark:text-gray-400'>
										{image.description}
									</p>
								</figcaption>
							</figure>
						);
					})}
				</div>

				{/* Debug information */}
				<div className='mt-8 p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg'>
					<h2 className='text-lg font-semibold mb-2'>Debug Information</h2>
					<div className='text-sm space-y-1'>
						<p>
							<strong>Current Base URL:</strong> {currentBaseUrl}
						</p>
						<p>
							<strong>Image Path:</strong> /gallery/graphic-design/
						</p>
						<p>
							<strong>Total Images:</strong> {graphicDesignImages.length}
						</p>
						<p>
							<strong>Failed Images:</strong> {Object.keys(imageErrors).length}
						</p>
						<p>
							<strong>Loaded Images:</strong> {Object.keys(loadedImages).length}
						</p>
						<p>
							<strong>Example URL:</strong>{' '}
							{`${currentBaseUrl}/gallery/graphic-design/01.jpg`}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
