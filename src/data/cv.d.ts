export interface CVItem {
	year: number;
	items: string[];
}

export interface CV {
	exhibitions: CVItem[];
	residencies: CVItem[];
	collaborations: CVItem[];
}

export const cv: CV;
