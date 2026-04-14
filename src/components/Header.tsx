import { A } from '@solidjs/router';
import type { Component } from 'solid-js';
import Container from './Container';

const Header: Component = () => {
	return (
		<header class="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 transition-colors">
			<Container class="py-6">
				<nav class="flex items-center justify-center gap-6">
					<ul class="flex items-center gap-4 md:gap-8">
						<li>
							<A
								href="/"
								class="text-gray-600 dark:text-gray-400 no-underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sm md:text-base"
								activeClass="text-gray-900 dark:text-gray-100"
							>
								Home
							</A>
						</li>
						<li>
							<A
								href="/experience"
								class="text-gray-600 dark:text-gray-400 no-underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sm md:text-base"
								activeClass="text-gray-900 dark:text-gray-100"
							>
								Experience
							</A>
						</li>
						<li>
							<A
								href="/about"
								class="text-gray-600 dark:text-gray-400 no-underline hover:text-gray-900 dark:hover:text-gray-100 transition-colors text-sm md:text-base"
								activeClass="text-gray-900 dark:text-gray-100"
							>
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
			class="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-gray-100 transition-colors"
		/>
	</A>
}

export default Header;
