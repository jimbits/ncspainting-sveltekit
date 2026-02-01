<script lang="ts">
	const rooms = ['1 room', '2–3 rooms', 'Whole main floor', 'Full interior repaint'] as const;
	const surfaces = ['Walls', 'Ceilings', 'Trim/Doors', 'Cabinets'] as const;
	const addons = ['Drywall patching', 'Low-VOC paint', 'Feature wall', 'Trim refresh'] as const;

	let selectedRoom = $state<(typeof rooms)[number]>('1 room');
	let selectedSurfaces = $state<Set<(typeof surfaces)[number]>>(new Set(['Walls']));
	let selectedAddons = $state<Set<(typeof addons)[number]>>(new Set());

	function toggleSet<T>(set: Set<T>, value: T) {
		const next = new Set(set);
		if (next.has(value)) next.delete(value);
		else next.add(value);
		return next;
	}
</script>

<section class="bg-stone-950 text-stone-100">
	<div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="grid gap-10 lg:grid-cols-12 lg:items-start">
			<div class="lg:col-span-5">
				<p class="text-sm font-medium text-indigo-200/90">Interior Painting in Edmonton</p>
				<h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Get a faster, clearer quote</h2>
				<p class="mt-4 text-sm text-stone-300">
					Choose what you’re painting. We’ll follow up quickly with next steps and a free estimate.
				</p>

				<div class="mt-6 flex gap-3">
					<a
						href="#quote"
						class="rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-stone-950 hover:bg-amber-300"
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

				<div class="mt-10 rounded-3xl border border-stone-800 bg-stone-900/20 p-6">
					<h3 class="text-sm font-semibold">Serving</h3>
					<p class="mt-2 text-sm text-stone-300">
						Edmonton + nearby areas (St. Albert, Sherwood Park, Fort Saskatchewan).
					</p>
				</div>
			</div>

			<div class="lg:col-span-7">
				<div class="rounded-3xl border border-stone-800 bg-stone-900/20 p-6 sm:p-8">
					<h3 class="text-xl font-semibold">Quick project picker</h3>

					<!-- Rooms -->
					<div class="mt-6">
						<p class="text-sm font-semibold text-stone-100">Scope</p>
						<div class="mt-3 flex flex-wrap gap-2">
							{#each rooms as r}
								<button
									type="button"
									class={[
										'rounded-full border px-4 py-2 text-sm font-semibold transition',
										selectedRoom === r
											? 'border-indigo-400 bg-indigo-500/15 text-indigo-100'
											: 'border-stone-700 hover:border-stone-500'
									].join(' ')}
									onclick={() => (selectedRoom = r)}
								>
									{r}
								</button>
							{/each}
						</div>
					</div>

					<!-- Surfaces -->
					<div class="mt-8">
						<p class="text-sm font-semibold text-stone-100">Surfaces</p>
						<div class="mt-3 grid gap-2 sm:grid-cols-2">
							{#each surfaces as s}
								<button
									type="button"
									class={[
										'flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-semibold transition',
										selectedSurfaces.has(s)
											? 'border-amber-400 bg-amber-400/10'
											: 'border-stone-700 hover:border-stone-500'
									].join(' ')}
									onclick={() => (selectedSurfaces = toggleSet(selectedSurfaces, s))}
								>
									<span>{s}</span>
									<span class="text-stone-400">{selectedSurfaces.has(s) ? '✓' : ''}</span>
								</button>
							{/each}
						</div>
					</div>

					<!-- Add-ons -->
					<div class="mt-8">
						<p class="text-sm font-semibold text-stone-100">Add-ons</p>
						<div class="mt-3 grid gap-2 sm:grid-cols-2">
							{#each addons as a}
								<button
									type="button"
									class={[
										'flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-semibold transition',
										selectedAddons.has(a)
											? 'border-indigo-400 bg-indigo-500/10'
											: 'border-stone-700 hover:border-stone-500'
									].join(' ')}
									onclick={() => (selectedAddons = toggleSet(selectedAddons, a))}
								>
									<span>{a}</span>
									<span class="text-stone-400">{selectedAddons.has(a) ? '✓' : ''}</span>
								</button>
							{/each}
						</div>
					</div>

					<!-- Summary -->
					<div class="mt-8 rounded-2xl border border-stone-800 bg-stone-950/20 p-5">
						<p class="text-sm font-semibold">Summary</p>
						<p class="mt-2 text-sm text-stone-300">
							<span class="font-semibold text-stone-100">Scope:</span>
							{selectedRoom}
						</p>
						<p class="mt-1 text-sm text-stone-300">
							<span class="font-semibold text-stone-100">Surfaces:</span>
							{Array.from(selectedSurfaces).join(', ')}
						</p>
						<p class="mt-1 text-sm text-stone-300">
							<span class="font-semibold text-stone-100">Add-ons:</span>
							{selectedAddons.size ? Array.from(selectedAddons).join(', ') : 'None'}
						</p>

						<div class="mt-5">
							<a
								href="#quote"
								class="inline-flex w-full justify-center rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-stone-950 hover:bg-amber-300"
							>
								Send this with my quote request
							</a>
						</div>
					</div>

					<p class="mt-6 text-xs text-stone-400">
						We include prep, protection, minor patching, and a final walkthrough on most interior painting projects.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
