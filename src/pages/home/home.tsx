import { A } from '@solidjs/router';
import { For, createSignal } from 'solid-js';
import { linkedInPosts } from './data';
import Container from '../../components/Container';

export default function Home() {
	return (
		<Container class="py-16 relative">
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
					<A
						href="/fun"
						class="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 no-underline hover-scale font-mono"
					>
						Fun
					</A>
				</section>
			</div>
			<LinkedInSection />
		</Container>
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
					Recent Linkedin Posts
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
	const statuses = ['ONLINE', 'AFK', 'CODING', 'DEBUGGING'];
	const statusColors = {
		'ONLINE': 'text-green-600 dark:text-green-400',
		'AFK': 'text-yellow-600 dark:text-yellow-400',
		'CODING': 'text-blue-600 dark:text-blue-400',
		'DEBUGGING': 'text-red-600 dark:text-red-400'
	};
	const [currentStatusIndex, setCurrentStatusIndex] = createSignal(0);

	const toggleStatus = () => {
		setCurrentStatusIndex((prev) => (prev + 1) % statuses.length);
	};

	const currentStatus = () => statuses[currentStatusIndex()];

	// Coffee counter (2 cups per day)
	const coffeeCups = '☕☕';

	return (
		<div class="space-y-2">
			<div class="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500 font-mono font-normal cursor-blink">
				<span class="text-gray-600 dark:text-gray-400">$</span> whoami
			</div>
			<h1 class="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100">
				<span class="font-bold">Chonlaphoom T.</span>
			</h1>
			<div class="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500 font-normal">
				Software Engineer{' '}
				<span
					class={`font-mono ${statusColors[currentStatus()]} status-online cursor-pointer hover:opacity-80 transition-opacity`}
					onClick={toggleStatus}
					title="Click to change status"
				>
					[{currentStatus()}]
				</span>
			</div>
			<div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-mono">
				Daily fuel: {coffeeCups}
			</div>
		</div>
	);
}

const DescriptionComponent = () => {
	const [gandalfClicks, setGandalfClicks] = createSignal(0);

	const getGandalfMessage = () => {
		const clicks = gandalfClicks();
		if (clicks === 0) return '';
		if (clicks === 1) return 'You shall not click!';
		if (clicks === 2) return 'You shall not click... again!';
		if (clicks === 3) return 'Seriously, stop clicking!';
		if (clicks === 4) return 'This is getting ridiculous...';
		if (clicks === 5) return 'Fine, you win. Click away.';
		return `${clicks} clicks. Are you happy now?`;
	};

	return (
		<div class="max-w-2xl mx-auto space-y-6">
			<div>
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

			{/* Gandalf Meme */}
			<div class="flex flex-col items-center gap-3 px-4">
				<div
					class="w-full max-w-sm md:max-w-md border border-gray-300 dark:border-gray-700 rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
					onClick={() => setGandalfClicks(prev => prev + 1)}
					title="Click me!"
				>
					<img
						src="/ian-mckellen-gandalf-takes-a-break-on-his-macbook-pro-while-v0-fi893h7fuzf81.jpg"
						alt="Ian McKellen as Gandalf taking a break with his MacBook on set"
						class="w-full h-auto"
					/>
				</div>
				{gandalfClicks() > 0 && (
					<p class="text-sm font-mono text-red-600 dark:text-red-400 animate-pulse">
						{getGandalfMessage()}
					</p>
				)}
				<p class="text-xs text-gray-500 dark:text-gray-500 font-mono text-center">
					Image from{' '}
					<a
						href="https://www.reddit.com/r/Moviesinthemaking/comments/sl45so/ian_mckellen_gandalf_takes_a_break_on_his_macbook/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 underline"
					>
						r/Moviesinthemaking
					</a>
				</p>
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
