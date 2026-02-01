<script lang="ts">
	const benefits = [
		{ title: 'Careful prep', desc: 'Protection, masking, and surface prep for a finish that lasts.' },
		{ title: 'Clean lines', desc: 'Sharp cut-ins on walls, ceilings, trim, and doors.' },
		{ title: 'Low-mess workflow', desc: 'Tidy work zones and daily clean-up to minimize disruption.' },
		{ title: 'Durable finishes', desc: 'Right sheen and product choices for high-traffic areas.' }
	];

	const steps = [
		'Plan & confirm colours',
		'Protect & prep',
		'Repair & sand',
		'Prime where required',
		'Paint & detail',
		'Clean up & walkthrough'
	];
</script>

<section class="bg-stone-950 text-stone-100">
	<div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="grid gap-10 lg:grid-cols-12">
			<!-- Sticky media -->
			<div class="lg:sticky lg:top-8 lg:col-span-5 lg:self-start">
				<div class="overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/30">
					<div class="aspect-[4/5] bg-stone-800/50"></div>
					<div class="border-t border-stone-800 p-5">
						<p class="text-sm font-semibold">Interior Painting in Edmonton</p>
						<p class="mt-2 text-sm text-stone-300">Careful prep • Crisp trim • Clean work areas • Free quotes</p>
						<div class="mt-5 flex flex-col gap-3">
							<a
								href="#quote"
								class="rounded-xl bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-stone-950 hover:bg-amber-300"
							>
								Request a Free Quote
							</a>
							<a
								href="tel:7807225577"
								class="rounded-xl border border-stone-700 px-5 py-3 text-center text-sm font-semibold hover:border-stone-500"
							>
								Call (780) 722-5577
							</a>
						</div>
						<p class="mt-4 text-xs text-stone-400">Edmonton + St. Albert, Sherwood Park, Fort Saskatchewan</p>
					</div>
				</div>
			</div>

			<!-- Content column -->
			<div class="lg:col-span-7">
				<h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">A cleaner finish, start to end</h2>
				<p class="mt-4 text-sm text-stone-300">
					Residential interior painting with careful prep, tidy work areas, and a walkthrough you’ll feel good about. We
					paint walls, ceilings, trim, doors, and cabinets with durable products and sharp detail.
				</p>

				<div class="mt-8 grid gap-4 sm:grid-cols-2">
					{#each benefits as b}
						<div class="rounded-2xl border border-stone-800 bg-stone-900/20 p-6">
							<p class="text-sm font-semibold">{b.title}</p>
							<p class="mt-2 text-sm text-stone-300">{b.desc}</p>
						</div>
					{/each}
				</div>

				<div class="mt-10 rounded-3xl border border-stone-800 bg-stone-900/20 p-6 sm:p-8">
					<h3 class="text-xl font-semibold">Our process</h3>
					<ol class="mt-5 grid gap-3 text-sm text-stone-300 sm:grid-cols-2">
						{#each steps as s, i}
							<li class="flex gap-3">
								<span
									class="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-semibold text-indigo-100"
								>
									{i + 1}
								</span>
								<span>{s}</span>
							</li>
						{/each}
					</ol>
				</div>

				<div class="mt-10 rounded-3xl border border-stone-800 bg-stone-900/10 p-6 sm:p-8">
					<h3 class="text-xl font-semibold">Popular add-ons</h3>
					<ul class="mt-5 grid gap-3 text-sm text-stone-300 sm:grid-cols-2">
						<li class="flex gap-3">
							<span class="mt-1 h-2 w-2 rounded-full bg-amber-400"></span>
							Drywall patching & prep
						</li>
						<li class="flex gap-3">
							<span class="mt-1 h-2 w-2 rounded-full bg-amber-400"></span>
							Trim refresh packages
						</li>
						<li class="flex gap-3">
							<span class="mt-1 h-2 w-2 rounded-full bg-amber-400"></span>
							Cabinet refinishing prep
						</li>
						<li class="flex gap-3">
							<span class="mt-1 h-2 w-2 rounded-full bg-amber-400"></span>
							Low-VOC paint options
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
