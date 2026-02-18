<script>
	import Logo from '$lib/assets/brand/Logo.svelte';
	import { MapPinCheckInside, Notebook, PhoneCall, ShieldCheck } from '@lucide/svelte';
	// Fort Saskatchewan — Painters Location Page
	// Route: /painters-fort-saskatchewan

	let faqOpen = $state({});

	function toggleFaq(index) {
		faqOpen[index] = !faqOpen[index];
	}

	const services = [
		{
			title: 'Interior Painting',
			description: 'Walls, ceilings, trim, doors, and feature walls. Dust control and daily cleanup included.',
			href: '/interior-painting-edmonton'
		},
		{
			title: 'Exterior Painting',
			description:
				'Siding, fascia, soffits, and trim. Full surface prep, caulking, and durable coatings for Alberta weather.',
			href: '/exterior-painting-edmonton'
		},
		{
			title: 'Cabinet Painting',
			description: 'Degrease, sand, prime, and finish for a factory-smooth result that lasts.',
			href: '/cabinet-painting-edmonton'
		},
		{
			title: 'Deck & Fence Staining',
			description: 'Pressure wash, prep, and stain for decks and fences. Timed for optimal weather conditions.',
			href: '/deck-staining-edmonton'
		}
	];

	const whyCards = [
		{
			title: 'Prep-First Approach',
			body: "We spend the time needed on surface prep. It's why our finishes look better and last longer."
		},
		{
			title: 'Tidy Job Sites',
			body: 'Floors, furniture, and fixtures are protected before we start. We clean up at the end of every day.'
		},
		{
			title: 'Clear Communication',
			body: 'You get a clear scope and quote before work starts. No surprises when the job is done.'
		}
	];

	const gallery = [
		{ src: '/image-26.png', alt: 'Interior painting project Fort Saskatchewan' },
		{ src: '/image-21.png', alt: 'Exterior painting project Edmonton area' },
		{ src: '/image-19.png', alt: 'Cabinet painting Fort Saskatchewan' },
		{ src: '/image-45.png', alt: 'Exterior home painting Edmonton' },
		{ src: '/image-5.png', alt: 'Interior room painting' },
		{ src: '/hero-9.jpg', alt: 'Deck staining Fort Saskatchewan' }
	];

	const faqs = [
		{
			q: 'Do you provide free estimates in Fort Saskatchewan?',
			a: 'Yes. We offer free, no-obligation estimates for all projects in Fort Saskatchewan and the surrounding area. Call us or submit a quote request online and we will follow up quickly.'
		},
		{
			q: 'What is included in your prep work?',
			a: 'Prep includes cleaning surfaces, sanding, filling cracks and holes, caulking gaps, masking trim and fixtures, and protecting floors and furniture with drop cloths before any paint is applied.'
		},
		{
			q: 'How soon can you start a project in Fort Saskatchewan?',
			a: 'Scheduling depends on our current workload and the size of your project. Contact us and we will give you an honest timeline. We do our best to accommodate time-sensitive requests.'
		},
		{
			q: 'What exterior paint do you use in Alberta weather?',
			a: "We use premium exterior coatings rated for Alberta's freeze-thaw cycles and UV exposure. We will recommend the right product for your siding material during your estimate."
		},
		{
			q: 'Do you service the surrounding communities?',
			a: 'Yes. Along with Fort Saskatchewan we serve Edmonton, St. Albert, and Sherwood Park. If you are just outside these areas, feel free to call and we will let you know if we can help.'
		}
	];

	const sidebarLinks = [
		{ label: 'Interior Painting', href: '/interior-painting-edmonton' },
		{ label: 'Exterior Painting', href: '/exterior-painting-edmonton' },
		{ label: 'Cabinet Painting', href: '/cabinet-painting-edmonton' },
		{ label: 'Deck & Fence Staining', href: '/deck-staining-edmonton' },
		{ label: 'Commercial Painting', href: '/commercial-painting-edmonton' }
	];
</script>

