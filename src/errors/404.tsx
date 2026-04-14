import { A } from "@solidjs/router";
import Container from "../components/Container";

export default function NotFound() {
	return (
		<Container>
			<section class="text-gray-700 dark:text-gray-300 py-16 text-center" role="alert" aria-labelledby="error-heading">
				<div class="space-y-6">
					<div class="text-xs sm:text-sm text-gray-500 dark:text-gray-500 font-normal">
						<span class="text-red-600 dark:text-red-400">[ERROR]</span> Page not found
					</div>
					<h1 id="error-heading" class="text-3xl sm:text-4xl font-light text-gray-900 dark:text-gray-100 cursor-blink">
						404
					</h1>
					<p class="text-gray-600 dark:text-gray-400">
						The page you're looking for doesn't exist.
					</p>
					<div class="pt-4">
						<A
							href="/"
							class="inline-block px-6 py-2 border border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-100 hover:text-white dark:hover:text-gray-900 transition-colors no-underline"
						>
							« Back to Home
						</A>
					</div>
				</div>
			</section>
		</Container>
	);
}
