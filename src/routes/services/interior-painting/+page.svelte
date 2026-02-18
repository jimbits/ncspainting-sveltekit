<script>
	import { onMount } from 'svelte';

	let activeFaq = $state(null);

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
</script>

<div class="bg-white">
	<!-- Hero Section -->
	<section class="relative flex min-h-screen items-center justify-center bg-zinc-900 px-6 py-32">
		<div class="absolute inset-0 opacity-30">
			<img src="/hero-24.jpg" alt="Eco-friendly painting" class="h-full w-full object-cover" />
		</div>
		<div class="relative z-10 mx-auto max-w-5xl text-center">
			<div class="mb-12 inline-block rounded-full bg-teal-500 px-8 py-3 text-lg font-bold text-white">
				Eco-Friendly Painting
			</div>
			<h1 class="mb-10 text-7xl leading-tight font-bold text-white md:text-8xl">
				Healthier paint choices—
				<br />
				without sacrificing durability
			</h1>
			<p class="mx-auto mb-16 max-w-4xl text-2xl leading-relaxed text-zinc-300">
				Choose <strong>low/zero‑VOC</strong>
				,
				<strong>low‑odor</strong>
				,
				<strong>allergy‑friendly</strong>
				, and
				<strong>mold‑resistant</strong>
				options for both interior and exterior painting. Modern waterborne coatings with clean prep and a room‑by‑room plan.
			</p>
			<div class="flex flex-col justify-center gap-6 sm:flex-row">
				<button
					class="rounded-lg bg-lime-500 px-16 py-5 text-xl font-bold text-zinc-900 transition-colors hover:bg-lime-400"
				>
					Request a Free Quote
				</button>
				<button
					class="rounded-lg border-2 border-white/30 bg-white/10 px-16 py-5 text-xl font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
				>
					Call 780‑722‑5577
				</button>
			</div>
		</div>
	</section>

	<!-- Process Steps - Minimalist -->
	<section class="bg-white px-6 py-32">
		<div class="mx-auto max-w-6xl">
			<div class="mb-20 text-center">
				<h2 class="mb-6 text-6xl font-bold text-zinc-900">How we keep it eco + effective</h2>
				<p class="mx-auto max-w-3xl text-2xl text-zinc-600">
					Our proven process ensures environmental responsibility without compromising quality
				</p>
			</div>

			<div class="space-y-1">
				<div class="grid gap-8 lg:grid-cols-5">
					<div class="flex items-center justify-center lg:col-span-1">
						<div
							class="flex h-20 w-20 items-center justify-center rounded-full bg-teal-500 text-3xl font-bold text-white"
						>
							1
						</div>
					</div>
					<div class="flex items-center lg:col-span-4">
						<div>
							<h3 class="mb-3 text-3xl font-bold text-zinc-900">Low/Zero‑VOC options</h3>
							<p class="text-xl text-zinc-600">Choose modern waterborne coatings with minimal emissions</p>
						</div>
					</div>
				</div>

				<div class="my-8 h-px bg-zinc-200"></div>

				<div class="grid gap-8 lg:grid-cols-5">
					<div class="flex items-center justify-center lg:col-span-1">
						<div
							class="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-3xl font-bold text-white"
						>
							2
						</div>
					</div>
					<div class="flex items-center lg:col-span-4">
						<div>
							<h3 class="mb-3 text-3xl font-bold text-zinc-900">Dust control</h3>
							<p class="text-xl text-zinc-600">Contain and manage prep dust for cleaner air</p>
						</div>
					</div>
				</div>

				<div class="my-8 h-px bg-zinc-200"></div>

				<div class="grid gap-8 lg:grid-cols-5">
					<div class="flex items-center justify-center lg:col-span-1">
						<div
							class="flex h-20 w-20 items-center justify-center rounded-full bg-lime-500 text-3xl font-bold text-zinc-900"
						>
							3
						</div>
					</div>
					<div class="flex items-center lg:col-span-4">
						<div>
							<h3 class="mb-3 text-3xl font-bold text-zinc-900">Clean prep</h3>
							<p class="text-xl text-zinc-600">Thorough surface preparation without harsh chemicals</p>
						</div>
					</div>
				</div>

				<div class="my-8 h-px bg-zinc-200"></div>

				<div class="grid gap-8 lg:grid-cols-5">
					<div class="flex items-center justify-center lg:col-span-1">
						<div
							class="flex h-20 w-20 items-center justify-center rounded-full bg-teal-600 text-3xl font-bold text-white"
						>
							4
						</div>
					</div>
					<div class="flex items-center lg:col-span-4">
						<div>
							<h3 class="mb-3 text-3xl font-bold text-zinc-900">Right primer</h3>
							<p class="text-xl text-zinc-600">Seal and prepare with eco-friendly primers</p>
						</div>
					</div>
				</div>

				<div class="my-8 h-px bg-zinc-200"></div>

				<div class="grid gap-8 lg:grid-cols-5">
					<div class="flex items-center justify-center lg:col-span-1">
						<div
							class="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600 text-3xl font-bold text-white"
						>
							5
						</div>
					</div>
					<div class="flex items-center lg:col-span-4">
						<div>
							<h3 class="mb-3 text-3xl font-bold text-zinc-900">Durable topcoat</h3>
							<p class="text-xl text-zinc-600">Long-lasting protection that's safe for your family</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Indoor Air Quality - Dark Section -->
	<section class="bg-zinc-900 px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<div class="grid items-center gap-16 lg:grid-cols-2">
				<div>
					<div class="mb-8 inline-block rounded-full bg-lime-500 px-6 py-2 font-bold text-zinc-900">Most searched</div>
					<h2 class="mb-8 text-6xl font-bold text-white">Indoor air + comfort</h2>
					<h3 class="mb-8 text-3xl font-semibold text-teal-400">Low/Zero‑VOC paint (and what "VOC" actually means)</h3>
					<p class="mb-10 text-xl leading-relaxed text-zinc-300">
						Low‑VOC and zero‑VOC interior paint reduces odor and helps support indoor air quality—especially in
						bedrooms, nurseries, and living spaces.
					</p>
					<ul class="space-y-5">
						<li class="flex items-start gap-4 text-lg text-zinc-300">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-lime-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
							</svg>
							<span>Choose low/zero‑VOC base paints for occupied homes</span>
						</li>
						<li class="flex items-start gap-4 text-lg text-zinc-300">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-lime-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
							</svg>
							<span>Explain "VOC" simply during the quote (what it is + why it matters)</span>
						</li>
						<li class="flex items-start gap-4 text-lg text-zinc-300">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-lime-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
							</svg>
							<span>Plan ventilation + curing so rooms can be used sooner</span>
						</li>
					</ul>
				</div>
				<div>
					<img src="/image-27.png" alt="Low VOC painting" class="h-[600px] w-full rounded-lg object-cover shadow-2xl" />
				</div>
			</div>
		</div>
	</section>

	<!-- Smell & Off-gassing - Light Section -->
	<section class="bg-white px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<div class="grid items-center gap-16 lg:grid-cols-2">
				<div class="order-2 lg:order-1">
					<img src="/image-26.png" alt="Low odor painting" class="h-[600px] w-full rounded-lg object-cover shadow-lg" />
				</div>
				<div class="order-1 lg:order-2">
					<div class="mb-8 inline-block rounded-full bg-teal-100 px-6 py-2 font-bold text-teal-800">Top question</div>
					<h2 class="mb-8 text-6xl font-bold text-zinc-900">Smell + off‑gassing</h2>
					<h3 class="mb-8 text-3xl font-semibold text-teal-600">"How long does paint smell last?"</h3>
					<p class="mb-10 text-xl leading-relaxed text-zinc-700">
						This is one of the most common homeowner questions. We pair low‑odor products with a ventilation and curing
						plan to minimize lingering smell.
					</p>
					<ul class="space-y-5">
						<li class="flex items-start gap-4 text-lg text-zinc-700">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-teal-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
							</svg>
							<span>Low‑odor options for sensitive households</span>
						</li>
						<li class="flex items-start gap-4 text-lg text-zinc-700">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-teal-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
							</svg>
							<span>Airflow plan: fans + windows + staged rooms</span>
						</li>
						<li class="flex items-start gap-4 text-lg text-zinc-700">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-teal-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
							</svg>
							<span>Clear expectations on "dry to touch" vs "fully cured"</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Mold & Mildew - Dark Teal Section -->
	<section class="bg-teal-900 px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<div class="grid items-center gap-16 lg:grid-cols-2">
				<div>
					<div class="mb-8 inline-block rounded-full bg-emerald-400 px-6 py-2 font-bold text-zinc-900">
						Interior focus
					</div>
					<h2 class="mb-8 text-6xl font-bold text-white">Allergies + moisture</h2>
					<h3 class="mb-8 text-3xl font-semibold text-emerald-300">
						Mold & mildew resistance (bathrooms, basements, laundry)
					</h3>
					<p class="mb-10 text-xl leading-relaxed text-zinc-200">
						Moisture‑prone rooms benefit from coatings formulated to resist mildew on the paint film—paired with proper
						prep and the right primer.
					</p>
					<ul class="space-y-5">
						<li class="flex items-start gap-4 text-lg text-zinc-200">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-emerald-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
							</svg>
							<span>Wash + degloss + correct primer where needed</span>
						</li>
						<li class="flex items-start gap-4 text-lg text-zinc-200">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-emerald-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
							</svg>
							<span>Use bathroom/kitchen‑rated coatings in wet zones</span>
						</li>
						<li class="flex items-start gap-4 text-lg text-zinc-200">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-emerald-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
							</svg>
							<span>Seal stains and prevent bleed‑through</span>
						</li>
					</ul>
				</div>
				<div>
					<img
						src="/image-36.png"
						alt="Mold resistant painting"
						class="h-[600px] w-full rounded-lg object-cover shadow-2xl"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Exterior Durability - Light Section -->
	<section class="bg-emerald-50 px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<div class="grid items-center gap-16 lg:grid-cols-2">
				<div class="order-2 lg:order-1">
					<img
						src="/image-44.png"
						alt="Exterior eco painting"
						class="h-[600px] w-full rounded-lg object-cover shadow-lg"
					/>
				</div>
				<div class="order-1 lg:order-2">
					<div class="mb-8 inline-block rounded-full bg-teal-600 px-6 py-2 font-bold text-white">Exterior focus</div>
					<h2 class="mb-8 text-6xl font-bold text-zinc-900">Exterior durability</h2>
					<h3 class="mb-8 text-3xl font-semibold text-teal-700">
						Eco-friendly choices that still handle Alberta weather
					</h3>
					<p class="mb-10 text-xl leading-relaxed text-zinc-700">
						For exteriors, "eco" still needs durability. We prioritize high‑performance waterborne acrylic systems and
						correct prep to improve longevity.
					</p>
					<ul class="space-y-5">
						<li class="flex items-start gap-4 text-lg text-zinc-700">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-teal-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
							</svg>
							<span>Surface prep: cleaning, scraping, sanding, caulking</span>
						</li>
						<li class="flex items-start gap-4 text-lg text-zinc-700">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-teal-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
							</svg>
							<span>Right primer for adhesion + uniform finish</span>
						</li>
						<li class="flex items-start gap-4 text-lg text-zinc-700">
							<svg
								class="mt-1 h-6 w-6 flex-shrink-0 text-teal-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
							</svg>
							<span>Durable topcoats selected for sun + temperature swings</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Product Solutions - Clean Minimalist Grid -->
	<section class="bg-white px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<div class="mb-20 text-center">
				<h2 class="mb-6 text-6xl font-bold text-zinc-900">Our eco-friendly solutions</h2>
				<p class="text-2xl text-zinc-600">Three approaches to healthier, more sustainable painting</p>
			</div>

			<div class="grid gap-12 md:grid-cols-3">
				<div class="text-center">
					<div class="mb-8">
						<img
							src="/image-25.png"
							alt="Low VOC interiors"
							class="mb-6 h-80 w-full rounded-lg object-cover shadow-md"
						/>
						<h3 class="mb-4 text-3xl font-bold text-zinc-900">Low/Zero‑VOC interiors</h3>
						<p class="mb-6 text-lg text-zinc-600">
							Great for bedrooms, nurseries, hallways, and occupied homes where odor matters.
						</p>
					</div>
					<div class="flex flex-wrap justify-center gap-3">
						<span class="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-800">Low odor</span>
						<span class="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-800">Water cleanup</span>
						<span class="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-800">Family-friendly</span>
					</div>
				</div>

				<div class="text-center">
					<div class="mb-8">
						<img
							src="/image-35.png"
							alt="Moisture resistance"
							class="mb-6 h-80 w-full rounded-lg object-cover shadow-md"
						/>
						<h3 class="mb-4 text-3xl font-bold text-zinc-900">Moisture + mildew resistance</h3>
						<p class="mb-6 text-lg text-zinc-600">
							Ideal for bathrooms, basements, laundry rooms, and kitchens with humidity swings.
						</p>
					</div>
					<div class="flex flex-wrap justify-center gap-3">
						<span class="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
							Wet-area rated
						</span>
						<span class="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
							Durable film
						</span>
						<span class="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">Scrubbable</span>
					</div>
				</div>

				<div class="text-center">
					<div class="mb-8">
						<img
							src="/hero-23.jpg"
							alt="Exterior waterborne"
							class="mb-6 h-80 w-full rounded-lg object-cover shadow-md"
						/>
						<h3 class="mb-4 text-3xl font-bold text-zinc-900">Exterior waterborne performance</h3>
						<p class="mb-6 text-lg text-zinc-600">
							High‑performance systems that balance environmental impact with weather resistance.
						</p>
					</div>
					<div class="flex flex-wrap justify-center gap-3">
						<span class="rounded-full bg-lime-100 px-4 py-2 text-sm font-semibold text-lime-800">Breathable</span>
						<span class="rounded-full bg-lime-100 px-4 py-2 text-sm font-semibold text-lime-800">UV resistance</span>
						<span class="rounded-full bg-lime-100 px-4 py-2 text-sm font-semibold text-lime-800">Long-lasting</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section - Dark -->
	<section class="bg-zinc-900 px-6 py-32">
		<div class="mx-auto max-w-4xl">
			<div class="mb-16 text-center">
				<h2 class="mb-6 text-6xl font-bold text-white">Common Questions</h2>
				<p class="text-2xl text-zinc-400">Everything you need to know about eco-friendly painting</p>
			</div>

			<div class="space-y-6">
				{#each faqs as faq, i}
					<button
						class="w-full rounded-lg border-2 bg-zinc-800 p-8 text-left transition-colors {activeFaq === i
							? 'border-teal-500'
							: 'border-zinc-700'}"
						onclick={() => (activeFaq = activeFaq === i ? null : i)}
					>
						<div class="flex items-start justify-between gap-6">
							<h3 class="pr-8 text-2xl font-bold text-white">{faq.q}</h3>
							<span
								class="flex-shrink-0 text-4xl font-bold text-lime-500 transition-transform {activeFaq === i
									? 'rotate-45'
									: ''}"
							>
								+
							</span>
						</div>
						{#if activeFaq === i}
							<p class="mt-6 text-lg leading-relaxed text-zinc-300">{faq.a}</p>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	</section>

	<!-- Final CTA - Lime Gradient -->
	<section class="bg-gradient-to-br from-lime-500 to-emerald-600 px-6 py-32">
		<div class="mx-auto max-w-5xl text-center">
			<h2 class="mb-8 text-6xl font-bold text-white">Want an eco option that still looks flawless?</h2>
			<p class="mx-auto mb-12 max-w-3xl text-2xl leading-relaxed text-white/90">
				Tell us your space (interior/exterior), your priorities (low odor, allergy comfort, mildew resistance), and your
				timeline. We'll recommend the best product system for your home.
			</p>
			<div class="mb-12 flex flex-col justify-center gap-6 sm:flex-row">
				<button
					class="rounded-lg bg-white px-16 py-6 text-2xl font-bold text-emerald-900 transition-colors hover:bg-zinc-100"
				>
					Get My Eco Quote
				</button>
				<button
					class="rounded-lg border-2 border-white bg-white/10 px-16 py-6 text-2xl font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
				>
					Call 780‑722‑5577
				</button>
			</div>
			<p class="text-xl text-white/90">Edmonton • St. Albert • Sherwood Park • Fort Saskatchewan</p>
		</div>
	</section>

	<!-- Simple Navigation Links -->
	<section class="bg-white px-6 py-20">
		<div class="mx-auto max-w-7xl">
			<div class="grid gap-8 md:grid-cols-4">
				<a href="#interior-painting" class="group rounded-lg p-8 text-center transition-colors hover:bg-teal-50">
					<h3 class="mb-2 text-2xl font-bold text-zinc-900 group-hover:text-teal-600">Interior Painting</h3>
					<p class="text-zinc-600">Explore services →</p>
				</a>
				<a href="#exterior-painting" class="group rounded-lg p-8 text-center transition-colors hover:bg-emerald-50">
					<h3 class="mb-2 text-2xl font-bold text-zinc-900 group-hover:text-emerald-600">Exterior Painting</h3>
					<p class="text-zinc-600">See options →</p>
				</a>
				<a href="#quote" class="group rounded-lg p-8 text-center transition-colors hover:bg-lime-50">
					<h3 class="mb-2 text-2xl font-bold text-zinc-900 group-hover:text-lime-600">Request Quote</h3>
					<p class="text-zinc-600">Get estimate →</p>
				</a>
				<a href="#why-choose-us" class="group rounded-lg p-8 text-center transition-colors hover:bg-teal-50">
					<h3 class="mb-2 text-2xl font-bold text-zinc-900 group-hover:text-teal-600">Why Choose Us</h3>
					<p class="text-zinc-600">Learn more →</p>
				</a>
			</div>
		</div>
	</section>
</div>
