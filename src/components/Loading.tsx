import type { Component } from 'solid-js';

const Loading: Component = () => {
	return (
		<div class="flex items-center justify-center min-h-[60vh]" role="status" aria-live="polite">
			<div class="text-center space-y-4">
				<div class="text-gray-600 dark:text-gray-400 font-mono text-2xl">
					<span class="inline-block animate-pulse">▮</span>
				</div>
				<p class="text-sm text-gray-500 dark:text-gray-500 font-mono">Loading...</p>
			</div>
		</div>
	);
};

export default Loading;
