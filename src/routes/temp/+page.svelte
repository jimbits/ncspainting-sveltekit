<script>
	// Painters in Sherwood Park — Location Page
	// Route: src/routes/painters-sherwood-park/+page.svelte

	import Logo from '$lib/assets/brand/Logo.svelte';
	import {
		ArrowRight,
		Check,
		ChevronRight,
		ClipboardList,
		Clock,
		CookingPot,
		Facebook,
		Fence,
		Home,
		Instagram,
		Mail,
		MapPin,
		Paintbrush,
		Phone,
		Plus,
		Shield,
		Sparkles,
		TreePine,
		Users,
		Wrench,
		X
	} from '@lucide/svelte';

	// ── State ──────────────────────────────────────
	let openFaq = $state(null);
	function toggleFaq(i) {
		openFaq = openFaq === i ? null : i;
	}

	// ── Data ───────────────────────────────────────
	const services = [
		{
			icon: Home,
			label: 'Interior Painting',
			desc: 'Walls, ceilings, trim, and doors with dust control and daily cleanup.',
			href: '/interior-painting-edmonton'
		},
		{
			icon: Paintbrush,
			label: 'Exterior Painting',
			desc: 'Siding, stucco, fascia, soffits, and doors — built for Alberta weather.',
			href: '/exterior-painting-edmonton'
		},
		{
			icon: CookingPot,
			label: 'Cabinet Painting',
			desc: 'Kitchen and bath cabinets refinished to a smooth, durable factory finish.',
			href: '/cabinet-painting-edmonton'
		},
		{
			icon: TreePine,
			label: 'Deck & Fence Staining',
			desc: 'Pressure wash, prep, stain, and protect for Alberta seasons.',
			href: '/deck-staining-edmonton'
		},
		{
			icon: Wrench,
			label: 'Touch-up & Repair Prep',
			desc: 'Small patches and surface prep work where applicable.',
			href: '/contact'
		}
	];

	const process = [
		{
			n: '01',
			icon: ClipboardList,
			title: 'Estimate + Planning',
			body: 'We review the scope, confirm surfaces, and set clear expectations for timing and access.'
		},
		{
			n: '02',
			icon: Shield,
			title: 'Prep & Protection',
			body: 'Floors and furniture protected, surfaces patched and sanded, primer applied for consistent coverage.'
		},
		{
			n: '03',
			icon: Paintbrush,
			title: 'Painting & Finishing',
			body: 'Even coatings, straight cut lines, smooth roll patterns, and clean edges throughout.'
		},
		{
			n: '04',
			icon: Check,
			title: 'Walkthrough & Cleanup',
			body: 'Final walkthrough with you, site left clean, and the space ready to enjoy.'
		}
	];

	const whyUs = [
		{
			icon: Paintbrush,
			title: 'Prep-first mindset',
			body: 'The finish looks better and lasts longer when the surface is properly prepared.'
		},
		{
			icon: Users,
			title: 'Neat, respectful crews',
			body: 'We treat your home with care — clean work areas and considerate schedules.'
		},
		{
			icon: Sparkles,
			title: 'Straightforward communication',
			body: 'You always know what is happening and when. No surprises at the invoice.'
		},
		{
			icon: Shield,
			title: 'Durable finishes',
			body: 'Products selected based on surface type and how much wear each area takes.'
		}
	];

	const pricingFactors = [
		'Size of the project — rooms or exterior footprint',
		'Surface condition and any repairs needed',
		'Trim detail and number of doors',
		'Number of coats and colour changes',
		'Access challenges — stairwells, vaulted ceilings, high exteriors'
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
			a: 'We recommend based on room use — higher durability sheens where needed, softer lower-sheen finishes for living areas. We walk you through options at the estimate.'
		}
	];

	const gallery = [
		{ src: '/ncs-painting-1.jpg', alt: 'Interior painting — Sherwood Park home' },
		{ src: '/image-45.png', alt: 'Painter finishing ceiling trim' },
		{ src: '/hero-2.jpg', alt: 'NCS crew consulting with homeowner' },
		{ src: '/image-19.png', alt: 'Surface prep and sanding' },
		{ src: '/image-26.png', alt: 'Exterior painting project' }
	];

	const sidebarLinks = [
		{ label: 'Interior Painting', href: '/interior-painting-edmonton', icon: Home },
		{ label: 'Exterior Painting', href: '/exterior-painting-edmonton', icon: Paintbrush },
		{ label: 'Cabinet Painting', href: '/cabinet-painting-edmonton', icon: CookingPot },
		{ label: 'Deck & Fence Staining', href: '/deck-staining-edmonton', icon: TreePine },
		{ label: 'Commercial Painting', href: '/commercial-painting-edmonton', icon: Fence }
	];

	const footerServices = [
		['Interior Painting', '/interior-painting-edmonton'],
		['Exterior Painting', '/exterior-painting-edmonton'],
		['Cabinet Painting', '/cabinet-painting-edmonton'],
		['Deck & Fence Staining', '/deck-staining-edmonton'],
		['Commercial Painting', '/commercial-painting-edmonton']
	];

	const footerAreas = [
		['Sherwood Park', '/painters-sherwood-park'],
		['Fort Saskatchewan', '/painters-fort-saskatchewan'],
		['St. Albert', '/painters-st-albert'],
		['Edmonton', '/interior-painting-edmonton']
	];

	const footerCompany = [
		['About NCS', '/about'],
		['Projects', '/projects'],
		['Ask The Painter', '/ask-the-painter'],
		['Contact / Quote', '/contact']
	];
