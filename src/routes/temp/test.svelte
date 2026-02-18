<script lang="ts">
	// Svelte 5 (runes) + SvelteKit location page
	// Route suggestion: src/routes/locations/beaumont-painters/+page.svelte

	import { ArrowRight, CheckCircle2, Clock, MapPin, Paintbrush, Phone, Sparkles } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';

	const phone = '780-722-5577';
	const hours = 'Mon–Fri 9:00–5:00 • Sat–Sun 11:00–3:00';
	const postal = 'T6A 2N9';

	const page = {
		title: 'Painters in Beaumont',
		metaTitle: 'Painters Beaumont | NCS Painting',
		metaDescription:
			'Professional painters in Beaumont for interior, exterior, cabinets, and staining. Clean prep, crisp finishes, and straightforward estimates. Free quote—call 780-722-5577.',
		slug: '/locations/beaumont-painters'
	};

	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Locations', href: '/locations' },
		{ label: 'Beaumont', href: page.slug }
	];

	const popularServices = [
		{
			title: 'Interior Painting',
			desc: 'Walls, ceilings, trim, doors, and feature walls with clean lines.',
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
			desc: 'A cost‑effective kitchen refresh with a smooth, modern finish.',
			href: '/cabinet-painting-edmonton',
			icon: CheckCircle2,
			img: '/image-41.png'
		},
		{
			title: 'Deck & Fence Staining',
			desc: 'Protection + color renewal for Beaumont weather swings.',
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
			body: 'Quality coatings applied for even coverage, crisp lines, and a consistent finish.'
		},
		{
			title: 'Final walkthrough',
			body: 'We review the work with you, handle touch‑ups, and leave the space clean.'
		}
	];

	const faqs = [
		{
			q: 'Do you do small painting jobs in Beaumont?',
			a: 'Yes—single rooms, feature walls, and trim refresh projects are common.'
		},
		{
			q: 'Can you paint cabinets instead of replacing them?',
			a: 'In many cases, yes. Cabinet painting can modernize a kitchen at a lower cost than replacement.'
		},
		{
			q: 'What paint brands do you use?',
			a: 'We select quality coatings suited to the surface and the wear level of the space.'
		},
		{
			q: 'How soon can you start?',
			a: 'Availability changes seasonally. Contact us with your preferred window and we’ll propose options.'
		}
	];

	const sideLinks = [
		{ label: 'Interior Painting', href: '/interior-painting-edmonton' },
		{ label: 'Exterior Painting', href: '/exterior-painting-edmonton' },
		{ label: 'Cabinet Painting', href: '/cabinet-painting-edmonton' },
		{ label: 'Deck Staining', href: '/deck-staining-edmonton' },
		{ label: 'Contact / Free Quote', href: '/contact' }
	];

	// Microinteraction: sidebar hover state
	let activeSide = $state<string>(page.slug);

	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a }
		}))
	};
</script>

<svelte:head>
	<title>{page.metaTitle}</title>
	<meta name="description" content={page.metaDescription} />
	<link rel="canonical" href={page.slug} />
	<script type="application/ld+json">
{JSON.stringify(faqSchema)}
	</script>
</svelte:head>

