export interface Painting {
	title: string;
	year: number;
	medium: string;
	filename: string;
}

export interface GallerySection {
	title: string;
	images: string[];
	paintings?: Painting[];
}
