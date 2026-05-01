import Container from '../../components/Container';
import { A } from '@solidjs/router';
import { createSignal, For, Show } from 'solid-js';
import { blogPosts, type BlogPost as BlogPostData } from './data';

export default function Blogs() {
	const postsDerived = Object.values(blogPosts).map((p: BlogPostData) => {
		let excerpt = p.excerpt;
		if (!excerpt && p.content) {
			const firstParagraph = p.content
				.split(/\r?\n/)
				.map((s) => s.trim())
				.find((s) => s.length > 0 && !s.startsWith('#') && !s.startsWith('```'));
			if (firstParagraph) {
				excerpt = firstParagraph.length > 160 ? `${firstParagraph.slice(0, 157)}…` : firstParagraph;
			}
		}

		return {
			id: p.id,
			title: p.title,
			date: p.date,
			excerpt,
			image: p.image ?? '/placeholder-blog.png',
		};
	})
		// Sort newest first (ISO date strings)
		.sort((a, b) => b.date.localeCompare(a.date));

	const [posts] = createSignal(postsDerived);

	return (
		<Container class="py-16">
			<div class="space-y-16">
				<section>
					<div class="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500 font-mono font-normal mb-2 cursor-blink">
						<span class="text-gray-600 dark:text-gray-400">$</span> ls -la posts/
					</div>
					<h1 class="text-2xl sm:text-3xl font-light text-gray-900 dark:text-gray-100 mb-2">Blogs</h1>
					<p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-mono">// Thoughts and writings</p>
				</section>

				<section class="space-y-8">
					<Show
						when={posts().length > 0}
						fallback={<ComingSoon />}
					>
						<For each={posts()}>
							{(post) => (
                <A
                  href={`/blogs/${post.id}`}
                  class="block group bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:bg-white dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all hover-lift h-full"
                >
                  <article class="flex flex-col sm:flex-row gap-6 p-6 h-full min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
										<div class="flex-1 space-y-3">
											<header class="space-y-2">
												<h2 class="text-xl sm:text-2xl font-light text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
													{post.title}
												</h2>
												<div class="text-xs sm:text-sm text-gray-500 dark:text-gray-500 font-mono">
													<span class="text-gray-600 dark:text-gray-400">»</span> {post.date}
												</div>
											</header>

                      <Show when={post.excerpt}>
                        <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed overflow-hidden max-h-[4.5rem]">
                          {post.excerpt}
                        </p>
                      </Show>

											<div class="text-xs sm:text-sm text-gray-500 dark:text-gray-500 font-mono pt-2">
												<span class="group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
													→ Read more
												</span>
											</div>
										</div>

										{/* Image preview space */}
										<div class="sm:w-48 sm:flex-shrink-0">
											<Show
												when={post.image}
												fallback={
													<div class="w-full h-32 sm:h-full bg-gray-200 dark:bg-gray-800 rounded flex items-center justify-center">
														<span class="text-gray-400 dark:text-gray-600 font-mono text-xs">
															[img]
														</span>
													</div>
												}
											>
												<img
													src={post.image}
													alt={post.title}
													class="w-full h-32 sm:h-full object-cover rounded"
												/>
											</Show>
										</div>
									</article>
								</A>
							)}
						</For>
					</Show>
				</section>
			</div>
		</Container>
	);
}

const ComingSoon = () => {
	return (<div class="text-gray-700 dark:text-gray-300">
		<div class="text-xs text-gray-500 dark:text-gray-500 font-mono mb-2">
			<span class="text-yellow-600 dark:text-yellow-400">[!]</span> No entries found
		</div>
		<p>Coming soon...</p>
	</div>)
}