<main class="bg-stone-950 text-stone-50">
	<!-- Hero (full-bleed image + overlay + title + breadcrumbs) -->
	<header class="relative overflow-hidden">
		<img src="/hero-22.jpg" alt="" class="absolute inset-0 h-full w-full object-cover opacity-60" loading="eager" />
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
						<MapPin class="h-4 w-4" /> Serving Beaumont + Edmonton area
					</p>

					<h1 class="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
						{page.title}
					</h1>
					<p class="mt-3 max-w-2xl text-base text-stone-200 sm:text-lg">
						Interior and exterior painting with careful prep and products chosen for durability.
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

				<!-- Trust card -->
				<div class="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-sm lg:w-[320px]">
					<p class="text-sm font-semibold text-white">What you can expect</p>
					<ul class="mt-3 space-y-2 text-sm text-stone-200">
						<li class="flex gap-2">
							<CheckCircle2 class="mt-0.5 h-4 w-4 text-amber-300" />
							Careful prep + crisp finishes
						</li>
						<li class="flex gap-2">
							<CheckCircle2 class="mt-0.5 h-4 w-4 text-amber-300" />
							Straightforward written estimates
						</li>
						<li class="flex gap-2">
							<CheckCircle2 class="mt-0.5 h-4 w-4 text-amber-300" />
							Tidy work habits
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>

	<!-- Main content + sidebar -->
	<section class="bg-stone-950">
		<div class="mx-auto max-w-6xl px-4 py-12 lg:py-16">
			<div class="grid gap-10 lg:grid-cols-12">
				<article class="lg:col-span-8" in:fade={{ duration: 220 }}>
					<!-- Featured image + intro -->
					<div class="rounded-2xl bg-white/5 ring-1 ring-white/10">
						<div class="overflow-hidden rounded-2xl">
							<img src="/hero-23.jpg" alt="" class="h-56 w-full object-cover sm:h-72" loading="lazy" />
						</div>
						<div class="p-5 sm:p-7">
							<h2 class="text-xl font-semibold tracking-tight text-white sm:text-2xl">
								House painters in Beaumont who focus on prep and details
							</h2>
							<p class="mt-3 text-sm leading-relaxed text-stone-200 sm:text-base">
								Whether you’re refreshing a few rooms or updating your exterior, the difference is in the prep and
								finishing details. NCS Painting supports Beaumont projects with interior and exterior painting, cabinet
								refinishing, and staining.
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

					<!-- Services (bento-ish cards) -->
					<div class="mt-10">
						<div class="flex items-end justify-between gap-4">
							<h2 class="text-xl font-semibold tracking-tight text-white sm:text-2xl">Beaumont painting services</h2>
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

					<!-- Better finish -->
					<div class="mt-10 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:p-7" in:fly={{ y: 8, duration: 240 }}>
						<h2 class="text-xl font-semibold tracking-tight text-white sm:text-2xl">How we deliver a better finish</h2>

						<ul class="mt-5 space-y-4 text-sm text-stone-200">
							<li class="flex gap-3">
								<CheckCircle2 class="mt-0.5 h-4 w-4 text-amber-300" />
								<div>
									<p class="font-semibold text-white">Prep that sets the foundation</p>
									<p class="mt-1 leading-relaxed">
										We patch and sand where needed and prime to prevent uneven sheen and bleed‑through.
									</p>
								</div>
							</li>
							<li class="flex gap-3">
								<CheckCircle2 class="mt-0.5 h-4 w-4 text-amber-300" />
								<div>
									<p class="font-semibold text-white">Clean, consistent application</p>
									<p class="mt-1 leading-relaxed">
										We work for uniform coverage, straight lines, and smooth transitions.
									</p>
								</div>
							</li>
							<li class="flex gap-3">
								<CheckCircle2 class="mt-0.5 h-4 w-4 text-amber-300" />
								<div>
									<p class="font-semibold text-white">A tidy project from start to finish</p>
									<p class="mt-1 leading-relaxed">
										Protection, masking, and cleanup are part of the job—not an afterthought.
									</p>
								</div>
							</li>
						</ul>
					</div>

					<!-- Estimate guidance -->
					<div class="mt-10 rounded-2xl bg-amber-200/10 p-5 ring-1 ring-amber-200/20 sm:p-7">
						<h2 class="text-xl font-semibold tracking-tight text-white sm:text-2xl">What impacts the estimate</h2>
						<ul class="mt-4 grid gap-3 text-sm text-stone-200 sm:grid-cols-2">
							<li class="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">Project size (rooms or exterior footprint)</li>
							<li class="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">Surface condition + prep needs</li>
							<li class="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">Trim/door/cabinet scope</li>
							<li class="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">Number of coats + color changes</li>
							<li class="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
								Access (vaults, stairwells, high exteriors)
							</li>
						</ul>

						<p class="mt-4 text-sm leading-relaxed text-stone-200">
							Tell us what you want painted and your timeline—we’ll provide a free estimate.
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

					<!-- FAQ -->
					<div class="mt-10">
						<h2 class="text-xl font-semibold tracking-tight text-white sm:text-2xl">FAQs (Beaumont)</h2>

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
							We serve <span class="font-medium text-white">Beaumont</span>
							and surrounding communities, with
							<span class="font-medium text-white">Edmonton</span>
							 as our primary base.
						</p>
					</div>
				</article>

				<!-- Sidebar -->
				<aside class="lg:col-span-4">
					<div class="space-y-4 lg:sticky lg:top-6" in:fade={{ duration: 220 }}>
						<!-- Primary CTA -->
						<div class="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
							<p class="text-sm font-semibold text-white">Request a free quote</p>
							<p class="mt-2 text-sm text-stone-200">
								Share what you’re painting and your timeline. We’ll follow up with next steps.
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

						<!-- Need help -->
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
								Serving Beaumont and nearby communities. Book a walkthrough and we’ll provide a clear written estimate.
							</p>
						</div>

						<!-- Mini proof placeholder -->
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
					<h2 class="text-2xl font-semibold tracking-tight text-white">Get a free Beaumont painting quote</h2>
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

			<!-- NAP -->
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
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
