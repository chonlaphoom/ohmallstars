import { createContext, useContext, createSignal, JSX, onMount } from 'solid-js';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
	theme: () => Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>();

export function ThemeProvider(props: { children: JSX.Element }) {
	const [theme, setTheme] = createSignal<Theme>('light');
	onMount(() => {
		const savedTheme = localStorage.getItem('theme') as Theme | null;
		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.classList.toggle('dark', savedTheme === 'dark');
		} else {
			// Check system preference
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (prefersDark) {
				setTheme('dark');
				document.documentElement.classList.add('dark');
			}
		}
	});

	const toggleTheme = () => {
		const newTheme = theme() === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		document.documentElement.classList.toggle('dark', newTheme === 'dark');
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within ThemeProvider');
	}
	return context;
}
