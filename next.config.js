/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static export configuration
	output: 'export',
	trailingSlash: false,

	// Image optimization settings for static export
	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
