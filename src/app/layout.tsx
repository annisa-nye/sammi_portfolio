import './globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';

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
		<html lang='en'>
			<body className='font-sans bg-white text-black'>
				<Nav />
				<main>{children}</main>
			</body>
		</html>
	);
}
