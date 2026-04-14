import { Suspense, type Component } from 'solid-js';
import Header from './components/Header';
import Footer from './components/Footer';

const App: Component<{ children: Element }> = (props) => {
	return (
		<div class="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
			<Header />
			
			<main class="flex-grow">
				<Suspense>{props.children}</Suspense>
			</main>
			
			<Footer />
		</div>
	);
};

export default App;
