/* @refresh reload */
import 'solid-devtools';
import './index.css';

import { render } from 'solid-js/web';

import App from './app';
import { Router } from '@solidjs/router';
import { routes } from './routes';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement) || root === null) {
	throw new Error(
		'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
	);
}

render(
	() => <Router root={(props) => {
		const children = props.children as Element | undefined;
		if (!children) {
			throw new Error(
				'Router component is missing its children. Did you forget to wrap your routes with the App component?',
			);
		}

		return (<App>{children}</App>)
	}}>{routes}</Router>,
	root,
);
