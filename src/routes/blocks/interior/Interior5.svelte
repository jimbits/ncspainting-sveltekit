<script lang="ts">
	// Svelte 5 runes
	const services = [
		{
			title: 'Walls',
			desc: 'Smooth, even coverage with clean cut lines that make rooms look sharper and more finished.'
		},
		{ title: 'Ceilings', desc: 'Brighten the room and reduce the look of shadows, stains, or uneven patches.' },
		{
			title: 'Trim, baseboards, and doors',
			desc: 'Crisp edges and durable finishes for high-touch areas that get noticed.'
		},
		{
			title: 'Kitchens and cabinet painting',
			desc: 'A cost-effective refresh with a modern finish—without replacing cabinetry.'
		},
		{ title: 'Feature walls', desc: 'Add a focal point with bold colour or subtle contrast that matches your style.' },
		{
			title: 'Hallways & stairwells',
			desc: 'Tougher finishes where they matter most—ideal for busy households.'
		}
	];

	const includes = [
		'Detailed surface prep and protection (floors, furniture, fixtures)',
		'Minor patching and sanding (holes, small cracks, nail pops)',
		'Caulking where needed for clean trim lines',
		'Premium application for consistent coverage',
		'Daily tidy-up + final cleanup',
		'Final walkthrough and touch-ups'
	];

	const steps = [
		{ title: 'Plan & confirm colours', desc: 'We confirm sheen, colours, and timing.' },
		{ title: 'Protect & prep', desc: 'Masking, drop cloths, and prep for adhesion.' },
		{ title: 'Repair & sand', desc: 'Patch small defects and smooth surfaces.' },
		{ title: 'Prime where required', desc: 'For stains, repairs, and colour changes.' },
		{ title: 'Paint & detail', desc: 'Even coverage, straight lines, clean edges.' },
		{ title: 'Clean up & walkthrough', desc: 'Reset the room and complete touch-ups.' }
	];

	const faqs = [
		{
			q: 'How much does interior painting cost in Edmonton?',
			a: 'Pricing depends on room size, ceiling height, prep needs, and paint type. We provide a clear quote after a walkthrough or photos.'
		},
		{
			q: 'How long does a typical room take?',
			a: 'Many standard rooms can be completed in 1–2 days depending on prep, drying time, and detail work like trim and doors.'
		},
		{
			q: 'Do you repair holes and cracks before painting?',
			a: 'Yes—minor patching and sanding is typically included. Heavier drywall work is outlined in the quote.'
		},
		{
			q: 'Can you paint while we’re living in the home?',
			a: 'Yes. We plan around your schedule, protect your belongings, and keep the work area tidy to minimize disruption.'
		},
		{
			q: 'Do you offer low-VOC or low-odour paint options?',
			a: 'Yes. If you have sensitivities, we can recommend lower-odour options that suit your needs.'
		}
	];

	let open = $state<number | null>(0);
</script>

