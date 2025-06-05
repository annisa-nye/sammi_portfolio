'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>('light');

	// Apply theme to HTML element
	const applyTheme = (selectedTheme: Theme) => {
		const root = document.documentElement;
		root.classList.remove('dark');
		if (selectedTheme === 'dark') {
			root.classList.add('dark');
		}
	};

	// Initialize theme on mount
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') as Theme | null;
		if (savedTheme) {
			setTheme(savedTheme);
			applyTheme(savedTheme);
		} else {
			const systemPrefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;
			const initialTheme = systemPrefersDark ? 'dark' : 'light';
			setTheme(initialTheme);
			applyTheme(initialTheme);
			localStorage.setItem('theme', initialTheme);
		}
	}, []);

	// Watch for theme changes and apply them
	useEffect(() => {
		applyTheme(theme);
	}, [theme]);

	const handleSetTheme = (newTheme: Theme) => {
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	const toggleTheme = () => {
		handleSetTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<ThemeContext.Provider
			value={{ theme, setTheme: handleSetTheme, toggleTheme }}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}

// Custom hook for getting theme-specific asset paths
export function useThemeAssets() {
	const { theme } = useTheme();

	const getLogoSrc = (animated: boolean = true) => {
		const extension = animated ? 'gif' : 'png';
		return theme === 'dark'
			? `/dark_mode/dark_logo/logo-invert.${extension}`
			: `/logo/logo.${extension}`;
	};

	const getHeadingSrc = (name: string) => {
		return theme === 'dark'
			? `/dark_mode/dark_headings/${name}-invert.png`
			: `/headings/${name}.png`;
	};

	const getAnimationFolder = () => {
		return theme === 'dark'
			? 'dark_mode/dark_animation_preview'
			: 'animation_preview';
	};

	return {
		getLogoSrc,
		getHeadingSrc,
		getAnimationFolder,
		isDark: theme === 'dark',
	};
}
