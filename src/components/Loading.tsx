import type { Component } from 'solid-js';

const Loading: Component = () => {
	return (
		<div class="flex items-center justify-center min-h-[60vh]" role="status" aria-live="polite">
			<div class="text-center space-y-4">
				<div class="text-gray-600 dark:text-gray-400 font-mono">
					<span class="inline-block animate-pulse">[</span>
					<span class="inline-block animate-pulse animation-delay-200">.</span>
					<span class="inline-block animate-pulse animation-delay-400">.</span>
					<span class="inline-block animate-pulse animation-delay-600">.</span>
					<span class="inline-block animate-pulse animation-delay-800">.</span>
					<span class="inline-block animate-pulse">]</span>
				</div>
				<p class="text-sm text-gray-500 dark:text-gray-500">Loading</p>
			</div>
		</div>
	);
};

export default Loading;
