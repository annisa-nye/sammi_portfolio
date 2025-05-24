import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: 'Sammi Carr Portfolio',
	description: 'Explore the art and creative work of Sammi Carr.',
	icons: {
		icon: [
			{ url: '/logo/logo_favicon/favicon.ico' },
			{
				url: '/logo/logo_favicon/favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png',
			},
			{
				url: '/logo/logo_favicon/favicon-32x32.png',
				sizes: '32x32',
				type: 'image/png',
			},
		],
		apple: [
			{
				url: '/logo/logo_favicon/apple-touch-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
		],
		other: [
			{
				url: '/logo/logo_favicon/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				url: '/logo/logo_favicon/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	},
	manifest: '/logo/logo_favicon/site.webmanifest',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={`${inter.variable}`}>
			<body className='font-sans bg-white text-black'>
				<Nav />
				{children}
			</body>
		</html>
	);
}
