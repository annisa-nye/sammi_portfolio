export interface Painting {
	title?: string;
	year: number;
	filename: string;
}

export interface PaintingMedium {
	medium: string;
	images: Painting[];
}

export interface PaintingsData {
	paintings: PaintingMedium[];
}

export interface GallerySection {
	title: string;
	images: string[];
	paintings?: PaintingsData;
}

// Export all types
export type { Painting, PaintingMedium, PaintingsData, GallerySection };
 