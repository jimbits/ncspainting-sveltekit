# Home Page (Single Source of Truth)

Purpose: Define the complete homepage content, order, and SEO intent for ncspainting.com.

Sources used:
- `docs/plans/site-plan.md`
- `docs/sections/*`

---

## Global SEO Targets
- Primary: painters / house painters Edmonton
- Secondary: interior painting Edmonton, exterior painting Edmonton, residential painters Edmonton
- Service areas: Edmonton (primary), St. Albert, Fort Saskatchewan, Sherwood Park

## Global CTAs
- Primary: Request a Free Quote → `#quote-form`
- Secondary: Call the Painter → `tel:7807225577`
- Tertiary: Email the Painter → `mailto:[EMAIL_ADDRESS]`

---

## Section Order (Must Match Site Plan)

1) Header + Navigation  
2) Hero (Above the fold)  
3) Service Overview (Core Residential Services)  
4) Why Choose NCS Painting  
5) Exterior Painting Highlight  
6) Interior Painting Highlight  
7) Process Overview  
8) Proof / Recent Projects  
9) Testimonials / Reviews  
10) Service Areas  
11) FAQ  
12) Contact / Conversion CTA (Quote Form)  
13) Trust Bar (Optional but Recommended)  
14) Footer  

## Added Sections (Recommended)

15) Additional Painting Services  
16) Let Us Help (Tips)  
17) Ask The Painter (Guides/Blog)  

---

## 1) Header + Navigation
Source: `docs/sections/header-nav.md`

**Heading:** NCS Painting  
**Tagline:** Residential & Commercial Painters • Edmonton  
**Nav:** Services, Projects, About, Service Areas, Contact  
**CTAs:** Quote / Call / Email  

**Notes**
- Use a skip link and a semantic `<header>`/`<nav>`.
- Keep CTAs visible on mobile (sticky bar).

---

## 2) Hero (Above the Fold)
Source: `docs/sections/hero.md`

**H1 (choose one)**
- House Painters in Edmonton
- Professional Painters in Edmonton

**Tagline (example)**
Interior and exterior painting with clean prep, clear communication, and a finish you’ll love.

**Benefit bullets (3–5)**
- Fast, free estimates
- Careful prep + protected floors
- Clean lines on trim and edges
- Daily cleanup + final walkthrough
- Friendly, professional crews

**CTAs**
- Request a Free Quote
- Call the Painter
- Email the Painter

**Trust microcopy**
Serving Edmonton, St. Albert, Fort Saskatchewan & Sherwood Park.

**Suggested images (static)**
- `/hero-16.jpg`
- `/hero-12.jpg`
- `/hero-21.jpg`

---

## 3) Service Overview (Core Residential Services)
Source: `docs/sections/interior-painting-services.md`, `docs/sections/expterior-painting-services.md`

**H2:** Residential Painting Services in Edmonton  
**Intro:** Quick overview with links to Interior and Exterior service pages.

**Include**
- Interior Painting card (link to /services/interior-painting)
- Exterior Painting card (link to /services/exterior-painting)
- Optional: Additional Services chips (see section 6)

**Suggested images (static)**
- `/image-26.png` (interior)
- `/hero-12.jpg` (exterior)

---

## 4) Why Choose NCS Painting
Source: `docs/sections/why-choose-us.md`

**H2:** Why Choose NCS Painting  
**Tagline:** Local, detail‑focused painters with a clean, reliable process.  
**Bullets (keep verifiable)**
- 30+ years in Edmonton (verify)
- Locally owned and operated
- Clean prep and tidy job sites
- Clear scope and timelines

**Suggested images (static)**
- `/ncs-painting-1.jpg` or `/ncs-painting-2.jpg`

---

## 5) Exterior Painting Highlight
Source: `docs/sections/expterior-painting-services.md`

**H3:** Exterior Painting Services  
**Tagline:** Exterior painting in Edmonton that starts with proper prep—so your finish holds up through the seasons.  
**Included bullets (4–6)**
- Surface cleaning + scraping/sanding where needed
- Priming for strong adhesion
- Caulking and sealing details
- Durable exterior coatings
- Neat masking and tidy cleanup

**Micro‑FAQ**
- Best season for exterior painting in Edmonton?
- How long does exterior paint last?

