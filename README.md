# bocc(dot)dev

The marketing/portfolio site for **bocc(dot)dev** — a design-led development studio
crafting websites with a "less is more" approach. It's a small, static
[Astro](https://astro.build) site: a masthead, a featured-work table driven by a
typed data file, and contact details. Deployed at [bocc.dev](https://bocc.dev).

---

## Tech stack

| Layer        | Choice                                                                 |
| ------------ | --------------------------------------------------------------------- |
| Framework    | Astro `^3.1.4` (static output, no SSR adapter)                         |
| Styling      | Tailwind CSS `^3.0.24` via `@astrojs/tailwind` `^5.0.0`                |
| CSS entry    | PostCSS (`.pcss`) — `src/styles/app.pcss`                             |
| Fonts        | General Sans (variable, body) + JetBrains Mono (mono), self-hosted     |
| Data         | TypeScript module (`src/data/work.ts`) with a typed `Work[]`          |
| Client JS    | None active — see [JavaScript](#javascript)                            |
| Analytics    | [Cabin](https://withcabin.com) (`cabin.bocc.dev/hello.js`)            |
| Package mgr  | Yarn (a `yarn.lock` is committed; no `package-lock.json`)             |
| TypeScript   | `astro/tsconfigs/strict`                                               |

There is **no CMS, database, or backend**. All content lives in `.astro`
components and `src/data/work.ts`.

---

## Local setup

```sh
# install dependencies (Yarn — a yarn.lock is committed)
yarn install

# start the dev server (defaults to http://localhost:4321)
yarn dev

# type-check + production build to ./dist
yarn build

# preview the production build locally
yarn preview
```

The `scripts` in `package.json` alias the Astro CLI directly (`astro dev`,
`astro build`, `astro preview`, `astro`). npm/pnpm work too, but the committed
lockfile is Yarn's.

No environment variables are required — there is no `.env.example` and nothing in
the code reads from `import.meta.env` beyond Astro's built-ins.

---

## Project structure

```text
/
├── astro.config.mjs         # Astro config: site URL + Tailwind integration
├── tailwind.config.cjs      # Tailwind theme (colors, fonts)
├── tsconfig.json            # extends astro strict
├── public/
│   ├── favicon.svg
│   ├── fonts/               # General Sans + JetBrains Mono (woff2/woff/ttf)
│   └── seo/                 # og-bocc.png, twitter-bocc.png (social cards)
└── src/
    ├── env.d.ts
    ├── pages/
    │   ├── index.astro      # "/" — Masthead + Work + Contact
    │   └── why.astro        # "/why" — origin story (see caveats)
    ├── layouts/
    │   └── Layout.astro     # <html> shell, <head>/meta, global CSS import
    ├── components/
    │   ├── Masthead.astro   # studio name + overview + Speaker mark
    │   ├── Work.astro       # featured-work table (reads work.ts)
    │   ├── Speaker.astro    # decorative circular SVG mark
    │   └── Contact.astro    # email / tel / twitter
    ├── data/
    │   └── work.ts          # typed Work[] — the site's only "content model"
    └── styles/
        └── app.pcss         # @tailwind layers + @font-face + base styles
```

Astro maps files in `src/pages/` to routes by filename: `index.astro` → `/`,
`why.astro` → `/why`. Static assets in `public/` are served from the site root
(e.g. `public/seo/og-bocc.png` → `/seo/og-bocc.png`).

---

## Content model (`src/data/work.ts`)

The one structured data source. The site has no CMS, so "content" is a
TypeScript array of `Work` items that `Work.astro` iterates over. The `Work`
interface:

| Field         | Type                                                              | Required | Purpose                                                          |
| ------------- | ---------------------------------------------------------------- | :------: | --------------------------------------------------------------- |
| `status`      | `"WIP" \| "Completed" \| "Ongoing"`                              |    –     | Shown instead of `year` when set; `"WIP"` animates (pulse)      |
| `year`        | `2018`–`2026` (literal union)                                    |    –     | Display year in the first column                                |
| `title`       | `string`                                                         |    ✓     | Project name                                                    |
| `description` | `string`                                                         |    –     | Not currently rendered                                          |
| `partners`    | `Array<{ name: string; link?: string }>`                        |    –     | Studios collaborated with; `link` renders an anchor             |
| `service`     | `Array<"Design" \| "Development" \| "Consultancy" \| "Migration">` |    ✓     | Service tags, comma-joined in the "Service" column            |
| `stack`       | union of tech names (`"Craft CMS"`, `"AlpineJs"`, `"Astro"`, …) |    –     | Declared in the type but **not rendered** by `Work.astro`       |
| `link`        | `{ text: string; url: string } \| undefined`                    |    ✓     | Live URL; renders the `-->` arrow. `text` unused; only `url`    |

Rendering logic in `Work.astro`:

- First column shows `status` if present, otherwise `year`. A `"WIP"` status gets
  `animate-pulse break-all`.
- `partners` are mapped to comma-separated links (external, `target="_blank"`).
- `service` entries are comma-joined inline.
- `link.url` renders a monospace `-->` arrow; entries without a link render an
  empty cell.

**Notes on the data:**

- The `year` literal union runs `2018`–`2026`; extend it when adding a newer
  year, or switch to `number` if you'd rather not maintain the union.
- `service` values must be individual typed members
  (`["Design", "Development"]`), not a single comma-joined string — the array is
  comma-joined at render time.
- Many entries are commented out (past/paused projects) — left in as history.
- `stack` is set on only a couple of older entries and is never displayed.

To add a project, prepend an object to the `work` array (newest first) following
the shape above.

---

## Integrations & dependencies

Astro's equivalent of "plugins" are integrations. This project uses exactly one.

| Integration          | Version    | Purpose on this site                                         | Config                                                                 |
| -------------------- | ---------- | ------------------------------------------------------------ | ---------------------------------------------------------------------- |
| `@astrojs/tailwind`  | `^5.0.0`   | Wires Tailwind into the Astro/Vite build                     | `astro.config.mjs` — `applyBaseStyles: false`                          |

`applyBaseStyles: false` means Astro does **not** inject Tailwind's base layer
automatically; the `@tailwind base/components/utilities` directives are declared
explicitly in `src/styles/app.pcss`, which `Layout.astro` imports.

`astro.config.mjs` also sets `site: "https://bocc.dev"`, which feeds
`Astro.url`/`Astro.generator` and canonical/OG URLs.

Direct dependencies: `astro`, `tailwindcss`, `@astrojs/tailwind`. No runtime UI
framework (React/Vue/Svelte), no other Astro integrations.

---

## CSS

Tailwind-first, with a small custom theme and self-hosted fonts.

**Config (`tailwind.config.cjs`):**

- `content` globs `./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`.
- **Theme overrides** (these *replace* Tailwind defaults, not extend):
  - `fontFamily.sans` → `General Sans` (+ default sans fallbacks);
    `fontFamily.mono` → `JetBrains Mono` (+ default mono fallbacks).
  - `colors` is a **restricted custom palette** (no default Tailwind colors):
    `white #F2F2F2`, `black #282828`, and a `grey` scale
    (`light #E1E1E1`, `mid #B8BDB8`, `dark #8F948F`).
- `extend.minHeight.screen: 100vh`.
- No plugins.

**Dark mode:** no `darkMode` key is set, so Tailwind uses the default `media`
strategy — `dark:` variants respond to the OS `prefers-color-scheme`. There is no
in-page theme toggle. `body` is `bg-white text-black` in light and
`dark:bg-black dark:text-white` in dark (via `@layer base` in `app.pcss`).

**Layering (`src/styles/app.pcss`):**

- `@tailwind base/components/utilities` directives.
- `@layer base` holds the `@font-face` declarations (General Sans + JetBrains
  Mono, `woff2`/`woff`/`ttf`, `font-display: swap`) and base element styles:
  `body` colors and `a { @apply hover:text-grey-mid }`.

**Conventions:** utility-first, applied inline in `.astro` markup. Arbitrary
values are used where Tailwind lacks a token — e.g. `[text-wrap:balance]`,
`min-h-[100vh]`, `border-grey-mid`/`dark:border-grey-dark` for the hairline rules
between sections.

---

## JavaScript

A **zero-JS** site. The only script is the **Cabin analytics** snippet
(`<script async defer src="https://cabin.bocc.dev/hello.js">`) at the end of
`<body>` in `Layout.astro`.

No Alpine, htmx, GSAP, or similar — despite some of those names appearing as
string literals in the `stack` type in `work.ts` (they describe *other* projects
in the portfolio, not this site's runtime).

---

## Astro templating patterns

**Layout inheritance via `<slot />`.** `Layout.astro` is the single shell: it
renders `<html>`/`<head>`/`<body>`, imports the global stylesheet, sets all
meta/OG/Twitter tags, and drops page content into a `<slot />`. Pages import it
and wrap their content:

```astro
---
import Layout from "../layouts/Layout.astro";
---
<Layout {title} {seoTitle} {seoDescription}>
  <main class="w-full p-8">…</main>
</Layout>
```

**Typed props.** `Layout.astro` declares an `interface Props` (`title`,
`seoTitle`, `seoDescription`) with defaults in the destructure, so pages can pass
some or none. Pages use the shorthand `{title}` attribute form.

**SEO/meta** is hand-rolled in `Layout.astro` (no SEO integration): description,
OpenGraph, and Twitter card tags, with images pulled from `public/seo/` via
`Astro.url.origin`. Canonical/OG URL comes from `Astro.url.href`.

**Data-driven rendering.** `Work.astro` imports `work.ts` and `.map()`s over it,
using `class:list` for conditional classes (e.g. the `WIP` pulse) and inline
conditionals for optional `partners`/`link`.

**Components** are plain presentational `.astro` files with no props (except
`Layout`) — content is either hard-coded (`Masthead`, `Contact`, `Speaker`) or
sourced from `work.ts` (`Work`). `Speaker.astro` is a single inline decorative
SVG using `fill="currentColor"` so it inherits the grey text color.

---

## Components reference

| Component        | Path                          | Purpose                                                                 | Props |
| ---------------- | ----------------------------- | ----------------------------------------------------------------------- | ----- |
| `Layout`         | `src/layouts/Layout.astro`    | HTML shell, `<head>`/meta, global CSS import, analytics; renders `slot` | `title`, `seoTitle`, `seoDescription` (all optional, defaulted) |
| `Masthead`       | `src/components/Masthead.astro` | Studio name, one-line overview, `Speaker` mark; responsive grid       | none  |
| `Work`           | `src/components/Work.astro`   | Featured-work table with a sticky header row; iterates `work.ts`        | none  |
| `Speaker`        | `src/components/Speaker.astro` | Decorative concentric-dots SVG mark (`w-full`, `currentColor`)         | none  |
| `Contact`        | `src/components/Contact.astro` | Email / tel / Twitter links                                             | none  |

Usage example (from `src/pages/index.astro`):

```astro
<Layout {title} {seoTitle} {seoDescription}>
  <main class="w-full p-8">
    <Masthead />
    <Work />
    <Contact />
  </main>
</Layout>
```

---

## Pages

- **`/` (`index.astro`)** — the live homepage: `Masthead` → `Work` → `Contact`.
- **`/why` (`why.astro`)** — the studio's origin story: a single prose section
  linking back to the homepage. Still untracked in git (not yet committed), and
  it reuses the section markup/classes from `Masthead` inline rather than sharing
  a component — worth extracting if the page grows.

---

## Deployment

The site is static — `yarn build` emits `./dist`, which can be served by any
static host. `astro.config.mjs` pins the production origin to `https://bocc.dev`.

There is **no host-specific config in the repo** (no `netlify.toml`,
`vercel.json`, GitHub Actions, etc.), so deployment is configured externally
wherever `bocc.dev` is hosted. Analytics is self-hosted Cabin at
`cabin.bocc.dev`. (One older portfolio entry references a Netlify URL, but that's
a client project, not this site's infrastructure.)
