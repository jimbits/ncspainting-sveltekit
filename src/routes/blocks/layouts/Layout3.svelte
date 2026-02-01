<!-- src/lib/components/ServicesSection.svelte -->
<script lang="ts">
	import { ArrowRight, Home, Building2, Factory, ShieldCheck, ClipboardList } from 'lucide-svelte';

	// Update these routes to match your actual service pages
	const services = [
		{
			title: 'Residential Painting',
			href: '/residential-painting',
			desc: 'Interior & exterior house painting in Edmonton with careful prep, clean workspaces, and a durable finish.',
			icon: Home
		},
		{
			title: 'Commercial Painting',
			href: '/commercial-painting',
			desc: 'Professional painting for offices, retail, and property managers—clear scheduling, tidy work, and reliable results.',
			icon: Building2
		},
		{
			title: 'Industrial Painting',
			href: '/industrial-painting',
			desc: 'Coatings and painting for industrial spaces—planned, safety-minded work with clear scopes and timelines.',
			icon: Factory
		}
	];

	const itemListSchema = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'Painting Services in Edmonton',
		itemListElement: services.map((s, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: s.title,
			url: `https://YOURDOMAIN.com${s.href}`
		}))
	};
</script>

<svelte:head>
	<script type="application/ld+json">
{JSON.stringify(itemListSchema)}
	</script>
</svelte:head>

<section aria-labelledby="services" class="relative isolate">
	<!-- Top dark band -->
	<div class="relative bg-stone-900">
		<!-- Watermark icon (subtle) -->
		<div class="pointer-events-none absolute inset-0 overflow-hidden">
			<div class="absolute top-10 -right-24 opacity-[0.06]">
				<svg
					width="520"
					height="520"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					class="text-stone-50"
					aria-hidden="true"
				>
					<!-- simple brush-like mark -->
					<path d="M14.5 3.5l6 6-9.7 9.7c-.7.7-1.6 1.1-2.6 1.2l-2.9.3.3-2.9c.1-1 .5-1.9 1.2-2.6L14.5 3.5z" />
					<path d="M13 5l6 6" />
					<path d="M7.5 21.5c1.8 0 3.2-1.4 3.2-3.2 0-.8-.3-1.5-.8-2.1" />
				</svg>
			</div>
		</div>

		<div class="mx-auto max-w-7xl px-4 pt-16 pb-36 sm:px-6 lg:px-8 lg:pt-20">
			<p class="text-center text-sm font-semibold tracking-wide text-indigo-300">Our Services</p>
			<h2 id="services" class="mt-3 text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
				Painting services in Edmonton for homes and businesses
			</h2>

			<p class="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-stone-200">
				Choose the service you need and get a clear, written estimate—prep, protection, and professional finishes built
				to last in Alberta conditions.
			</p>

			<!-- Quick trust line (minimal, helps conversion) -->
			<div class="mx-auto mt-7 grid max-w-4xl gap-3 sm:grid-cols-3">
				<div
					class="flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm text-stone-200 ring-1 ring-white/10"
				>
					<ClipboardList class="h-4 w-4 text-amber-300" aria-hidden="true" />
					Written estimates
				</div>
				<div
					class="flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm text-stone-200 ring-1 ring-white/10"
				>
					<ShieldCheck class="h-4 w-4 text-amber-300" aria-hidden="true" />
					Licensed &amp; insured
				</div>
				<div
					class="flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm text-stone-200 ring-1 ring-white/10"
				>
					<ArrowRight class="h-4 w-4 text-amber-300" aria-hidden="true" />
					Fast response
				</div>
			</div>
		</div>
	</div>

	<!-- Light base behind cards (matches example’s split background) -->
	<div class="bg-indigo-50/60">
		<div class="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
			<!-- Card row pulled up into the dark band -->
			<div class="-mt-24 grid gap-6 lg:grid-cols-3">
				{#each services as s (s.title)}
					<article
						class="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-0.5 hover:shadow-md"
					>
						<!-- icon badge circle -->
						<div class="px-8 pt-10">
							<div class="inline-flex items-center justify-center rounded-full bg-indigo-50 p-5 ring-1 ring-indigo-100">
								<svelte:component this={s.icon} class="h-10 w-10 text-indigo-700" aria-hidden="true" />
							</div>
						</div>

						<div class="px-8 pt-6 pb-9">
							<h3 class="text-xl font-semibold text-stone-900">
								<a href={s.href} class="focus:outline-none">
									<span class="absolute inset-0" aria-hidden="true"></span>
									{s.title}
								</a>
							</h3>

							<p class="mt-3 text-sm leading-relaxed text-stone-600">
								{s.desc}
							</p>

							<div class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-700">
								Learn more
								<ArrowRight class="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
							</div>
						</div>
					</article>
				{/each}
			</div>

			<!-- SEO-friendly internal links row (kept clean) -->
			<nav aria-label="More services" class="mt-10 rounded-3xl bg-white px-6 py-5 shadow-sm ring-1 ring-stone-200">
				<p class="text-sm font-semibold text-stone-900">Popular services</p>
				<div class="mt-3 flex flex-wrap gap-2">
					<a
						href="/interior-painting"
						class="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700 hover:bg-stone-200"
					>
						Interior Painting
					</a>
					<a
						href="/exterior-painting"
						class="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700 hover:bg-stone-200"
					>
						Exterior Painting
					</a>
					<a
						href="/cabinet-painting"
						class="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700 hover:bg-stone-200"
					>
						Cabinet Painting
					</a>
					<a href="/services" class="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700 hover:bg-stone-200">
						View All Services
					</a>
				</div>
				<p class="mt-3 text-xs text-stone-500">Serving Edmonton + Sherwood Park, St. Albert, and Fort Saskatchewan.</p>
			</nav>

			<!-- CTA -->
			<div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
				<a
					href="#quote"
					class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-800 sm:w-auto"
				>
					Get a Free Quote
					<span
						class="inline-flex items-center rounded-full bg-amber-400/90 px-2 py-0.5 text-xs font-semibold text-stone-900"
					>
						Fast Response
					</span>
				</a>

				<a
					href="tel:17807225577"
					class="inline-flex w-full items-center justify-center rounded-2xl border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-900 shadow-sm hover:bg-stone-50 sm:w-auto"
				>
					Call 780-722-5577
				</a>
			</div>
		</div>
	</div>
</section>
