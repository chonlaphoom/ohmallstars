import Container from '../../components/Container';
import { A, useParams } from '@solidjs/router';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { createMemo, Show } from 'solid-js';

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

interface BlogPost {
	id: string;
	title: string;
	date: string;
	content: string;
	excerpt?: string;
}

// Demo blog posts data - replace with your database fetch
const blogPosts: Record<string, BlogPost> = {
	'1': {
		id: '1',
		title: 'Example Blog Post',
		date: '2024-04-15',
		excerpt: 'This is a demo showing how markdown rendering works with syntax highlighting',
		content: `# Welcome to My Blog

This is an example post showing **markdown** rendering with _syntax highlighting_.

## Code Example

Here's some JavaScript code:

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return true;
}

greet('World');
\`\`\`

## Python Example

\`\`\`python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
\`\`\`

## Features

- Syntax highlighting ✓
- **Bold** and *italic* text
- \`inline code\`
- Links: [Visit GitHub](https://github.com)

> This is a blockquote with some wisdom.

### Lists Work Too

1. First item
2. Second item
3. Third item

---

*Replace this demo content with your database markdown!*
`
	},
	'2': {
		id: '2',
		title: 'Getting Started with SolidJS',
		date: '2024-04-10',
		content: `# Getting Started with SolidJS

SolidJS is a declarative JavaScript library for building user interfaces.

## Why SolidJS?

- **Fine-grained reactivity** - Only updates what changes
- **No Virtual DOM** - Direct DOM manipulation for better performance
- **Small bundle size** - Minimal runtime overhead

## Quick Example

\`\`\`typescript
import { createSignal } from 'solid-js';

function Counter() {
  const [count, setCount] = createSignal(0);
  
  return (
    <button onClick={() => setCount(count() + 1)}>
      Count: {count()}
    </button>
  );
}
\`\`\`

Simple and powerful!
`
	},
	'3': {
		id: '3',
		title: 'Terminal-Themed Web Design',
		date: '2024-04-05',
		content: `# Terminal-Themed Web Design

Bringing the retro terminal aesthetic to modern web applications.

## Design Elements

### Typography

Use monospace fonts like:
- JetBrains Mono
- Fira Code
- Hack

### ASCII Art

\`\`\`
╔════════════════════════╗
║  Terminal Portfolio    ║
╚════════════════════════╝
\`\`\`

### Color Palette

Stick to terminal-inspired colors:
- Background: Dark gray or black
- Text: Green, white, or amber
- Accents: Cyan, yellow for highlights

> "The best interface is the command line" - Every developer
`
	}
};

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
					{(p) => (
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
