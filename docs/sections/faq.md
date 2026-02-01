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

# FAQ Section (SEO-Focused)

## CONTEXT
- Business: NCS Painting
- Primary market: Edmonton, Alberta
- Service areas: Edmonton, St Albert, Fort Saskatchewan, Sherwood Park
- Phone: 780-722-5577

## PURPOSE
- Answer high-intent questions on the homepage to capture question searches and support conversions.

## SEO_TARGETS
### Primary
- Cost / estimate / timeline queries for painters in Edmonton

### Secondary
- How much does it cost to paint a room in Edmonton
- Free estimates Edmonton painters
- How long does painting take
- Best season exterior painting Edmonton

## LAYOUT_REQUIREMENTS
- Accordion or stacked Q&A (8–12)
- Answers 2–5 sentences
- CTA block after FAQs

## CONTENT_DRAFT
### Heading (H2)
- FAQ

### Tagline
- Quick answers to common questions from Edmonton homeowners.

### FAQs (draft)
1) **How much does it cost to paint a room in Edmonton?**
   Pricing depends on size, wall condition, paint type, and prep time. Request a free quote for an accurate estimate.
2) **Do you offer free estimates in Edmonton?**
   Yes—send a few details and we’ll schedule a quick estimate.
3) **How long does interior painting take?**
   Many rooms take 1–2 days depending on prep and drying time.
4) **What’s included in your prep work?**
   Protection, light patching/sanding as needed, and priming where required.
5) **What time of year is best for exterior painting in Edmonton?**
   Late spring through early fall is typical—weather conditions affect curing.
6) **How long does exterior paint last?**
   It varies by surface, sun exposure, and prep—good prep helps paint last longer.
7) **Do I need to move furniture before painters arrive?**
   Moving small items helps; we’ll confirm what to move during scheduling.
8) **Can you paint cabinets / trim / doors?**
   Yes—tell us what you’re updating and we’ll recommend the right approach during the estimate.

### CTA block (after FAQs)
- Ready for a quote? Tell us your project and we’ll reply by phone or email.

## CTAS
- Primary: **Request a Free Quote** → #quote-form
- Secondary: **Call the Painter** → tel:7807225577
- Tertiary: **Email the Painter** → mailto:[EMAIL_ADDRESS]

## INTERNAL_LINKING
- Link relevant answers to service pages.
- Optional: link to /ask-the-painter for deeper guides.

## IMPLEMENTATION_NOTES
- If FAQs are visible, you may add FAQPage schema (must match visible Q&A exactly).

## SCHEMA_NOTES
- FAQPage (only if these FAQs render on the page exactly as written).

## TRACKING_NOTES
- faq_expand
- cta_quote_click
- click_to_call
- click_email
