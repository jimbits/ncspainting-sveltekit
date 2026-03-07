<section class="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
	<!-- ── Header ─────────────────────────────────────────── -->
	<div class="mx-auto mb-16 max-w-3xl text-center">
		<span
			class="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold tracking-widest text-slate-500 uppercase shadow-sm"
		>
			<span class="inline-block h-2 w-2 rounded-full bg-cyan-400"></span>
			Features
		</span>
		<h2 class="mb-4 text-5xl leading-tight font-black tracking-tight text-slate-900 sm:text-6xl">
			Everything in <span class="text-cyan-500">1 tin</span>
		</h2>
		<p class="mx-auto max-w-xl text-lg leading-relaxed text-slate-500">
			Discover paints that protect, perform, and look incredible — better for your home and the planet.
		</p>
	</div>

	<!-- ── Bento Grid ─────────────────────────────────────── -->
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
		<!-- ROW 1 ─────────────────────────────────────────────── -->

		<!-- [1] Tall image — spans 2 rows -->
		<div class="relative min-h-[480px] overflow-hidden rounded-3xl md:row-span-2">
			<img src="/image-8.png" alt="Eco painting" class="absolute inset-0 h-full w-full object-cover" />
			<div
				class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900/80 via-transparent to-transparent p-8"
			>
				<h3 class="mb-2 text-3xl font-bold text-white">Transform Your Space</h3>
				<p class="text-sm leading-relaxed text-white/75">
					We focus on the details — smooth surfaces, crisp cut lines, and a clean job site start to finish.
				</p>
			</div>
		</div>

		<!-- [2] Dark — Specialisms -->
		<div class="flex flex-col gap-4 rounded-3xl bg-slate-900 p-7">
			<h3 class="text-lg font-bold text-white">We Specialise In</h3>
			<div class="grid grid-cols-2 gap-2">
				{#each ['Walls', 'Ceilings', 'Trim', 'Doors', 'Bathrooms', 'Cabinets'] as item}
					<span class="rounded-xl bg-slate-800 px-3 py-2.5 text-center text-sm font-semibold text-white">{item}</span>
				{/each}
			</div>
		</div>

		<!-- [3] Cyan — Stat callout -->
		<div class="flex flex-col items-center justify-center rounded-3xl bg-cyan-400 p-7 text-center">
			<span class="text-7xl leading-none font-black text-white">98%</span>
			<span class="mt-2 text-base font-semibold text-white">Customer Satisfaction</span>
		</div>

		<!-- ROW 2 — col 1 still occupied ─────────────────────── -->

		<!-- [4] Dark — What's Included (spans 2 cols) -->
		<div class="flex flex-col gap-4 rounded-3xl bg-slate-800 p-7 md:col-span-2">
			<h3 class="text-lg font-bold text-white">What's Included</h3>
			<ul class="space-y-2.5">
				{#each ['Light patching, sanding & surface prep', 'Protection for floors & furniture', 'Crisp cut lines on trim & corners', 'Priming for even coverage', 'Daily cleanup & final walkthrough'] as item}
					<li class="flex items-start gap-3 text-sm text-white/85">
						<svg
							class="mt-0.5 h-5 w-5 shrink-0 text-cyan-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2.5"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
						</svg>
						{item}
					</li>
				{/each}
			</ul>
		</div>

		<!-- ROW 3 ─────────────────────────────────────────────── -->

		<!-- [5] White — FAQ -->
		<div class="flex flex-col justify-center rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
			<h4 class="mb-2 text-base font-bold text-slate-900">How much does it cost to paint a room?</h4>
			<p class="text-sm leading-relaxed text-slate-500">
				Cost depends on room size, wall condition, paint choice, and prep. Request a free quote for an exact price.
			</p>
		</div>

		<!-- [6] White — Book by Surface -->
		<div class="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
			<h3 class="text-base font-bold text-slate-900">Book by Surface</h3>
			<div class="grid grid-cols-2 gap-2">
				{#each ['Walls', 'Ceilings', 'Trim', 'Doors', 'Cabinets'] as item}
					<span
						class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-center text-sm font-semibold text-slate-700"
					>
						{item}
					</span>
				{/each}
				<a
					href="/quote"
					class="rounded-xl bg-cyan-400 px-3 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-cyan-500"
				>
					Get Quote →
				</a>
			</div>
		</div>

		<!-- [7] Image card -->
		<div class="relative min-h-[220px] overflow-hidden rounded-3xl">
			<img src="/image-2.png" alt="Painting in progress" class="absolute inset-0 h-full w-full object-cover" />
		</div>

		<!-- ROW 4 ─────────────────────────────────────────────── -->

		<!-- [8] Cyan — Also Serving -->
		<div class="flex flex-col justify-center rounded-3xl bg-cyan-400 p-7">
			<h3 class="mb-3 text-2xl font-black text-white">Also Serving</h3>
			<ul class="space-y-1 text-base font-semibold text-white">
				<li>Fort Saskatchewan</li>
				<li>Sherwood Park</li>
				<li>Beaumont</li>
				<li>St Albert</li>
			</ul>
		</div>

		<!-- [9] Dark — Eco Credentials -->
		<div class="flex flex-col gap-3 rounded-3xl bg-slate-900 p-7">
			<h3 class="mb-1 text-lg font-bold text-white">Eco Credentials</h3>
			{#each ['Zero-VOC formula — safe for children & pets', 'Biodegradable packaging', 'Carbon-neutral delivery', 'Plant-based pigments'] as item}
				<div class="flex items-center gap-3">
					<span class="h-2 w-2 shrink-0 rounded-full bg-cyan-400"></span>
					<span class="text-sm text-white/80">{item}</span>
				</div>
			{/each}
		</div>

		<!-- [10] Image card with overlay -->
		<div class="relative min-h-[220px] overflow-hidden rounded-3xl">
			<img src="/image-18.png" alt="Colour range" class="absolute inset-0 h-full w-full object-cover" />
			<div
				class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-slate-900/70 via-transparent to-transparent p-6"
			>
				<h3 class="text-xl font-bold text-white">2,000+ Shades</h3>
				<p class="mt-1 text-xs text-white/70">Custom tinting in-store</p>
			</div>
		</div>
	</div>

	<!-- ── CTA Footer ─────────────────────────────────────── -->
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
			class="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-sm transition-colors duration-200 hover:bg-cyan-50"
		>
			Book a Consultation
		</a>
	</div>
</section>
