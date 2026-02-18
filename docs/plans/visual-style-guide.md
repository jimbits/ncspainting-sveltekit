# Visual Style Guide (NCS Painting)

Use this guide to keep the UI consistent and on-brand as pages are built.

**CSS styling:** TailwindCSS `^4.1.17` (fallback to vanilla CSS only when needed)
**UI component library:** shadcn-svelte only
**Icon library:** lucide-svelte
**SVG assets:** `@poppanator/sveltekit-svg` for inline SVGs
**Images:** Use the `<picture>` element for responsive images
**Placeholder artwork:** `@/static` (use project placeholders until real photos are in)

---

## The vibe

- Calm, friendly, trustworthy
- Feels like a well-designed home brand (not a cold corporate site)
- Should not look “template-y” or obviously AI-generated

---

## Primary design styles

- **Modern minimalist:** clean sections, lots of white/neutral space, strong headings, simple icons.
- **Modern (residential-friendly):** rounded corners on images/cards, approachable feel, soft borders.
- **Bento grid:** structured, modular grid with distinct rounded containers of varying sizes (responsive mosaic).
  - **Use for:** feature spotlight cards, quick actions, media galleries, forms, “about/contact/info”, light data viz.
- **Flat 2.0:** simple 2D elements, strong hierarchy, selective bold color, minimal decoration.

---

## Visual characteristics

- **Color palette:** warm neutrals + 1–2 accents (keep accents intentional; don’t rainbow the UI)
- **Font:** Inter (soft sizing/weights; avoid ultra-condensed / hyper-sharp type)
- **Shapes:** rounded corners, soft shadows, gentle borders
- **Imagery:** natural light, real homes, painters at work, before/after
- **Layout:** breathable spacing, clear sections, cards with subtle background tints

---

## Motion & animation

- Use motion sparingly to improve clarity (not decoration).
- Default interaction timing: `150–250ms`, `ease-out`.
- Prefer subtle state transitions: hover, focus, expand/collapse, dialog fade.
- Respect reduced-motion users: disable non-essential animation when `prefers-reduced-motion` is set.

**Patterns**

- **Details/summary accordion:** animate open/close height + opacity
  Reference: https://codepen.io/kevinpowell/pen/OJKWMwO
- **Dialogs:** fade/scale in on open; fade out on close
- **Svelte motion:** use for mount/unmount + layout transitions
- **Complex motion:** only for one-off hero moments or brand “wow” interactions

---

## Brand tone (copy + UI feel)

- Clean, professional, local, friendly
- Reliable, helpful, cheerful
- Emphasis on craftsmanship, reliability, experience, trust

**Voice rules**

- Prefer concrete benefits over hype (“On-time, tidy, and respectful of your home.”)
- Avoid jargon and buzzwords
- Keep CTAs direct: “Get a Free Quote”, “Book an Estimate”, “View Our Work”

---

## Design tokens (recommended)

Define “what to use” as tokens so pages stay consistent.

**Surface tokens**

- `bg-page` (default background)
- `bg-section` (subtle tinted sections)
- `bg-card` (card surface)
- `border-subtle`
- `text-main`, `text-muted`

**Accent tokens**

- `accent-primary` (CTAs + key highlights)
- `accent-secondary` (badges, checkmarks, tiny highlights)
- `accent-warning` (rare callouts only)

> Implementation note: use Tailwind classes that map to these tokens (example mappings below).

---

## Color palette

**Base**

- Black: `#0B0B0B`
- White: `#FFFFFF`

**Neutrals (Slate)**

- Slate 900: `#111827`
- Slate 700: `#374151`
- Slate 500: `#6B7280`
- Slate 200: `#E5E7EB`
- Slate 100: `#F3F4F6`

**Primary accent (choose ONE family for most CTAs)**

- Option A (recommended for calm/trust): **Indigo**
  - Indigo 500: `#6366F1`
  - Indigo 600: `#4F46E5`
- Option B (if you want warmer emphasis): **Orange**
  - Orange 500: `#F97316`
  - Orange 600: `#EA580C`

**Secondary accent (use sparingly)**

- Lime 500: `#84CC16`
- Lime 600: `#65A30D`

**Optional button variant (only if you intentionally use this style)**

- Sky 400: `#38BDF8`
- Teal 500: `#14B8A6`

**Accent usage rules**

- 80–90% of the UI should be neutrals.
- 1 primary accent max per section (don’t mix Indigo + Orange + Sky in the same section).
- Lime is for “positive” indicators (checks, success badges), not large fills.

---

## Typography

**Font:** Inter

**Scale (Tailwind suggestions)**

- H1: `text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight`
- H2: `text-3xl sm:text-4xl font-bold tracking-tight`
- H3: `text-xl sm:text-2xl font-semibold`
- Body: `text-base sm:text-lg leading-relaxed`
- Small: `text-sm text-slate-600`

**Rules**

- Keep line length comfortable: 55–80 chars for body copy
- Use strong heading contrast; avoid overusing all-caps

---

## Layout & spacing

