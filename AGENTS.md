# Agent Instructions

## Framework & Tooling

- **SolidJS** app with **@solidjs/router** for routing
- **Tailwind CSS v4** - uses different config approach than v3:
  - No `tailwind.config.js` - all config in `src/index.css`
  - Dark mode via `@variant dark (&:where(.dark, .dark *));`
  - Theme colors/fonts in `@theme` block
  - Dark mode requires `dark` class on `document.documentElement`
- **Vite** dev server on port 3000
- **TypeScript** with strict mode, no emit (bundler-only)

## Commands

```bash
npm run dev      # start dev server on :3000
npm run build    # production build to dist/
npm run serve    # preview production build
```

## Architecture

```
src/
├── index.tsx          # entry, wraps app with ThemeProvider
├── app.tsx            # layout: Header + main + Footer
├── routes.ts          # route definitions (lazy-loaded except Home)
├── components/        # Header, Footer (modular)
├── contexts/          # ThemeContext (localStorage-persisted)
├── pages/             # route components
└── errors/            # 404 page
```

- **Routing**: Home eager-loaded, all others lazy via `lazy()`
- **Theme**: Context-based dark/light toggle in Footer, persisted to localStorage
- **Layout**: All pages centered with `max-w-4xl`, minimal design

## Design System

- **Font**: JetBrains Mono (monospace) for vintage terminal aesthetic
- **Color scheme**: Gray scale, subtle text glow on headings in dark mode
- **Terminal touches**:
  - Blinking cursor animation (`.cursor-blink` class adds `|` after element)
  - Applied to all main page headings (h1)
- **Header/Footer**: Slightly different bg (`bg-gray-50`/`bg-gray-950`) than body for separation
- **Navigation**: 3 tabs (Home, Experience, About); Blogs/Gallery linked from Home
- **Social links**: SVG icons (GitHub, LinkedIn, Twitter) in Footer, no text links
- **Theme toggle**: In Footer with sun/moon icons, rounded modern design

## File Modification Notes

- **Dark mode prevention**: Script in `index.html` prevents FOUC by checking localStorage/system preference before render
- **Font loading**: Google Fonts preconnect in `index.html` for JetBrains Mono
- When editing `index.css`, remember Tailwind v4's `@theme` and `@variant` syntax differs from v3

## Gotchas

- No linting, formatting, or test scripts configured
- Both `pnpm-lock.yaml` and `package-lock.json` present (template artifact)
- `src/pages/contact.tsx` exists but unused (Contact merged into About page)