</script>

<svelte:head>
	<title>Painters Sherwood Park | NCS Painting</title>
	<meta
		name="description"
		content="Looking for painters in Sherwood Park? NCS Painting handles interior, exterior, cabinets, and staining with careful prep and clean results. Free estimates — call 780-722-5577."
	/>
	<link rel="canonical" href="https://ncspainting.com/painters-sherwood-park" />
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map(({ q, a }) => ({
			'@type': 'Question',
			name: q,
			acceptedAnswer: { '@type': 'Answer', text: a }
		}))
	})}<\/script>`}
</svelte:head>

<!-- ═══════════════════════════════════════════
     TOP INFO BAR
════════════════════════════════════════════ -->
<div class="bg-slate-950 px-6 py-2.5 text-[13px] text-slate-400">
	<div class="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-2">
		<div class="flex flex-wrap items-center gap-6">
			<span class="flex items-center gap-1.5">
				<MapPin class="h-3.5 w-3.5" />
				Edmonton &amp; Surrounding Areas
			</span>
			<span class="flex items-center gap-1.5">
				<Mail class="h-3.5 w-3.5" />
				info@ncspainting.com
			</span>
		</div>

		<div class="flex items-center gap-4">
			<a href="https://facebook.com" aria-label="Facebook" class="transition-colors hover:text-slate-50">
				<Facebook class="h-4 w-4" />
			</a>
			<a href="https://instagram.com" aria-label="Instagram" class="transition-colors hover:text-slate-50">
				<Instagram class="h-4 w-4" />
			</a>
		</div>
	</div>
</div>

<!-- ═══════════════════════════════════════════
     HEADER
════════════════════════════════════════════ -->
<header class="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-[0_1px_0_rgba(0,0,0,0.05)]">
	<div class="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-6 px-6">
		<a href="/" class="shrink-0" aria-label="NCS Painting — home">
			<Logo />
		</a>

		<nav class="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
			{#each [['/', 'Home'], ['/services', 'Services'], ['/projects', 'Projects'], ['/about', 'About'], ['/contact', 'Contact']] as [href, label]}
				<a
					{href}
					class="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
				>
					{label}
				</a>
			{/each}
		</nav>

		<div class="flex shrink-0 items-center gap-3">
			<a
				href="tel:7807225577"
				class="hidden items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-950 md:flex"
			>
				<Phone class="h-4 w-4" />
				780-722-5577
			</a>
			<a
				href="/contact"
				class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-indigo-700"
			>
				Get Appointment
			</a>
		</div>
	</div>
</header>

<!-- ═══════════════════════════════════════════
     HERO — two column: text left / image right
════════════════════════════════════════════ -->
<section class="border-b border-slate-100 bg-white">
	<div class="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24 lg:gap-20">
		<!-- LEFT: Text -->
		<div>
			<!-- Breadcrumb -->
			<nav class="mb-8 flex items-center gap-2 text-xs font-medium text-slate-400" aria-label="Breadcrumb">
				<a href="/" class="transition-colors hover:text-slate-700">Home</a>
				<ChevronRight class="h-3 w-3 text-slate-300" />
				<a href="/services" class="transition-colors hover:text-slate-700">Services</a>
				<ChevronRight class="h-3 w-3 text-slate-300" />
				<span class="text-slate-600">Sherwood Park</span>
			</nav>

			<!-- Location badge -->
			<div
				class="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-700"
			>
				<MapPin class="h-3.5 w-3.5" />
				Serving Sherwood Park, AB
			</div>

			<h1 class="mb-5 text-[2.75rem] leading-[1.05] font-extrabold tracking-tight text-slate-950 md:text-5xl">
				Painters in
				<br />
				Sherwood Park
			</h1>

			<p class="mb-8 max-w-sm text-lg leading-relaxed text-slate-500">
				Professional interior and exterior painting with tidy prep, smooth coverage, and a finish built to last.
			</p>

			<!-- CTAs -->
			<div class="mb-10 flex flex-wrap gap-3">
				<a
					href="/contact"
					class="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
				>
					Request a Free Quote
					<ArrowRight class="h-4 w-4" />
				</a>
				<a
					href="tel:7807225577"
					class="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-950"
				>
					<Phone class="h-4 w-4" />
					780-722-5577
				</a>
			</div>

			<!-- Trust strip -->
			<div
				class="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-100 pt-6 text-xs font-medium text-slate-400"
			>
				{#each ['Free estimates', 'Fully insured', '30+ years experience', 'Locally owned'] as trust}
					<span class="flex items-center gap-1.5">
						<Check class="h-3.5 w-3.5 text-indigo-500" />
						{trust}
					</span>
				{/each}
			</div>
		</div>

		<!-- RIGHT: Hero image + floating card -->
		<div class="relative">
			<picture>
				<img
					src="/image-45.png"
					alt="NCS painter applying finish to ceiling in Sherwood Park home"
					class="h-[480px] w-full rounded-2xl object-cover"
					loading="eager"
				/>
			</picture>

			<!-- Floating card -->
			<div
				class="absolute right-5 bottom-5 left-5 flex items-center justify-between gap-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm"
			>
				<div>
					<p class="mb-0.5 text-xs font-medium text-slate-400">Sherwood Park, AB</p>
					<p class="text-sm font-bold text-slate-900">Interior + Exterior Painting</p>
				</div>
				<a
					href="/contact"
					class="shrink-0 rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-semibold whitespace-nowrap text-white transition-colors hover:bg-indigo-700"
				>
					Get a Quote
				</a>
			</div>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════
     PAGE BODY — main content + sidebar
════════════════════════════════════════════ -->
<div class="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-12 px-6 py-16 lg:grid-cols-[1fr_280px]">
	<!-- ── MAIN CONTENT ──────────────────────── -->
	<main class="flex min-w-0 flex-col gap-20">
		<!-- SERVICES ─────────────────────────── -->
		<section>
			<div class="mb-8">
				<p class="mb-2 text-xs font-semibold tracking-[0.12em] text-indigo-500 uppercase">What We Paint</p>
				<h2 class="text-3xl font-extrabold tracking-tight text-slate-950">Painting Services in Sherwood Park</h2>
				<p class="mt-2 max-w-xl text-base text-slate-500">
					Sherwood Park homes range from newer builds to established properties. The best results always start with
					proper prep and the right products for each surface.
				</p>
			</div>

			<div class="divide-y divide-slate-100 border-t border-slate-100">
				{#each services as { icon: Icon, label, desc, href }}
					<a
						{href}
						class="group -mx-4 flex items-center justify-between gap-6 rounded-xl px-4 py-5 transition-colors hover:bg-slate-50"
					>
						<div class="flex items-start gap-4">
							<div
								class="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-50 transition-colors group-hover:bg-indigo-100"
							>
								<Icon class="h-4 w-4 text-indigo-600" />
							</div>
							<div>
								<span
									class="mb-0.5 block text-[15px] font-semibold text-slate-900 transition-colors group-hover:text-indigo-700"
								>
									{label}
								</span>
								<span class="text-sm text-slate-500">{desc}</span>
							</div>
						</div>
						<ChevronRight
							class="h-4 w-4 flex-shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-indigo-500"
						/>
					</a>
				{/each}
			</div>
		</section>

		<!-- INTRO IMAGE + TEXT ───────────────── -->
		<section class="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
			<picture>
				<img
					src="/ncs-painting-1.jpg"
					alt="Beautifully painted interior by NCS Painting — Sherwood Park home"
					class="h-72 w-full rounded-2xl object-cover"
					loading="lazy"
				/>
			</picture>
			<div>
				<p class="mb-3 text-xs font-semibold tracking-[0.12em] text-indigo-500 uppercase">Who We Are</p>
				<h2 class="mb-3 text-2xl font-extrabold tracking-tight text-slate-950">
					Trusted painters for Sherwood Park homes
				</h2>
				<p class="mb-5 text-sm leading-relaxed text-slate-500">
					NCS Painting brings a prep-first approach and clear communication to every job — whether it's a single room
					refresh or a full exterior repaint. You get a clear quote up front and no surprises at the end.
				</p>
				<a
					href="/projects"
					class="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-800"
				>
					View our projects <ArrowRight class="h-4 w-4" />
				</a>
			</div>
		</section>

		<!-- PROCESS ──────────────────────────── -->
		<section>
			<div class="mb-10">
				<p class="mb-2 text-xs font-semibold tracking-[0.12em] text-indigo-500 uppercase">How We Work</p>
				<h2 class="text-3xl font-extrabold tracking-tight text-slate-950">Our Sherwood Park Process</h2>
			</div>

			<div class="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-slate-100 sm:grid-cols-2">
				{#each process as { n, icon: Icon, title, body }}
					<div class="group bg-white p-7 transition-colors hover:bg-indigo-50/50">
						<div class="mb-4 flex items-center gap-3">
							<div
								class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-100 transition-colors group-hover:bg-indigo-200"
							>
								<Icon class="h-4 w-4 text-indigo-600" />
							</div>
							<span class="text-[11px] font-bold tracking-widest text-slate-300">{n}</span>
						</div>
						<h3 class="mb-2 text-base font-bold text-slate-950">{title}</h3>
						<p class="text-sm leading-relaxed text-slate-500">{body}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- GALLERY — bento grid ─────────────── -->
		<section>
			<div class="mb-8">
				<p class="mb-2 text-xs font-semibold tracking-[0.12em] text-indigo-500 uppercase">Our Work</p>
				<h2 class="text-3xl font-extrabold tracking-tight text-slate-950">Recent Projects</h2>
				<p class="mt-2 text-base text-slate-500">Real results from homes in Sherwood Park and the Edmonton area.</p>
			</div>

			<!-- First image spans 2 rows, remaining 4 fill the right -->
			<div class="grid h-[480px] grid-cols-2 gap-3 sm:grid-cols-3">
				<div class="group row-span-2 overflow-hidden rounded-2xl">
					<picture>
						<img
							src="/ncs-painting-1.jpg"
							alt="Interior painting — Sherwood Park home"
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
							loading="lazy"
						/>
					</picture>
				</div>
				{#each gallery.slice(1) as { src, alt }}
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

			<div class="mt-5">
				<a
					href="/projects"
					class="inline-flex items-center gap-2 border-b border-slate-200 pb-0.5 text-sm font-semibold text-slate-600 transition-colors hover:border-slate-950 hover:text-slate-950"
				>
					View all projects <ArrowRight class="h-3.5 w-3.5" />
				</a>
			</div>
		</section>

		<!-- WHY CHOOSE NCS ───────────────────── -->
		<section>
			<div class="mb-8">
				<p class="mb-2 text-xs font-semibold tracking-[0.12em] text-indigo-500 uppercase">Why NCS</p>
				<h2 class="text-3xl font-extrabold tracking-tight text-slate-950">Why Choose NCS Painting in Sherwood Park</h2>
			</div>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{#each whyUs as { icon: Icon, title, body }, i}
					<div class="flex flex-col gap-4 rounded-2xl p-6 {i % 2 === 0 ? 'bg-slate-950' : 'bg-slate-50'}">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-xl {i % 2 === 0
								? 'bg-indigo-500/20'
								: 'bg-indigo-100'}"
						>
							<Icon class="h-5 w-5 {i % 2 === 0 ? 'text-indigo-300' : 'text-indigo-600'}" />
						</div>
						<div>
							<h3 class="mb-1.5 text-[15px] font-bold {i % 2 === 0 ? 'text-slate-50' : 'text-slate-950'}">{title}</h3>
							<p class="text-sm leading-relaxed {i % 2 === 0 ? 'text-slate-400' : 'text-slate-500'}">{body}</p>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<!-- PRICING FACTORS ─────────────────── -->
		<section>
			<div class="mb-8">
				<p class="mb-2 text-xs font-semibold tracking-[0.12em] text-indigo-500 uppercase">Pricing</p>
				<h2 class="text-3xl font-extrabold tracking-tight text-slate-950">What Affects Your Estimate</h2>
				<p class="mt-2 text-base text-slate-500">Every project is different. Common factors that shape the quote:</p>
			</div>

			<div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
				{#each pricingFactors as factor}
					<div class="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
						<div
							class="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white"
						>
							<Check class="h-3 w-3 text-indigo-500" />
						</div>
						<span class="text-sm text-slate-600">{factor}</span>
					</div>
				{/each}

				<!-- CTA tile -->
				<div class="flex flex-col justify-between gap-4 rounded-xl bg-indigo-600 p-5">
					<p class="text-sm leading-snug font-semibold text-indigo-50">
						Tell us your timeline and what you want painted — we'll send a free estimate.
					</p>
					<a
						href="/contact"
						class="inline-flex items-center gap-2 self-start rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-indigo-700 transition-colors hover:bg-indigo-50"
					>
						Request a Quote <ArrowRight class="h-3.5 w-3.5" />
					</a>
				</div>
			</div>
		</section>

		<!-- FAQ ─────────────────────────────── -->
		<section>
			<div class="mb-8">
				<p class="mb-2 text-xs font-semibold tracking-[0.12em] text-indigo-500 uppercase">FAQ</p>
				<h2 class="text-3xl font-extrabold tracking-tight text-slate-950">Common Questions</h2>
			</div>

			<div class="flex flex-col gap-2">
				{#each faqs as { q, a }, i}
					<div
						class="overflow-hidden rounded-xl border border-slate-200 {openFaq === i
							? 'border-indigo-200 shadow-sm'
							: ''}"
					>
						<button
							onclick={() => toggleFaq(i)}
							aria-expanded={openFaq === i}
							class="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-slate-900 transition-colors hover:bg-slate-50"
						>
							<span>{q}</span>
							{#if openFaq === i}
								<X class="h-4 w-4 flex-shrink-0 text-indigo-500" />
							{:else}
								<Plus class="h-4 w-4 flex-shrink-0 text-slate-400" />
							{/if}
						</button>
						{#if openFaq === i}
							<div class="border-t border-slate-100 px-5 pt-1 pb-5 text-sm leading-relaxed text-slate-600">
								{a}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<!-- SERVICE AREAS ───────────────────── -->
		<section class="pb-4">
			<div class="mb-6">
				<p class="mb-2 text-xs font-semibold tracking-[0.12em] text-indigo-500 uppercase">Where We Work</p>
				<h2 class="text-3xl font-extrabold tracking-tight text-slate-950">Service Area</h2>
				<p class="mt-2 text-base text-slate-500">
					We serve <strong class="text-slate-950">Sherwood Park</strong>
					and nearby communities, with
					<strong class="text-slate-950">Edmonton</strong>
					as our primary base.
				</p>
			</div>

			<div class="mb-5 flex flex-wrap gap-2">
				{#each ['Sherwood Park', 'Edmonton', 'St. Albert', 'Fort Saskatchewan'] as area, i}
					<span
						class="rounded-lg px-4 py-2 text-sm font-semibold {i === 0
							? 'bg-indigo-600 text-white'
							: 'border border-slate-200 bg-slate-100 text-slate-600'}"
					>
						{area}
					</span>
				{/each}
			</div>

			<p class="text-sm text-slate-400">
				Also see:
				<a
					href="/interior-painting-edmonton"
					class="font-medium text-indigo-600 underline underline-offset-2 transition-colors hover:text-indigo-800"
				>
					interior painting Edmonton
				</a>
				·
				<a
					href="/exterior-painting-edmonton"
					class="font-medium text-indigo-600 underline underline-offset-2 transition-colors hover:text-indigo-800"
				>
					exterior painting Edmonton
				</a>
			</p>
		</section>
	</main>

	<!-- ── SIDEBAR ──────────────────────────── -->
	<aside class="flex flex-col gap-5 lg:sticky lg:top-20">
		<!-- Services nav panel -->
		<div class="overflow-hidden rounded-2xl border border-slate-200">
			<div class="bg-slate-950 px-5 py-4">
				<p class="mb-0.5 text-[11px] font-bold tracking-widest text-slate-500 uppercase">Navigate</p>
				<p class="text-sm font-bold text-slate-50">Our Services</p>
			</div>
			<ul class="divide-y divide-slate-100">
				{#each sidebarLinks as { label, href, icon: Icon }}
					<li>
						<a
							{href}
							class="group flex items-center justify-between px-5 py-3.5 text-sm font-medium text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-700"
						>
							<span class="flex items-center gap-2.5">
								<Icon class="h-4 w-4 text-slate-400 transition-colors group-hover:text-indigo-500" />
								{label}
							</span>
							<ChevronRight
								class="h-3.5 w-3.5 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-indigo-400"
							/>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Quote CTA card -->
		<div class="rounded-2xl bg-indigo-600 p-6">
			<p class="mb-3 text-[11px] font-bold tracking-widest text-indigo-300 uppercase">Free Estimate</p>
			<h3 class="mb-1.5 text-lg leading-snug font-bold text-white">Ready to get started?</h3>
			<p class="mb-5 text-sm leading-relaxed text-indigo-200">
				Tell us about your Sherwood Park project and we'll be in touch quickly.
			</p>
			<div class="flex flex-col gap-2">
				<a
					href="/contact"
					class="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-indigo-700 transition-colors hover:bg-indigo-50"
				>
					Request a Quote <ArrowRight class="h-4 w-4" />
				</a>
				<a
					href="tel:7807225577"
					class="flex items-center justify-center gap-2 rounded-xl bg-indigo-700 px-4 py-3 text-sm font-semibold text-indigo-100 transition-colors hover:bg-indigo-800"
				>
					<Phone class="h-4 w-4" /> 780-722-5577
				</a>
			</div>
		</div>

		<!-- Sidebar image -->
		<div class="aspect-[4/3] overflow-hidden rounded-2xl">
			<picture>
				<img
					src="/hero-2.jpg"
					alt="NCS Painting team reviewing project plans with homeowner"
					class="h-full w-full object-cover"
					loading="lazy"
				/>
			</picture>
		</div>

		<!-- NAP / contact card -->
		<div class="rounded-2xl border border-slate-100 bg-slate-50 p-5">
			<p class="mb-4 text-[11px] font-bold tracking-widest text-slate-400 uppercase">Contact</p>
			<address class="flex flex-col gap-2.5 text-sm not-italic">
				<span class="font-bold text-slate-950">NCS Painting</span>
				<span class="flex items-start gap-2 text-slate-600">
					<MapPin class="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-400" />
					Edmonton, AB T6A 2N9
				</span>
				<a
					href="tel:7807225577"
					class="flex items-center gap-2 font-semibold text-indigo-600 transition-colors hover:text-indigo-800"
				>
					<Phone class="h-4 w-4 flex-shrink-0" /> 780-722-5577
				</a>
				<span class="mt-1 flex items-start gap-2 text-xs text-slate-400">
					<Clock class="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
					Mon–Fri 9:00–5:00 · Sat–Sun 11:00–3:00
				</span>
			</address>
		</div>
	</aside>
</div>

<!-- ═══════════════════════════════════════════
     BOTTOM CTA BAND
════════════════════════════════════════════ -->
<section class="bg-slate-950 px-6 py-20">
	<div class="mx-auto max-w-[680px] text-center">
		<p class="mb-3 text-xs font-bold tracking-widest text-indigo-400 uppercase">Sherwood Park</p>
		<h2 class="mb-4 text-4xl leading-tight font-extrabold tracking-tight text-slate-50">
			Get a free Sherwood Park painting estimate
		</h2>
		<p class="mb-8 text-lg leading-relaxed text-slate-400">
			Tell us your timeline and what you want painted. We reply quickly and work around your schedule.
		</p>
		<div class="flex flex-wrap justify-center gap-3">
			<a
				href="/contact"
				class="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-indigo-500"
			>
				Request a Free Quote <ArrowRight class="h-4 w-4" />
			</a>
			<a
				href="tel:7807225577"
				class="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-7 py-3.5 text-sm font-bold text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-50"
			>
				<Phone class="h-4 w-4" /> Call 780-722-5577
			</a>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════
     FOOTER
════════════════════════════════════════════ -->
<footer class="border-t border-white/[0.06] bg-slate-950 px-6 pt-14 pb-8 text-slate-400">
	<div class="mx-auto max-w-[1240px]">
		<div class="grid grid-cols-1 gap-10 border-b border-white/[0.06] pb-10 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Brand -->
			<div>
				<div class="mb-5">
					<Logo />
				</div>
				<p class="mb-4 text-sm leading-relaxed text-slate-500">
					Edmonton's trusted residential painters. Serving Sherwood Park, St. Albert, Fort Saskatchewan, and the
					Edmonton metro area.
				</p>
				<address class="flex flex-col gap-2 text-sm text-slate-500 not-italic">
					<a href="tel:7807225577" class="flex items-center gap-2 transition-colors hover:text-indigo-400">
						<Phone class="h-3.5 w-3.5" /> 780-722-5577
					</a>
					<a href="mailto:info@ncspainting.com" class="flex items-center gap-2 transition-colors hover:text-indigo-400">
						<Mail class="h-3.5 w-3.5" /> info@ncspainting.com
					</a>
					<span class="mt-1 flex items-center gap-2 text-xs text-slate-600">
						<Clock class="h-3.5 w-3.5" /> Mon–Fri 9am–5pm · Sat–Sun 11am–3pm
					</span>
				</address>
			</div>

			<!-- Services -->
			<div>
				<p class="mb-4 text-[11px] font-bold tracking-widest text-slate-600 uppercase">Services</p>
				<ul class="flex flex-col gap-2.5 text-sm">
					{#each footerServices as [label, href]}
						<li><a {href} class="transition-colors hover:text-indigo-400">{label}</a></li>
					{/each}
				</ul>
			</div>

			<!-- Areas -->
			<div>
				<p class="mb-4 text-[11px] font-bold tracking-widest text-slate-600 uppercase">Service Areas</p>
				<ul class="flex flex-col gap-2.5 text-sm">
					{#each footerAreas as [label, href]}
						<li><a {href} class="transition-colors hover:text-indigo-400">{label}</a></li>
					{/each}
				</ul>
			</div>

			<!-- Company -->
			<div>
				<p class="mb-4 text-[11px] font-bold tracking-widest text-slate-600 uppercase">Company</p>
				<ul class="flex flex-col gap-2.5 text-sm">
					{#each footerCompany as [label, href]}
						<li><a {href} class="transition-colors hover:text-indigo-400">{label}</a></li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="flex flex-col items-center justify-between gap-2 pt-6 text-xs text-slate-600 sm:flex-row">
			<span>© 2026 NCS Painting. All rights reserved.</span>
			<span>Painters Sherwood Park | Edmonton, AB</span>
		</div>
	</div>
</footer>
