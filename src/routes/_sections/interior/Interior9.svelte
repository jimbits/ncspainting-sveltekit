<script lang="ts">
	const features = [
		{
			title: 'Walls & ceilings',
			desc: 'Brighter rooms with smooth coverage and consistent colour.',
			tag: 'Interior painting Edmonton'
		},
		{
			title: 'Trim & doors',
			desc: 'Crisp edges and durable finishes for high-touch areas.',
			tag: 'Trim painting'
		},
		{
			title: 'Cabinet painting',
			desc: 'Modern kitchen refresh without replacing cabinets.',
			tag: 'Cabinet painting'
		}
	];

	const micro = ['Feature wall', 'Hallways/stairwells', 'Low-VOC options', 'Drywall patching'];

	const process = ['Prep & protect', 'Repair & prime', 'Paint & detail', 'Clean up & walkthrough'];
</script>

<section class="bg-stone-950 text-stone-100">
	<div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
			<div class="max-w-2xl">
				<p class="text-sm font-medium text-indigo-200/90">Residential Interior Painting</p>
				<h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Interior Painting in Edmonton</h2>
				<p class="mt-4 text-sm text-stone-300">
					Careful prep, tidy work areas, and clean lines for walls, ceilings, trim, doors, and cabinets.
				</p>
			</div>

			<div class="flex flex-col gap-3 sm:flex-row">
				<a href="#quote" class="rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold hover:bg-indigo-400">
					Request a Free Quote
				</a>
				<a
					href="tel:7807225577"
					class="rounded-xl border border-stone-700 px-5 py-3 text-sm font-semibold hover:border-stone-500"
				>
					Call (780) 722-5577
				</a>
			</div>
		</div>

		<!-- Editorial cards -->
		<div class="mt-10 grid gap-4 lg:grid-cols-3">
			{#each features as f}
				<article class="overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/20">
					<div class="aspect-[16/10] bg-stone-800/50"></div>
					<div class="p-6">
						<p class="text-xs font-semibold text-amber-300/90">{f.tag}</p>
						<h3 class="mt-2 text-lg font-semibold">{f.title}</h3>
						<p class="mt-2 text-sm text-stone-300">{f.desc}</p>
					</div>
				</article>
			{/each}
		</div>

		<!-- Micro grid -->
		<div class="mt-10 grid gap-4 lg:grid-cols-12">
			<div class="lg:col-span-8">
				<div class="rounded-3xl border border-stone-800 bg-stone-900/20 p-6 sm:p-8">
					<h3 class="text-xl font-semibold">What’s included</h3>
					<ul class="mt-5 grid gap-3 text-sm text-stone-300 sm:grid-cols-2">
						<li class="flex gap-3">
							<span class="mt-1 h-2 w-2 rounded-full bg-amber-400"></span>
							Surface prep + protection
						</li>
						<li class="flex gap-3">
							<span class="mt-1 h-2 w-2 rounded-full bg-amber-400"></span>
							Minor patching + sanding
						</li>
						<li class="flex gap-3">
							<span class="mt-1 h-2 w-2 rounded-full bg-amber-400"></span>
							Prime where required
						</li>
						<li class="flex gap-3">
							<span class="mt-1 h-2 w-2 rounded-full bg-amber-400"></span>
							Premium application
						</li>
						<li class="flex gap-3">
							<span class="mt-1 h-2 w-2 rounded-full bg-amber-400"></span>
							Daily tidy-up + cleanup
						</li>
						<li class="flex gap-3">
							<span class="mt-1 h-2 w-2 rounded-full bg-amber-400"></span>
							Final walkthrough
						</li>
					</ul>
				</div>
			</div>

			<div class="lg:col-span-4">
				<div class="rounded-3xl border border-stone-800 bg-stone-900/10 p-6 sm:p-8">
					<h3 class="text-xl font-semibold">Also popular</h3>
					<div class="mt-5 grid gap-2">
						{#each micro as m}
							<div class="rounded-2xl border border-stone-800 bg-stone-950/20 px-4 py-3 text-sm text-stone-200">
								{m}
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Process timeline -->
		<div class="mt-10 rounded-3xl border border-stone-800 bg-stone-900/20 p-6 sm:p-8">
			<h3 class="text-xl font-semibold">Our process</h3>
			<div class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
				{#each process as p, i}
					<div class="rounded-2xl border border-stone-800 bg-stone-950/20 p-5">
						<p class="text-xs font-semibold text-indigo-200">Step {i + 1}</p>
						<p class="mt-2 text-sm font-semibold">{p}</p>
					</div>
				{/each}
			</div>
			<p class="mt-6 text-xs text-stone-400">Service area: Edmonton, St. Albert, Sherwood Park, Fort Saskatchewan.</p>
		</div>
	</div>
</section>
