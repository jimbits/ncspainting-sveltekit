<script lang="ts">
	import { CheckCircle2, MapPin, Paintbrush, Phone } from 'lucide-svelte';

	// Schema.org Markup for Local SEO
	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: [
			{
				'@type': 'Question',
				name: 'Do you paint cabinets in Sherwood Park?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Yes—cabinet painting is a popular way to modernize a kitchen without a full renovation in Sherwood Park.'
				}
			},
			{
				'@type': 'Question',
				name: 'How do you protect floors and furniture?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'We use drop cloths, masking, and careful prep to keep work areas tidy and protect your belongings.'
				}
			}
		]
	};
</script>

<svelte:head>
	<title>Painters Sherwood Park | NCS Painting</title>
	<meta
		name="description"
		content="Looking for painters in Sherwood Park? NCS Painting handles interior, exterior, cabinets, and staining with careful prep and clean results. Free estimates—call 780-722-5577."
	/>
	<script type="application/ld+json">
		{JSON.stringify(faqSchema)}
	</script>
</svelte:head>

<section class="relative overflow-hidden bg-stone-50 py-20 lg:py-32">
	<div class="container mx-auto px-4">
		<div class="flex flex-col items-center text-center">
			<span
				class="mb-4 inline-block rounded-full bg-stone-200 px-4 py-1 text-sm font-semibold tracking-wide text-stone-800 uppercase"
			>
				Professional Local Painters
			</span>
			<h1 class="mb-6 text-4xl font-bold tracking-tight text-stone-900 md:text-6xl">
				Painters in <span class="text-orange-700">Sherwood Park</span>
			</h1>
			<p class="mb-10 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl">
				Professional interior and exterior painting with tidy prep, smooth coverage, and a finish built to last. We
				treat your Sherwood Park home like our own.
			</p>

			<div class="flex flex-col gap-4 sm:flex-row">
				<a
					href="/contact"
					class="inline-flex items-center justify-center rounded-lg bg-stone-900 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:bg-stone-800 active:scale-95"
				>
					Request a Free Quote
				</a>
				<a
					href="tel:7807225577"
					class="inline-flex items-center justify-center rounded-lg border-2 border-stone-900 px-8 py-4 text-lg font-bold text-stone-900 transition-all hover:bg-stone-100"
				>
					<Phone class="mr-2 size-5" /> 780-722-5577
				</a>
			</div>
		</div>
	</div>
</section>

