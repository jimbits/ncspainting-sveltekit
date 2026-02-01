<script lang="ts">
	const heading = 'Exterior Painting Services';
	const tagline =
		'Exterior painting in Edmonton that starts with proper prep—so your finish looks great and holds up through the seasons.';
	const copy =
		'A durable exterior isn’t just about color—it’s about adhesion and protection. We prioritize surface prep and clean application for longer-lasting results.';
	const bullets = [
		'Surface cleaning + scraping/sanding where needed',
		'Priming for strong adhesion on exposed areas',
		'Caulking and sealing details',
		'Durable exterior coatings for long-lasting color',
		'Neat masking and tidy jobsite cleanup'
	];
	const faqs = [
		{
			q: 'What time of year is best for exterior painting in Edmonton?',
			a: 'Late spring through early fall is typically best, depending on temperature and humidity.'
		},
		{
			q: 'How long does exterior paint last?',
			a: 'It varies by surface, sun exposure, and prep—good prep extends lifespan.'
		}
	];
</script>

<div class="space-y-20 bg-white py-12 text-slate-900">
	<section class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<header class="mb-8">
			<p class="text-xs font-semibold tracking-[0.3em] text-emerald-600 uppercase">Layout 01</p>
			<h2 class="mt-3 text-4xl font-black tracking-tight md:text-5xl">Bento Green</h2>
			<p class="mt-3 max-w-2xl text-lg text-slate-600">{tagline}</p>
		</header>
		<div class="grid gap-6 lg:grid-cols-4">
			<article
				class="group relative overflow-hidden rounded-[28px] bg-emerald-600 text-white lg:col-span-2 lg:row-span-2"
			>
				<img
					src="/hero-12.jpg"
					alt="Exterior house painting in Edmonton"
					class="h-full min-h-[320px] w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
					loading="lazy"
				/>
				<div class="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-900/10 to-transparent"></div>
				<div class="absolute bottom-0 left-0 p-6">
					<h3 class="text-2xl font-semibold">{heading}</h3>
					<p class="mt-2 text-sm text-white/80">{copy}</p>
				</div>
			</article>
			<article class="rounded-[28px] border border-emerald-100 bg-emerald-50 p-6">
				<p class="text-xs font-semibold tracking-[0.2em] text-emerald-700 uppercase">Prep Focus</p>
				<ul class="mt-4 space-y-2 text-sm text-emerald-900">
					{#each bullets.slice(0, 3) as bullet}
						<li>• {bullet}</li>
					{/each}
				</ul>
			</article>
			<article class="rounded-[28px] border border-slate-200 bg-white p-6">
				<h4 class="text-sm font-semibold text-slate-900">Exterior FAQ</h4>
				<p class="mt-2 text-sm text-slate-600">{faqs[0].a}</p>
			</article>
			<article class="overflow-hidden rounded-[28px] border border-slate-200">
				<img
					src="/image-24.png"
					alt="Exterior prep work"
					class="h-full min-h-[200px] w-full object-cover"
					loading="lazy"
				/>
			</article>
		</div>
	</section>

	<section class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<header class="mb-8">
			<p class="text-xs font-semibold tracking-[0.3em] text-orange-500 uppercase">Layout 02</p>
			<h2 class="mt-3 text-4xl font-black tracking-tight md:text-5xl">Bento Orange</h2>
			<p class="mt-3 max-w-2xl text-lg text-slate-600">{copy}</p>
		</header>
		<div class="grid gap-6 lg:grid-cols-6">
			<article class="rounded-[28px] bg-gradient-to-br from-orange-500 to-orange-300 p-6 text-white lg:col-span-3">
				<h3 class="text-2xl font-semibold">{heading}</h3>
				<p class="mt-3 text-sm text-white/90">{tagline}</p>
				<div class="mt-5 grid gap-2 sm:grid-cols-2">
					{#each bullets as bullet}
						<span class="rounded-xl bg-white/15 px-3 py-2 text-xs font-semibold">
							{bullet}
						</span>
					{/each}
				</div>
				<div class="mt-6 flex flex-wrap gap-2">
					<a href="#quote-form" class="rounded-full bg-black px-5 py-2 text-xs font-semibold text-white">
						Request a Free Quote
					</a>
					<a
						href="tel:7807225577"
						class="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold text-white"
					>
						Call the Painter
					</a>
				</div>
			</article>
			<article class="overflow-hidden rounded-[28px] border border-slate-200 lg:col-span-3">
				<img
					src="/hero-19.jpg"
					alt="Exterior painting in progress"
					class="h-full min-h-[260px] w-full object-cover"
					loading="lazy"
				/>
			</article>
			<article class="rounded-[28px] border border-slate-200 bg-white p-6 lg:col-span-2">
				<h4 class="text-sm font-semibold text-slate-900">Seasonal Timing</h4>
				<p class="mt-2 text-sm text-slate-600">{faqs[0].a}</p>
			</article>
			<article class="rounded-[28px] border border-slate-200 bg-white p-6 lg:col-span-2">
				<h4 class="text-sm font-semibold text-slate-900">Durability</h4>
				<p class="mt-2 text-sm text-slate-600">{faqs[1].a}</p>
			</article>
			<article class="rounded-[28px] border border-slate-200 bg-white p-6 lg:col-span-2">
				<h4 class="text-sm font-semibold text-slate-900">Next Step</h4>
				<p class="mt-2 text-sm text-slate-600">Schedule a walkthrough to confirm scope and timeline.</p>
			</article>
		</div>
	</section>

	<section class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<header class="mb-8">
			<p class="text-xs font-semibold tracking-[0.3em] text-sky-500 uppercase">Layout 03</p>
			<h2 class="mt-3 text-4xl font-black tracking-tight md:text-5xl">Bento Sky</h2>
			<p class="mt-3 max-w-2xl text-lg text-slate-600">{tagline}</p>
		</header>
		<div class="grid gap-6 lg:grid-cols-4">
			<article class="rounded-[28px] border border-sky-100 bg-sky-50 p-6 lg:col-span-2">
				<h3 class="text-2xl font-semibold">{heading}</h3>
				<p class="mt-3 text-sm text-slate-600">{copy}</p>
				<div class="mt-5 grid gap-3 sm:grid-cols-2">
					{#each bullets as bullet}
						<div class="rounded-2xl border border-sky-100 bg-white p-3 text-sm text-slate-700">
							{bullet}
						</div>
					{/each}
				</div>
			</article>
			<article class="overflow-hidden rounded-[28px] border border-slate-200 lg:col-span-2">
				<img
					src="/hero-21.jpg"
					alt="Exterior siding painting"
					class="h-full min-h-[260px] w-full object-cover"
					loading="lazy"
				/>
			</article>
			<article class="rounded-[28px] border border-slate-200 bg-white p-6">
				<h4 class="text-sm font-semibold text-slate-900">Prep Matters</h4>
				<p class="mt-2 text-sm text-slate-600">We focus on adhesion and protection, not just color.</p>
			</article>
			<article class="rounded-[28px] border border-slate-200 bg-white p-6">
				<h4 class="text-sm font-semibold text-slate-900">Exterior FAQ</h4>
				<p class="mt-2 text-sm text-slate-600">{faqs[1].a}</p>
			</article>
		</div>
	</section>

	<section class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<header class="mb-8">
			<p class="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">Layout 04</p>
			<h2 class="mt-3 text-4xl font-black tracking-tight md:text-5xl">Bold Contrast Grid</h2>
			<p class="mt-3 max-w-2xl text-lg text-slate-600">{copy}</p>
		</header>
		<div class="grid gap-6 lg:grid-cols-5">
			<article class="rounded-[28px] bg-black p-6 text-white lg:col-span-3">
				<h3 class="text-2xl font-semibold">{heading}</h3>
				<p class="mt-3 text-sm text-white/70">{tagline}</p>
				<ul class="mt-5 space-y-2 text-sm text-white/80">
					{#each bullets as bullet}
						<li>• {bullet}</li>
					{/each}
				</ul>
				<div class="mt-6 flex flex-wrap gap-2">
					<a href="#quote-form" class="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black">
						Request a Free Quote
					</a>
					<a
						href="tel:7807225577"
						class="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold text-white"
					>
						Call the Painter
					</a>
				</div>
			</article>
			<article class="overflow-hidden rounded-[28px] border border-slate-200 lg:col-span-2">
				<img
					src="/hero-16.jpg"
					alt="Exterior painting project"
					class="h-full min-h-[260px] w-full object-cover"
					loading="lazy"
				/>
			</article>
			<article class="rounded-[28px] border border-slate-200 bg-white p-6 lg:col-span-2">
				<h4 class="text-sm font-semibold text-slate-900">Seasonal Planning</h4>
				<p class="mt-2 text-sm text-slate-600">
					Late spring through early fall is typically best for exterior painting.
				</p>
			</article>
			<article class="rounded-[28px] border border-slate-200 bg-white p-6 lg:col-span-3">
				<h4 class="text-sm font-semibold text-slate-900">Durable finishes</h4>
				<p class="mt-2 text-sm text-slate-600">We prioritize prep and clean application so finishes last longer.</p>
			</article>
		</div>
	</section>

	<section class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<header class="mb-8">
			<p class="text-xs font-semibold tracking-[0.3em] text-emerald-600 uppercase">Layout 05</p>
			<h2 class="mt-3 text-4xl font-black tracking-tight md:text-5xl">Feature Mosaic</h2>
			<p class="mt-3 max-w-2xl text-lg text-slate-600">{tagline}</p>
		</header>
		<div class="grid gap-6 lg:grid-cols-6">
			<article class="rounded-[28px] border border-slate-200 bg-white p-6 lg:col-span-4">
				<h3 class="text-2xl font-semibold">{heading}</h3>
				<p class="mt-3 text-sm text-slate-600">{copy}</p>
				<div class="mt-5 grid gap-3 sm:grid-cols-2">
					{#each bullets as bullet}
						<div class="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
							{bullet}
						</div>
					{/each}
				</div>
				<div class="mt-6 flex flex-wrap gap-2">
					<a href="#quote-form" class="rounded-full bg-black px-5 py-2 text-xs font-semibold text-white">
						Request a Free Quote
					</a>
					<a
						href="/projects?type=exterior"
						class="rounded-full border border-slate-300 px-5 py-2 text-xs font-semibold text-slate-900"
					>
						See exterior projects
					</a>
				</div>
			</article>
			<article class="overflow-hidden rounded-[28px] border border-slate-200 lg:col-span-2">
				<img
					src="/image-24.png"
					alt="Exterior prep detail"
					class="h-full min-h-[260px] w-full object-cover"
					loading="lazy"
				/>
			</article>
			<article class="rounded-[28px] bg-emerald-600 p-6 text-white lg:col-span-2">
				<h4 class="text-sm font-semibold">Prep Checklist</h4>
				<ul class="mt-3 space-y-2 text-sm text-white/80">
					{#each bullets.slice(0, 3) as bullet}
						<li>• {bullet}</li>
					{/each}
				</ul>
			</article>
			<article class="rounded-[28px] border border-slate-200 bg-white p-6 lg:col-span-2">
				<h4 class="text-sm font-semibold text-slate-900">Exterior FAQ</h4>
				<p class="mt-2 text-sm text-slate-600">{faqs[0].a}</p>
			</article>
			<article class="rounded-[28px] border border-slate-200 bg-white p-6 lg:col-span-2">
				<h4 class="text-sm font-semibold text-slate-900">Durability</h4>
				<p class="mt-2 text-sm text-slate-600">{faqs[1].a}</p>
			</article>
		</div>
	</section>

	<section class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<header class="mb-8">
			<p class="text-xs font-semibold tracking-[0.3em] text-sky-500 uppercase">Layout 06</p>
			<h2 class="mt-3 text-4xl font-black tracking-tight md:text-5xl">Minimal Sky Grid</h2>
			<p class="mt-3 max-w-2xl text-lg text-slate-600">{copy}</p>
		</header>
		<div class="grid gap-6 lg:grid-cols-6">
			<article class="rounded-[28px] border border-slate-200 bg-white p-6 lg:col-span-3">
				<h3 class="text-2xl font-semibold">{heading}</h3>
				<p class="mt-3 text-sm text-slate-600">{tagline}</p>
				<ul class="mt-5 space-y-2 text-sm text-slate-600">
					{#each bullets as bullet}
						<li>• {bullet}</li>
					{/each}
				</ul>
				<div class="mt-6 flex flex-wrap gap-2">
					<a href="#quote-form" class="rounded-full bg-black px-5 py-2 text-xs font-semibold text-white">
						Request a Free Quote
					</a>
					<a
						href="tel:7807225577"
						class="rounded-full border border-slate-300 px-5 py-2 text-xs font-semibold text-slate-900"
					>
						Call the Painter
					</a>
				</div>
			</article>
			<article class="overflow-hidden rounded-[28px] border border-slate-200 lg:col-span-3">
				<img
					src="/hero-24.jpg"
					alt="Exterior painting detail"
					class="h-full min-h-[260px] w-full object-cover"
					loading="lazy"
				/>
			</article>
			<article class="rounded-[28px] border border-slate-200 bg-sky-50 p-6 lg:col-span-2">
				<h4 class="text-sm font-semibold text-slate-900">Seasonal Timing</h4>
				<p class="mt-2 text-sm text-slate-600">{faqs[0].a}</p>
			</article>
			<article class="rounded-[28px] border border-slate-200 bg-white p-6 lg:col-span-2">
				<h4 class="text-sm font-semibold text-slate-900">Prep Matters</h4>
				<p class="mt-2 text-sm text-slate-600">{copy}</p>
			</article>
			<article class="rounded-[28px] border border-slate-200 bg-white p-6 lg:col-span-2">
				<h4 class="text-sm font-semibold text-slate-900">Exterior FAQ</h4>
				<p class="mt-2 text-sm text-slate-600">{faqs[1].a}</p>
			</article>
		</div>
	</section>
</div>
