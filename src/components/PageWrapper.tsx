'use client';

import { ReactNode } from 'react';
import Nav from './Nav';
import Footer from './Footer';

interface PageWrapperProps {
	children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
	return (
		<>
			<Nav />
			{children}
			<Footer />
		</>
	);
}
