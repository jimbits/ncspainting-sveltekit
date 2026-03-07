<script lang="ts">
	// ServiceAreas.svelte — NCS Painting
	// SvelteKit + Svelte 5 Runes + Tailwind v4
	// Style: Minimalist · White bg · Teal accent · Inter · Slate greyscale
	// Layout: Left header panel + Right split-grid image/stat column

	interface Area {
		name: string;
		slug: string;
		href: string;
		tagline: string;
		services: string[];
		img: string;
		imgAlt: string;
	}

	const areas: Area[] = $state([
		{
			name: 'Beaumont',
			slug: 'beaumont',
			href: '/locations/beaumont',
			tagline: 'House painters serving Beaumont with clean prep and free estimates.',
			services: ['Interior Painting', 'Exterior Painting', 'Cabinet Painting'],
			img: 'https://placehold.co/560x420/f1f5f9/64748b?text=Beaumont',
			imgAlt: 'Residential painting project in Beaumont'
		},
		{
			name: 'St. Albert',
			slug: 'st-albert',
			href: '/locations/st-albert',
			tagline: 'Sharp cut lines, durable finishes, and reliable scheduling.',
			services: ['Interior Painting', 'Cabinet Painting', 'Deck & Fence Staining'],
			img: 'https://placehold.co/560x420/f1f5f9/64748b?text=St.+Albert',
			imgAlt: 'Interior painting project in St. Albert'
		},
		{
			name: 'Fort Saskatchewan',
			slug: 'fort-saskatchewan',
			href: '/locations/fort-saskatchewan',
			tagline: 'Interior and exterior painting with straightforward quotes.',
			services: ['Exterior Painting', 'Interior Painting', 'Deck & Fence Staining'],
			img: 'https://placehold.co/560x420/f1f5f9/64748b?text=Fort+Saskatchewan',
			imgAlt: 'Exterior painting project in Fort Saskatchewan'
		},
		{
			name: 'Sherwood Park',
			slug: 'sherwood-park',
			href: '/locations/sherwood-park',
			tagline: 'Refreshes, repaints, and move-in timelines — free estimates available.',
			services: ['Interior Painting', 'Exterior Painting', 'Cabinet Painting'],
			img: 'https://placehold.co/560x420/f1f5f9/64748b?text=Sherwood+Park',
			imgAlt: 'House painting project in Sherwood Park'
		}
	]);

	let activeIndex = $state<number | null>(null);
</script>

<!--
  Add to app.html <head>:
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
-->

<section
	id="service-areas"
	aria-labelledby="service-areas-heading"
	class="bg-white px-6 py-28 font-['Inter',sans-serif] md:px-12"