<section id="interior-painting-edmonton" class="bg-stone-950 text-stone-100">
	<div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
		<!-- Header -->
		<div class="grid gap-10 lg:grid-cols-12 lg:items-center">
			<div class="lg:col-span-6">
				<p class="text-sm font-medium tracking-wide text-indigo-200/90">Residential Interior Painting</p>
				<h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Interior Painting in Edmonton</h2>
				<p class="mt-4 text-base text-stone-300">
					Fresh paint changes how your home feels—brighter rooms, cleaner lines, and a finish that holds up. NCS
					Painting delivers detail-focused residential interior painting with careful prep, tidy work areas, and a final
					walkthrough you’ll feel good about.
				</p>

				<div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
					<a
						href="#quote"
						class="inline-flex justify-center rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400"
					>
						Request a Free Quote
					</a>
					<a
						href="tel:7807225577"
						class="inline-flex justify-center rounded-xl border border-stone-700 px-5 py-3 text-sm font-semibold text-stone-100 hover:border-stone-500"
					>
						Call (780) 722-5577
					</a>
				</div>

				<!-- Includes -->
				<div class="mt-8 rounded-2xl border border-stone-800 bg-stone-900/40 p-6">
					<h3 class="text-sm font-semibold text-stone-100">What’s included</h3>
					<ul class="mt-4 grid gap-3 text-sm text-stone-300 sm:grid-cols-2">
						{#each includes as item}
							<li class="flex gap-3">
								<span class="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-400"></span>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<!-- Media -->
			<div class="lg:col-span-6">
				<div class="relative overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/30">
					<div class="aspect-[4/3] w-full bg-stone-800/50"></div>
					<div class="absolute inset-0 grid place-items-end p-6">
						<div class="rounded-2xl bg-stone-950/70 p-4 backdrop-blur">
							<p class="text-xs text-stone-300">Tip: add real job photos later</p>
							<p class="mt-1 text-sm font-semibold text-stone-100">Crisp lines • Clean workspaces • Durable finishes</p>
						</div>
					</div>
				</div>

				<!-- Local -->
				<p class="mt-4 text-sm text-stone-400">
					Serving Edmonton and nearby areas (St. Albert, Sherwood Park, Fort Saskatchewan).
				</p>
			</div>
		</div>

		<!-- Service cards -->
		<div class="mt-14">
			<h3 class="text-xl font-semibold">What we paint</h3>
			<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each services as s}
					<div class="rounded-2xl border border-stone-800 bg-stone-900/30 p-6">
						<p class="text-sm font-semibold text-stone-100">{s.title}</p>
						<p class="mt-2 text-sm text-stone-300">{s.desc}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Process -->
		<div class="mt-14 rounded-3xl border border-stone-800 bg-stone-900/20 p-6 sm:p-8">
			<h3 class="text-xl font-semibold">Our interior painting process</h3>
			<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each steps as step, i}
					<div class="rounded-2xl border border-stone-800 bg-stone-950/30 p-5">
						<p class="text-xs font-semibold text-indigo-200">Step {i + 1}</p>
						<p class="mt-2 text-sm font-semibold text-stone-100">{step.title}</p>
						<p class="mt-2 text-sm text-stone-300">{step.desc}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- FAQ + CTA -->
		<div class="mt-14 grid gap-8 lg:grid-cols-12">
			<div class="lg:col-span-7">
				<h3 class="text-xl font-semibold">FAQs</h3>
				<div class="mt-4 divide-y divide-stone-800 rounded-2xl border border-stone-800 bg-stone-900/20">
					{#each faqs as item, idx}
						<button
							type="button"
							class="w-full px-5 py-4 text-left hover:bg-stone-900/40"
							onclick={() => (open = open === idx ? null : idx)}
						>
							<div class="flex items-center justify-between gap-4">
								<span class="text-sm font-semibold text-stone-100">{item.q}</span>
								<span class="text-stone-400">{open === idx ? '–' : '+'}</span>
							</div>
							{#if open === idx}
								<p class="mt-3 text-sm text-stone-300">{item.a}</p>
							{/if}
						</button>
					{/each}
				</div>
			</div>

			<div class="lg:col-span-5">
				<div class="rounded-3xl border border-stone-800 bg-gradient-to-b from-stone-900/40 to-stone-950/10 p-8">
					<h3 class="text-xl font-semibold">Get a free interior painting quote</h3>
					<p class="mt-3 text-sm text-stone-300">
						Tell us what you’re painting (rooms, walls, trim, cabinets) and your preferred timing. We’ll respond quickly
						with next steps.
					</p>
					<div class="mt-6 flex flex-col gap-3">
						<a
							href="#quote"
							class="inline-flex justify-center rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-stone-950 hover:bg-amber-300"
						>
							Request a Free Quote
						</a>
						<a
							href="tel:7807225577"
							class="inline-flex justify-center rounded-xl border border-stone-700 px-5 py-3 text-sm font-semibold text-stone-100 hover:border-stone-500"
						>
							Call (780) 722-5577
						</a>
					</div>
					<p class="mt-6 text-xs text-stone-400">
						Service area: Edmonton, St. Albert, Sherwood Park, Fort Saskatchewan.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
