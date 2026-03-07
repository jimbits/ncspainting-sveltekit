<script lang="ts">
	const header = {
		eyebrow: 'NCS Painting Service Areas',
		title: 'Serving Edmonton And Nearby Communities',
		tagline:
			'Need reliable house painters Edmonton homeowners trust? We provide interior painting and exterior painting services across key nearby communities with clean prep, clear pricing, and free quote options.'
	};

	const topLeft = {
		title: 'Sherwood Park',
		description:
			'Residential painters for Sherwood Park homes, including full interior repaint projects, exterior prep, and durable finishes built for Alberta weather.',
		image: '/image-40.png',
		imageAlt: 'Residential painting project in Sherwood Park Alberta',
		href: '/locations/sherwood-park-painters',
		cta: 'See Sherwood Park details'
	};

	const topRight = {
		title: 'Saint Albert',
		description:
			'Local painting company support for Saint Albert homeowners looking for clean interior painting, crisp trim lines, and exterior curb appeal updates.',
		href: '/locations/st-albert-painters',
		cta: 'Plan my St. Albert project'
	};

	const bottomLeft = {
		title: 'Beaumont',
		description:
			'Home painting services in Beaumont with careful prep, premium coatings, and dependable timelines for both occupied homes and move-in ready projects.',
		href: '/locations/beaumont-painters',
		cta: 'Explore Beaumont painting'
	};

	const bottomRight = {
		title: 'Fort Saskatchewan',
		description:
			'Trusted Fort Saskatchewan painters for interior walls, ceilings, trim, and weather-resistant exterior painting designed for long-term performance.',
		image: '/image-41.png',
		imageAlt: 'House painters completing a project in Fort Saskatchewan Alberta',
		href: '/locations/fort-saskatchewan-painters',
		cta: 'Book Fort Saskatchewan consult'
	};
</script>

<section id="service-areas" class="bg-white py-16 sm:py-20 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<header class="mx-auto max-w-3xl text-center">
			<p
				class="inline-flex items-center rounded-full border border-lime-200 bg-lime-50 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-lime-700 uppercase"
			>
				{header.eyebrow}
			</p>
			<h2 class="mt-6 text-5xl leading-tight font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
				{header.title}
			</h2>
			<p class="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl">{header.tagline}</p>
		</header>

		<div class="mt-12 grid gap-6 lg:grid-cols-12">
			<article class="rounded-3xl border border-lime-100 bg-slate-50 p-4 shadow-sm sm:p-5 lg:col-span-7">
				<div class="grid items-center gap-5 lg:grid-cols-[1fr_1fr]">
					<div class="overflow-hidden rounded-2xl">
						<picture>
							<img
								src={topLeft.image}
								alt={topLeft.imageAlt}
								class="h-56 w-full object-cover sm:h-64"
								loading="lazy"
								width="900"
								height="640"
							/>
						</picture>
					</div>
					<div>
						<h3 class="text-4xl leading-tight font-semibold tracking-tight text-slate-900 sm:text-5xl">{topLeft.title}</h3>
						<p class="mt-4 text-base leading-relaxed text-slate-600">{topLeft.description}</p>
						<a
							href={topLeft.href}
							class="mt-5 inline-flex min-h-11 items-center rounded-xl bg-lime-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-lime-400 focus-visible:ring-2 focus-visible:ring-lime-500/50 focus-visible:ring-offset-2 focus-visible:outline-none"
						>
							{topLeft.cta}
						</a>
					</div>
				</div>
			</article>

			<article class="rounded-3xl border border-lime-100 bg-slate-50 p-6 shadow-sm sm:p-7 lg:col-span-5">
				<h3 class="text-4xl leading-tight font-semibold tracking-tight text-slate-900 sm:text-5xl">{topRight.title}</h3>
				<p class="mt-4 text-base leading-relaxed text-slate-600">{topRight.description}</p>
				<a
					href={topRight.href}
					class="mt-5 inline-flex min-h-11 items-center rounded-xl bg-lime-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-lime-400 focus-visible:ring-2 focus-visible:ring-lime-500/50 focus-visible:ring-offset-2 focus-visible:outline-none"
				>
					{topRight.cta}
				</a>
			</article>

			<article class="rounded-3xl border border-lime-100 bg-slate-50 p-6 shadow-sm sm:p-7 lg:col-span-5">
				<h3 class="text-4xl leading-tight font-semibold tracking-tight text-slate-900 sm:text-5xl">{bottomLeft.title}</h3>
				<p class="mt-4 text-base leading-relaxed text-slate-600">{bottomLeft.description}</p>
				<a
					href={bottomLeft.href}
					class="mt-5 inline-flex min-h-11 items-center rounded-xl bg-lime-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-lime-400 focus-visible:ring-2 focus-visible:ring-lime-500/50 focus-visible:ring-offset-2 focus-visible:outline-none"
				>
					{bottomLeft.cta}
				</a>
			</article>

			<article class="rounded-3xl border border-lime-100 bg-slate-50 p-4 shadow-sm sm:p-5 lg:col-span-7">
				<div class="grid items-center gap-5 lg:grid-cols-[1fr_1fr]">
					<div class="overflow-hidden rounded-2xl lg:order-1">
						<picture>
							<img
								src={bottomRight.image}
								alt={bottomRight.imageAlt}
								class="h-56 w-full object-cover sm:h-64"
								loading="lazy"
								width="900"
								height="640"
							/>
						</picture>
					</div>
					<div class="lg:order-2">
						<h3 class="text-4xl leading-tight font-semibold tracking-tight text-slate-900 sm:text-5xl">{bottomRight.title}</h3>
						<p class="mt-4 text-base leading-relaxed text-slate-600">{bottomRight.description}</p>
						<a
							href={bottomRight.href}
							class="mt-5 inline-flex min-h-11 items-center rounded-xl bg-lime-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-lime-400 focus-visible:ring-2 focus-visible:ring-lime-500/50 focus-visible:ring-offset-2 focus-visible:outline-none"
						>
							{bottomRight.cta}
						</a>
					</div>
				</div>
			</article>
		</div>

		<div class="mt-10 flex flex-wrap items-center justify-center gap-4">
			<a
				href="/contact"
				class="inline-flex min-h-11 items-center rounded-xl bg-lime-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-lime-400 focus-visible:ring-2 focus-visible:ring-lime-500/50 focus-visible:ring-offset-2 focus-visible:outline-none"
			>
				Get a free quote
			</a>
			<a
				href="/projects"
				class="inline-flex min-h-11 items-center rounded-xl border border-lime-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-lime-300 hover:bg-lime-50 focus-visible:ring-2 focus-visible:ring-lime-500/40 focus-visible:ring-offset-2 focus-visible:outline-none"
			>
				View recent projects
			</a>
		</div>
	</div>
</section>
