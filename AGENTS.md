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
├── app.tsx            # layout: Header + main + Footer + skip-to-content link
├── routes.ts          # route definitions (lazy-loaded except Home)
├── components/        # Header, Footer, Container, Loading (modular)
├── contexts/          # ThemeContext (localStorage-persisted)
├── pages/             # route components
└── errors/            # 404 page
```

- **Routing**: Home eager-loaded, all others lazy via `lazy()` with Suspense fallback
- **Theme**: Context-based dark/light toggle in Footer, persisted to localStorage
- **Layout**: All pages use shared `Container` component with `max-w-4xl mx-auto px-6` for consistent alignment
- **Loading**: ASCII-style loading indicator `[....]` with staggered pulse animation

## Design System

- **Font**: JetBrains Mono (monospace) for vintage terminal aesthetic
- **Color scheme**: Gray scale, subtle text glow on headings in dark mode
- **Terminal/ASCII touches**:
  - Blinking cursor animation (`.cursor-blink` class adds `|` after element)
  - Terminal command prompts on all page headers (e.g., `$ whoami`, `$ cat about.md`)
  - `>` indicator before active nav items (use `useLocation()` hook, not children-as-function)
  - ASCII box borders around description on home (hidden on mobile with `hidden sm:block`)
  - ASCII separators `|` between footer social links
  - Code comment style `//` for page subtitles
  - Bracket decorators `{ }`, `[ ]` around section headings
  - List bullets using `»` and `▸` symbols
- **Responsive typography**: Terminal commands use `text-xs sm:text-sm md:text-base` breakpoints
- **Header/Footer**: Slightly different bg (`bg-gray-50`/`bg-gray-950`) than body for separation
- **Navigation**: 3 tabs (Home, Experience, About); Blogs/Gallery linked from Home
- **Social links**: SVG icons (GitHub, LinkedIn, Instagram) in Footer with `|` separators
- **Theme toggle**: In Footer with sun/moon icons, rounded modern design

## File Modification Notes

- **Dark mode prevention**: Script in `index.html` prevents FOUC by checking localStorage/system preference before render
- **Font loading**: Google Fonts preconnect in `index.html` for JetBrains Mono
- When editing `index.css`, remember Tailwind v4's `@theme` and `@variant` syntax differs from v3
- **Active nav indicator**: Use `useLocation()` hook to check pathname, not `<A>` children-as-function pattern (causes `isActive` undefined error)

## Gotchas

- No linting, formatting, or test scripts configured
- **Container component**: Header and Footer both use shared `Container` component to ensure alignment - don't use raw `max-w-4xl mx-auto px-6` divs
- **LinkedIn iframe error**: Console shows `getInstalledRelatedApps()` error from LinkedIn embeds - this is harmless, third-party issue, not fixable on our side
- **Accessibility**: Skip-to-content link, proper ARIA labels, `.sr-only` utility class for screen readers
- **ASCII borders**: Use `hidden sm:block` to hide box borders on mobile (prevents overflow/breaking)
