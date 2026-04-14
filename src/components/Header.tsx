import { A, useLocation } from '@solidjs/router';
import type { Component } from 'solid-js';
import Container from './Container';

const Header: Component = () => {
	const location = useLocation();
	
	const isActive = (path: string) => {
		if (path === '/') {
			return location.pathname === '/';
		}
		return location.pathname.startsWith(path);
	};

	return (
		<header class="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 transition-colors">
			<Container class="py-6">
				<nav class="flex items-center justify-center gap-6" role="navigation" aria-label="Main navigation">
					<ul class="flex items-center gap-4 md:gap-8">
						<li>
							<A
								href="/"
								class="font-mono text-gray-600 dark:text-gray-400 no-underline hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 text-sm md:text-base hover-scale"
								activeClass="text-gray-900 dark:text-gray-100"
							>
								{isActive('/') && <span class="text-gray-500 dark:text-gray-500 mr-1" aria-hidden="true">{'>'}</span>}
								Home
							</A>
						</li>
						<li>
							<A
								href="/experience"
								class="font-mono text-gray-600 dark:text-gray-400 no-underline hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 text-sm md:text-base hover-scale"
								activeClass="text-gray-900 dark:text-gray-100"
							>
								{isActive('/experience') && <span class="text-gray-500 dark:text-gray-500 mr-1" aria-hidden="true">{'>'}</span>}
								Experience
							</A>
						</li>
						<li>
							<A
								href="/about"
								class="font-mono text-gray-600 dark:text-gray-400 no-underline hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 text-sm md:text-base hover-scale"
								activeClass="text-gray-900 dark:text-gray-100"
							>
								{isActive('/about') && <span class="text-gray-500 dark:text-gray-500 mr-1" aria-hidden="true">{'>'}</span>}
								About
							</A>
						</li>
					</ul>
					<ProfileImage />
				</nav>
			</Container>
		</header>
	);
};

const ProfileImage: Component = () => {
	return <A href="/" class="flex-shrink-0 ml-2">
		<img
			src="/favicon.jpeg"
			alt="Home"
			class="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg"
		/>
	</A>
}

export default Header;