>
	<div class="mx-auto max-w-7xl">
		<!-- ── Section Header ── -->
		<header class="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
			<div>
				<!-- Eyebrow -->
				<p class="mb-4 text-xs font-semibold tracking-[0.25em] text-teal-500 uppercase">Service Areas</p>
				<!-- H2 -->
				<h2
					id="service-areas-heading"
					class="text-6xl leading-[1.0] font-bold tracking-tight text-slate-900 md:text-7xl"
				>
					Where We
					<br />
					<span class="text-teal-500">Paint.</span>
				</h2>
			</div>

			<div class="md:ml-auto md:max-w-sm">
				<p class="text-base leading-relaxed text-slate-500">
					NCS Painting serves four communities around Edmonton. Request a free estimate and we'll get back to you
					quickly.
				</p>
				<!-- Thin horizontal rule under body copy -->
				<div class="mt-6 h-px w-full bg-slate-100"></div>
				<p class="mt-4 text-sm text-slate-400">
					Not sure if you're in our area? Send your postal code — we'll confirm.
				</p>
			</div>
		</header>

		<!-- ── Area Cards Grid — 2 col desktop, 1 col mobile ── -->
		<ul
			class="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 sm:grid-cols-2"
			role="list"
			aria-label="Service area locations"
		>
			{#each areas as area, i}
				<li
					class="group relative bg-white transition-colors duration-200
						{activeIndex === i ? 'bg-slate-50' : ''}"
					onmouseenter={() => (activeIndex = i)}
					onmouseleave={() => (activeIndex = null)}
				>
					<!-- Placeholder image -->
					<div class="relative overflow-hidden">
						<img
							src={area.img}
							alt={area.imgAlt}
							loading="lazy"
							width="560"
							height="280"
							class="h-56 w-full object-cover grayscale transition-all duration-500
								group-hover:scale-[1.02] group-hover:grayscale-0"
						/>
						<!-- Teal accent bar on hover -->
						<div
							class="absolute bottom-0 left-0 h-0.5 w-0 bg-teal-500 transition-all duration-500
								group-hover:w-full"
							aria-hidden="true"
						></div>
					</div>

					<!-- Card body -->
					<div class="p-8">
						<!-- Location name -->
						<h3 class="text-3xl font-bold tracking-tight text-slate-900">
							{area.name}
						</h3>

						<!-- Tagline -->
						<p class="mt-2 text-sm leading-relaxed text-slate-500">
							{area.tagline}
						</p>

						<!-- Top 3 services -->
						<ul class="mt-6 space-y-2" role="list" aria-label="Top services in {area.name}">
							{#each area.services as service, si}
								<li class="flex items-center gap-3">
									<!-- Teal numbered indicator -->
									<span
										class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full
											text-[11px] font-bold text-teal-500 ring-1 ring-teal-500/30
											transition-colors duration-200 group-hover:bg-teal-500 group-hover:text-white
											group-hover:ring-teal-500"
									>
										{si + 1}
									</span>
									<span class="text-sm font-medium text-slate-700">{service}</span>
								</li>
							{/each}
						</ul>

						<!-- Location page link -->
						<a
							href={area.href}
							class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900
								transition-all duration-200 hover:gap-3 hover:text-teal-500
								focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-500"
							aria-label="Explore {area.name} painting services — NCS Painting"
						>
							Explore {area.name}
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								aria-hidden="true"
								class="transition-transform duration-200 group-hover:translate-x-1"
							>
								<path
									d="M3 8h10M9 4l4 4-4 4"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</a>
					</div>
				</li>
			{/each}
		</ul>

		<!-- ── Footer CTAs ── -->
		<footer
			class="mt-16 flex flex-col items-center gap-6 border-t border-slate-100 pt-16 sm:flex-row sm:items-center sm:justify-between"
		>
			<p class="max-w-xs text-center text-sm text-slate-400 sm:text-left">
				Free estimates for all four communities. We reply the same day.
			</p>

			<div class="flex flex-wrap justify-center gap-3 sm:justify-end">
				<!-- Primary CTA -->
				<a
					href="/contact"
					class="inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold
						text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-500 hover:shadow-lg
						hover:shadow-teal-500/20 focus-visible:outline-2 focus-visible:outline-offset-4
						focus-visible:outline-slate-900"
				>
					Get Free Estimate
					<span class="flex h-5 w-5 items-center justify-center rounded-full bg-white/15" aria-hidden="true">
						<svg width="10" height="10" viewBox="0 0 10 10" fill="none">
							<path
								d="M1.5 5h7M5 1.5l3.5 3.5L5 8.5"
								stroke="currentColor"
								stroke-width="1.4"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</span>
				</a>

				<!-- Secondary CTA -->
				<a
					href="tel:7807225577"
					class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3.5
						text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5
						hover:border-teal-500 hover:text-teal-500 focus-visible:outline-2 focus-visible:outline-offset-4
						focus-visible:outline-slate-900"
				>
					<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
						<path
							d="M13.5 10.5c-.8-.8-1.8-1.3-2.8-1.3-.5 0-1 .2-1.4.5l-1 1c-1.2-.6-2.4-1.8-3-3l1-1c.3-.4.5-.9.5-1.4
							0-1-.5-2-1.3-2.8C4.7 2.2 4 2 3.3 2c-.7 0-1.4.3-1.9.8L1 3.2C.4 3.9.1 4.7.1 5.6c0 5.2 5.1 10.3
							10.3 10.3.9 0 1.7-.3 2.4-.9l.4-.4c1-1 1-2.7-.7-4.1z"
							fill="currentColor"
						/>
					</svg>
					780-722-5577
				</a>
			</div>
		</footer>
	</div>
</section>
