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

# Footer Section

## CONTEXT
- Business: NCS Painting
- Primary market: Edmonton, Alberta
- Service areas: Edmonton, St Albert, Fort Saskatchewan, Sherwood Park
- Phone: 780-722-5577

## PURPOSE
- Reinforce local trust + NAP consistency and improve crawlability with internal links.

## SEO_TARGETS
### Primary
- NAP consistency + entity trust signals

### Secondary
- Service links for crawl depth
- Service area mention

## LAYOUT_REQUIREMENTS
- 3–4 column footer desktop; stacked on mobile
- Include: NAP, Hours, Links, Areas, Legal

## CONTENT_DRAFT
### Heading
- Contact NCS Painting

### NAP block (keep identical everywhere)
- Business name: NCS Painting
- Phone: 780-722-5577
- Service area: Edmonton, AB (Postal: T6A 2N9)
- Email: [EMAIL_ADDRESS]
- (If you publish a street address, replace service-area text with full address.)

### Hours
- Mon–Fri: 9:00 a.m. – 5:00 p.m.
- Sat–Sun: 11:00 a.m. – 3:00 p.m.

### Quick links
- Interior Painting
- Exterior Painting
- Additional Services
- Projects
- Contact / Quote

### Service Areas
- Edmonton, St Albert, Fort Saskatchewan, Sherwood Park

### Legal
- Privacy Policy
- Terms (optional)

## CTAS
- Primary: **Request a Free Quote** → /contact (or #quote-form)
- Secondary: **Call the Painter** → tel:7807225577
- Tertiary: **Email the Painter** → mailto:[EMAIL_ADDRESS]

## INTERNAL_LINKING
- Footer links should mirror key nav destinations.
- Ensure Contact page is linked site-wide.

## IMPLEMENTATION_NOTES
- Keep NAP formatting identical to Google Business Profile.
- Use <address> for NAP block.

## SCHEMA_NOTES
- LocalBusiness schema is typically placed site-wide (e.g., Contact page), not necessarily inside footer markup.

## TRACKING_NOTES
- click_to_call
- click_email
