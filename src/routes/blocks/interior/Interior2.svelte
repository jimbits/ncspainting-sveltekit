<script lang="ts">
	const services = [
		{
			id: '01',
			title: 'Wall & Feature Painting',
			desc: 'Expert accent walls and professional room painting.',
			size: 'md:col-span-2'
		},
		{ id: '02', title: 'Cabinet Refinishing', desc: 'Factory-like durability.', size: 'md:col-span-1' },
		{ id: '03', title: 'Popcorn Removal', desc: 'Clean, dust-free texture removal.', size: 'md:col-span-1' },
		{ id: '04', title: 'Ceiling & Trim', desc: 'Precision work on crown molding.', size: 'md:col-span-2' }
	];
</script>

<section class="bg-stone-50 py-20 lg:py-32">
	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-16 grid grid-cols-1 items-end gap-8 lg:grid-cols-2">
			<div>
				<span class="mb-4 block text-sm font-bold tracking-widest uppercase opacity-40">Services</span>
				<h2 class="text-5xl font-black tracking-tight text-stone-900 lg:text-7xl">
					We Don’t Just Paint Walls <br />
					<span class="font-serif italic">We Transform Spaces</span>
				</h2>
			</div>
			<div class="flex gap-12 border-l border-stone-200 pl-8">
				<div>
					<p class="text-4xl font-bold">98%</p>
					<p class="text-xs uppercase opacity-60">Satisfaction</p>
				</div>
				<div>
					<p class="text-4xl font-bold">500+</p>
					<p class="text-xs uppercase opacity-60">Projects</p>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
			{#each services as service}
				<div
					class="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm transition-all hover:shadow-xl {service.size}"
				>
					<div class="mb-12 flex justify-between">
						<span class="text-5xl font-black text-stone-100 transition-colors group-hover:text-stone-200">
							{service.id}
						</span>
						<div
							class="h-10 w-10 rounded-full border border-stone-100 p-2 opacity-0 transition-opacity group-hover:opacity-100"
						>
							<svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</div>
					</div>
					<h3 class="text-2xl font-bold tracking-tight">{service.title}</h3>
					<p class="mt-2 text-stone-500">{service.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
