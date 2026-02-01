# NCS Painting SEO Implementation Plan

## Project Context

- **Business**: NCS Painting (Edmonton, Alberta)
- **Site Type**: Local service business (residential/commercial painting)
- **Goals**: Improve local rankings, increase quote requests, expand secondary markets

---

## Phase 1: Technical Foundation

### 1.1 Schema Markup Implementation

Create JSON-LD structured data for:

```
LocalBusiness schema:
- @type: "HouseAndConstructionBusiness" or "HomeAndConstructionBusiness"
- name, address, telephone, url, logo
- areaServed: Edmonton + surrounding cities
- openingHours
- priceRange
- aggregateRating (if reviews exist)
- sameAs: [social profile URLs]
```

```
Service schema for each service page:
- @type: "Service"
- name, description, provider, areaServed
- offers (if pricing displayed)
```

```
FAQ schema on service pages:
- @type: "FAQPage"
- mainEntity: array of Question/Answer pairs
```

Place all schema in `<head>` or before closing `</body>`.

### 1.2 Meta Tags Template

Apply to all pages:

## Role

- You are an expert SEO and Marketing specialist
- You are a master keyword planner and keyword content writer.
- You excell at getting small local service business higher page ranks.
- You are an expert at optimizing web content.
- You are an expert at analyzing web page performance and implementing solutions to maximize Googles Performance metrics Accessibilty Best Practices and SEO lighthouse Scores.
- SEO primary goal rank higher in searches for residential painting companies in Edmonton primary area.
- SEO secondary goal increase the number of new customer contacts comming from the page.

```html
<title>[Service] [Location] | NCS Painting</title>
<meta
	name="description"
	content="[Benefit statement]. [Service details]. Free estimates in [Location]. Call [phone]."
/>
<link rel="canonical" href="[full URL]" />
```

Homepage example:

```html
<title>Professional Painters Edmonton | NCS Painting</title>
<meta
	name="description"
	content="Edmonton's trusted painting contractors. Interior, exterior, and commercial painting. Insured, experienced crews. Get your free estimate today."
/>
```

### 1.3 Core Web Vitals Checklist

Implement these optimizations:

- [ ] Compress all images (target <100KB for thumbnails, <300KB for heroes)
- [ ] Convert images to WebP with JPG fallback
- [ ] Add `width` and `height` attributes to all `<img>` tags
- [ ] Lazy load below-fold images: `loading="lazy"`
- [ ] Preload hero image: `<link rel="preload" as="image" href="...">`
- [ ] Minify CSS/JS
- [ ] Defer non-critical JS: `<script defer>`
- [ ] Inline critical CSS
- [ ] Enable GZIP/Brotli compression
- [ ] Set cache headers for static assets

Target scores:

- LCP: <2.5s
- INP: <200ms
- CLS: <0.1

### 1.4 Technical SEO Files

Create/update:

**robots.txt**

```
User-agent: *
Allow: /
Sitemap: https://ncspainting.ca/sitemap.xml
```

**XML Sitemap** - Include:

- Homepage
- All service pages
- All location pages
- About, Contact, Gallery pages
- Blog posts (if any)

---

## Phase 2: Page Structure

### 2.1 Required Service Pages

Create individual pages for:

| Page                  | URL Slug                        | Target Keyword               |
| --------------------- | ------------------------------- | ---------------------------- |
| Interior Painting     | `/interior-painting-edmonton`   | interior painting edmonton   |
| Exterior Painting     | `/exterior-painting-edmonton`   | exterior painting edmonton   |
| Commercial Painting   | `/commercial-painting-edmonton` | commercial painters edmonton |
| Cabinet Painting      | `/cabinet-painting-edmonton`    | cabinet painting edmonton    |
| Deck & Fence Staining | `/deck-staining-edmonton`       | deck staining edmonton       |

### 2.2 Required Location Pages

Create pages for service areas:

| Location      | URL Slug                               |
| ------------- | -------------------------------------- |
| Edmonton      | `/painters-edmonton` (or use homepage) |
| St. Albert    | `/painters-st-albert`                  |
| Sherwood Park | `/painters-sherwood-park`              |
| Spruce Grove  | `/painters-spruce-grove`               |
| Leduc         | `/painters-leduc`                      |

### 2.3 Page Template Structure

```html
<h1>[Service] in [Location] | NCS Painting</h1>

<!-- Hero section with CTA -->
<section class="hero">
	<p>[Value proposition - 1-2 sentences]</p>
	<a href="/contact" class="cta-primary">Get Free Estimate</a>
	<a href="tel:+1XXXXXXXXXX" class="cta-secondary">Call Now</a>
</section>

<!-- Trust signals -->
<section class="trust-bar">
	[Insured badge] [X Years Experience] [5-Star Rating] [Local badge]
</section>

<h2>Why Choose NCS for [Service]</h2>
<p>[Benefits content]</p>

<h2>Our [Service] Process</h2>
<p>[Process steps]</p>

<h2>[Service] Gallery</h2>
[Before/after images with alt text: "interior painting project [location]"]

<h2>Frequently Asked Questions</h2>
[FAQ accordion - minimum 4 questions]

<h2>Service Areas</h2>
<p>We provide [service] in [Location] and surrounding areas including [list cities].</p>

<!-- Bottom CTA -->
<section class="cta-section">
	<h2>Ready to Transform Your Space?</h2>
	<a href="/contact" class="cta-primary">Get Your Free Quote</a>
</section>
```

### 2.4 Homepage Sections Required

