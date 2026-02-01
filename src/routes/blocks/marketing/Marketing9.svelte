<section class="overflow-hidden bg-white pt-20 pb-0 lg:pt-32">
	<div class="container mx-auto px-4">
		<div class="mx-auto mb-16 max-w-4xl text-center">
			<h1 class="mb-8 text-5xl font-black tracking-tighter text-slate-900 md:text-8xl">
				Painting Made <span class="text-amber-500 italic">Predictable.</span>
			</h1>
			<p class="mb-12 text-xl text-slate-600">
				A simple, clean painting process from quote to final walkthrough. Serving Edmonton, St. Albert, and Sherwood
				Park.
			</p>

			<div class="flex justify-center gap-4">
				<a
					href="tel:17807225577"
					class="flex items-center gap-3 rounded-2xl bg-slate-100 px-8 py-4 font-bold text-slate-900 transition-all hover:bg-slate-200"
				>
					<svg class="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
						/>
					</svg>
					780-722-5577
				</a>
				<a
					href="/quote"
					class="rounded-2xl bg-amber-500 px-10 py-4 font-bold text-slate-950 transition-all hover:shadow-xl hover:shadow-amber-500/20"
				>
					Start Your Project
				</a>
			</div>
		</div>

		<div class="relative mx-auto max-w-6xl">
			<img
				src="/image-26.png"
				alt="Meticulous site preparation"
				class="h-[500px] w-full rounded-t-[4rem] border-x-8 border-t-8 border-slate-50 object-cover shadow-2xl"
			/>

			<div class="absolute inset-x-8 -bottom-12 hidden grid-cols-4 gap-4 lg:grid">
				{#each ['Quote', 'Estimate', 'Prep', 'Paint'] as step, i}
					<div class="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl">
						<span class="mb-2 block text-xs font-black tracking-widest text-amber-500 uppercase">Step 0{i + 1}</span>
						<h4 class="font-bold text-slate-900">{step}</h4>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
