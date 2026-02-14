<script>
	import { onMount } from 'svelte';

	let activeFaq = $state(null);
	let activeProcess = $state(1);

	const processSteps = [
		{ num: 1, title: 'Low/Zero‑VOC options', desc: 'Choose modern waterborne coatings with minimal emissions' },
		{ num: 2, title: 'Dust control', desc: 'Contain and manage prep dust for cleaner air' },
		{ num: 3, title: 'Clean prep', desc: 'Thorough surface preparation without harsh chemicals' },
		{ num: 4, title: 'Right primer', desc: 'Seal and prepare with eco-friendly primers' },
		{ num: 5, title: 'Durable topcoat', desc: "Long-lasting protection that's safe for your family" }
	];

	const faqs = [
		{
			q: "What's the difference between low‑VOC and zero‑VOC paint?",
			a: "They're measured in VOC grams per liter (g/L). 'Low‑VOC' is typically much lower than traditional coatings, while 'zero/no‑VOC' is extremely low—though tint/colorants can add VOCs. We'll recommend the best option for your space and finish."
		},
		{
			q: 'Can we stay in the house while you paint?',
			a: "Often yes—especially with low‑odor systems and a room‑by‑room plan. We'll outline ventilation, curing time, and which rooms to stage first for comfort."
		},
		{
			q: 'Does eco paint last as long?',
			a: 'Modern waterborne acrylics are durable and washable. Longevity comes down to prep, primers, and using the right product for the surface and conditions.'
		},
		{
			q: 'Do you offer eco options for exteriors too?',
			a: 'Yes. We can prioritize high‑performance waterborne systems and smart prep that reduce waste and improve durability—important for Edmonton‑area weather.'
		}
	];

	onMount(() => {
		const interval = setInterval(() => {
			activeProcess = (activeProcess % 5) + 1;
		}, 3000);
		return () => clearInterval(interval);
	});
</script>

