<script>
	// Sherwood Park — Painters Location Page
	// Route: src/routes/painters-sherwood-park/+page.svelte

	let openFaq = $state(null);

	function toggleFaq(i) {
		openFaq = openFaq === i ? null : i;
	}

	const services = [
		{ label: 'Interior Painting', desc: 'Walls, ceilings, trim, and doors.', href: '/interior-painting-edmonton' },
		{
			label: 'Exterior Painting',
			desc: 'Siding, stucco, fascia, soffits, and doors.',
			href: '/exterior-painting-edmonton'
		},
		{
			label: 'Cabinet Painting',
			desc: 'Kitchen and bath cabinets — smooth, durable finish.',
			href: '/cabinet-painting-edmonton'
		},
		{
			label: 'Deck & Fence Staining',
			desc: 'Prep, stain, and protect for Alberta seasons.',
			href: '/deck-staining-edmonton'
		},
		{ label: 'Touch-up & Repair Prep', desc: 'Small patches and prep work where applicable.', href: '/contact' }
	];

	const process = [
		{
			n: '01',
			title: 'Estimate + Planning',
			body: 'We review the scope, confirm surfaces, and set clear expectations for timing and access.'
		},
		{
			n: '02',
			title: 'Prep & Protection',
			body: 'Floors and furniture protected, surfaces patched and sanded, primer applied for consistent coverage.'
		},
		{
			n: '03',
			title: 'Painting & Finishing',
			body: 'Even coatings, straight cut lines, smooth roll patterns, and clean edges throughout.'
		},
		{
			n: '04',
			title: 'Walkthrough & Cleanup',
			body: 'Final walkthrough with you, site left clean, and the space ready to enjoy.'
		}
	];

	const whyUs = [
		{
			title: 'Prep-first mindset',
			body: 'The finish looks better and lasts longer when the surface is properly prepared.'
		},
		{
			title: 'Neat, respectful crews',
			body: 'We treat your home with care — clean work areas and considerate schedules.'
		},
		{
			title: 'Straightforward communication',
			body: 'You always know what is happening and when. No surprises at the invoice.'
		},
		{ title: 'Durable finishes', body: 'Products selected based on surface type and how much wear each area takes.' }
	];

	const faqs = [
		{
			q: 'Can you paint just a few rooms or a single feature wall?',
			a: 'Yes — small interior refresh projects are very common. We will give you a clear quote for exactly what you need.'
		},
		{
			q: 'Do you paint cabinets in Sherwood Park?',
			a: 'Yes. Cabinet painting is a popular way to modernize a kitchen without a full renovation. We degrease, sand, prime, and apply a durable finish.'
		},
		{
			q: 'How do you protect floors and furniture?',
			a: 'We use drop cloths, masking tape, and careful prep before any paint is applied. The job site stays tidy throughout.'
		},
		{
			q: 'What paint sheen should I choose?',
			a: 'We recommend based on room use — higher durability sheens where needed, softer lower-sheen finishes for living areas. We will walk you through options at the estimate.'
		}
	];

	const gallery = [
		{ src: '/images/ncs-painting-1.jpg', alt: 'Interior painting — Sherwood Park home', wide: true },
		{ src: '/images/image-45.png', alt: 'Painter finishing ceiling trim', wide: false },
		{ src: '/images/hero-2.jpg', alt: 'NCS crew consulting with homeowner', wide: false },
		{ src: '/images/image-19.png', alt: 'Prep work — surface sanding', wide: false },
		{ src: '/images/image-26.png', alt: 'Exterior painting project', wide: false },
		{ src: '/images/image-21.png', alt: 'Cabinet painting finish detail', wide: false }
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
	<title>Painters Sherwood Park | NCS Painting</title>
	<meta
		name="description"
		content="Looking for painters in Sherwood Park? NCS Painting handles interior, exterior, cabinets, and staining with careful prep and clean results. Free estimates—call 780-722-5577."
	/>
	<link rel="canonical" href="https://ncspainting.com/painters-sherwood-park" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: [
			{
				'@type': 'Question',
				name: 'Can you paint just a few rooms or a single feature wall?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Yes — small interior refresh projects are very common. We will give you a clear quote for exactly what you need.'
				}
			},
			{
				'@type': 'Question',
				name: 'Do you paint cabinets in Sherwood Park?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Yes. Cabinet painting is a popular way to modernize a kitchen without a full renovation.'
				}
			},
			{
				'@type': 'Question',
				name: 'How do you protect floors and furniture?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'We use drop cloths, masking tape, and careful prep before any paint is applied.'
				}
			},
			{
				'@type': 'Question',
				name: 'What paint sheen should I choose?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'We recommend based on room use — higher durability sheens where needed, softer lower-sheen finishes for living areas.'
				}
			}
		]
	})}<\/script>`}
</svelte:head>

<!-- ─────────────────────────────────────────
     TOP INFO BAR
───────────────────────────────────────── -->
<div class="bg-[#0B0B0B] px-6 py-2.5 text-[13px] text-white/60">
	<div class="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-2">
		<div class="flex flex-wrap items-center gap-6">
			<span class="flex items-center gap-1.5">
				<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
					<circle cx="12" cy="10" r="3" />
				</svg>
				Edmonton &amp; Surrounding Areas
			</span>
			<span class="flex items-center gap-1.5">
				<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
					<polyline points="22,6 12,13 2,6" />
				</svg>
				info@ncspainting.com
			</span>
		</div>
		<div class="flex gap-4">
			<a href="https://facebook.com" aria-label="Facebook" class="transition-colors hover:text-white">
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
					<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
				</svg>
			</a>
			<a href="https://instagram.com" aria-label="Instagram" class="transition-colors hover:text-white">
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<rect x="2" y="2" width="20" height="20" rx="5" />
					<circle cx="12" cy="12" r="4" />
					<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
				</svg>
			</a>
		</div>
	</div>
</div>

<!-- ─────────────────────────────────────────
     HEADER
───────────────────────────────────────── -->
<header class="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)]">
	<div class="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-6 px-6">
		<a href="/" class="flex shrink-0 items-center gap-2.5">
			<div class="flex h-7 w-7 items-center justify-center rounded-md bg-[#0B0B0B]">
				<svg class="h-4 w-4 fill-[#84CC16]" viewBox="0 0 24 24">
					<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
				</svg>
			</div>
			<span class="text-[17px] font-bold tracking-tight text-[#0B0B0B]">NCS Painting</span>
		</a>

		<nav class="hidden items-center gap-0.5 lg:flex">
			{#each [['/', 'Home'], ['/services', 'Services'], ['/projects', 'Projects'], ['/about', 'About'], ['/contact', 'Contact']] as [href, label]}
				<a
					{href}
					class="rounded-lg px-3.5 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900"
				>
					{label}
				</a>
			{/each}
		</nav>

		<div class="flex shrink-0 items-center gap-3">
			<a
				href="tel:7807225577"
				class="hidden items-center gap-1.5 text-sm font-semibold text-gray-700 transition-colors hover:text-[#0B0B0B] md:flex"
			>
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path
						d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.03 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"
					/>
				</svg>
				780-722-5577
			</a>
			<a
				href="/contact"
				class="rounded-lg bg-[#0B0B0B] px-4 py-2 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-gray-800"
			>
				Get Appointment
			</a>
		</div>
	</div>
</header>

<!-- ─────────────────────────────────────────
     HERO — two column, white background
     Minimalist: lots of space, strong type
───────────────────────────────────────── -->
<section class="border-b border-gray-100 bg-white">
	<div class="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24 lg:gap-20">
		<!-- LEFT: Text -->
		<div>
			<!-- Breadcrumb -->
			<nav class="mb-8 flex items-center gap-2 text-xs font-medium text-gray-400" aria-label="Breadcrumb">
				<a href="/" class="transition-colors hover:text-gray-700">Home</a>
				<span class="text-gray-200">/</span>
				<a href="/services" class="transition-colors hover:text-gray-700">Services</a>
				<span class="text-gray-200">/</span>
				<span class="text-gray-600">Sherwood Park</span>
			</nav>

			<!-- Location pill -->
			<div
				class="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs font-semibold text-gray-600"
			>
				<span class="h-1.5 w-1.5 rounded-full bg-[#84CC16]"></span>
				Serving Sherwood Park, AB
			</div>

			<h1 class="mb-5 text-[2.75rem] leading-[1.05] font-extrabold tracking-tight text-[#0B0B0B] md:text-5xl">
				Painters in
				<br />
				Sherwood Park
			</h1>

			<p class="mb-8 max-w-sm text-lg leading-relaxed text-gray-500">
				Professional interior and exterior painting with tidy prep, smooth coverage, and a finish built to last.
			</p>

			<!-- CTAs -->
			<div class="mb-10 flex flex-wrap gap-3">
				<a
					href="/contact"
					class="flex items-center gap-2 rounded-xl bg-[#0B0B0B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
				>
					Request a Free Quote
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</a>
				<a
					href="tel:7807225577"
					class="flex items-center gap-2 rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path
							d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.03 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"
						/>
					</svg>
					780-722-5577
				</a>
			</div>

			<!-- Minimal trust strip -->
			<div class="flex flex-wrap items-center gap-6 border-t border-gray-100 pt-6 text-xs font-medium text-gray-400">
				<span class="flex items-center gap-1.5">
					<svg
						class="h-3.5 w-3.5 text-[#84CC16]"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
					>
						<polyline points="20 6 9 17 4 12" />
					</svg>
					Free estimates
				</span>
				<span class="flex items-center gap-1.5">
					<svg
						class="h-3.5 w-3.5 text-[#84CC16]"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
					>
						<polyline points="20 6 9 17 4 12" />
					</svg>
					Fully insured
				</span>
				<span class="flex items-center gap-1.5">
					<svg
						class="h-3.5 w-3.5 text-[#84CC16]"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
					>
						<polyline points="20 6 9 17 4 12" />
					</svg>
					30+ years experience
				</span>
				<span class="flex items-center gap-1.5">
					<svg
						class="h-3.5 w-3.5 text-[#84CC16]"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
					>
						<polyline points="20 6 9 17 4 12" />
					</svg>
					Locally owned
				</span>
			</div>
		</div>

		<!-- RIGHT: Image -->
		<div class="relative">
			<picture>
				<img
					src="/images/image-45.png"
					alt="NCS painter applying finish to ceiling in Sherwood Park home"
					class="h-[480px] w-full rounded-2xl object-cover"
					loading="eager"
				/>
			</picture>
			<!-- Minimal floating card -->
			<div
				class="absolute right-6 bottom-6 left-6 flex items-center justify-between gap-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm"
			>
				<div>
					<p class="mb-0.5 text-xs font-medium text-gray-400">Sherwood Park</p>
					<p class="text-sm font-bold text-gray-900">Interior + Exterior Painting</p>
				</div>
				<a
					href="/contact"
					class="shrink-0 rounded-lg bg-[#0B0B0B] px-4 py-2.5 text-xs font-semibold whitespace-nowrap text-white transition-colors hover:bg-gray-700"
				>
					Get a Quote
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ─────────────────────────────────────────
     PAGE BODY — main + sidebar
───────────────────────────────────────── -->
<div class="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-12 px-6 py-16 lg:grid-cols-[1fr_280px]">
	<!-- ── MAIN CONTENT ────────────────────── -->
	<main class="flex min-w-0 flex-col gap-20">
		<!-- SERVICES -->
		<section>
			<div class="mb-8">
				<p class="mb-2 text-xs font-semibold tracking-[0.12em] text-gray-400 uppercase">What We Paint</p>
				<h2 class="text-3xl font-extrabold tracking-tight text-[#0B0B0B]">Painting Services in Sherwood Park</h2>
				<p class="mt-2 text-base text-gray-500">
					Sherwood Park homes range from newer builds to established properties. The best results always start with
					proper prep and the right products for each surface.
				</p>
			</div>

			<div class="divide-y divide-gray-100 border-t border-gray-100">
				{#each services as { label, desc, href }}
					<a
						{href}
						class="group -mx-4 flex items-center justify-between gap-6 rounded-lg px-4 py-5 transition-colors hover:bg-gray-50"
					>
						<div class="flex items-start gap-4">
							<span class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#84CC16]"></span>
							<div>
								<span
									class="mb-0.5 block text-[15px] font-semibold text-[#0B0B0B] transition-colors group-hover:text-[#EA580C]"
								>
									{label}
								</span>
								<span class="text-sm text-gray-500">{desc}</span>
							</div>
						</div>
						<svg
							class="h-4 w-4 flex-shrink-0 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-[#EA580C]"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</a>
				{/each}
			</div>
		</section>

		<!-- PROCESS -->
		<section>
			<div class="mb-10">
				<p class="mb-2 text-xs font-semibold tracking-[0.12em] text-gray-400 uppercase">How We Work</p>
				<h2 class="text-3xl font-extrabold tracking-tight text-[#0B0B0B]">Our Sherwood Park Process</h2>
			</div>

			<div class="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-gray-100 sm:grid-cols-2">
				{#each process as { n, title, body }}
					<div class="bg-white p-7">
						<span class="mb-3 block text-[11px] font-bold tracking-widest text-gray-300">{n}</span>
						<h3 class="mb-2 text-base font-bold text-[#0B0B0B]">{title}</h3>
						<p class="text-sm leading-relaxed text-gray-500">{body}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- GALLERY — asymmetric bento grid -->
		<section>
			<div class="mb-8">
				<p class="mb-2 text-xs font-semibold tracking-[0.12em] text-gray-400 uppercase">Our Work</p>
				<h2 class="text-3xl font-extrabold tracking-tight text-[#0B0B0B]">Recent Projects</h2>
				<p class="mt-2 text-base text-gray-500">Real results from homes in Sherwood Park and the Edmonton area.</p>
			</div>

			<!-- Bento: first image spans 2 rows on left, 4 smaller on right -->
			<div class="grid h-[480px] grid-cols-2 grid-rows-2 gap-3 sm:grid-cols-3">
				<!-- Wide / tall first image -->
				<div class="group row-span-2 overflow-hidden rounded-2xl">
					<picture>
						<img
							src="/images/ncs-painting-1.jpg"
							alt="Interior painting — Sherwood Park home"
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
							loading="lazy"
						/>
					</picture>
				</div>

				<!-- Remaining 4 images -->
				{#each [{ src: '/images/image-45.png', alt: 'Painter finishing ceiling trim' }, { src: '/images/hero-2.jpg', alt: 'NCS crew consulting homeowner' }, { src: '/images/image-19.png', alt: 'Surface prep and sanding' }, { src: '/images/image-26.png', alt: 'Exterior painting project' }] as { src, alt }}
					<div class="group overflow-hidden rounded-2xl">
						<picture>
							<img
								{src}
								{alt}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
								loading="lazy"
							/>
						</picture>
					</div>
				{/each}
			</div>

			<div class="mt-6">
				<a
					href="/projects"
					class="inline-flex items-center gap-2 border-b border-gray-200 pb-0.5 text-sm font-semibold text-gray-600 transition-colors hover:border-gray-900 hover:text-gray-900"
				>
					View all projects
					<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</a>
			</div>
		</section>

		<!-- WHY CHOOSE NCS -->
		<section>
			<div class="mb-8">
				<p class="mb-2 text-xs font-semibold tracking-[0.12em] text-gray-400 uppercase">Why NCS</p>
				<h2 class="text-3xl font-extrabold tracking-tight text-[#0B0B0B]">Why Choose NCS Painting in Sherwood Park</h2>
			</div>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{#each whyUs as { title, body }, i}
					<div class="rounded-2xl p-6 {i % 2 === 0 ? 'bg-[#0B0B0B] text-white' : 'bg-gray-50'}">
						<h3 class="mb-2 text-[15px] font-bold {i % 2 === 0 ? 'text-white' : 'text-[#0B0B0B]'}">{title}</h3>
						<p class="text-sm leading-relaxed {i % 2 === 0 ? 'text-white/60' : 'text-gray-500'}">{body}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- PRICING FACTORS — minimal list -->
		<section>
			<div class="mb-8">
				<p class="mb-2 text-xs font-semibold tracking-[0.12em] text-gray-400 uppercase">Pricing</p>
				<h2 class="text-3xl font-extrabold tracking-tight text-[#0B0B0B]">What Affects Your Estimate</h2>
				<p class="mt-2 text-base text-gray-500">Every project is different. Common factors that shape the quote:</p>
			</div>

			<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
				{#each ['Size of the project — rooms or exterior footprint', 'Surface condition and any repairs needed', 'Trim detail and number of doors', 'Number of coats and colour changes', 'Access challenges — stairwells, vaulted ceilings, high exteriors'] as factor}
					<div class="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
						<span
							class="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white"
						>
							<svg
								class="h-3 w-3 text-[#84CC16]"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="3"
							>
								<polyline points="20 6 9 17 4 12" />
							</svg>
						</span>
						<span class="text-sm text-gray-600">{factor}</span>
					</div>
				{/each}

				<!-- CTA card filling the last grid cell -->
				<div class="flex flex-col justify-between gap-4 rounded-xl bg-[#84CC16] p-5">
					<p class="text-sm leading-snug font-semibold text-[#0B0B0B]">
						Tell us your timeline and what you want painted — we'll send a free estimate.
					</p>
					<a
						href="/contact"
						class="inline-flex items-center gap-2 self-start rounded-lg bg-[#0B0B0B] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-gray-800"
					>
						Request a Quote →
					</a>
				</div>
			</div>
		</section>

		<!-- FAQ -->
		<section>
			<div class="mb-8">
				<p class="mb-2 text-xs font-semibold tracking-[0.12em] text-gray-400 uppercase">FAQ</p>
				<h2 class="text-3xl font-extrabold tracking-tight text-[#0B0B0B]">Common Questions</h2>
			</div>

			<div class="flex flex-col gap-2">
				{#each faqs as { q, a }, i}
					<div
						class="overflow-hidden rounded-xl border border-gray-200 transition-shadow {openFaq === i
							? 'shadow-sm'
							: ''}"
					>
						<button
							onclick={() => toggleFaq(i)}
							aria-expanded={openFaq === i}
							class="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-[#0B0B0B] transition-colors hover:bg-gray-50"
						>
							<span>{q}</span>
							<svg
								class="h-4 w-4 flex-shrink-0 text-gray-400 transition-transform duration-200 {openFaq === i
									? 'rotate-45'
									: ''}"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<line x1="12" y1="5" x2="12" y2="19" />
								<line x1="5" y1="12" x2="19" y2="12" />
							</svg>
						</button>
						{#if openFaq === i}
							<div class="border-t border-gray-100 px-5 pt-1 pb-5 text-sm leading-relaxed text-gray-600">
								{a}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<!-- SERVICE AREAS -->
		<section class="pb-4">
			<div class="mb-6">
				<p class="mb-2 text-xs font-semibold tracking-[0.12em] text-gray-400 uppercase">Where We Work</p>
				<h2 class="text-3xl font-extrabold tracking-tight text-[#0B0B0B]">Service Area</h2>
				<p class="mt-2 text-base text-gray-500">
					We serve <strong class="text-[#0B0B0B]">Sherwood Park</strong>
					and nearby communities, with
					<strong class="text-[#0B0B0B]">Edmonton</strong>
					 as our primary base.
				</p>
			</div>

			<div class="flex flex-wrap gap-2">
				{#each ['Sherwood Park', 'Edmonton', 'St. Albert', 'Fort Saskatchewan'] as area, i}
					<span
						class="rounded-lg px-4 py-2 text-sm font-semibold {i === 0
							? 'bg-[#0B0B0B] text-white'
							: 'border border-gray-200 bg-gray-100 text-gray-600'}"
					>
						{area}
					</span>
				{/each}
			</div>

			<p class="mt-5 text-sm text-gray-400">
				Also see:
				<a
					href="/interior-painting-edmonton"
					class="font-medium text-[#0B0B0B] underline underline-offset-2 transition-colors hover:text-[#EA580C]"
				>
					interior painting Edmonton
				</a>
				·
				<a
					href="/exterior-painting-edmonton"
					class="font-medium text-[#0B0B0B] underline underline-offset-2 transition-colors hover:text-[#EA580C]"
				>
					exterior painting Edmonton
				</a>
			</p>
		</section>
	</main>

	<!-- ── SIDEBAR ──────────────────────────── -->
	<aside class="flex flex-col gap-5 lg:sticky lg:top-20">
		<!-- Services list -->
		<div class="overflow-hidden rounded-2xl border border-gray-200">
			<div class="bg-[#0B0B0B] px-5 py-4">
				<p class="mb-0.5 text-xs font-bold tracking-widest text-white/50 uppercase">Navigate</p>
				<p class="text-sm font-bold text-white">Our Services</p>
			</div>
			<ul class="divide-y divide-gray-100">
				{#each sidebarLinks as { label, href }}
					<li>
						<a
							{href}
							class="group flex items-center justify-between px-5 py-3.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#0B0B0B]"
						>
							{label}
							<svg
								class="h-3.5 w-3.5 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-gray-600"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.5"
							>
								<path d="M9 18l6-6-6-6" />
							</svg>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Quote card — minimal black -->
		<div class="rounded-2xl bg-[#0B0B0B] p-6">
			<p class="mb-3 text-xs font-bold tracking-widest text-white/40 uppercase">Free Estimate</p>
			<h3 class="mb-1.5 text-lg leading-snug font-bold text-white">Ready to get started?</h3>
			<p class="mb-5 text-sm leading-relaxed text-white/50">
				Tell us about your Sherwood Park project and we'll be in touch quickly.
			</p>
			<div class="flex flex-col gap-2">
				<a
					href="/contact"
					class="flex items-center justify-center gap-2 rounded-xl bg-[#84CC16] px-4 py-3 text-sm font-bold text-[#0B0B0B] transition-colors hover:bg-[#65A30D]"
				>
					Request a Quote
					<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</a>
				<a
					href="tel:7807225577"
					class="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white"
				>
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path
							d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.03 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"
						/>
					</svg>
					780-722-5577
				</a>
			</div>
		</div>

		<!-- Sidebar image -->
		<div class="aspect-[4/3] overflow-hidden rounded-2xl">
			<picture>
				<img
					src="/images/hero-2.jpg"
					alt="NCS Painting team reviewing project plans"
					class="h-full w-full object-cover"
					loading="lazy"
				/>
			</picture>
		</div>

		<!-- Hours / NAP -->
		<div class="rounded-2xl border border-gray-100 p-5">
			<p class="mb-3 text-xs font-bold tracking-widest text-gray-400 uppercase">Contact</p>
			<address class="flex flex-col gap-1.5 text-sm leading-relaxed text-gray-600 not-italic">
				<span class="font-semibold text-[#0B0B0B]">NCS Painting</span>
				<span>Edmonton, AB T6A 2N9</span>
				<a href="tel:7807225577" class="font-semibold text-[#0B0B0B] transition-colors hover:text-[#EA580C]">
					780-722-5577
				</a>
				<span class="mt-1 text-xs text-gray-400">
					Mon–Fri 9:00–5:00
					<br />
					Sat–Sun 11:00–3:00
				</span>
			</address>
		</div>
	</aside>
</div>

<!-- ─────────────────────────────────────────
     BOTTOM CTA — clean, minimal
───────────────────────────────────────── -->
<section class="border-t border-gray-100 bg-white px-6 py-20">
	<div class="mx-auto max-w-[680px] text-center">
		<p class="mb-3 text-xs font-bold tracking-widest text-gray-400 uppercase">Sherwood Park</p>
		<h2 class="mb-4 text-4xl leading-tight font-extrabold tracking-tight text-[#0B0B0B]">
			Get a free Sherwood Park painting estimate
		</h2>
		<p class="mb-8 text-lg leading-relaxed text-gray-500">
			Tell us your timeline and what you want painted. We reply quickly and work around your schedule.
		</p>
		<div class="flex flex-wrap justify-center gap-3">
			<a
				href="/contact"
				class="flex items-center gap-2 rounded-xl bg-[#0B0B0B] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-gray-800"
			>
				Request a Free Quote
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</a>
			<a
				href="tel:7807225577"
				class="flex items-center gap-2 rounded-xl border border-gray-200 px-7 py-3.5 text-sm font-bold text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
			>
				<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path
						d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.03 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"
					/>
				</svg>
				Call 780-722-5577
			</a>
		</div>
	</div>
</section>

<!-- ─────────────────────────────────────────
     FOOTER
───────────────────────────────────────── -->
<footer class="bg-[#0B0B0B] px-6 pt-14 pb-8 text-white">
	<div class="mx-auto max-w-[1240px]">
		<div class="grid grid-cols-1 gap-10 border-b border-white/[0.08] pb-10 sm:grid-cols-2 lg:grid-cols-4">
			<div>
				<div class="mb-4 flex items-center gap-2">
					<div class="flex h-7 w-7 items-center justify-center rounded-md bg-white/10">
						<svg class="h-4 w-4 fill-[#84CC16]" viewBox="0 0 24 24">
							<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
						</svg>
					</div>
					<span class="text-base font-bold">NCS Painting</span>
				</div>
				<p class="mb-4 text-sm leading-relaxed text-white/45">
					Edmonton's trusted residential painters. Serving Sherwood Park, St. Albert, Fort Saskatchewan, and the
					Edmonton metro area.
				</p>
				<address class="flex flex-col gap-1 text-sm text-white/45 not-italic">
					<a href="tel:7807225577" class="transition-colors hover:text-[#84CC16]">780-722-5577</a>
					<a href="mailto:info@ncspainting.com" class="transition-colors hover:text-[#84CC16]">info@ncspainting.com</a>
					<span class="mt-1 text-xs text-white/30">Mon–Fri 9am–5pm · Sat–Sun 11am–3pm</span>
				</address>
			</div>

			<div>
				<p class="mb-4 text-xs font-bold tracking-widest text-white/30 uppercase">Services</p>
				<ul class="flex flex-col gap-2 text-sm text-white/50">
					{#each [['Interior Painting', '/interior-painting-edmonton'], ['Exterior Painting', '/exterior-painting-edmonton'], ['Cabinet Painting', '/cabinet-painting-edmonton'], ['Deck & Fence Staining', '/deck-staining-edmonton'], ['Commercial Painting', '/commercial-painting-edmonton']] as [label, href]}
						<li><a {href} class="transition-colors hover:text-white">{label}</a></li>
					{/each}
				</ul>
			</div>

			<div>
				<p class="mb-4 text-xs font-bold tracking-widest text-white/30 uppercase">Service Areas</p>
				<ul class="flex flex-col gap-2 text-sm text-white/50">
					{#each [['Sherwood Park', '/painters-sherwood-park'], ['Fort Saskatchewan', '/painters-fort-saskatchewan'], ['St. Albert', '/painters-st-albert'], ['Edmonton', '/interior-painting-edmonton']] as [label, href]}
						<li><a {href} class="transition-colors hover:text-white">{label}</a></li>
					{/each}
				</ul>
			</div>

			<div>
				<p class="mb-4 text-xs font-bold tracking-widest text-white/30 uppercase">Company</p>
				<ul class="flex flex-col gap-2 text-sm text-white/50">
					{#each [['About NCS', '/about'], ['Projects', '/projects'], ['Ask The Painter', '/ask-the-painter'], ['Contact / Quote', '/contact']] as [label, href]}
						<li><a {href} class="transition-colors hover:text-white">{label}</a></li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="flex flex-col items-center justify-between gap-2 pt-6 text-xs text-white/25 sm:flex-row">
			<span>© 2026 NCS Painting. All rights reserved.</span>
			<span>Painters Sherwood Park | Edmonton, AB</span>
		</div>
	</div>
</footer>
