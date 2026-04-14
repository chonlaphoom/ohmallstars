import type { Component } from 'solid-js';
import { useTheme } from '../contexts/ThemeContext';

const Footer: Component = () => {
	return (
		<footer class="border-t border-gray-200 dark:border-gray-700 mt-auto bg-gray-50 dark:bg-gray-950 transition-colors">
			<div class="max-w-4xl mx-auto px-6 py-12">
				<div class="text-center space-y-6">
					<div class="flex justify-between items-center max-w-md mx-auto">
						<SocialLinks />
						<ToggleThemeButton />
					</div>
					<AllRightsReserved />
				</div>
			</div>
		</footer>
	);
};

const AllRightsReserved: Component = () => {
	const currentYear = new Date().getFullYear();
	return (
		<p class="text-sm text-gray-500 dark:text-gray-500">&copy; {currentYear} All rights reserved.</p>
	);
}

const ToggleThemeButton: Component = () => {
	const { theme, toggleTheme } = useTheme();
	return (<button
		onClick={toggleTheme}
		class="relative inline-flex items-center h-7 w-14 rounded-full border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 transition-colors duration-200 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700 hover: cursor-pointer"
		aria-label="Toggle theme"
	>
		<span
			class={`inline-flex items-center justify-center h-5 w-5 rounded-full transform bg-white dark:bg-gray-900 shadow-sm transition-transform duration-200 ${theme() === 'dark' ? 'translate-x-8' : 'translate-x-1'
				}`}
		>
			{theme() === 'light' ? (
				<svg class="w-3 h-3 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
				</svg>
			) : (
				<svg class="w-3 h-3 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
				</svg>
			)}
		</span>
	</button>)
}

const SocialLinks: Component = () => {
	return (<div class="flex gap-6">
		<a
			href="https://github.com/chonlaphoom"
			target="_blank"
			rel="noopener noreferrer"
			class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
			aria-label="GitHub"
		>
			<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
			</svg>
		</a>
		<a
			href="https://www.linkedin.com/in/chonlaphoomth/"
			target="_blank"
			rel="noopener noreferrer"
			class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
			aria-label="LinkedIn"
		>
			<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		</a>
	</div>)
}

export default Footer;
