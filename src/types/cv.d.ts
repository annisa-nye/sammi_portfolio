export interface CVItem {
	year: number;
	items: string[];
}

export interface CVData {
	exhibitions: CVItem[];
	residencies: CVItem[];
	collaborations: CVItem[];
}

declare module '@/data/cv' {
	const cv: CVData;
	export { cv };
}
