import Container from '../../components/Container';
import { A, useParams } from '@solidjs/router';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { Accessor, createMemo, Show } from 'solid-js';
import { blogPosts } from './data';
import type { BlogPost } from './data';

// Configure marked to use highlight.js
marked.setOptions({
	highlight: function(code, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return hljs.highlight(code, { language: lang }).value;
			} catch (err) {
				console.error(err);
			}
		}
		return hljs.highlightAuto(code).value;
	}
});



export default function BlogPost() {
	const params = useParams<{ id: string }>();

	// In a real app, fetch from database based on params.id
	const post = () => blogPosts[params.id] || null;

	const html = createMemo(() => {
		const p = post();
		return p ? marked.parse(p.content) as string : '';
	});

	return (
		<Container class="py-16">
			<div class="space-y-8">
				<A
					href="/blogs"
					class="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-mono"
				>
					← Back to all posts
				</A>

				<Show
					when={post()}
					fallback={
						<div class="text-center py-16">
							<div class="text-gray-500 dark:text-gray-500 font-mono mb-4">
								<span class="text-red-600 dark:text-red-400">[404]</span> Post not found
							</div>
							<A
								href="/blogs"
								class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-mono text-sm"
							>
								← Return to blog list
							</A>
						</div>
					}
				>
					{(p: Accessor<BlogPost>) => (
						<article class="space-y-8">
							<header class="space-y-4 pb-8 border-b border-gray-200 dark:border-gray-800">
								<div class="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500 font-mono font-normal mb-2">
									<span class="text-gray-600 dark:text-gray-400">$</span> cat posts/{p().title.toLowerCase().replace(/\s+/g, '-')}.md
								</div>
								<h1 class="text-3xl sm:text-4xl font-light text-gray-900 dark:text-gray-100">
									{p().title}
								</h1>
								<div class="text-sm sm:text-base text-gray-500 dark:text-gray-500 font-mono">
									<span class="text-gray-600 dark:text-gray-400">»</span> {p().date}
								</div>
							</header>

							<div class="markdown-content" innerHTML={html()} />
						</article>
					)}
				</Show>
			</div>
		</Container>
	);
}
