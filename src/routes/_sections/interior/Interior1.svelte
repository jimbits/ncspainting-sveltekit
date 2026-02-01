<script>
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

<section class="relative overflow-hidden bg-white py-24">
	<div class="mx-auto max-w-7xl px-4">
		<div class="grid grid-cols-1 gap-20 lg:grid-cols-12">
			<div class="relative min-h-[500px] lg:col-span-6">
				<div class="absolute top-0 left-0 w-2/3 rotate-2 overflow-hidden rounded-2xl shadow-2xl">
					<img src="/image-29.png" alt="Wallpaper work" class="aspect-square object-cover" />
				</div>
				<div
					class="absolute right-0 bottom-0 w-3/5 -rotate-2 overflow-hidden rounded-2xl border-8 border-white shadow-2xl"
				>
					<img src="/image-45.png" alt="Finished room" class="aspect-[4/5] object-cover" />
				</div>
				<div
					class="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg"
				>
					<div class="h-3 w-3 rounded-full bg-blue-600"></div>
				</div>
			</div>

			<div class="flex flex-col justify-center lg:col-span-6">
				<h2 class="text-4xl font-extrabold text-stone-900 sm:text-6xl">
					Interior <span class="bg-gradient-to-r from-stone-900 to-stone-400 bg-clip-text text-transparent">
						Excellence
					</span>
				</h2>
				<p class="mt-8 text-lg text-stone-600">
					Professional residential interior painting across Edmonton, focusing on careful prep and a durable finish.
				</p>

				<div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
					{#each ['Wall & Feature Painting', 'Ceiling & Trim', 'Wallpaper Services', 'Cabinet Painting'] as item}
						<div class="group flex cursor-default items-center gap-4">
							<div
								class="flex h-6 w-6 items-center justify-center rounded-full bg-stone-900 text-white transition-colors group-hover:bg-blue-600"
							>
								<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
									<path
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									/>
								</svg>
							</div>
							<span class="font-bold tracking-tight text-stone-800">{item}</span>
						</div>
					{/each}
				</div>

				<button
					class="mt-12 w-fit rounded-lg bg-stone-900 px-8 py-4 font-bold text-white transition-transform hover:scale-105"
				>
					Start Your Transformation
				</button>
			</div>
		</div>
	</div>
</section>
