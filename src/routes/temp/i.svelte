<script>
	// Image imports — swap these paths to match your project's asset structure

	const features = [
		{
			id: 1,
			title: 'Eco-Friendly Formulas',
			description:
				'Zero-VOC, plant-based paints that are safe for your family, pets, and the planet — without compromising on coverage or colour.',
			icon: '🌿',
			image: 'eco-10.png',
			span: 'col' // spans the image column on desktop
		},
		{
			id: 2,
			title: 'Mould & Damp Resistant',
			description:
				'Advanced anti-microbial technology keeps walls free from mould and moisture damage — ideal for kitchens, bathrooms, and humid spaces.',
			icon: '🛡️',
			image: 'eco-3.png',
			span: 'row'
		},
		{
			id: 3,
			title: 'Weather-Proof Exteriors',
			description:
				'Our exterior range forms a breathable waterproof membrane that protects wood, masonry, and render through every season.',
			icon: '☔',
			image: 'eco-4.png',
			span: 'row'
		},
		{
			id: 4,
			title: 'Expert Colour Consultation',
			description:
				'Book a free session with our colour specialists to find the perfect palette for your home — in-person or virtual.',
			icon: '🎨',
			image: 'image-48.png',
			span: 'col'
		},
		{
			id: 5,
			title: 'Endless Colour Range',
			description:
				'Over 2,000 hand-curated shades with custom tinting in-store. From bold statement walls to subtle, soothing neutrals.',
			icon: '✨',
			image: 'image-34.png',
			span: 'row'
		},
		{
			id: 6,
			title: 'Beautiful Lasting Finishes',
			description:
				'Chalky mattes, silky satins, and luminous eggshells — each finish engineered for washability and decade-long durability.',
			icon: '🏠',
			image: 'hero-16.jpg',
			span: 'row'
		}
	];
</script>

<section class="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
	<!-- Section Header -->
	<div class="mx-auto mb-16 max-w-2xl text-center">
		<span
			class="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold tracking-widest text-slate-500 uppercase shadow-sm"
		>
			<span class="inline-block h-2 w-2 rounded-full bg-cyan-400"></span>
			Features
		</span>
		<h2 class="mb-4 text-5xl leading-tight font-black tracking-tight text-slate-900 sm:text-6xl">
			Everything in <span class="text-cyan-500">1 tin</span>
		</h2>
		<p class="text-lg leading-relaxed text-slate-500">
			Discover paints that protect, perform, and look incredible — better for your home and the planet.
		</p>
	</div>

	<!-- Bento Grid -->
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
		<!-- Row 1: Image left (tall), two feature cards right -->
		<div class="min-h-[420px] overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm md:row-span-2">
			<img src="image-12.png" alt="Eco-Friendly Paints" class="h-full w-full object-cover" />
		</div>

		<div class="flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
			<div>
				<h3 class="mb-3 text-2xl font-bold text-slate-900">Eco-Friendly Formulas</h3>
				<p class="leading-relaxed text-slate-500">
					Zero-VOC, plant-based paints safe for your family, pets, and the planet — without compromising on coverage or
					colour.
				</p>
			</div>
		</div>

		<div class="flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
			<div>
				<h3 class="mb-3 text-2xl font-bold text-slate-900">Mould &amp; Damp Resistant</h3>
				<p class="leading-relaxed text-slate-500">
					Advanced anti-microbial technology keeps walls free from mould and moisture damage — perfect for kitchens and
					bathrooms.
				</p>
			</div>
		</div>

		<!-- Row 2: two feature cards left, image right (tall) -->
		<div class="flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
			<div>
				<h3 class="mb-3 text-2xl font-bold text-slate-900">Weather-Proof Exteriors</h3>
				<p class="leading-relaxed text-slate-500">
					A breathable waterproof membrane that protects wood, masonry, and render through every season of the year.
				</p>
			</div>
		</div>

		<div class="min-h-[420px] overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm md:row-span-2">
			<img src="image-34.png" alt="Expert Colour Consultation" class="h-full w-full object-cover" />
		</div>

		<div class="flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
			<div>
				<h3 class="mb-3 text-2xl font-bold text-slate-900">Expert Colour Consultation</h3>
				<p class="leading-relaxed text-slate-500">
					Book a free session with our colour specialists to find the perfect palette for your home — in-person or
					virtual.
				</p>
			</div>
		</div>

		<!-- Row 3: Two cards spanning full width -->
		<div class="relative min-h-[280px] overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
			<img src="image-14.png" alt="Colour Range" class="h-full w-full object-cover" />
			<div
				class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent p-8"
			>
				<h3 class="mb-2 text-2xl font-bold text-white">Endless Colour Range</h3>
				<p class="text-sm leading-relaxed text-white/80">
					Over 2,000 hand-curated shades with custom tinting in-store.
				</p>
			</div>
		</div>

		<div class="relative min-h-[280px] overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
			<img src="image-23.png" alt="Beautiful Finishes" class="h-full w-full object-cover" />
			<div
				class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent p-8"
			>
				<h3 class="mb-2 text-2xl font-bold text-white">Beautiful Lasting Finishes</h3>
				<p class="text-sm leading-relaxed text-white/80">
					Chalky mattes, silky satins, and luminous eggshells engineered for decade-long durability.
				</p>
			</div>
		</div>
	</div>

	<!-- CTA Footer -->
	<div class="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
		<a
			href="/shop"
			class="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-sm transition-colors duration-200 hover:bg-slate-700"
		>
			Shop All Paints
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2.5"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
			</svg>
		</a>
		<a
			href="/consultation"
			class="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-sm transition-colors duration-200 hover:bg-slate-50"
		>
			Book a Consultation
		</a>
	</div>
</section>
