# Performance Budget

## Core Web Vitals Targets
- LCP: < 2.5s
- INP: < 200ms
- CLS: < 0.1

## Image Budgets
- Hero images: ≤ 300KB
- Section images: ≤ 150KB
- Thumbnails/icons: ≤ 50KB
- Use AVIF/WebP with JPG fallback

## Implementation Notes
- Add width/height to all images
- Lazy-load below-the-fold images
- Prioritize hero image (`fetchpriority="high"`, `loading="eager"`)
- Avoid heavy third-party scripts on landing page
