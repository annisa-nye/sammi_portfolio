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