<div class="bg-white">
	<!-- Hero Section -->
	<section class="bg-gradient-to-br from-emerald-50 to-teal-50 px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<div class="mb-12 text-center">
				<div class="mb-8 inline-block rounded-full bg-orange-500 px-6 py-2 font-bold text-white shadow-md">
					Eco-Friendly Painting
				</div>
				<h1 class="mb-8 text-7xl leading-tight font-bold text-zinc-900 md:text-8xl">
					Healthier paint choices—
					<br />
					without sacrificing durability
				</h1>
				<p class="mx-auto mb-12 max-w-4xl text-2xl leading-relaxed text-zinc-700">
					Homeowners search for <strong>low/zero‑VOC</strong>
					,
					<strong>low‑odor</strong>
					,
					<strong>allergy‑friendly</strong>
					, and
					<strong>mold‑resistant</strong>
					 options for both interior and exterior painting. NCS Painting helps Edmonton-area homeowners choose modern waterborne
					coatings and apply them with clean prep and a room‑by‑room plan—so your home feels comfortable sooner.
				</p>
				<div class="flex flex-col justify-center gap-6 sm:flex-row">
					<button
						class="rounded-lg bg-orange-500 px-14 py-6 text-xl font-bold text-white shadow-lg transition-all hover:bg-orange-600"
					>
						Request a Free Quote
					</button>
					<button
						class="rounded-lg border-2 border-orange-500 bg-white px-14 py-6 text-xl font-semibold text-orange-600 shadow-md transition-all hover:bg-orange-50"
					>
						Call 780‑722‑5577
					</button>
				</div>
			</div>
		</div>
	</section>

	<!-- Process Diagram -->
	<section class="bg-white px-6 py-24">
		<div class="mx-auto max-w-7xl">
			<h2 class="mb-6 text-center text-6xl font-bold text-zinc-900">How we keep it eco + effective</h2>
			<p class="mx-auto mb-16 max-w-3xl text-center text-2xl text-zinc-600">
				Our 5-step process ensures environmental responsibility without compromising quality
			</p>

			<div class="mb-12 grid gap-6 md:grid-cols-5">
				{#each processSteps as step}
					<button
						class="relative rounded-2xl border-2 bg-white p-8 shadow-md transition-all {activeProcess === step.num
							? 'border-orange-500 bg-orange-50'
							: 'border-zinc-200'}"
						onclick={() => (activeProcess = step.num)}
					>
						<div
							class="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white shadow-lg"
						>
							{step.num}
						</div>
						<h3 class="mt-2 mb-3 text-xl font-bold text-zinc-900">{step.title}</h3>
						<p class="text-sm text-zinc-600">{step.desc}</p>
					</button>
				{/each}
			</div>

			<div class="rounded-2xl border border-zinc-200 bg-zinc-50 p-10">
				<div class="mb-6 flex items-center gap-4">
					<div
						class="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white shadow-md"
					>
						{activeProcess}
					</div>
					<h3 class="text-3xl font-bold text-zinc-900">{processSteps[activeProcess - 1].title}</h3>
				</div>
				<p class="text-xl leading-relaxed text-zinc-700">
					{processSteps[activeProcess - 1].desc}
				</p>
			</div>
		</div>
	</section>

	<!-- Topic Cards - Bento Style Grid -->
	<section class="bg-zinc-50 px-6 py-24">
		<div class="mx-auto max-w-7xl">
			<h2 class="mb-16 text-center text-6xl font-bold text-zinc-900">Why choose eco-friendly painting?</h2>

			<div class="grid gap-8 lg:grid-cols-2">
				<!-- Card 1 - Indoor air + comfort -->
				<div class="rounded-2xl border border-zinc-200 bg-white p-10 shadow-lg transition-all hover:border-orange-500">
					<div class="mb-6 flex items-start justify-between">
						<div>
							<div class="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-bold text-orange-600">
								Most searched
							</div>
							<h3 class="mb-4 text-4xl font-bold text-zinc-900">Indoor air + comfort</h3>
							<h4 class="mb-6 text-2xl font-semibold text-orange-600">
								Low/Zero‑VOC paint (and what "VOC" actually means)
							</h4>
						</div>
					</div>
					<p class="mb-8 text-lg leading-relaxed text-zinc-700">
						Low‑VOC and zero‑VOC interior paint reduces odor and helps support indoor air quality—especially in
						bedrooms, nurseries, and living spaces.
					</p>
					<ul class="space-y-4">
						<li class="flex items-start gap-3">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-orange-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-zinc-700">Choose low/zero‑VOC base paints for occupied homes</span>
						</li>
						<li class="flex items-start gap-3">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-orange-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-zinc-700">Explain "VOC" simply during the quote (what it is + why it matters)</span>
						</li>
						<li class="flex items-start gap-3">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-orange-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-zinc-700">Plan ventilation + curing so rooms can be used sooner</span>
						</li>
					</ul>
				</div>

				<!-- Card 2 - Smell + off-gassing -->
				<div class="rounded-2xl border border-zinc-200 bg-white p-10 shadow-lg transition-all hover:border-orange-500">
					<div class="mb-6 flex items-start justify-between">
						<div>
							<div class="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-bold text-blue-600">
								Top question
							</div>
							<h3 class="mb-4 text-4xl font-bold text-zinc-900">Smell + off‑gassing</h3>
							<h4 class="mb-6 text-2xl font-semibold text-orange-600">"How long does paint smell last?"</h4>
						</div>
					</div>
					<p class="mb-8 text-lg leading-relaxed text-zinc-700">
						This is one of the most common homeowner questions. We pair low‑odor products with a ventilation and curing
						plan to minimize lingering smell.
					</p>
					<ul class="space-y-4">
						<li class="flex items-start gap-3">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-orange-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-zinc-700">Low‑odor options for sensitive households</span>
						</li>
						<li class="flex items-start gap-3">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-orange-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-zinc-700">Airflow plan: fans + windows + staged rooms</span>
						</li>
						<li class="flex items-start gap-3">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-orange-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-zinc-700">Clear expectations on "dry to touch" vs "fully cured"</span>
						</li>
					</ul>
				</div>

				<!-- Card 3 - Allergies + moisture -->
				<div class="rounded-2xl border border-zinc-200 bg-white p-10 shadow-lg transition-all hover:border-orange-500">
					<div class="mb-6 flex items-start justify-between">
						<div>
							<div class="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-bold text-emerald-600">
								Interior focus
							</div>
							<h3 class="mb-4 text-4xl font-bold text-zinc-900">Allergies + moisture</h3>
							<h4 class="mb-6 text-2xl font-semibold text-orange-600">
								Mold & mildew resistance (bathrooms, basements, laundry)
							</h4>
						</div>
					</div>
					<p class="mb-8 text-lg leading-relaxed text-zinc-700">
						Moisture‑prone rooms benefit from coatings formulated to resist mildew on the paint film—paired with proper
						prep and the right primer.
					</p>
					<ul class="space-y-4">
						<li class="flex items-start gap-3">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-orange-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-zinc-700">Wash + degloss + correct primer where needed</span>
						</li>
						<li class="flex items-start gap-3">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-orange-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-zinc-700">Use bathroom/kitchen‑rated coatings in wet zones</span>
						</li>
						<li class="flex items-start gap-3">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-orange-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-zinc-700">Seal stains and prevent bleed‑through</span>
						</li>
					</ul>
				</div>

				<!-- Card 4 - Exterior durability -->
				<div class="rounded-2xl border border-zinc-200 bg-white p-10 shadow-lg transition-all hover:border-orange-500">
					<div class="mb-6 flex items-start justify-between">
						<div>
							<div class="mb-4 inline-block rounded-full bg-sky-100 px-4 py-1 text-sm font-bold text-sky-600">
								Exterior focus
							</div>
							<h3 class="mb-4 text-4xl font-bold text-zinc-900">Exterior durability</h3>
							<h4 class="mb-6 text-2xl font-semibold text-orange-600">
								Eco-friendly choices that still handle Alberta weather
							</h4>
						</div>
					</div>
					<p class="mb-8 text-lg leading-relaxed text-zinc-700">
						For exteriors, "eco" still needs durability. We prioritize high‑performance waterborne acrylic systems and
						correct prep to improve longevity.
					</p>
					<ul class="space-y-4">
						<li class="flex items-start gap-3">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-orange-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-zinc-700">Surface prep: cleaning, scraping, sanding, caulking</span>
						</li>
						<li class="flex items-start gap-3">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-orange-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-zinc-700">Right primer for adhesion + uniform finish</span>
						</li>
						<li class="flex items-start gap-3">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-orange-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-zinc-700">Durable topcoats selected for sun + temperature swings</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Product + Technique Callouts -->
	<section class="bg-white px-6 py-24">
		<div class="mx-auto max-w-7xl">
			<h2 class="mb-16 text-center text-6xl font-bold text-zinc-900">Our eco-friendly solutions</h2>

			<div class="grid gap-8 md:grid-cols-3">
				<!-- Tile 1 -->
				<div
					class="rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-10 shadow-md"
				>
					<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-orange-500 shadow-md">
						<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-3xl font-bold text-zinc-900">Low/Zero‑VOC interiors</h3>
					<p class="mb-6 text-lg leading-relaxed text-zinc-700">
						Great for bedrooms, nurseries, hallways, and occupied homes where odor matters.
					</p>
					<div class="flex flex-wrap gap-2">
						<span class="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700">
							Low odor
						</span>
						<span class="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700">
							Water cleanup
						</span>
						<span class="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700">
							Family-friendly
						</span>
					</div>
				</div>

				<!-- Tile 2 -->
				<div class="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-10 shadow-md">
					<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-orange-500 shadow-md">
						<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-3xl font-bold text-zinc-900">Moisture + mildew resistance</h3>
					<p class="mb-6 text-lg leading-relaxed text-zinc-700">
						Ideal for bathrooms, basements, laundry rooms, and kitchens with humidity swings.
					</p>
					<div class="flex flex-wrap gap-2">
						<span class="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700">
							Wet-area rated
						</span>
						<span class="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700">
							Durable film
						</span>
						<span class="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700">
							Scrubbable
						</span>
					</div>
				</div>

				<!-- Tile 3 -->
				<div class="rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-10 shadow-md">
					<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-orange-500 shadow-md">
						<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-3xl font-bold text-zinc-900">Exterior waterborne performance</h3>
					<p class="mb-6 text-lg leading-relaxed text-zinc-700">
						High‑performance systems that balance environmental impact with weather resistance.
					</p>
					<div class="flex flex-wrap gap-2">
						<span class="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700">
							Breathable
						</span>
						<span class="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700">
							UV resistance
						</span>
						<span class="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700">
							Long-lasting
						</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Accordion -->
	<section class="bg-zinc-50 px-6 py-24">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-6 text-center text-6xl font-bold text-zinc-900">Common Questions</h2>
			<p class="mb-16 text-center text-2xl text-zinc-600">Everything you need to know about eco-friendly painting</p>

			<div class="space-y-4">
				{#each faqs as faq, i}
					<button
						class="w-full rounded-2xl border-2 bg-white p-8 text-left shadow-md transition-all {activeFaq === i
							? 'border-orange-500'
							: 'border-zinc-200'}"
						onclick={() => (activeFaq = activeFaq === i ? null : i)}
					>
						<div class="flex items-center justify-between gap-6">
							<h3 class="pr-8 text-2xl font-bold text-zinc-900">{faq.q}</h3>
							<span
								class="flex-shrink-0 text-4xl font-bold text-orange-500 transition-transform {activeFaq === i
									? 'rotate-45'
									: ''}"
							>
								+
							</span>
						</div>
						{#if activeFaq === i}
							<p class="mt-6 text-lg leading-relaxed text-zinc-700">{faq.a}</p>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Final CTA -->
	<section class="bg-gradient-to-br from-orange-500 to-orange-600 px-6 py-32">
		<div class="mx-auto max-w-5xl text-center">
			<h2 class="mb-8 text-6xl font-bold text-white">Want an eco option that still looks flawless?</h2>
			<p class="mx-auto mb-12 max-w-3xl text-2xl leading-relaxed text-white/90">
				Tell us your space (interior/exterior), your priorities (low odor, allergy comfort, mildew resistance), and your
				timeline. We'll recommend the best product system for your home.
			</p>
			<div class="mb-12 flex flex-col justify-center gap-6 sm:flex-row">
				<button
					class="rounded-lg bg-white px-16 py-6 text-2xl font-bold text-orange-600 shadow-lg transition-all hover:bg-zinc-50"
				>
					Get My Eco Quote
				</button>
				<button
					class="rounded-lg border-2 border-white bg-white/10 px-16 py-6 text-2xl font-semibold text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/20"
				>
					Call 780‑722‑5577
				</button>
			</div>
			<p class="text-xl text-white/80">Edmonton • St. Albert • Sherwood Park • Fort Saskatchewan</p>
		</div>
	</section>

	<!-- Internal Links Navigation -->
	<section class="border-t-2 border-zinc-200 bg-white px-6 py-16">
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-6 text-center md:grid-cols-4">
				<a
					href="#interior-painting"
					class="group rounded-xl border border-zinc-200 bg-zinc-50 p-8 transition-all hover:border-orange-500 hover:bg-orange-50"
				>
					<h3 class="mb-2 text-xl font-bold text-zinc-900 group-hover:text-orange-600">Interior Painting</h3>
					<p class="text-zinc-600">Explore our interior services</p>
				</a>
				<a
					href="#exterior-painting"
					class="group rounded-xl border border-zinc-200 bg-zinc-50 p-8 transition-all hover:border-orange-500 hover:bg-orange-50"
				>
					<h3 class="mb-2 text-xl font-bold text-zinc-900 group-hover:text-orange-600">Exterior Painting</h3>
					<p class="text-zinc-600">See exterior options</p>
				</a>
				<a
					href="#quote"
					class="group rounded-xl border border-zinc-200 bg-zinc-50 p-8 transition-all hover:border-orange-500 hover:bg-orange-50"
				>
					<h3 class="mb-2 text-xl font-bold text-zinc-900 group-hover:text-orange-600">Request a Quote</h3>
					<p class="text-zinc-600">Get your free estimate</p>
				</a>
				<a
					href="#why-choose-us"
					class="group rounded-xl border border-zinc-200 bg-zinc-50 p-8 transition-all hover:border-orange-500 hover:bg-orange-50"
				>
					<h3 class="mb-2 text-xl font-bold text-zinc-900 group-hover:text-orange-600">Why Choose Us</h3>
					<p class="text-zinc-600">Learn about NCS Painting</p>
				</a>
			</div>
		</div>
	</section>
</div>