<svelte:head>
	<title>Painters Fort Saskatchewan | NCS Painting</title>
	<meta
		name="description"
		content="Residential painting services for Fort Saskatchewan homes. Interior and exterior painting with clean prep and clear quotes. Call NCS Painting for a free estimate."
	/>
	<link rel="canonical" href="https://ncspainting.com/painters-fort-saskatchewan" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'NCS Painting',
		url: 'https://ncspainting.com',
		telephone: '+17807225577',
		areaServed: ['Fort Saskatchewan', 'Edmonton', 'St. Albert', 'Sherwood Park'],
		description:
			'Residential painting services in Fort Saskatchewan. Interior, exterior, cabinet painting and deck staining.',
		openingHours: ['Mo-Fr 09:00-17:00', 'Sa 11:00-15:00']
	})}<\/script>`}
</svelte:head>

<!-- ═══════════════════════════════════════
     TOP BAR
═══════════════════════════════════════ -->
<div class="bg-slate-900 py-2.5 text-sm text-white">
	<ul class=" mx-auto flex max-w-[1150px] items-center justify-between gap-2">
		<li class="flex items-center gap-1.5 opacity-80">
			<!-- map pin -->
			<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
				<circle cx="12" cy="10" r="3" />
			</svg>
			Locations: Fort Saskatchewan
		</li>
		<li class="flex items-center gap-1.5 opacity-80">
			<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
				<polyline points="22,6 12,13 2,6" />
			</svg>
			niall@ncspainting.com
		</li>
	</ul>
</div>

<!-- ═══════════════════════════════════════
     HEADER / NAV
═══════════════════════════════════════ -->
<header class="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
	<div class="mx-auto flex max-w-[1240px] items-center justify-between gap-6 px-6 py-4">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2 text-xl font-bold tracking-tight">
			<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg">
				<Logo rings="fill-orange-400" brush="fill-orange-500" />
			</div>
			NCS Painting
		</a>

		<!-- Nav -->
		<nav class="hidden items-center gap-1 lg:flex">
			{#each [['/', 'Home'], ['/services', 'Services'], ['/projects', 'Projects'], ['/about', 'About'], ['/contact', 'Contact']] as [href, label]}
				<a
					{href}
					class="rounded-lg px-3.5 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
				>
					{label}
				</a>
			{/each}
		</nav>

		<!-- Phone -->
		<div class="hidden text-center text-sm md:block">
			<div class="text-xs font-semibold text-sky-600">Questions Ask The Painter?</div>
			<a href="tel:7807225577" class="text-base font-bold text-gray-900 transition-colors hover:text-[#EA580C]">
				(780) 722-5577
			</a>
		</div>
	</div>
</header>

<!-- ═══════════════════════════════════════
     HERO — Two-column: text left / image right
═══════════════════════════════════════ -->
<section class="relative overflow-hidden">
	<div
		class="relative z-10 mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20"
	>
		<!-- LEFT: Text -->
		<div class="flex flex-col">
			<!-- Heading -->
			<h1 class="mb-2 text-5xl leading-[1.08] font-extrabold tracking-tight md:text-6xl">
				House Painters
				<br />
				<span class="text-sky-600">Fort Saskatchewan</span>
			</h1>

			<p class="mb-7 max-w-md text-lg leading-8 font-semibold tracking-[-0.5px] text-slate-700">
				Trusted painters serving Fort Saskatchewan with clean prep, dependable schedules, and finishes that last.
			</p>

			<!-- Benefit list -->
			<ul class="mb-8 flex flex-col gap-3">
				{#each ['Fast, free estimates', 'Careful prep + protected floors', 'Clean lines on trim and edges', 'Daily cleanup + final walkthrough'] as benefit}
					<li class="flex items-center gap-3 text-[15px] font-semibold text-slate-700">
						<span class="bg--500 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-400">
							<svg
								class="h-3 w-3 fill-none stroke-white stroke-2"
								viewBox="0 0 12 12"
								fill="none"
								stroke="#0B0B0B"
								stroke-width="2.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<polyline points="2 6 5 9 10 3" />
							</svg>
						</span>
						{benefit}
					</li>
				{/each}
			</ul>

			<!-- CTAs -->
			<div class="flex flex-wrap gap-3">
				<a
					href="/contact"
					class="flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-500"
				>
					Request a Free Quote <span>→</span>
				</a>
				<a
					href="tel:7807225577"
					class="flex items-center gap-2 rounded-xl bg-slate-800 px-6 py-3 text-sm font-bold text-slate-50"
				>
					<PhoneCall class="h-5 w-5" />
					Call the Painter
				</a>
			</div>
		</div>

		<!-- RIGHT: Image with floating badges -->
		<div class="relative">
			<picture>
				<img
					src="/image-40.png"
					alt="Beautifully painted home interior by NCS Painting in Fort Saskatchewan"
					class="h-[460px] w-full rounded-2xl object-cover"
					loading="eager"
				/>
			</picture>

			<!-- Badge: bottom-left -->
			<!-- <div
				class="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-2xl md:left-[-20px]"
			>
				<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#0B0B0B]">
					<svg
						class="h-5 w-5 stroke-sky-400"
						viewBox="0 0 24 24"
						fill="none"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
						/>
					</svg>
				</div>
				<div class="leading-tight">
					<strong class="block text-[15px] font-bold text-gray-900">Fully Insured</strong>
					<span class="text-xs text-gray-500">30+ Years Experience</span>
				</div>
			</div> -->

			<!-- Badge: top-right -->
			<!-- <div
				class="absolute top-5 -right-3 rounded-xl bg-sky-400 px-4 py-2.5 text-sm font-bold text-[#0B0B0B] shadow-lg md:right-[-12px]"
			>
				Free Estimates ✓
			</div> -->
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════
     TRUST BAR
═══════════════════════════════════════ -->
<div class="border-b border-gray-200 py-6">
	<div class="mx-auto flex max-w-[1240px] flex-wrap justify-evenly gap-8 px-6 md:gap-14">
		<figure class="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
			<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-slate-800">
				<ShieldCheck class="fill-none stroke-slate-50" />
			</div>
			<figcaption>Insured</figcaption>
		</figure>
		<figure class="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
			<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-slate-800">
				<ShieldCheck class="fill-none stroke-slate-50" />
			</div>
			<figcaption>30+ years experience</figcaption>
		</figure>
		<figure class="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
			<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-slate-800">
				<MapPinCheckInside class="fill-none stroke-slate-50" />
			</div>
			<figcaption>Local</figcaption>
		</figure>
		<figure class="flex items-center gap-2.5 text-sm font-semibold text-gray-700">
			<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-slate-800">
				<Notebook class="fill-none stroke-slate-50" />
			</div>
			<figcaption>Free Estimates</figcaption>
		</figure>
	</div>
</div>

<!-- ═══════════════════════════════════════
     PAGE BODY — two-column: main + sidebar
═══════════════════════════════════════ -->
<div class="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-10 px-6 py-16 lg:grid-cols-[1fr_296px]">
	<!-- ─── MAIN CONTENT ───────────────────── -->
	<main class="flex min-w-0 flex-col gap-16">
		<!-- INTRO BLOCK -->
		<section>
			<picture>
				<img
					src="/hero-8.jpg"
					alt="NCS Painting crew at work on a Fort Saskatchewan home"
					class="mb-7 h-[340px] w-full rounded-2xl object-cover"
					loading="eager"
				/>
			</picture>

			<p class="mb-2.5 flex items-center gap-2 text-xs font-bold tracking-widest text-[#EA580C] uppercase">
				<span class="inline-block h-0.5 w-6 bg-[#EA580C]"></span>
				Fort Saskatchewan
			</p>
			<h2 class="mb-4 text-3xl font-extrabold tracking-tight">Professional Painters Serving Fort Saskatchewan</h2>
			<p class="mb-4 leading-relaxed text-gray-600">
				NCS Painting has been completing interior and exterior painting projects for homeowners in Fort Saskatchewan and
				the greater Edmonton region for over 30 years. We bring the same prep-first approach and clear communication to
				every project, whether it's a single room refresh or a full exterior repaint.
			</p>
			<p class="mb-6 leading-relaxed text-gray-600">
				Fort Saskatchewan homeowners choose NCS because we show up on time, protect what matters in your home, and leave
				every job site clean. You get a clear quote up front — no surprises at the end.
			</p>
			<a
				href="/contact"
				class="inline-flex items-center gap-2 rounded-xl bg-[#0B0B0B] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-gray-800"
			>
				Request a Free Quote →
			</a>
		</section>

		<!-- SERVICES OFFERED -->
		<section>
			<p class="mb-2.5 flex items-center gap-2 text-xs font-bold tracking-widest text-[#EA580C] uppercase">
				<span class="inline-block h-0.5 w-6 bg-[#EA580C]"></span>
				What We Offer
			</p>
			<h2 class="mb-2 text-3xl font-extrabold tracking-tight">Painting Services in Fort Saskatchewan</h2>
			<p class="mb-6 text-gray-500">
				From interior rooms to full exterior repaints, we handle the full scope of residential painting.
			</p>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{#each services as { title, description, href }}
					<a
						{href}
						class="group flex items-start gap-4 rounded-2xl border border-gray-200 p-5 transition-all hover:border-gray-400 hover:shadow-md"
					>
						<span class="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-sky-400"></span>
						<div>
							<h4 class="mb-1 text-[15px] font-bold transition-colors group-hover:text-[#EA580C]">{title}</h4>
							<p class="text-sm leading-relaxed text-gray-500">{description}</p>
						</div>
					</a>
				{/each}
			</div>
		</section>

		<!-- WHY CHOOSE US -->
		<section>
			<p class="mb-2.5 flex items-center gap-2 text-xs font-bold tracking-widest text-[#EA580C] uppercase">
				<span class="inline-block h-0.5 w-6 bg-[#EA580C]"></span>
				Why NCS
			</p>
			<h2 class="mb-6 text-3xl font-extrabold tracking-tight">Why Fort Saskatchewan Homeowners Choose Us</h2>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
				{#each whyCards as { title, body }}
					<div class="rounded-2xl bg-gray-50 p-6">
						<h4 class="mb-2 text-[15px] font-bold">{title}</h4>
						<p class="text-sm leading-relaxed text-gray-500">{body}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- GALLERY -->
		<section>
			<p class="mb-2.5 flex items-center gap-2 text-xs font-bold tracking-widest text-[#EA580C] uppercase">
				<span class="inline-block h-0.5 w-6 bg-[#EA580C]"></span>
				Our Work
			</p>
			<h2 class="mb-2 text-3xl font-extrabold tracking-tight">Recent Projects Near Fort Saskatchewan</h2>
			<p class="mb-6 text-gray-500">Real results from real homes in the Edmonton area.</p>

			<div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
				{#each gallery as { src, alt }, i}
					<div class="group relative aspect-[4/3] overflow-hidden rounded-2xl">
						<picture>
							<img
								{src}
								{alt}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								loading="lazy"
							/>
						</picture>
						<div
							class="absolute inset-x-0 bottom-0 translate-y-1 bg-gradient-to-t from-black/70 to-transparent px-3 pt-8 pb-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
						>
							<span class="text-xs font-semibold text-white">{alt}</span>
						</div>
					</div>
				{/each}
			</div>

			<div class="mt-7 text-center">
				<a
					href="/projects"
					class="inline-flex items-center gap-2 rounded-xl border-2 border-gray-900 px-6 py-3 text-sm font-bold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
				>
					View All Projects →
				</a>
			</div>
		</section>

		<!-- FAQ -->
		<section>
			<p class="mb-2.5 flex items-center gap-2 text-xs font-bold tracking-widest text-[#EA580C] uppercase">
				<span class="inline-block h-0.5 w-6 bg-[#EA580C]"></span>
				FAQ
			</p>
			<h2 class="mb-6 text-3xl font-extrabold tracking-tight">Common Questions from Fort Saskatchewan Homeowners</h2>

			<div class="flex flex-col gap-3">
				{#each faqs as { q, a }, i}
					<div class="overflow-hidden rounded-xl border border-gray-200">
						<button
							onclick={() => toggleFaq(i)}
							class="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold transition-colors hover:bg-gray-50"
							aria-expanded={faqOpen[i] ?? false}
						>
							<span>{q}</span>
							<span
								class="flex-shrink-0 text-2xl font-light text-[#EA580C] transition-transform duration-200 {faqOpen[i]
									? 'rotate-45'
									: ''}"
							>
								+
							</span>
						</button>
						{#if faqOpen[i]}
							<div class="border-t border-gray-100 px-5 pt-4 pb-5 text-[15px] leading-relaxed text-gray-600">
								{a}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<!-- SERVICE AREAS -->
		<section>
			<p class="mb-2.5 flex items-center gap-2 text-xs font-bold tracking-widest text-[#EA580C] uppercase">
				<span class="inline-block h-0.5 w-6 bg-[#EA580C]"></span>
				Service Areas
			</p>
			<h2 class="mb-2 text-3xl font-extrabold tracking-tight">Serving Fort Saskatchewan and Surrounding Communities</h2>
			<p class="mb-5 text-gray-500">
				NCS Painting provides residential painting services across the Edmonton metro area.
			</p>

			<div class="flex flex-wrap gap-3">
				<span class="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-white">Fort Saskatchewan</span>
				{#each ['St. Albert', 'Sherwood Park', 'Beaumont'] as area}
					<span
						class="cursor-default rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-900 hover:text-white"
					>
						{area}
					</span>
				{/each}
			</div>

			<p class="mt-5 text-sm text-gray-500">
				Also serving:
				<a href="/interior-painting-edmonton" class="text-blue-400 underline underline-offset-2 hover:text-sky-600">
					interior painting Edmonton
				</a>
				&nbsp;·&nbsp;
				<a href="/exterior-painting-edmonton" class="text-blue-400 underline underline-offset-2 hover:text-sky-600">
					exterior painting Edmonton
				</a>
			</p>
		</section>
	</main>

	<!-- ─── SIDEBAR ─────────────────────────── -->
	<aside class="flex flex-col gap-6 lg:sticky lg:top-24">
		<!-- Services nav panel -->
		<div class="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
			<h3 class="bg-slate-800 px-6 py-4 text-sm font-bold tracking-wide text-slate-50 uppercase">On This Page</h3>
			<ul>
				{#each sidebarLinks as { label, href }, i}
					<li class="border-b border-gray-100 last:border-b-0">
						<a
							{href}
							class="flex items-center justify-between px-6 py-4 text-[15px] font-medium text-gray-600 transition-colors hover:bg-orange-50 hover:text-[#EA580C]"
						>
							{label}
							<span class="text-lg opacity-40">›</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Quote CTA card -->
		<div class="rounded-2xl bg-slate-950 p-6 text-center text-white">
			<h3 class="mb-2 text-xl font-bold">Get a Free Quote</h3>
			<p class="mb-5 text-sm leading-relaxed text-white/60">
				Tell us about your Fort Saskatchewan project and we'll get back to you fast.
			</p>

			<a
				href="/contact"
				class="mb-3 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-500"
			>
				Request a Quote →
			</a>
			<a
				href="/contact"
				class="flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
			>
				Contact Us
			</a>

			<a href="tel:7807225577" class="mt-5 block text-xl font-bold text-blue-400 hover:underline">(780) 722-5577</a>
		</div>

		<!-- Secondary image in sidebar -->
		<div class="overflow-hidden rounded-2xl">
			<picture>
				<img
					src="/hero-9.jpg"
					alt="NCS Painting team consulting with homeowner"
					class="h-48 w-full object-cover"
					loading="lazy"
				/>
			</picture>
		</div>
	</aside>
</div>

<!-- ═══════════════════════════════════════
     FULL-WIDTH CTA BAND
═══════════════════════════════════════ -->
<section class="relative overflow-hidden bg-[#0B0B0B] px-6 py-20 text-center">
	<div
		class="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/2 rounded-full bg-sky-400/[0.05] blur-3xl"
	></div>
	<div class="relative z-10 mx-auto max-w-xl">
		<h2 class="mb-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
			Ready to Transform Your Fort Saskatchewan Home?
		</h2>
		<p class="mb-8 text-lg leading-relaxed text-white/60">
			Get a free, no-obligation quote. We reply quickly and work around your schedule.
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<a
				href="/contact"
				class="flex items-center gap-2 rounded-xl bg-sky-400 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-400"
			>
				Request a Free Quote →
			</a>
			<a
				href="tel:7807225577"
				class="flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
			>
				<PhoneCall class="h-5 w-5" />
				(780) 722-5577
			</a>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════
     FOOTER
═══════════════════════════════════════ -->
<footer class="bg-[#0B0B0B] px-6 pt-16 pb-8 text-white">
	<div class="mx-auto max-w-[1240px]">
		<div class="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Brand col -->
			<div>
				<div class="mb-4 flex items-center gap-2 text-xl font-bold">
					<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
						<Logo brush="fill-white/50" rings="fill-white/30" handle="fill-white/80" />
					</div>
					NCS Painting
				</div>
				<p class="mb-4 text-sm leading-relaxed text-white/55">
					Edmonton's most reliable residential painters. Serving Fort Saskatchewan, St. Albert, Sherwood Park, and the
					Edmonton metro area.
				</p>
				<address class="flex flex-col gap-1 text-sm text-white/55 not-italic">
					<a href="tel:7807225577" class="transition-colors hover:text-sky-400">(780) 722-5577</a>
					<a href="mailto:info@ncspainting.com" class="transition-colors hover:text-[#84CC16]">info@ncspainting.com</a>
					<span>Mon–Fri 9am–5pm · Sat–Sun 11am–3pm</span>
				</address>
			</div>

			<!-- Services -->
			<div>
				<h4 class="mb-4 text-xs font-bold tracking-widest text-white/40 uppercase">Services</h4>
				<ul class="flex flex-col gap-2 text-sm text-white/60">
					{#each [['Interior Painting', '/interior-painting-edmonton'], ['Exterior Painting', '/exterior-painting-edmonton'], ['Cabinet Painting', '/cabinet-painting-edmonton'], ['Deck & Fence Staining', '/deck-staining-edmonton']] as [label, href]}
						<li><a {href} class="transition-colors hover:text-sky-400">{label}</a></li>
					{/each}
				</ul>
			</div>

			<!-- Areas -->
			<div>
				<h4 class="mb-4 text-xs font-bold tracking-widest text-white/40 uppercase">Service Areas</h4>
				<ul class="flex flex-col gap-2 text-sm text-white/60">
					{#each [['Fort Saskatchewan', '/painters-fort-saskatchewan'], ['St. Albert', '/painters-st-albert'], ['Sherwood Park', '/painters-sherwood-park'], ['Edmonton', '/interior-painting-edmonton']] as [label, href]}
						<li><a {href} class="transition-colors hover:text-sky-400">{label}</a></li>
					{/each}
				</ul>
			</div>

			<!-- Quick links -->
			<div>
				<h4 class="mb-4 text-xs font-bold tracking-widest text-white/40 uppercase">Quick Links</h4>
				<ul class="flex flex-col gap-2 text-sm text-white/60">
					{#each [['About NCS', '/about'], ['Projects', '/projects'], ['Ask The Painter', '/ask-the-painter'], ['Contact / Quote', '/contact']] as [label, href]}
						<li><a {href} class="transition-colors hover:text-sky-400">{label}</a></li>
					{/each}
				</ul>
			</div>
		</div>

		<!-- Footer bottom -->
		<div class="flex flex-col items-center justify-between gap-3 pt-7 text-xs text-white/30 sm:flex-row">
			<span>© 2026 NCS Painting. All rights reserved.</span>
			<span>Painters Fort Saskatchewan | Edmonton, AB</span>
		</div>
	</div>
</footer>
