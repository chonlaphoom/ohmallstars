import { Suspense, type Component } from 'solid-js';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

const App: Component<{ children: Element }> = (props) => {
	return (
		<div class="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors home-terminal-bg">
			{/* Skip to main content link for keyboard navigation */}
			<a
				href="#main-content"
				class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gray-900 focus:text-white dark:focus:bg-gray-100 dark:focus:text-gray-900 focus:no-underline focus:rounded"
			>
				Skip to main content
			</a>
			<Header />
			<main id="main-content" class="flex-grow relative z-10" role="main">
				<Suspense fallback={<Loading />}>{props.children}</Suspense>
			</main>
			<Footer />
		</div>
	);
};

export default App;
