/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
