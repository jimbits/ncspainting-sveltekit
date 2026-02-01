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

# Service Areas Section

## CONTEXT
- Business: NCS Painting
- Primary market: Edmonton, Alberta
- Service areas: Edmonton, St Albert, Fort Saskatchewan, Sherwood Park
- Phone: 780-722-5577

## PURPOSE
- Strengthen local relevance for Edmonton and nearby communities and help users confirm coverage.

## SEO_TARGETS
### Primary
- Painters serving Edmonton + nearby areas

### Secondary
- Painters St Albert
- Painters Fort Saskatchewan
- Painters Sherwood Park

## LAYOUT_REQUIREMENTS
- Grid/list of areas
- Optional small map embed
- CTA row at bottom

## CONTENT_DRAFT
### Heading (H2)
- Service Areas

### Tagline
- Local painting service for Edmonton and surrounding communities.

### Copy block
We serve Edmonton, St Albert, Fort Saskatchewan, Sherwood Park. Not sure if you’re in our service area? Request a quote or call and we’ll confirm.

### Area list
- Edmonton
- St Albert
- Fort Saskatchewan
- Sherwood Park

## CTAS
- Primary: **Request a Free Quote** → #quote-form
- Secondary: **Call the Painter** → tel:7807225577
- Tertiary: **Email the Painter** → mailto:[EMAIL_ADDRESS]

## INTERNAL_LINKING
- Only create area pages if they’re robust (unique proof + FAQs + photos). Otherwise keep as text.

## IMPLEMENTATION_NOTES
- Avoid thin “city swap” pages.
- Consider adding a service radius note if appropriate.

## SCHEMA_NOTES
- (None required for this section beyond site-wide LocalBusiness on Contact/Footer.)

## TRACKING_NOTES
- cta_quote_click
- click_to_call
- click_email
