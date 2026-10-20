# Portfolio — Astro

Personal portfolio built with Astro 7 and plain CSS. Deployed on Vercel.

## Stack

- [Astro 7](https://astro.build/) — static site framework
- Scoped Astro styles + CSS custom properties in `src/styles/global.css`
- [Bricolage Grotesque](https://fontsource.org/fonts/bricolage-grotesque) — self-hosted variable font
- [Three.js](https://threejs.org/) — decorative hero terrain, lazy-loaded after idle
- [simple-icons](https://simpleicons.org/) — technology logos in the stack chips (build time only)
- [TypeScript](https://www.typescriptlang.org/)

## Requirements

- Node.js >= 22.22.0 (`.nvmrc` pins 22.23.0 — run `nvm use`)
- pnpm

## Getting started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type-check
pnpm check
```