- Max width container: `max-w-7xl` (≈1280px)
- Page gutters: `px-4 sm:px-6 lg:px-8`
- Section padding: `py-12 sm:py-16 lg:py-20`
- Grid gaps: `gap-4 sm:gap-6`
- Card radius: `rounded-2xl` (use `rounded-3xl` for hero media only)
- Shadow: `shadow-sm` default; `shadow-md` for hero cards only

---

## Responsive system

**Breakpoints (Tailwind defaults)**

- `sm` 640px
- `md` 768px
- `lg` 1024px
- `xl` 1280px
- `2xl` 1536px

**Bento grid rule of thumb**

- Mobile: stack (1 column)
- Tablet: 2 columns (simple)
- Desktop: 12-column bento (spans create variety)

Example grid setup:

- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12`

---

## Buttons

**Primary (recommended)**

- Indigo: `bg-indigo-600 hover:bg-indigo-500 text-white`
- Focus ring: `focus-visible:ring-2 focus-visible:ring-indigo-500/50`

**Alternative primary (if using Sky/Teal)**

- `bg-sky-400 hover:bg-teal-500 text-white`

**Secondary**

- `bg-white text-slate-900 border border-slate-200 hover:bg-slate-50`

**Destructive (rare)**

- `bg-slate-900 text-white hover:bg-slate-800`

**Sizing**

- Small: `h-9 px-3 text-sm`
- Default: `h-10 px-4`
- Large: `h-11 px-6 text-base`

---

## Cards (component recipe)

**Default card anatomy**

1. Optional image (top)
2. Title
3. Body text
4. Link or small CTA

**Suggested base classes**

- Wrapper: `rounded-2xl border border-slate-200 bg-white shadow-sm`
- Padding: `p-5 sm:p-6`
- Hover: `transition hover:-translate-y-0.5 hover:shadow-md`

---

## Forms (component recipe)

- Inputs: `rounded-xl border-slate-200 bg-white`
- Labels: `text-sm font-medium text-slate-900`
- Help text: `text-sm text-slate-600`
- Error state: `border-red-500` + `text-red-600`
- Success/checked accents: lime (checkboxes, badges), not full input fills

---

## Imagery

**Source**

- Use real project photos from `/static` when available.

**Treatment**

- Prefer natural lighting
- Include exterior + interior mix
- Avoid staged stock-style photos

**Aspect ratios**

- Hero: 16:9 or 21:9 (full-bleed)
- Card: 4:3 or 3:2
- Gallery: allow mixed, but keep consistent within a row

**Before/after pattern**

- Side-by-side on desktop (`lg:grid-cols-2`)
- Stacked on mobile
- Always label clearly

---

## Iconography

- Simple outline icons (Lucide)
- Keep stroke width consistent
- Use icons as “supporting” elements, not decoration

---

## Accessibility

- Maintain 4.5:1 contrast for text
- Focus visible on all interactive elements
- Buttons and links must be distinguishable
- Touch targets: 44px minimum height where possible
- Respect reduced motion

---

# Responsive layout examples (add to the doc)

This section is how you document responsive patterns for **pages**, **sections**, or **single components**.

## How to add examples

1. Build the section/page in localhost (or in Figma).
2. Capture **3 screenshots**: mobile (≈390px), tablet (≈768px), desktop (≥1280px).
3. Save images into `styleguide-assets/` and embed them in markdown.

Example embed:

- `![Services Bento – Desktop](./styleguide-assets/services-bento-desktop.png)`

## Example 1: Services Bento (section)

**Intent:** show 4–6 key services with strong visual variety.
**Grid:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-12`
**Behavior:** stack → 2-col → 12-col bento

```txt
Mobile (1 col)
[ A ]
[ B ]
[ C ]
[ D ]

Tablet (2 col)
[ A ][ B ]
[ C ][ D ]

Desktop (12 col)
[ A A A A A A | B B B B B B ]
[ C C C C | D D D D | E E E E ]
```

**Tailwind skeleton**

```svelte
<section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
	<header class="max-w-2xl">
		<p class="text-sm font-semibold text-indigo-600">Services</p>
		<h2 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
			Interior & Exterior Painting Done Right
		</h2>
		<p class="mt-4 text-slate-600">Short supporting copy goes here.</p>
	</header>

	<div class="mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-12">
		<div class="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-6">A</div>
		<div class="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-6">B</div>
		<div class="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-4">C</div>
		<div class="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-4">D</div>
		<div class="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-4">E</div>
	</div>
</section>
```

## Example 2: Hero (page top)

**Intent:** immediate clarity + single CTA.
**Behavior:** text-first on mobile, split layout on desktop.

```txt
Mobile
[ Title ]
[ Sub ]
[ CTA  ]
[ Image ]

Desktop
[ Text Text Text | Image Image ]
```

## Example 3: Quote Form (section)

**Intent:** high conversion; low friction.
**Behavior:** 1 column → 2 column form fields at `md`.

```txt
Mobile
[ Form ]
[ Trust badges ]

Desktop
[ Form Form | Trust / FAQ ]
```
