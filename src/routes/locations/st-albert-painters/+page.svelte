<script lang="ts">
	// Svelte 5 (runes) + SvelteKit page component
	// Route suggestion: src/routes/painters-st-albert/+page.svelte

	import { ArrowRight, CheckCircle2, Clock, MapPin, Paintbrush, Phone, Sparkles } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';

	const page = {
		title: 'Painters in St. Albert',
		metaTitle: 'Painters St. Albert | NCS Painting',
		metaDescription:
			'Professional painters in St. Albert for interior, exterior, cabinets, and more. Clean prep, crisp lines, durable finishes. Free estimates—call 780-722-5577.',
		slug: '/painters-st-albert'
	};

	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Locations', href: '/locations' },
		{ label: 'St. Albert', href: page.slug }
	];

	const popularServices = [
		{
			title: 'Interior Painting',
			desc: 'Walls, ceilings, trim, doors, and feature walls with crisp lines.',
			href: '/interior-painting-edmonton',
			icon: Paintbrush,
			img: '/image-34.png'
		},
		{
			title: 'Exterior Painting',
			desc: 'Siding, stucco, fascia/soffits, railings, doors—durable coatings.',
			href: '/exterior-painting-edmonton',
			icon: Sparkles,
			img: '/image-40.png'
		},
		{
			title: 'Cabinet Painting',
			desc: 'Kitchen & bath cabinets refreshed for a clean, modern look.',
			href: '/cabinet-painting-edmonton',
			icon: CheckCircle2,
			img: '/image-41.png'
		},
		{
			title: 'Deck & Fence Staining',
			desc: 'Protection + curb appeal for Alberta weather swings.',
			href: '/deck-staining-edmonton',
			icon: CheckCircle2,
			img: '/image-42.png'
		}
	];

	const processSteps = [
		{
			title: 'Walkthrough + estimate',
			body: 'We confirm surfaces, scope, timing, and any repairs needed—then provide a clear written estimate.'
		},
		{
			title: 'Prep that protects your home',
			body: 'We cover floors and furniture, patch and sand as needed, and prime where required.'
		},
		{
			title: 'Paint + detail work',
			body: 'High‑quality coatings applied with attention to cut lines, edges, and even coverage.'
		},
		{
			title: 'Final walkthrough',
			body: 'We review the work with you, handle touch‑ups, and leave the space clean.'
		}
	];

	const faqs = [
		{
			q: 'How long does an interior painting job take?',
			a: 'Most projects range from a day to several days depending on room count, drying time, and prep needs.'
		},
		{
			q: 'Do you help with color and sheen choices?',
			a: 'Yes—if you’re unsure, we’ll recommend sheens based on durability and the finish you want.'
		},
		{
			q: 'What do I need to do before you arrive?',
			a: 'We’ll share a simple checklist. Typically: clear small items, wall décor, and fragile valuables.'
		},
		{
			q: 'Do you paint trim and doors?',
			a: 'Yes—trim and doors are common upgrades for a crisp, refreshed interior.'
		},
		{
			q: 'Can you handle small drywall repairs?',
			a: 'If the repair is minor (nail holes, small patches), we can usually include it in prep.'
		}
	];

	const sideLinks = [
		{ label: 'Interior Painting', href: '/interior-painting-edmonton' },
		{ label: 'Exterior Painting', href: '/exterior-painting-edmonton' },
		{ label: 'Cabinet Painting', href: '/cabinet-painting-edmonton' },
		{ label: 'Deck Staining', href: '/deck-staining-edmonton' },
		{ label: 'Contact / Free Quote', href: '/contact' }
	];

	const phone = '780-722-5577';
	const hours = 'Mon–Fri 9:00–5:00 • Sat–Sun 11:00–3:00';
	const postal = 'T6A 2N9';

	// Microinteraction: small hover-driven “active” state for sidebar links
	let activeSide = $state<string>(page.slug);
</script>

<svelte:head>
	<title>{page.metaTitle}</title>
	<meta name="description" content={page.metaDescription} />
	<link rel="canonical" href={page.slug} />
