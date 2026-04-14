import type { Component, JSX } from 'solid-js';

interface ContainerProps {
	children: JSX.Element;
	class?: string;
}

const Container: Component<ContainerProps> = (props) => {
	return (
		<div class={`max-w-4xl mx-auto px-6 ${props.class || ''}`}>
			{props.children}
		</div>
	);
};

export default Container;
