import type { Component } from 'solid-js';
import { experiences } from './data';

const Experience: Component = () => {
	return (
		<div class="max-w-4xl mx-auto px-6 py-16">
			<div class="space-y-16">
				<section>
					<h1 class="text-3xl font-light text-gray-900 dark:text-gray-100 mb-2 cursor-blink">Experience</h1>
					<p class="text-gray-600 dark:text-gray-400">professional journey</p>
				</section>

				<section class="space-y-12">
					{experiences.map((exp) => (
						<div class="space-y-2 pb-8 border-b border-gray-200 dark:border-gray-700 last:border-0">
							<div class="flex justify-between items-baseline flex-wrap gap-2">
								<h2 class="text-xl text-gray-900 dark:text-gray-100">{exp.title}</h2>
								<span class="text-sm text-gray-500 dark:text-gray-500">{exp.period}</span>
							</div>
							<p class="text-gray-600 dark:text-gray-400">{exp.company}</p>
							<p class="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
						</div>
					))}
				</section>
			</div>
		</div>
	);
};

export default Experience;
