<script lang="ts">
	const tabs = [
		{
			key: 'walls',
			label: 'Walls',
			points: ['Smooth, even coverage', 'Clean cut lines', 'Consistent colour and sheen']
		},
		{
			key: 'ceilings',
			label: 'Ceilings',
			points: ['Brightens rooms', 'Reduces stains/patchiness', 'Sharper overall finish']
		},
		{
			key: 'trim',
			label: 'Trim & Doors',
			points: ['Crisp edges', 'Durable finish', 'High-impact visual upgrade']
		},
		{
			key: 'cabinets',
			label: 'Cabinets',
			points: ['Modern refresh', 'Cost-effective update', 'Clean, consistent finish']
		}
	];

	let active = $state<(typeof tabs)[number]['key']>('walls');
</script>

<section class="bg-stone-950 text-stone-100">
	<div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:items-start">
			<div class="lg:col-span-5">
				<p class="text-sm font-medium text-indigo-200/90">Interior Painting in Edmonton</p>
				<h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">See the difference a clean finish makes</h2>
				<p class="mt-4 text-sm text-stone-300">
					Detail-focused residential interior painting with careful prep, tidy work areas, and a final walkthrough.
				</p>

				<div class="mt-6 flex gap-3">
					<a
						href="#quote"
						class="rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400"
					>
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

			<!-- Before/After placeholder -->
			<div class="lg:col-span-7">
				<div class="overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/30">
					<div class="aspect-[16/9] bg-stone-800/50"></div>
					<div class="grid grid-cols-2 border-t border-stone-800 text-xs text-stone-300">
						<div class="px-4 py-3">Before</div>
						<div class="px-4 py-3 text-right">After</div>
					</div>
				</div>

				<!-- Tabs -->
				<div class="mt-6">
					<div class="flex gap-2 overflow-x-auto pb-2">
						{#each tabs as t}
							<button
								type="button"
								class={[
									'rounded-full border px-4 py-2 text-sm font-semibold whitespace-nowrap transition',
									active === t.key
										? 'border-indigo-400 bg-indigo-500/15 text-indigo-100'
										: 'border-stone-700 bg-stone-900/10 text-stone-200 hover:border-stone-500'
								].join(' ')}
								onclick={() => (active = t.key)}
							>
								{t.label}
							</button>
						{/each}
					</div>

					{#each tabs as t}
						{#if t.key === active}
							<div class="mt-4 rounded-2xl border border-stone-800 bg-stone-900/20 p-6">
								<h3 class="text-sm font-semibold text-stone-100">{t.label}</h3>
								<ul class="mt-4 grid gap-3 text-sm text-stone-300 sm:grid-cols-3">
									{#each t.points as p}
										<li class="flex gap-3">
											<span class="mt-1 h-2 w-2 rounded-full bg-amber-400"></span>
											<span>{p}</span>
										</li>
									{/each}
								</ul>
								<p class="mt-4 text-xs text-stone-400">
									Serving Edmonton + nearby areas (St. Albert, Sherwood Park, Fort Saskatchewan).
								</p>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>

		<!-- “What’s included” strip -->
		<div class="mt-12 rounded-3xl border border-stone-800 bg-stone-900/20 p-6 sm:p-8">
			<h3 class="text-lg font-semibold">What’s included</h3>
			<div class="mt-5 grid gap-3 text-sm text-stone-300 sm:grid-cols-2 lg:grid-cols-3">
				<div class="rounded-2xl border border-stone-800 bg-stone-950/20 p-4">Surface prep + protection</div>
				<div class="rounded-2xl border border-stone-800 bg-stone-950/20 p-4">Minor patching + sanding</div>
				<div class="rounded-2xl border border-stone-800 bg-stone-950/20 p-4">Prime where required</div>
				<div class="rounded-2xl border border-stone-800 bg-stone-950/20 p-4">Premium application</div>
				<div class="rounded-2xl border border-stone-800 bg-stone-950/20 p-4">Daily tidy-up + cleanup</div>
				<div class="rounded-2xl border border-stone-800 bg-stone-950/20 p-4">Final walkthrough</div>
			</div>
		</div>
	</div>
</section>
