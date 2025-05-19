import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'sammi-portfolio-images.s3.amazonaws.com',
				pathname: '/gallery/graphic-design/**',
			},
			{
				protocol: 'https',
				hostname: 'sammi-portfolio-images.s3.amazonaws.com',
				pathname: '/gallery/painting/**',
			},
			// Add more patterns if you have other folders (collage, illustration, etc)
		],
	},
};

export default nextConfig;
