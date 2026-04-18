import { A, useLocation } from '@solidjs/router';
import { createSignal, type Component } from 'solid-js';
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
		<header class="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 transition-colors relative z-10">
			<Container class="py-12">
				<nav class="flex items-center justify-between" role="navigation" aria-label="Main navigation">
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
                                href="/hire-me"
                                class="font-mono text-gray-600 dark:text-gray-400 no-underline hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 text-sm md:text-base hover-scale"
                                activeClass="text-gray-900 dark:text-gray-100"
                            >
                                {isActive('/hire-me') && <span class="text-gray-500 dark:text-gray-500 mr-1" aria-hidden="true">{'>'}</span>}
                                Hire Me
                            </A>
                        </li>
                        <li>
                            <A
                                href="/blogs"
                                class="font-mono text-gray-600 dark:text-gray-400 no-underline hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 text-sm md:text-base hover-scale"
                                activeClass="text-gray-900 dark:text-gray-100"
                            >
                                {isActive('/blogs') && <span class="text-gray-500 dark:text-gray-500 mr-1" aria-hidden="true">{'>'}</span>}
                                Blogs
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
	const [showPopup, setShowPopup] = createSignal(false);

	const handleClick = (e: MouseEvent) => {
		// Only trigger popup on small screens
		if (window.innerWidth < 640) {
			e.preventDefault();
			setShowPopup(true);
			setTimeout(() => setShowPopup(false), 2000);
		}
	};

	return <div class="flex items-center gap-2 md:gap-3 relative">
		<span class="text-xs md:text-sm text-gray-500 dark:text-gray-500 font-mono italic hidden sm:inline">
			that's me, laughing
		</span>
		{/* Popup for small screens */}
		<span 
			class={`absolute right-0 -top-10 bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 text-xs font-mono italic px-3 py-1.5 rounded whitespace-nowrap transition-opacity duration-300 sm:hidden ${showPopup() ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
		>
			that's me, laughing
		</span>
		<A href="/" class="flex-shrink-0" onClick={handleClick}>
			<img
				src="/favicon.jpeg"
				alt="Home"
				class="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-lg"
			/>
		</A>
	</div>
}

export default Header;
