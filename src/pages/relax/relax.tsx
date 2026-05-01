import { For, createSignal } from 'solid-js';
import Container from '../../components/Container';
import { memes, type Meme } from './data';

const MemeCard = (props: { meme: Meme }) => {
	const [clickCount, setClickCount] = createSignal(0);

	const getClickMessage = (count: number, meme: Meme) => {
		if (!meme.hasClickCounter || !meme.clickMessages) return '';
		if (count >= meme.clickMessages.length) return `${count} clicks. Are you happy now?`;
		return meme.clickMessages[count];
	};

	return (
		<div class="space-y-4 max-w-sm md:max-w-md mx-auto">
			<div
				class={`border border-gray-300 dark:border-gray-700 rounded overflow-hidden shadow-lg ${props.meme.hasClickCounter ? 'cursor-pointer hover:shadow-xl transition-shadow' : ''}`}
				onClick={() => props.meme.hasClickCounter && setClickCount(prev => prev + 1)}
				title={props.meme.hasClickCounter ? "Click me!" : undefined}
			>
				<img
					src={props.meme.imageSrc}
					alt={props.meme.imageAlt}
					class="w-full h-auto"
				/>
			</div>

			{props.meme.description && (
				<p class="text-sm text-gray-600 dark:text-gray-400 font-mono text-center px-4 italic">
					{props.meme.description}
				</p>
			)}

			{props.meme.hasClickCounter && clickCount() > 0 && (
				<p class="text-sm font-mono text-red-600 dark:text-red-400 animate-pulse text-center">
					{getClickMessage(clickCount(), props.meme)}
				</p>
			)}

			{props.meme.creditText && props.meme.creditUrl && (
				<p class="text-xs text-gray-500 dark:text-gray-500 font-mono text-center">
					Image from{' '}
					<a
						href={props.meme.creditUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 underline"
					>
						{props.meme.creditText}
					</a>
				</p>
			)}
		</div>
	);
};

export default function Relax() {
	return (
		<Container class="py-16">
			<div class="space-y-16">
				<header class="space-y-4">
					<div class="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500 font-mono font-normal cursor-blink">
						<span class="text-gray-600 dark:text-gray-400">$</span> {'less memes'}
					</div>
					<h1 class="text-2xl sm:text-3xl font-light text-gray-900 dark:text-gray-100">
						<span class="text-gray-600 dark:text-gray-400">[</span> Relax{' '}
						<span class="text-gray-600 dark:text-gray-400">]</span>
					</h1>
					<p class="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-mono">
            // Memes, stories, and random chaos
					</p>
				</header>

				<section class="space-y-12">
					<For each={memes}>
						{(meme) => <MemeCard meme={meme} />}
					</For>
				</section>
			</div>
		</Container>
	);
}
