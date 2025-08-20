import type { PaintingsData } from '@/types/gallery';

export const paintingsData: PaintingsData = {
	paintings: [
		{
			medium: 'acrylic',
			images: [
				{ filename: '01.jpg', title: 'Here Is A Pear', year: 2024 },
				{ filename: '02.jpg', title: 'Here Is Another Pear', year: 2024 },
				{ filename: '03.jpg', year: 2024 },
				{ filename: '04.jpg', year: 2024 },
				{ filename: '05.jpg', year: 2024 },
				{ filename: '06.jpg', title: 'Freeze', year: 2021 },
				{ filename: '07.jpg', title: 'Bleach', year: 2021 },
				{ filename: '08.jpg', title: 'Brain snakes', year: 2021 },
				{ filename: '09.jpg', year: 2024 },
			],
		},
		{
			medium: 'oil',
			images: [
				{ filename: '01.jpg', title: 'Grievous Bodily Harm 1', year: 2023 },
				{ filename: '02.jpg', title: 'Grievous Bodily Harm 2', year: 2023 },
				{ filename: '03.jpg', title: 'Grievous Bodily Harm 3', year: 2023 },
				{ filename: '04.jpg', year: 2024 },
			],
		},
		{
			medium: 'gouache',
			images: [
				{ filename: '01.jpg', year: 2024 },
				{ filename: '02.jpg', year: 2024 },
				{ filename: '03.jpg', year: 2024 },
			],
		},
		{
			medium: 'mixed-media',
			images: [
				{
					filename: '01.jpg',
					title: "I'm Panicking at the Disco!",
					year: 2025,
				},
				{
					filename: '02.jpg',
					title: "Now I'm Yelling & Everyone Is Upset!",
					year: 2025,
				},
				{ filename: '03.jpg', title: 'Pulling Teeth', year: 2025 },
			],
		},
	],
};
