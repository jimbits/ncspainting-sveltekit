<section class="bg-stone-50 py-24">
	<div class="mx-auto max-w-7xl px-4">
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-4">
			<div class="flex flex-col justify-between rounded-[3rem] bg-white p-12 shadow-sm lg:col-span-2">
				<div>
					<h2 class="mb-6 text-4xl font-black">Interior Painting in Edmonton</h2>
					<p class="text-lg leading-relaxed text-stone-600">
						We provide detail-focused residential painting with tidy work areas and a walkthrough you’ll feel good
						about.
					</p>
				</div>
				<div class="mt-12 flex flex-wrap gap-2">
					{#each ['St. Albert', 'Sherwood Park', 'Fort Sask'] as town}
						<span class="rounded-full bg-stone-100 px-4 py-2 text-xs font-bold tracking-widest uppercase">{town}</span>
					{/each}
				</div>
			</div>

			<div class="space-y-4 lg:col-span-2">
				{#each [{ q: 'How much does it cost?', a: 'Pricing depends on room size, prep needs, and paint type. We provide clear, itemized quotes.' }, { q: 'Do you repair holes/cracks?', a: 'Yes—minor patching and sanding is typically included in our standard prep.' }, { q: 'Can you paint while we live there?', a: 'Yes. We plan around your schedule and keep work areas tidy to minimize disruption.' }] as faq}
					<div class="rounded-2xl border border-stone-100 bg-white p-6 shadow-sm">
						<h4 class="mb-2 text-lg font-bold">{faq.q}</h4>
						<p class="text-sm leading-relaxed text-stone-500">{faq.a}</p>
					</div>
				{/each}
			</div>

			<div
				class="bg-black-500 flex flex-col items-center justify-between gap-8 rounded-[2rem] p-8 text-stone-900 md:flex-row lg:col-span-4"
			>
				<h3 class="text-2xl leading-none font-black uppercase italic">
					Specialized <br />
					Add-ons
				</h3>
				<div class="flex flex-wrap justify-center gap-4">
					{#each ['Drywall Repair', 'Trim Refresh', 'Cabinet Prep', 'Low-VOC Options'] as addon}
						<div class="rounded-xl bg-stone-900 px-6 py-3 text-sm font-bold tracking-wide text-white uppercase">
							{addon}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
