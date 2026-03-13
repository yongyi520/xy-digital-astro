# Cloudflare Pages Deploy

This project is a static Astro site for Cloudflare Pages.

## GitHub-connected Cloudflare Pages

Use these settings in Cloudflare Pages:

- Framework preset: `Astro`
- Build command: `pnpm build`
- Build output directory: `dist`

Do not use:

- `wrangler deploy`
- `npx wrangler deploy`
- `pnpm cf:deploy`

Those are not for the normal GitHub-connected Pages build flow.

## Local commands

- Local Astro dev: `pnpm dev`
- Local Astro production preview: `pnpm preview`
- Local Pages preview: `pnpm build && pnpm cf:dev`
- Manual Pages deploy: `pnpm cf:deploy`

## Notes

- The site uses Astro static output in `astro.config.mjs`.
- `wrangler.jsonc` is configured for Pages output at `./dist`.
- No Cloudflare adapter is needed for this static Pages setup.
