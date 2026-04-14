import { A } from '@solidjs/router';
import { For } from 'solid-js';
import { linkedInPosts } from './data';

export default function Home() {
	return (
		<div class="max-w-4xl mx-auto px-6 py-16">
			<div class="text-center space-y-12">
				<section class="space-y-6">
					<TitleComponent />
					<SubtitleComponent />
				</section>
				<section class="space-y-4 py-8">
					<DescriptionComponent />
					<LearnMoreComponent />
				</section>
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
			<LinkedInSection />
		</div>
	);
}

const LinkedInSection = () => {
	return (
		<section class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
			<h2 class="text-2xl md:text-3xl font-light text-gray-900 dark:text-gray-100 text-center mb-8 px-6">
				Recent Posts
			</h2>
			<div class="linkedin-posts-container overflow-x-auto flex gap-4 md:gap-6 pb-4 snap-x snap-mandatory">
				<For each={linkedInPosts}>
					{(post, index) => (
						<div class={`flex-shrink-0 snap-center h-[600px] md:h-[700px] ${index() === 0 ? 'ml-4 md:ml-6' : ''} ${index() === linkedInPosts.length - 1 ? 'mr-4 md:mr-6' : ''} w-[calc(100vw-2rem)] md:w-[504px]`}>
							<iframe
								src={post.embedUrl}
								frameborder="0"
								allowfullscreen
								title="Embedded LinkedIn post"
								class="w-full h-full border border-gray-200 dark:border-gray-700 rounded"
								loading="lazy"
							/>
						</div>
					)}
				</For>
			</div>
		</section>
	);
}

const SubtitleComponent = () => {
	// return (
	// 	<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
	// 		Software Developer | Tech Enthusiast | Problem Solver
	// 	</p>
	// );
	return null;
}

const TitleComponent = () => {
	return (
		<h1 class="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 cursor-blink">
			Hi, I'm <span class="font-bold">Chonlaphoom Thaiyanto</span>.
		</h1>
	);
}

const DescriptionComponent = () => {
	return (
		<p class="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
			☕ Powered by caffeine and the pursuit of simplicity.
			I have spent 9 years inch in the software trenches.
			A slow thinker in a fast world. Yup, I'm the one who reads the manual... twice.</p>
	);
}
const LearnMoreComponent = () => {
	return (
		<A
			href="/about"
			class="inline-block text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
		>
			Learn more →
		</A>
	);
}
