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

<section class="w-full bg-white py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<div class="mb-16 max-w-3xl">
			<span class="text-sm font-bold tracking-widest uppercase opacity-60">Interior Services</span>
			<h2 class="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">Interior Home Painting</h2>
			<p class="mt-4 text-lg leading-relaxed text-stone-600">
				NCS Painting provides premium interior house painting to Edmonton, St. Albert, and Sherwood Park with a focus on
				dust-free prep and flawless finishes.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<div
				class="group relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl bg-stone-100 lg:aspect-auto lg:h-[400px]"
			>
				<img
					src="/image-34.png"
					alt="Interior Painting"
					class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
				<div class="absolute inset-0 bg-linear-to-t from-stone-900/80 via-transparent to-transparent"></div>
				<div class="relative p-8">
					<h3 class="text-2xl font-bold text-white">Wall & Feature Painting</h3>
					<p class="mt-2 text-sm text-stone-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
						Expert accent walls and professional room painting.
					</p>
				</div>
			</div>

			<div
				class="relative flex flex-col justify-center rounded-3xl border-2 border-dashed border-stone-200 p-8 lg:mt-12"
			>
				<div
					class="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-stone-900 font-bold text-white italic"
				>
					02
				</div>
				<h3 class="text-2xl font-bold">Ceiling & Trim</h3>
				<p class="mt-4 leading-relaxed text-stone-600 italic">
					Precision work on crown molding, baseboards, and ceilings.
				</p>
			</div>
		</div>
	</div>
</section>
