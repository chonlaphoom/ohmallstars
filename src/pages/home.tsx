import { A } from '@solidjs/router';

export default function Home() {
	return (
		<div class="max-w-4xl mx-auto px-6 py-16">
			<div class="text-center space-y-12">
				{/* Hero Section */}
			<section class="space-y-6">
				<h1 class="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 cursor-blink">
					Welcome
				</h1>
					<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Software Developer | Tech Enthusiast | Problem Solver
					</p>
				</section>

				{/* About Preview */}
				<section class="space-y-4 py-8">
					<p class="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
						I'm passionate about creating innovative solutions and sharing my knowledge through my work. 
						With years of experience in software development, I specialize in building modern web applications.
					</p>
					<A 
						href="/about" 
						class="inline-block text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
					>
						Learn more →
					</A>
				</section>

				{/* CTA */}
				<section class="flex flex-wrap gap-4 justify-center pt-8">
					<A 
						href="/experience" 
						class="px-6 py-2 border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-colors no-underline"
					>
						Experience
					</A>
					<A 
						href="/about" 
						class="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors no-underline"
					>
						About
					</A>
					<A 
						href="/blogs" 
						class="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors no-underline"
					>
						Blogs
					</A>
					<A 
						href="/gallery" 
						class="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors no-underline"
					>
						Gallery
					</A>
				</section>
			</div>
		</div>
	);
}