**Suggested images (static)**
- `/hero-12.jpg`
- `/image-24.png`

---

## 6) Interior Painting Highlight
Source: `docs/sections/interior-painting-services.md`

**H3:** Interior Painting Services  
**Tagline:** Interior painting in Edmonton for walls, ceilings, trim, and doors—with careful prep and a clean finish.  
**Included bullets (4–6)**
- Light patching, sanding, surface prep
- Protection for floors and furniture
- Crisp cut lines on trim and corners
- Priming where needed
- Daily cleanup and final walkthrough

**Micro‑FAQ**
- How much does it cost to paint a room in Edmonton?
- How long does interior painting take?

**Suggested images (static)**
- `/image-26.png`
- `/image-38.png`

---

## 7) Process Overview
Source: `docs/sections/process.md`

**H2:** Our Painting Process  
**Steps**
1. Free estimate and scope confirmation  
2. Surface prep and protection  
3. Paint application and detail work  
4. Final walkthrough and cleanup  

**Suggested images (static)**
- `/image-46.png` (prep)
- `/image-20.png` (finishing details)

---

## 8) Proof / Recent Projects
Source: `docs/sections/projects.md`

**H2:** Recent Painting Projects in Edmonton  
**Content**
- 6–9 project tiles with location captions
- Link to Projects/Gallery page

**Suggested images (static)**
- `/image-10.png`, `/image-11.png`, `/image-12.png`, `/image-13.png`, `/image-14.png`, `/image-15.png`

---

## 9) Testimonials / Reviews
Source: `docs/sections/testimonials.md`

**H2:** Reviews from Edmonton Homeowners  
**Content**
- 3–6 short testimonials
- Only include ratings if verified and present in schema

---

## 10) Service Areas
Source: `docs/sections/service-area.md`

**H2:** Service Areas  
**Tagline:** Local painting service for Edmonton and surrounding communities.  
**Areas:** Edmonton, St. Albert, Fort Saskatchewan, Sherwood Park  

---

## 11) FAQ
Source: `docs/sections/faq.md`

**H2:** FAQ  
**Tagline:** Quick answers to common questions from Edmonton homeowners.  
**Q&A:** Use the 8 questions from the section spec.  

---

## 12) Contact / Conversion CTA (Quote Form)
Source: `docs/sections/quote-form-section.md`

**H2:** Request a Free Quote  
**Tagline:** Tell us your project—get a fast reply by phone or email.  
**Fields:** Name, Phone, Email, Project Type, Details, Preferred Contact  

---

## 13) Trust Bar (Optional)
Source: `docs/sections/trust-bar.md`

**Content**
- Fully insured (only if verified)
- 30+ years in Edmonton (verify)
- Locally owned and operated
- Free estimates

**Suggested images (static)**
- `/svg/ncs-logos/brand-logo.svg`

---

## 14) Footer
Source: `docs/sections/footer.md`

**Heading:** Contact NCS Painting  
**NAP:** Keep identical everywhere (use `<address>`).  
**Hours:** Mon–Fri 9–5, Sat–Sun 11–3  
**Quick links:** Interior, Exterior, Additional Services, Projects, Contact  
**Areas:** Edmonton, St. Albert, Fort Saskatchewan, Sherwood Park  

---

## 15) Additional Painting Services (Recommended)
Source: `docs/sections/additional-painting-services.md`

**H3:** Additional Painting Services  
**Tagline:** Specialty services to complete your space.  
**List:** Cabinets, trim/doors, deck & fence staining, drywall patching, small commercial touch-ups.  

**Suggested images (static)**
- `/image-41.png`
- `/image-42.png`

---

## 16) Let Us Help (Tips)
Source: `docs/sections/let-us-help.md`

**H2:** Let Us Help  
**Tagline:** Quick tips from local Edmonton painters.  
**Content:** 6–10 tip cards with links to services or guides.  

**Suggested images (static)**
- `/image-18.png`
- `/image-19.png`

---

## 17) Ask The Painter (Guides/Blog)
Source: `docs/sections/ask-the-painter.md`

**H2:** Ask The Painter  
**Tagline:** Answers to real painting questions from Edmonton homeowners.  
**Content:** 6–9 article cards linking to guides.  

**Suggested images (static)**
- `/image-33.png`
- `/image-34.png`
