# Visual Style Guide (NCS Painting)

Use this guide to keep the UI consistent and on-brand as pages are built.
**CSS Styling** TailwindCSS version ^4.1.17 (fallback to Vanilla CSS only when needed)
**UI Component Library** Shadcn Svelte only
**Icon Library** Lucide (Svelte)
**SVG Assets** Use @poppanator/sveltekit-svg for inline SVG images
**Picture Element** Use the picture element when adding image assets

---

## The vibe

- Calm, friendly, trustworthy
- Feels like a well-designed home brand (not a cold corporate site)

## Principle Site Design Style

- **Modern Minimalist Style** Clean sections, lots of white/neutral space, strong headings, simple icons.
- **Modern Style Usage** Content Sections, Rounded corners on images and cards, approchable feel.
- **Bento Grid Style** structured, modular grid with distinct, rounded-corner containers of varying sizes. Organized content, images, visually appealing, responsive mosaic
- **Bento Grid Usage** Feature Spolight Cards, Data Visulization, Quick Actions Cards, About/Contact/Info, Media Gallery, Forms
- **Flat 2.0 Design System** Dominant, minimalist user interface (UI) style, prioritize functionality, clean, 2D elements, bold colors, and simple typography.

## Visual characteristics

- **Color palette:** warm nuetrals + 1–2 accents (lime/sky/orange)
- **Font Type:** Inter sans-serif, slightly softer sizing/weights (not super sharp)
- **Shapes:** rounded corners, soft shadows, gentle borders
- **Imagery:** natural light, real homes, painters at work, before/after
- **Layout:** big breathable spacing, cards, sections with subtle background tints

---

## Brand Tone

- Clean, professional, local, friendly
- Reliable, Helpful, Ti
- Emphasis on craftsmanship, reliability, experience, trust

---

## Color Palette

**Primary**

- Black: `#0B0B0B`
- White: `#FFFFFF`

**Neutrals**

- Slate 900: `#111827`
- Slate 700: `#374151`
- Slate 500: `#6B7280`
- Slate 200: `#E5E7EB`
- Slate 100: `#F3F4F6`

**Primary Accent (optional, use sparingly)**

- Orange 500:
- Orange 600:

**Secondary Accent (optional, use sparingly)**

- Lime 500: `#84CC16`
- Lime 600: `#65A30D`

---

## Typography

**Font** Inter

**Headings**

- Strong, tight leading
- Use bold weights (700–900)

**Body**

- Comfortable reading size (16–18px)
- Relaxed line height (1.5–1.7)

---

## Layout & Spacing

- Max width: 1200–1280px
- Section padding: 64px (desktop), 48px (tablet), 32px (mobile)
- Grid gaps: 16–24px
- Card radius: 20–28px

---

## Buttons

**Primary**

- Black background, white text
- Large padding, bold label

**Secondary**

- Transparent background, black border
- Hover: subtle gray fill

---

## Imagery

- Use real project photos from `/static`
- Prefer natural lighting
- Include exterior and interior mix
- Avoid stock‑style, overly staged photos

---

## Iconography

- Simple outline icons
- Keep stroke width consistent

---

## Accessibility

- Maintain 4.5:1 contrast for text
- Focus visible on all interactive elements
- Buttons and links must be distinguishable
