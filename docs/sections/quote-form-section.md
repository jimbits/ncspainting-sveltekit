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

# Quote Form (Lead Capture Section)

## CONTEXT
- Business: NCS Painting
- Primary market: Edmonton, Alberta
- Service areas: Edmonton, St Albert, Fort Saskatchewan, Sherwood Park
- Phone: 780-722-5577

## PURPOSE
- Convert high-intent visitors into form submissions, calls, and emails.

## SEO_TARGETS
### Primary
- Free quote / painting estimate Edmonton

### Secondary
- Painting estimate Edmonton
- Free painting quote Edmonton
- Contact painters Edmonton

## LAYOUT_REQUIREMENTS
- Clear form container
- 2 columns desktop, 1 column mobile
- Secondary Call/Email actions

## CONTENT_DRAFT
### Heading (H2)
- Request a Free Quote

### Tagline
- Tell us your project—get a fast reply by phone or email.

### Sub-headings (optional)
- Contact Details
- Project Details
- Preferred Contact Method

### Copy block
Share a few details and we’ll follow up with next steps. No spam—just your quote.

### Field labels
- Name
- Phone Number
- Email Address
- Project Type: Interior / Exterior / Other
- Project Details (max 140 characters)
- Preferred Contact: Call / Text / Email

### Submit microcopy
- Button: “Request Quote”
- Helper: “We respond within [TIME_WINDOW].” (set to real expectation)

## CTAS
- Primary: **Submit / Request Quote** (form submit)
- Secondary: **Call the Painter** → tel:7807225577
- Tertiary: **Email the Painter** → mailto:[EMAIL_ADDRESS]

## INTERNAL_LINKING
- This section is the target for hero/services/FAQ CTAs.

## IMPLEMENTATION_NOTES
- Keep required fields minimal.
- Add confirmation state.
- Add server-side validation + simple spam protection.

## SCHEMA_NOTES
- (None required for this section beyond site-wide LocalBusiness on Contact/Footer.)

## TRACKING_NOTES
- form_submit
- click_to_call
- click_email
