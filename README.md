# Dumpling Theme

A beautiful, feature-rich blog theme for [Astro](https://astro.build), built with Svelte 5, Tailwind CSS v4, and GSAP.

## Features

- **Stunning Homepage** — Scroll-driven animations, hero dialogue system, portfolio showcase
- **Dark Mode** — Light, dark, and system-following themes with OKLCH color space
- **Rich Content** — Blog posts with MDX, moments, photo albums, notebooks, changelogs
- **Comments** — Waline, Twikoo, Giscus, Disqus, Artalk support
- **Music Player** — 3D audio visualizer, lyrics display, Meting API integration
- **Media Tracking** — Books, anime, movies, games, music collections
- **Internationalization** — 5 languages (English, Chinese, Japanese, Russian, Traditional Chinese)
- **Full-text Search** — Pagefind integration
- **Fully Responsive** — Desktop, tablet, and mobile layouts
- **SPA Navigation** — Swup-powered page transitions
- **Widgets** — Calendar, weather, stats, relationship timer, tags, categories, and more

## Quick Start

**Prerequisites:** Node.js >= 22, pnpm >= 9.x

```bash
git clone https://github.com/yourusername/dumpling-theme.git my-blog
cd my-blog
pnpm install
pnpm dev
```

## Configuration

Key config files in `src/config/`:

| File | Purpose |
|------|---------|
| `siteConfig.ts` | Site title, URL, theme, feature toggles |
| `profileConfig.ts` | Your name, avatar, bio, social links |
| `navBarConfig.ts` | Navigation menu structure |
| `sidebarConfig.ts` | Sidebar widget layout |
| `homeConfig.ts` | Homepage hero, dialogue, animations |
| `commentConfig.ts` | Comment system selection |
| `musicConfig.ts` | Music player settings |

## Adding Content

```bash
pnpm new-post "My New Post"
```

Or manually add `.md` files to `src/content/posts/`.

## Environment Variables

Copy `.env.example` to `.env` and configure optional services:

- `PUBLIC_WALINE_SERVER` — Waline comment server
- `PUBLIC_UMAMI_WEBSITE_ID` — Umami analytics
- `PUBLIC_AMAP_KEY` — AMap (Gaode) map key

## Deployment

```bash
pnpm build
# Deploy the dist/ folder
```

Works with Vercel, Netlify, Cloudflare Pages, GitHub Pages, and any static host.

## Credits

Derived from [Firefly](https://github.com/CuteLeaf/Firefly), originally forked from [Fuwari](https://github.com/saicaca/fuwari).

Built with Astro, Svelte, Tailwind CSS, GSAP, Swup, and Pagefind.

## License

MIT
