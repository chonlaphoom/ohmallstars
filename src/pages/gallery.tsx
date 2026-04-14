export default function Gallery() {
	return (
		<div class="max-w-4xl mx-auto px-6 py-16">
			<div class="space-y-16">
			<section>
				<div class="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500 font-mono font-normal mb-2 cursor-blink">
					<span class="text-gray-600 dark:text-gray-400">$</span> tree images/
				</div>
				<h1 class="text-2xl sm:text-3xl font-light text-gray-900 dark:text-gray-100 mb-2">Gallery</h1>
				<p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-mono">// Visual showcase</p>
			</section>

				<section class="space-y-8">
					<div class="text-gray-700 dark:text-gray-300">
						<div class="text-xs text-gray-500 dark:text-gray-500 font-mono mb-2">
							<span class="text-yellow-600 dark:text-yellow-400">[!]</span> Directory empty
						</div>
						<p>Coming soon...</p>
					</div>
				</section>
			</div>
		</div>
	);
}
