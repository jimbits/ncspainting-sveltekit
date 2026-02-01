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

# Let Us Help (Tips & Tricks Section)

## CONTEXT
- Business: NCS Painting
- Primary market: Edmonton, Alberta
- Service areas: Edmonton, St Albert, Fort Saskatchewan, Sherwood Park
- Phone: 780-722-5577

## PURPOSE
- Capture long-tail searches with helpful tips while supporting service keywords.

## SEO_TARGETS
### Primary
- Painting tips Edmonton (long-tail queries)

### Secondary
- How to choose paint sheen
- How to prep a room
- Best season for exterior painting Edmonton
- How to compare painting quotes

## LAYOUT_REQUIREMENTS
- Grid of 6–10 tip cards
- Each: title + 2–3 sentences + link
- Bottom CTA row

## CONTENT_DRAFT
### Heading (H2)
- Let Us Help

### Tagline
- Quick tips from local Edmonton painters—so you can plan with confidence.

### Tip cards (draft)
1) **How to choose the right paint sheen**
   Eggshell for walls, satin for high-traffic, semi-gloss for trim—lighting and cleaning needs matter.
2) **How to prep a room for painters**
   Move small items, clear walls, and plan access—prep reduces disruption.
3) **What affects the cost of interior painting in Edmonton**
   Size, wall condition, paint type, and prep time drive price—request a quote for accuracy.
4) **How to compare painting quotes**
   Compare prep details, paint spec, scope clarity, and cleanup—cheap quotes often skip prep.
5) **Best time of year for exterior painting in Edmonton**
   Late spring to early fall is typical—temperature and humidity affect curing.
6) **How to keep exterior paint looking fresh**
   Gentle washing and quick repairs prevent peeling and extend lifespan.

### Link targets
- Each card links to a service page or an Ask The Painter guide.

## CTAS
- Primary: **Request a Free Quote** → #quote-form
- Secondary: **Call the Painter** → tel:7807225577
- Tertiary: **Email the Painter** → mailto:[EMAIL_ADDRESS]

## INTERNAL_LINKING
- Deep-link cards to relevant service pages or /ask-the-painter/* articles.

## IMPLEMENTATION_NOTES
- Keep each answer short; the link leads to depth.
- Use consistent card heights.

## SCHEMA_NOTES
- (None required for this section beyond site-wide LocalBusiness on Contact/Footer.)

## TRACKING_NOTES
- tip_card_click
- cta_quote_click
