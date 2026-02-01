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

# Header + Navigation Section

## CONTEXT
- Business: NCS Painting
- Primary market: Edmonton, Alberta
- Service areas: Edmonton, St Albert, Fort Saskatchewan, Sherwood Park
- Phone: 780-722-5577

## PURPOSE
- Provide immediate contact actions (especially on mobile) and strong internal linking to key pages.

## SEO_TARGETS
### Primary
- Internal linking hub to Services + Contact

### Secondary
- Descriptive nav labels (Services, Projects, Contact)
- Branded entity consistency (business name/phone)

## LAYOUT_REQUIREMENTS
- Desktop: left logo + center nav + right CTAs
- Mobile: logo + hamburger + sticky action bar (Call / Quote)
- CTAs must be visible without scrolling on mobile (sticky recommended)

## CONTENT_DRAFT
### Content Section Heading
- NCS Painting

### Tagline (small descriptor)
- Residential & Commercial Painters • Edmonton

### Nav Items
- Services
- Projects
- About
- Service Areas
- Contact

### CTA Buttons/Links
- Primary button: Request a Free Quote
- Secondary button/link: Call the Painter
- Optional tertiary link: Email the Painter

## CTAS
- Primary: **Request a Free Quote** → /contact (or #quote-form)
- Secondary: **Call the Painter** → tel:7807225577
- Tertiary: **Email the Painter** → mailto:[EMAIL_ADDRESS]

## INTERNAL_LINKING
- Services nav should land on /services or on-page #services (then cards link to /services/*).

## IMPLEMENTATION_NOTES
- Semantic: <header> with <nav aria-label="Primary">.
- Add skip-link at top.
- Mobile sticky bar: 2 actions (Call / Quote).

## SCHEMA_NOTES
- (None required for this section beyond site-wide LocalBusiness on Contact/Footer.)

## TRACKING_NOTES
- click_to_call
- click_email
- cta_quote_click
