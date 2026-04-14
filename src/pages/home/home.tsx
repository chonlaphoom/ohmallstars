import { A } from '@solidjs/router';
import { For } from 'solid-js';
import { linkedInPosts } from './data';

export default function Home() {
	return (
		<div class="max-w-4xl mx-auto px-6 py-16 relative">
			<div class="text-center space-y-12 relative z-10">
				<section class="space-y-6">
					<TitleComponent />
				</section>
				<section class="space-y-4 py-8">
					<DescriptionComponent />
					<LearnMoreComponent />
				</section>
				<section class="flex flex-wrap gap-4 justify-center pt-8">
					<A
						href="/experience"
						class="px-6 py-2 border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-all duration-300 no-underline hover-lift shadow-sm font-mono"
					>
						Experience
					</A>
					<A
						href="/about"
						class="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 no-underline hover-scale font-mono"
					>
						About
					</A>
					<A
						href="/blogs"
						class="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 no-underline hover-scale font-mono"
					>
						Blogs
					</A>
					<A
						href="/gallery"
						class="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 no-underline hover-scale font-mono"
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
		<section class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 relative z-10">
			<div class="text-center mb-8">
				<div class="text-xs md:text-sm text-gray-500 dark:text-gray-500 font-mono font-normal mb-2">
					<span class="text-gray-600 dark:text-gray-400">$</span> ls -la linkedin/posts/
				</div>
				<h2 class="text-2xl md:text-3xl font-light text-gray-900 dark:text-gray-100">
					Recent Posts
				</h2>
			</div>
			{/* 
				Note: LinkedIn iframes may show console warnings about getInstalledRelatedApps().
				This is a known LinkedIn issue and does not affect functionality.
			*/}
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

const TitleComponent = () => {
	return (
		<div class="space-y-2">
			<div class="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500 font-mono font-normal cursor-blink">
				<span class="text-gray-600 dark:text-gray-400">$</span> whoami
			</div>
			<h1 class="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100">
				<span class="font-bold">Chonlaphoom T.</span>
			</h1>
			<div class="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500 font-normal">
				Software Engineer <span class="font-mono text-green-600 dark:text-green-400 status-online">[ONLINE]</span>
			</div>
		</div>
	);
}

const DescriptionComponent = () => {
	return (
		<div class="max-w-2xl mx-auto">
			{/* Hide ASCII box on mobile, show on tablet+ */}
			<div class="hidden sm:block text-xs text-gray-400 dark:text-gray-600 mb-2">
				┌─────────────────────────────────────────┐
			</div>
			<p class="text-gray-700 dark:text-gray-300 leading-relaxed px-4">
				☕ Powered by caffeine and the pursuit of simplicity.
				A slow thinker in a fast world. Yup, I'm the one who reads the manual... twice.
			</p>
			<div class="hidden sm:block text-xs text-gray-400 dark:text-gray-600 mt-2">
				└─────────────────────────────────────────┘
			</div>
		</div>
	);
}
const LearnMoreComponent = () => {
	return (
		<A
			href="/about"
			class="inline-block text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-all duration-300 hover-scale"
		>
			Learn more »
		</A>
	);
}