</svelte:head>

<main class="bg-stone-950 text-stone-50">
	<!-- Hero (mirrors the template: full-bleed image + overlay + title + breadcrumbs) -->
	<header class="relative overflow-hidden">
		<img src="/hero-23.jpg" alt="" class="absolute inset-0 h-full w-full object-cover opacity-60" loading="eager" />
		<div class="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/60 to-stone-950/20" />

		<div class="relative mx-auto max-w-6xl px-4 py-14 sm:py-16 lg:py-20">
			<nav aria-label="Breadcrumb" class="mb-4">
				<ol class="flex flex-wrap items-center gap-2 text-sm text-stone-200/90">
					{#each breadcrumbs as item, i (item.href)}
						<li class="flex items-center gap-2">
							<a
								href={item.href}
								class="rounded-md px-1.5 py-1 transition hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-indigo-300/60 focus:outline-none"
							>
								{item.label}
							</a>
							{#if i < breadcrumbs.length - 1}
								<span class="text-stone-300/70">/</span>
							{/if}
						</li>
					{/each}
				</ol>
			</nav>

			<div class="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
				<div>
					<p
						class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-stone-100 ring-1 ring-white/15"
					>
						<MapPin class="h-4 w-4" /> Serving St. Albert + Edmonton area
					</p>

					<h1 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
						{page.title}
					</h1>
					<p class="mt-3 max-w-2xl text-base text-stone-200 sm:text-lg">
						Interior and exterior painting with a clean, professional finish—backed by careful prep and clear
						communication.
					</p>

					<div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
						<a
							href="/contact"
							data-event="lead_quote_click"
							class="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-200 px-5 py-3 text-sm font-semibold text-stone-950 shadow-sm transition hover:bg-indigo-100 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
						>
							Request a Free Quote
							<ArrowRight class="h-4 w-4 transition group-hover:translate-x-0.5" />
						</a>

						<a
							href={'tel:' + phone.replaceAll('-', '')}
							data-event="call_click"
							class="group inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 focus:ring-2 focus:ring-indigo-300/60 focus:outline-none"
						>
							<Phone class="h-4 w-4" />
							Call {phone}
						</a>
					</div>
				</div>

				<!-- Compact “trust” card -->
				<div class="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-sm lg:w-[320px]">
					<p class="text-sm font-semibold text-white">What you can expect</p>
					<ul class="mt-3 space-y-2 text-sm text-stone-200">
						<li class="flex gap-2">
							<CheckCircle2 class="mt-0.5 h-4 w-4 text-amber-300" /> Careful prep + clean lines
						</li>
						<li class="flex gap-2"><CheckCircle2 class="mt-0.5 h-4 w-4 text-amber-300" /> Written estimates</li>
						<li class="flex gap-2"><CheckCircle2 class="mt-0.5 h-4 w-4 text-amber-300" /> Respectful, tidy crews</li>
					</ul>
				</div>
			</div>
		</div>
	</header>

	<!-- Content (template: main article + right sidebar) -->
	<section class="bg-stone-950">
		<div class="mx-auto max-w-6xl px-4 py-12 lg:py-16">
			<div class="grid gap-10 lg:grid-cols-12">
				<!-- Main column -->
				<article class="lg:col-span-8" in:fade={{ duration: 220 }}>
					<!-- Featured image + intro -->
					<div class="rounded-2xl bg-white/5 ring-1 ring-white/10">
						<div class="overflow-hidden rounded-2xl">
							<img src="/hero-22.jpg" alt="" class="h-56 w-full object-cover sm:h-72" loading="lazy" />
						</div>
						<div class="p-5 sm:p-7">
							<h2 class="text-xl font-semibold tracking-tight text-white sm:text-2xl">
								House painters in St. Albert who treat your home with care
							</h2>
							<p class="mt-3 text-sm leading-relaxed text-stone-200 sm:text-base">
								If you’re searching for <span class="font-medium text-white">house painters in St. Albert</span>
								, you’re probably looking for two things: a great finish and a crew that works clean. NCS Painting delivers
								residential and light commercial painting with strong prep, neat lines, and durable results.
							</p>

							<div class="mt-5 flex flex-wrap gap-2">
								<span class="rounded-full bg-white/10 px-3 py-1 text-xs text-stone-200 ring-1 ring-white/10">
									Interior
								</span>
								<span class="rounded-full bg-white/10 px-3 py-1 text-xs text-stone-200 ring-1 ring-white/10">
									Exterior
								</span>
								<span class="rounded-full bg-white/10 px-3 py-1 text-xs text-stone-200 ring-1 ring-white/10">
									Cabinets
								</span>
								<span class="rounded-full bg-white/10 px-3 py-1 text-xs text-stone-200 ring-1 ring-white/10">
									Stain
								</span>
							</div>
						</div>
					</div>

					<!-- Popular services (bento grid inside main column) -->
					<div class="mt-10">
						<div class="flex items-end justify-between gap-4">
							<h2 class="text-xl font-semibold tracking-tight text-white sm:text-2xl">St. Albert painting services</h2>
							<a
								href="/contact"
								class="hidden text-sm font-semibold text-indigo-200 transition hover:text-indigo-100 sm:inline-flex"
							>
								Get a quote
							</a>
						</div>

						<div class="mt-5 grid gap-4 sm:grid-cols-2">
							{#each popularServices as s (s.title)}
								<a
									href={s.href}
									class="group relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/7 hover:ring-white/15 focus:ring-2 focus:ring-indigo-300/60 focus:outline-none"
								>
									<img
										src={s.img}
										alt=""
										class="absolute inset-0 h-full w-full object-cover opacity-20 transition group-hover:opacity-30"
										loading="lazy"
									/>
									<div class="absolute inset-0 bg-gradient-to-br from-stone-950/70 to-stone-950/10" />
									<div class="relative p-5">
										<s.icon class="h-5 w-5 text-amber-300" />
										<h3 class="mt-3 text-base font-semibold text-white">{s.title}</h3>
										<p class="mt-1 text-sm text-stone-200">{s.desc}</p>
										<div class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-200">
											Learn more <ArrowRight class="h-4 w-4 transition group-hover:translate-x-0.5" />
										</div>
									</div>
								</a>
							{/each}
						</div>
					</div>

					<!-- Process -->
					<div class="mt-10 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:p-7" in:fly={{ y: 8, duration: 240 }}>
						<h2 class="text-xl font-semibold tracking-tight text-white sm:text-2xl">
							What to expect (simple, professional process)
						</h2>

						<ol class="mt-6 space-y-4">
							{#each processSteps as step, idx (step.title)}
								<li class="flex gap-4">
									<div
										class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-200 text-sm font-semibold text-stone-950"
										aria-hidden="true"
									>
										{idx + 1}
									</div>
									<div>
										<h3 class="text-base font-semibold text-white">{step.title}</h3>
										<p class="mt-1 text-sm leading-relaxed text-stone-200">{step.body}</p>
									</div>
								</li>
							{/each}
						</ol>
					</div>

					<!-- Why choose us -->
					<div class="mt-10">
						<h2 class="text-xl font-semibold tracking-tight text-white sm:text-2xl">
							Why homeowners choose NCS Painting in St. Albert
						</h2>
						<ul class="mt-4 grid gap-3 sm:grid-cols-2">
							<li class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
								<p class="font-semibold text-white">Clean prep = better finish</p>
								<p class="mt-1 text-sm text-stone-200">Sanding, patching, and priming where needed.</p>
							</li>
							<li class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
								<p class="font-semibold text-white">Neat work habits</p>
								<p class="mt-1 text-sm text-stone-200">Drop sheets, masking, and tidy daily cleanup.</p>
							</li>
							<li class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
								<p class="font-semibold text-white">Clear communication</p>
								<p class="mt-1 text-sm text-stone-200">Straightforward scope and schedule updates.</p>
							</li>
							<li class="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
								<p class="font-semibold text-white">Finish options that match your space</p>
								<p class="mt-1 text-sm text-stone-200">Sheen guidance and color support.</p>
							</li>
						</ul>
					</div>

					<!-- Pricing guidance callout -->
					<div class="mt-10 rounded-2xl bg-amber-200/10 p-5 ring-1 ring-amber-200/20 sm:p-7">
						<h2 class="text-xl font-semibold tracking-tight text-white sm:text-2xl">
							Pricing guidance (what impacts cost)
						</h2>
						<p class="mt-3 text-sm leading-relaxed text-stone-200">
							Cost depends on room sizes, ceiling height, trim detail, surface condition, number of coats, and
							accessibility. Share a few details and we’ll provide a free estimate.
						</p>
						<div class="mt-5 flex flex-col gap-3 sm:flex-row">
							<a
								href="/contact"
								data-event="lead_quote_click"
								class="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-200 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-indigo-100 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
							>
								Request a Free Quote
								<ArrowRight class="h-4 w-4 transition group-hover:translate-x-0.5" />
							</a>
							<a
								href={'tel:' + phone.replaceAll('-', '')}
								data-event="call_click"
								class="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 focus:ring-2 focus:ring-indigo-300/60 focus:outline-none"
							>
								<Phone class="h-4 w-4" />
								Call {phone}
							</a>
						</div>
					</div>

					<!-- FAQ (details/summary = native + accessible) -->
					<div class="mt-10">
						<h2 class="text-xl font-semibold tracking-tight text-white sm:text-2xl">FAQs for St. Albert</h2>

						<div class="mt-4 space-y-3">
							{#each faqs as item (item.q)}
								<details class="group rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 open:bg-white/7">
									<summary
										class="cursor-pointer list-none text-sm font-semibold text-white outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/60"
									>
										<div class="flex items-center justify-between gap-3">
											<span>{item.q}</span>
											<span
												class="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-stone-100 transition group-open:rotate-45"
												aria-hidden="true"
											>
												+
											</span>
										</div>
									</summary>
									<p class="mt-3 text-sm leading-relaxed text-stone-200">{item.a}</p>
								</details>
							{/each}
						</div>
					</div>

					<!-- Service area -->
					<div class="mt-10 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:p-7">
						<h2 class="text-xl font-semibold tracking-tight text-white sm:text-2xl">Service area</h2>
						<p class="mt-3 text-sm leading-relaxed text-stone-200">
							We serve <span class="font-medium text-white">St. Albert</span>
							and surrounding communities, with Edmonton as our primary base.
						</p>
					</div>
				</article>

				<!-- Sidebar column (template: services list + help card + CTA) -->
				<aside class="lg:col-span-4">
					<div class="space-y-4 lg:sticky lg:top-6" in:fade={{ duration: 220 }}>
						<!-- Primary CTA -->
						<div class="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
							<p class="text-sm font-semibold text-white">Request a free quote</p>
							<p class="mt-2 text-sm text-stone-200">
								Tell us what you’re painting and when you’d like it done—then we’ll follow up with next steps.
							</p>
							<div class="mt-4 grid gap-2">
								<a
									href="/contact"
									data-event="lead_quote_click"
									class="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-200 px-4 py-2.5 text-sm font-semibold text-stone-950 transition hover:bg-indigo-100 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
								>
									Request a Free Quote
									<ArrowRight class="h-4 w-4 transition group-hover:translate-x-0.5" />
								</a>
								<a
									href={'tel:' + phone.replaceAll('-', '')}
									data-event="call_click"
									class="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 focus:ring-2 focus:ring-indigo-300/60 focus:outline-none"
								>
									<Phone class="h-4 w-4" />
									Call {phone}
								</a>
							</div>
						</div>

						<!-- Services list -->
						<div class="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
							<p class="text-sm font-semibold text-white">Services</p>
							<ul class="mt-3 space-y-1.5">
								{#each sideLinks as link (link.href)}
									<li>
										<a
											href={link.href}
											on:mouseenter={() => (activeSide = link.href)}
											class="group flex items-center justify-between rounded-xl px-3 py-2 text-sm text-stone-200 transition hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-indigo-300/60 focus:outline-none"
										>
											<span class="font-medium">{link.label}</span>
											<ArrowRight
												class={'h-4 w-4 transition ' +
													(activeSide === link.href
														? 'translate-x-0.5 text-indigo-200'
														: 'text-stone-400 group-hover:translate-x-0.5')}
											/>
										</a>
									</li>
								{/each}
							</ul>
						</div>

						<!-- Need help card (mirrors template’s “Need any help?” block) -->
						<div class="rounded-2xl bg-gradient-to-br from-white/8 to-white/4 p-5 ring-1 ring-white/10">
							<p class="text-sm font-semibold text-white">Need help?</p>

							<div class="mt-3 space-y-2 text-sm text-stone-200">
								<div class="flex items-center gap-2">
									<Phone class="h-4 w-4 text-amber-300" />
									<span class="font-semibold text-white">{phone}</span>
								</div>
								<div class="flex items-center gap-2">
									<Clock class="h-4 w-4 text-amber-300" />
									<span>{hours}</span>
								</div>
								<div class="flex items-start gap-2">
									<MapPin class="mt-0.5 h-4 w-4 text-amber-300" />
									<span>
										Edmonton, AB <span class="font-medium text-white">{postal}</span>
									</span>
								</div>
							</div>

							<p class="mt-4 text-xs text-stone-300/90">
								Serving St. Albert and nearby communities. Book a walkthrough and we’ll provide a clear written
								estimate.
							</p>
						</div>

						<!-- Mini “proof” placeholder -->
						<div class="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
							<p class="text-sm font-semibold text-white">Recent work (placeholder)</p>
							<div class="mt-3 grid grid-cols-3 gap-2">
								<img
									src="/image-35.png"
									alt=""
									class="h-20 w-full rounded-xl object-cover ring-1 ring-white/10"
									loading="lazy"
								/>
								<img
									src="/image-36.png"
									alt=""
									class="h-20 w-full rounded-xl object-cover ring-1 ring-white/10"
									loading="lazy"
								/>
								<img
									src="/image-37.png"
									alt=""
									class="h-20 w-full rounded-xl object-cover ring-1 ring-white/10"
									loading="lazy"
								/>
							</div>
							<a
								href="/projects"
								class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-200 hover:text-indigo-100"
							>
								View projects <ArrowRight class="h-4 w-4" />
							</a>
						</div>
					</div>
				</aside>
			</div>
		</div>
	</section>

	<!-- Bottom CTA -->
	<section class="bg-stone-900/40">
		<div class="mx-auto max-w-6xl px-4 py-12">
			<div
				class="grid gap-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center"
			>
				<div>
					<h2 class="text-2xl font-semibold tracking-tight text-white">Ready to refresh your home in St. Albert?</h2>
					<p class="mt-2 text-sm text-stone-200">
						Request a free estimate or call to discuss your project. We’ll help you choose the right finish and
						timeline.
					</p>
				</div>
				<div class="flex flex-col gap-3 sm:flex-row">
					<a
						href="/contact"
						data-event="lead_quote_click"
						class="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-200 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-indigo-100 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
					>
						Request a Free Quote
						<ArrowRight class="h-4 w-4 transition group-hover:translate-x-0.5" />
					</a>
					<a
						href={'tel:' + phone.replaceAll('-', '')}
						data-event="call_click"
						class="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 focus:ring-2 focus:ring-indigo-300/60 focus:outline-none"
					>
						<Phone class="h-4 w-4" />
						Call {phone}
					</a>
				</div>
			</div>

			<!-- NAP (consistent formatting) -->
			<div class="mt-8 text-xs text-stone-300/90">
				<p class="font-semibold text-stone-200">NCS Painting</p>
				<p>Edmonton, AB {postal}</p>
				<p>Phone: {phone}</p>
				<p>Hours: {hours}</p>
			</div>
		</div>
	</section>
</main>

<style>
	/* Small motion polish without extra deps */
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
