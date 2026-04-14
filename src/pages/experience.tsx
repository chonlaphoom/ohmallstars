import type { Component } from 'solid-js';

interface Experience {
	title: string;
	company: string;
	period: string;
	description: string;
}

const Experience: Component = () => {
	const experiences: Experience[] = [
		{
			title: 'Senior Software Engineer',
			company: 'Tech Company',
			period: '2022 - Present',
			description: 'Leading development of cutting-edge web applications using modern technologies.',
		},
		{
			title: 'Software Engineer',
			company: 'Startup Inc',
			period: '2020 - 2022',
			description: 'Developed full-stack web applications and contributed to product strategy.',
		},
		{
			title: 'Junior Developer',
			company: 'Digital Agency',
			period: '2018 - 2020',
			description: 'Worked on various client projects building responsive websites and web applications.',
		},
	];

	const skills = [
		'JavaScript', 'TypeScript', 'React', 'SolidJS', 'Node.js', 'Python',
		'SQL', 'Docker', 'Git', 'AWS', 'REST APIs', 'GraphQL',
	];

	return (
		<div class="max-w-4xl mx-auto px-6 py-16">
			<div class="space-y-16">
			<section>
				<h1 class="text-3xl font-light text-gray-900 dark:text-gray-100 mb-2 cursor-blink">Experience</h1>
				<p class="text-gray-600 dark:text-gray-400">My professional journey</p>
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

				<section class="space-y-4">
					<h2 class="text-xl text-gray-900 dark:text-gray-100">Skills</h2>
					<div class="flex flex-wrap gap-2">
						{skills.map((skill) => (
							<span class="px-3 py-1 text-sm text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
								{skill}
							</span>
						))}
					</div>
				</section>
			</div>
		</div>
	);
};

export default Experience;