<section class="py-20">
	<div class="container mx-auto px-4">
		<div class="mb-16 text-center">
			<h2 class="text-3xl font-bold text-stone-900 md:text-4xl">Painting Services in Sherwood Park</h2>
			<div class="mx-auto mt-4 h-1 w-24 bg-orange-600"></div>
			<p class="mx-auto mt-6 max-w-3xl text-stone-600">
				Sherwood Park homes range from newer builds to established properties—either way, the best results come from
				proper prep and the right products for each surface.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each [{ title: 'Interior Painting', desc: 'Walls, ceilings, trim, and doors with laser-straight lines.', link: '/interior-painting-edmonton' }, { title: 'Exterior Painting', desc: 'Siding, stucco, and trim protected against Alberta weather.', link: '/exterior-painting-edmonton' }, { title: 'Cabinet Painting', desc: 'Factory-smooth finishes for kitchen and bath updates.', link: '/cabinet-painting-edmonton' }, { title: 'Deck & Fence', desc: 'Premium staining to protect and beautify your wood surfaces.', link: '/deck-staining-edmonton' }] as service}
				<a
					href={service.link}
					class="group rounded-xl border border-stone-200 p-8 transition-all hover:border-orange-200 hover:bg-orange-50/30 hover:shadow-lg"
				>
					<Paintbrush class="mb-4 size-10 text-orange-700 transition-transform group-hover:rotate-12" />
					<h3 class="mb-3 text-xl font-bold text-stone-900">{service.title}</h3>
					<p class="text-stone-600">{service.desc}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="bg-stone-900 py-20 text-white">
	<div class="container mx-auto px-4">
		<h2 class="mb-16 text-center text-3xl font-bold md:text-4xl">Our Sherwood Park Process</h2>
		<div class="grid gap-12 lg:grid-cols-4">
			{#each [{ step: '01', name: 'Estimate', text: 'We review the scope, confirm surfaces, and set clear expectations.' }, { step: '02', name: 'Prep', text: 'We protect floors and furniture, patch, sand, and prime for durability.' }, { step: '03', name: 'Paint', text: 'Even coatings applied with focus on smooth roll patterns and clean edges.' }, { step: '04', name: 'Cleanup', text: 'Final walkthrough with you to ensure every detail is perfect.' }] as item}
				<div class="relative">
					<span class="text-5xl font-black text-stone-800">{item.step}</span>
					<h3 class="mt-2 text-xl font-bold text-orange-400">{item.name}</h3>
					<p class="mt-4 text-stone-400">{item.text}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="py-20">
	<div class="container mx-auto px-4">
		<div class="flex flex-col items-center lg:flex-row lg:gap-16">
			<div class="lg:w-1/2">
				<h2 class="mb-8 text-3xl font-bold text-stone-900 md:text-4xl">Why Choose NCS Painting?</h2>
				<ul class="space-y-6">
					<li class="flex items-start">
						<CheckCircle2 class="mt-1 mr-4 size-6 shrink-0 text-orange-600" />
						<div>
							<strong class="block text-lg text-stone-900">Prep-First Mindset</strong>
							<p class="text-stone-600">
								The finish looks better and lasts years longer because we don't cut corners on sanding and priming.
							</p>
						</div>
					</li>
					<li class="flex items-start">
						<CheckCircle2 class="mt-1 mr-4 size-6 shrink-0 text-orange-600" />
						<div>
							<strong class="block text-lg text-stone-900">Neat & Respectful</strong>
							<p class="text-stone-600">
								We maintain a clean job site and treat your Sherwood Park property with the highest respect.
							</p>
						</div>
					</li>
					<li class="flex items-start">
						<CheckCircle2 class="mt-1 mr-4 size-6 shrink-0 text-orange-600" />
						<div>
							<strong class="block text-lg text-stone-900">Durable Finishes</strong>
							<p class="text-stone-600">
								Product selection is customized for each surface and high-traffic area in your home.
							</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="mt-12 lg:mt-0 lg:w-1/2">
				<div class="aspect-square overflow-hidden rounded-2xl bg-stone-200 shadow-2xl">
					<div class="flex h-full items-center justify-center bg-stone-300 text-stone-500">
						[Insert Sherwood Park Project Photo]
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-stone-50 py-20">
	<div class="container mx-auto max-w-4xl px-4">
		<h2 class="mb-12 text-center text-3xl font-bold text-stone-900">Frequently Asked Questions</h2>
		<div class="space-y-4">
			{#each [{ q: 'Can you paint just a few rooms?', a: 'Yes—small interior refresh projects and single feature walls are very common.' }, { q: 'Do you paint cabinets in Sherwood Park?', a: 'Yes—cabinet painting is a popular way to modernize a kitchen without a full renovation.' }, { q: 'How do you protect floors and furniture?', a: 'We use drop cloths, heavy-duty masking, and careful prep to keep work areas tidy.' }, { q: 'What paint sheen should I choose?', a: 'We recommend sheens based on room use—higher durability for kitchens/baths and lower sheens for a soft living room look.' }] as faq}
				<details class="group rounded-lg border border-stone-200 bg-white p-6 transition-all hover:border-orange-200">
					<summary class="flex cursor-pointer list-none items-center justify-between font-bold text-stone-900">
						{faq.q}
						<span class="transition-transform group-open:rotate-180">↓</span>
					</summary>
					<p class="mt-4 leading-relaxed text-stone-600">
						{faq.a}
					</p>
				</details>
			{/each}
		</div>
	</div>
</section>

<section class="bg-orange-700 py-20 text-white">
	<div class="container mx-auto px-4 text-center">
		<h2 class="mb-6 text-3xl font-bold md:text-5xl">Ready to refresh your space?</h2>
		<p class="mb-10 text-xl text-orange-100">
			Tell us your timeline and what you want painted—we’ll send a free estimate.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/contact"
				class="rounded-lg bg-white px-10 py-4 font-bold text-orange-700 transition-transform hover:scale-105"
			>
				Request a Quote
			</a>
			<a
				href="tel:7807225577"
				class="rounded-lg border-2 border-white px-10 py-4 font-bold text-white transition-all hover:bg-orange-600"
			>
				Call 780-722-5577
			</a>
		</div>
	</div>
</section>

<footer class="border-t border-stone-200 py-12 text-stone-600">
	<div class="container mx-auto px-4">
		<div class="flex flex-col items-center justify-between gap-8 md:flex-row">
			<div class="text-center md:text-left">
				<h3 class="font-bold text-stone-900">NCS Painting</h3>
				<p class="flex items-center justify-center md:justify-start">
					<MapPin class="mr-2 size-4" /> Edmonton, AB T6A 2N9
				</p>
			</div>
			<div class="text-center">
				<p class="font-bold text-stone-900">780-722-5577</p>
				<p>Mon–Fri 9:00–5:00 • Sat–Sun 11:00–3:00</p>
			</div>
			<div class="flex gap-4">
				<a href="/projects" class="hover:text-orange-700">Projects</a>
				<a href="/contact" class="hover:text-orange-700">Contact</a>
			</div>
		</div>
	</div>
</footer>

<style>
	/* Custom details marker removal */
	details summary::-webkit-details-marker {
		display: none;
	}
</style>
