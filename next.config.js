/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for S3 deployment
  output: 'export',
  
  // Disable server-side features for static export
  trailingSlash: true,
  
  // Image optimization settings
  images: {
    unoptimized: true, // Required for static export
    domains: ['sammi-portfolio-images.s3.ap-southeast-2.amazonaws.com'],
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
  
  // Build optimizations
  experimental: {
    optimizeCss: true,
  },
  
  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all';
    }
    
    return config;
  },
};

module.exports = nextConfig;
 