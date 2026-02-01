<!--
AI-CODING-ASSISTANT SPEC
Purpose: This markdown is a single-source-of-truth content + implementation spec for a homepage section.
How to use:
1) Copy CONTENT_DRAFT blocks into components.
2) Follow IMPLEMENTATION_NOTES for structure/semantics/CTAs.
3) Keep claims truthful (only include warranty/licensed/insured if verified).
Editing rules:
- Prefer short, explicit headings.
- Use placeholders like [EMAIL_ADDRESS] where unknown.
-->

# Projects / Recent Work Section

## CONTEXT
- Business: NCS Painting
- Primary market: Edmonton, Alberta
- Service areas: Edmonton, St Albert, Fort Saskatchewan, Sherwood Park
- Phone: 780-722-5577

## PURPOSE
- Provide visual proof and build trust with real project examples.

## SEO_TARGETS
### Primary
- Painting projects Edmonton

### Secondary
- Before and after painting Edmonton
- Interior/exterior project examples

## LAYOUT_REQUIREMENTS
- 6–9 image tiles
- Each tile has a short caption with location
- Link to full gallery/projects page

## CONTENT_DRAFT
### Heading (H2)
- Recent Painting Projects

### Tagline
- Real results from Edmonton and surrounding communities.

### Tile caption pattern
- “[Service] project — [Neighborhood/City]”

### CTA row
- **View More Projects** → /projects
- **Request a Free Quote** → #quote-form

## CTAS
- Primary: **Request a Free Quote** → #quote-form
- Secondary: **View More Projects** → /projects
- Tertiary: **Call the Painter** → tel:7807225577

## INTERNAL_LINKING
- Link project tiles to /projects or relevant service pages.

## IMPLEMENTATION_NOTES
- Use real project photos when available.
- Keep captions short and location‑specific.

## SCHEMA_NOTES
- (Optional) ImageObject within Gallery page, not required on homepage.

## TRACKING_NOTES
- project_tile_click
- cta_quote_click
