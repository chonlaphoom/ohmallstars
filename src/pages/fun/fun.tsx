import Container from "../../components/Container";

export default function Fun() {
	return (
		<Container>
			<div class="py-16 space-y-8">
				<header class="space-y-4">
					<div class="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500 font-mono font-normal cursor-blink">
						<span class="text-gray-600 dark:text-gray-400">$</span> {'cat life.txt &> /dev/null'}
					</div>
					<h1 class="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100">
						<span class="text-gray-600 dark:text-gray-400">[</span> Fun Stuff{' '}
						<span class="text-gray-600 dark:text-gray-400">]</span>
					</h1>
					<p class="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-mono">
						// Memes, stories, and random chaos
					</p>
				</header>

				<section class="space-y-6">
					<div class="p-8 border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-900 text-center">
						<p class="text-gray-600 dark:text-gray-400 font-mono text-sm">
							<span class="text-yellow-600 dark:text-yellow-400">&gt;&gt;</span> Under construction...
						</p>
						<p class="text-gray-500 dark:text-gray-500 font-mono text-xs mt-4">
							// TODO: Add memes and funny stories here
						</p>
						<div class="mt-6 text-4xl">
							🚧
						</div>
					</div>
				</section>
			</div>
		</Container>
	);
}
