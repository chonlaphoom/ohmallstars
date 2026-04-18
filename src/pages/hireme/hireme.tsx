import type { Component } from 'solid-js';
import Container from '../../components/Container';
import { experiences } from './data';

const HireMe: Component = () => {
	return (
		<Container class="py-16">
			<div class="space-y-16">
				<section>
					<div class="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500 font-mono font-normal mb-2 cursor-blink">
						<span class="text-gray-600 dark:text-gray-400">$</span> cat hireme.md
					</div>
					<h1 class="text-2xl sm:text-3xl font-light text-gray-900 dark:text-gray-100 mb-2">Hire Me</h1>
					<p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-mono">// professional summary</p>
				</section>

				<section class="space-y-4">
					<p class="text-gray-700 dark:text-gray-300 leading-relaxed">
						I'm Chonlaphoom — a product-focused software engineer who builds reliable, maintainable web
						applications with attention to performance and accessibility. I enjoy turning ambiguous
						problems into clear, well-tested solutions and collaborating with teams to ship impact.
					</p>
					<p class="text-gray-700 dark:text-gray-300 leading-relaxed">
						I started my journey in software development back in 2018, driven by curiosity and a desire
						to build things that matter. Over the years, I've worked on a diverse range of projects,
						from small startup MVPs to large-scale enterprise applications.
					</p>
					<p class="text-gray-700 dark:text-gray-300 leading-relaxed">
						My approach to development is centered around clean code, continuous learning, and collaboration.
						I believe that the best solutions come from understanding both the technical requirements and
						the human needs behind them.
					</p>
					<p class="text-gray-700 dark:text-gray-300 leading-relaxed">
						Interested in working together? Please email me at <a href="mailto:chonlaphoomth@gmail.com" class="text-gray-900 dark:text-gray-100 underline">chonlaphoomth@gmail.com</a>.
					</p>
				</section>

				<section>
					<div class="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500 font-mono font-normal mb-2 cursor-blink">
						<span class="text-gray-600 dark:text-gray-400">$</span> git --no-pager log --parents
					</div>
					<h2 class="text-xl sm:text-2xl font-light text-gray-900 dark:text-gray-100 mb-4">Experience</h2>
					<div class="space-y-12">
						{experiences.map((exp) => (
							<div class="space-y-2 pb-8 border-b border-gray-200 dark:border-gray-700 last:border-0">
								<div class="flex justify-between items-baseline flex-wrap gap-2">
									<h3 class="text-xl text-gray-900 dark:text-gray-100">
										<span class="font-mono text-gray-500 dark:text-gray-500 text-sm mr-2">»</span>
										{exp.title}
									</h3>
									<span class="text-sm text-gray-500 dark:text-gray-500 font-mono">
										<span class="text-gray-600 dark:text-gray-400">[</span>{exp.period}<span class="text-gray-600 dark:text-gray-400">]</span>
									</span>
								</div>
								<p class="text-gray-600 dark:text-gray-400 pl-6">@ {exp.company}</p>
								<p class="text-gray-700 dark:text-gray-300 leading-relaxed pl-6">{exp.description}</p>
							</div>
						))}
					</div>

					<h2 class="text-xl sm:text-2xl font-light text-gray-900 dark:text-gray-100 mb-4">What Drives Me</h2>
					<div class="space-y-4 pl-4 border-l-2 border-gray-300 dark:border-gray-700 mb-6">
						<div>
							<h3 class="text-gray-900 dark:text-gray-100 mb-1"><span class="font-mono">»</span> Continuous Learning</h3>
							<p class="text-gray-600 dark:text-gray-400 text-sm">
								Technology evolves rapidly, and I'm committed to staying current with the latest trends
								and best practices.
							</p>
						</div>
						<div>
							<h3 class="text-gray-900 dark:text-gray-100 mb-1"><span class="font-mono">»</span> Problem Solving</h3>
							<p class="text-gray-600 dark:text-gray-400 text-sm">
								I thrive on tackling challenging problems and finding creative, efficient solutions
								that make a real impact.
							</p>
						</div>
						<div>
							<h3 class="text-gray-900 dark:text-gray-100 mb-1"><span class="font-mono">»</span> Collaboration</h3>
							<p class="text-gray-600 dark:text-gray-400 text-sm">
								Great software is built by great teams. I value open communication and knowledge sharing.
							</p>
						</div>
					</div>

					<h2 class="text-xl sm:text-2xl font-light text-gray-900 dark:text-gray-100 mb-4">Beyond Code</h2>
					<ul class="space-y-2 text-gray-700 dark:text-gray-300 pl-4">
						<li><span class="font-mono">▸</span> Reading tech blogs and books</li>
						<li><span class="font-mono">▸</span> Contributing to open source</li>
						<li><span class="font-mono">▸</span> Attending tech meetups and conferences</li>
						<li><span class="font-mono">▸</span> Experimenting with new frameworks</li>
					</ul>
				</section>
			</div>
		</Container>
	);
};

export default HireMe;
