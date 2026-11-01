# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md
@context/ai-interaction.md
@context/coding-standards.md
@context/current-feature.md

## Project

DevStash is a centralized hub for developer knowledge: snippets, AI prompts, notes, commands, files, images and URLs. The product spec, draft Prisma schema, plan limits and roadmap are in `context/project-overview.md`. Read it before starting feature work, and don't add features it doesn't cover.

## Commands

```bash
npm run dev                          # Dev server at http://localhost:3000
npm run build                        # Production build; must pass before committing
npm run start                        # Serve the production build
npm run lint                         # ESLint across the repo
npx eslint src/app/page.tsx          # Lint a single file
npx next typegen && npx tsc --noEmit # Typecheck without a full build
```


## Architecture

- **App Router only.** Routes live in `src/app/`, and `@/*` maps to `src/*`.
- **Cache Components is on** (`cacheComponents: true` in `next.config.ts`). Async data reads must either be cached with `use cache` or wrapped in `<Suspense>` so they run at request time; otherwise the dev overlay reports a blocking route. This applies to the direct Prisma reads in server components that the coding standards call for. See `node_modules/next/dist/docs/01-app/01-getting-started/08-caching.md`.
- **Partial prefetching is on** (`partialPrefetching: true`). See `node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/partialPrefetching.md`.
- **Tailwind runs through a Turbopack loader.** `@tailwindcss/turbopack` is registered for `*.css` in `next.config.ts`, and there is no PostCSS config, so don't add one.
- **Route types are generated.** Global helpers such as `LayoutProps<"/">` come from Next's type generation, not from an import.