Structure in this order:

1. Hero (headline + primary CTA + trust signals)
2. Services overview (linked cards to service pages)
3. Why Choose Us (differentiators)
4. Recent Projects gallery
5. Testimonials/Reviews
6. Service Areas
7. Contact CTA

---

## Phase 3: Content Requirements

### 3.1 About Page Content

Include:

- Company founding story and years in business
- Team photo (use `/mnt/project/crew.jpg` or `/mnt/project/crew1.jpg`)
- Owner/founder bio with credentials
- Insurance and certifications
- Service area description
- Company values/approach

### 3.2 Image Alt Text Pattern

Apply consistently:

```
Hero images: "[service] contractors working in [location]"
Gallery images: "[service type] project - [brief description] [location]"
Team photos: "NCS Painting team" or "[Name], [role] at NCS Painting"
Before/after: "Before and after [service] in [location]"
```

### 3.3 Internal Linking Rules

- Every service page links to Contact page
- Every service page links to 2-3 related services
- Every location page links to all services offered there
- Footer contains links to all main service pages
- Blog posts (if created) link to relevant service pages

---

## Phase 4: Conversion Optimization

### 4.1 CTA Implementation

**Primary CTA (use on all pages)**

```html
<a href="/contact" class="btn btn-primary">Get Free Estimate</a>
```

**Secondary CTA**

```html
<a href="tel:+1XXXXXXXXXX" class="btn btn-secondary">Call (XXX) XXX-XXXX</a>
```

**CTA Placement Rules:**

- Primary CTA in hero (above fold)
- Sticky header with CTA button
- Mid-page CTA after benefits section
- Bottom CTA before footer
- Mobile: click-to-call must be tappable

### 4.2 Contact Form Fields

Minimum required:

```
- Name (required)
- Phone (required)
- Email (required)
- Service needed (dropdown)
- Message (optional)
```

Add below submit button:

```html
<p class="form-note">Free estimates • No obligation • Response within 24 hours</p>
```

### 4.3 Trust Elements Placement

Display near CTAs:

- Google rating badge (if 4+ stars)
- "Fully Insured" badge
- "X+ Years Experience" badge
- "Locally Owned" badge
- Review snippets

---

## Phase 5: Google Business Profile Tasks

### 5.1 GBP Optimization Checklist

- [ ] Verify primary category: "Painter"
- [ ] Add secondary categories: "Commercial Painter", "Painting Contractor"
- [ ] Complete all service listings with descriptions
- [ ] Add service areas (all cities served)
- [ ] Upload minimum 20 photos (projects, team, equipment)
- [ ] Write 750-character business description with keywords
- [ ] Add all attributes (insured, locally owned, etc.)
- [ ] Set accurate hours
- [ ] Enable messaging
- [ ] Add products/services section

### 5.2 GBP Content Calendar

Weekly tasks:

- Post 1 update (project photo, tip, or offer)
- Respond to any new reviews within 24 hours

Monthly tasks:

- Add 4+ new project photos
- Update any seasonal offers
- Review and update Q&A section

### 5.3 Review Response Template

```
Positive: "Thank you [Name] for trusting NCS Painting with your [service type] project in [location]! We loved working on your [specific detail if mentioned]. We appreciate your kind words about [mention something from review]."

Negative: "Thank you for your feedback, [Name]. We take all concerns seriously. Please contact us at [phone/email] so we can make this right."
```

---

## Phase 6: Analytics Setup

### 6.1 Google Analytics 4 Events to Track

```javascript
// Form submission
gtag('event', 'generate_lead', {
	event_category: 'Contact',
	event_label: 'Quote Form Submission'
});

// Phone click
gtag('event', 'click', {
	event_category: 'Contact',
	event_label: 'Phone Click'
});

// Email click
gtag('event', 'click', {
	event_category: 'Contact',
	event_label: 'Email Click'
});
```

### 6.2 Google Search Console Tasks

- [ ] Verify site ownership
- [ ] Submit sitemap
- [ ] Check Core Web Vitals report
- [ ] Monitor indexing status
- [ ] Review search queries monthly

---

## File Reference

Project images available at `/mnt/project/`:

- Hero images: `hero1.jpg` through `hero18.png`
- Team/crew: `crew.jpg`, `crew1.jpg`
- Service images: `servicepaint5.jpg`
- Process images: `prepwork.png`, `cleanlines.png`, `insured.png`
- Color consultation: Multiple color swatch images

---

## Implementation Priority Order

**Week 1-2: Technical**

1. Schema markup (LocalBusiness + Service)
2. Meta tags all pages
3. Core Web Vitals fixes
4. Sitemap + robots.txt

**Week 3-4: Structure** 5. Service pages (5 pages) 6. Location pages (5 pages) 7. About page enhancement 8. Internal linking

**Week 5-6: Conversion** 9. CTA optimization 10. Contact form optimization 11. Trust signals placement 12. Mobile optimization

**Week 7-8: Off-site** 13. GBP optimization 14. Citation building (10 directories) 15. Analytics/tracking setup 16. Review generation process

---

## Validation Checklist

Before launch, verify:

- [ ] All pages have unique title tags
- [ ] All pages have unique meta descriptions
- [ ] All images have alt text
- [ ] Schema validates in Google Rich Results Test
- [ ] No broken internal links
- [ ] Mobile responsive on all pages
- [ ] Forms submit correctly
- [ ] Phone links work on mobile
- [ ] Page speed >80 on mobile (Lighthouse)
- [ ] Sitemap accessible and valid
