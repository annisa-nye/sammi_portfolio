// src/components/SystemThemeHeading.tsx
import * as React from 'react';

type Props = {
	name: string;
	width?: number;
	height?: number;
	className?: string;
	priority?: boolean;
};

/**
 * SSR-safe heading image that switches via prefers-color-scheme using local assets.
 * No client JS, no hydration mismatches.
 */
export default function SystemThemeHeading({
	name,
	width = 500,
	height = 150,
	className = '',
	priority = false,
}: Props) {
	return (
		<picture className={className}>
			<source
				srcSet={`/headings-dark/${name}-invert.png`}
				media='(prefers-color-scheme: dark)'
			/>
			<img
				src={`/headings/${name}.png`}
				alt={name}
				width={width}
				height={height}
				className='mx-auto mb-10'
				loading={priority ? 'eager' : 'lazy'}
				fetchPriority={priority ? 'high' : 'auto'}
			/>
		</picture>
	);
}
