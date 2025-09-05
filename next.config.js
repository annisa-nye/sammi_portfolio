/** @type {import('next').NextConfig} */
const nextConfig = {
	// Standard Next.js configuration for Vercel
	trailingSlash: false,

	// Image optimization settings
	images: {
		// No remote patterns needed since all images are local
	},

	// Security headers
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin',
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=()',
					},
				],
			},
		];
	},

	// Environment variables
	env: {
		CUSTOM_KEY: process.env.CUSTOM_KEY,
	},
};

module.exports = nextConfig;
