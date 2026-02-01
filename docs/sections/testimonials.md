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

# Testimonials / Reviews Section

## CONTEXT
- Business: NCS Painting
- Primary market: Edmonton, Alberta
- Service areas: Edmonton, St Albert, Fort Saskatchewan, Sherwood Park
- Phone: 780-722-5577

## PURPOSE
- Build trust with real customer feedback and social proof.

## SEO_TARGETS
### Primary
- Top rated painters Edmonton (only if verified)

### Secondary
- Local painting reviews Edmonton

## LAYOUT_REQUIREMENTS
- 3–6 review cards
- Optional source label (Google, Facebook, etc.) if verified

## CONTENT_DRAFT
### Heading (H2)
- Reviews from Edmonton Homeowners

### Tagline
- Short feedback from homeowners who wanted clean prep and a great finish.

### Review format
- Quote (1–2 sentences)
- Name + city
- Service type

### CTA row
- **Request a Free Quote** → #quote-form
- **Call the Painter** → tel:7807225577

## CTAS
- Primary: **Request a Free Quote** → #quote-form
- Secondary: **Call the Painter** → tel:7807225577
- Tertiary: **Email the Painter** → mailto:[EMAIL_ADDRESS]

## INTERNAL_LINKING
- Optional link to /projects or /contact.

## IMPLEMENTATION_NOTES
- Only include ratings if verified and consistent with schema.
- Use real client quotes; avoid placeholders once live.

## SCHEMA_NOTES
- AggregateRating only if reviews are displayed and verified.

## TRACKING_NOTES
- cta_quote_click
- click_to_call
