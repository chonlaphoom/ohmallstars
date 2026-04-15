interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  excerpt?: string;
}

// Demo blog posts data - replace with your database fetch
const blogPosts: Record<string, BlogPost> = {
  "1": {
    id: "1",
    title: "Example Blog Post",
    date: "2024-04-15",
    excerpt:
      "This is a demo showing how markdown rendering works with syntax highlighting",
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
`,
  },
  "2": {
    id: "2",
    title: "Getting Started with SolidJS",
    date: "2024-04-10",
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
`,
  },
  "3": {
    id: "3",
    title: "Terminal-Themed Web Design",
    date: "2024-04-05",
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
`,
  },
};

export { blogPosts };
export type { BlogPost };
