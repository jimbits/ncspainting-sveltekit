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

# keyword-mapping.md

## PURPOSE
- Planning checklist + keyword-to-page mapping framework for local SEO + Google Business visibility + lead generation.

## SYSTEM_OVERVIEW
```text
             ┌─────────────────────────┐
             │  Organic Google Results  │  (your website pages)
             └───────────┬─────────────┘
                         │ relevance + authority + UX
┌────────────────────────▼────────────────────────┐
│   Your Website (pages, content, schema, speed)  │
└───────────┬───────────────────────────┬─────────┘
            │ NAP + location signals     │ conversion
┌───────────▼───────────┐       ┌───────▼──────────┐
│ Google Business Profile │       │ Leads (calls/forms)│
│ (map pack / local)      │       └───────────────────┘
└─────────────────────────┘
```

## NON_NEGOTIABLES
- NAP consistency across website + Google Business Profile + directories
- One primary intent per page (avoid keyword cannibalization)
- Strong internal linking (Home → Services → Proof → Contact loop)
- Fast mobile experience (Core Web Vitals)
- Clear CTAs (Quote / Call / Email) + conversion tracking

## KEYWORD_TO_PAGE_MAPPING_TEMPLATE
| Page | Primary Keyword (Intent) | Secondary Keywords | Audience/Stage | CTA | Proof Needed |
|---|---|---|---|---|---|
| Home | painters/house painters + city | “best”, “top rated”, neighborhoods | Ready-to-hire | Call / Quote | reviews, photos, guarantees |
| Interior | interior painting + city | walls, ceilings, trim, prep | Comparing | Quote | process + FAQs + photos |
| Exterior | exterior painting + city | siding, stucco, seasonal | Comparing | Quote | prep details + photos |
| Commercial | commercial painters + city | offices, retail, schedules | B2B eval | Quote | portfolio + timeline |
| Projects | painting projects + city | before/after | Trust | Quote | real photos |
| About | painting company + city | local, team | Trust | Call / Quote | credibility |
| Contact | painting estimate + city | free quote | Ready-to-hire | Submit/Call | map + NAP |

## INTERNAL_LINK_PLAN
```text
Home
 ├─ Services pages
 ├─ Projects/Gallery
 └─ Contact

Service pages
 ├─ link to Projects filtered for that service
 └─ link to Contact (quote)

Projects/Gallery
 ├─ link to the relevant Service page
 └─ link to Contact

Contact
 └─ links back to Services (for users who aren’t ready)
```

## PER_PAGE_ON_PAGE_CHECKLIST
- Title tag includes primary keyword + city
- H1 matches core intent (one H1 per page)
- Supporting sections cover secondary keywords naturally
- Proof blocks: projects + testimonials
- Local relevance: service area mention where appropriate
- CTA above fold + repeated near bottom
- Schema appropriate for page type
- Track conversions (form/call/email)
