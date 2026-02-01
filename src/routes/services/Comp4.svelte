<script>
	let faqs = $state([
		{
			q: 'How long does interior painting take?',
			a: 'Most single rooms take 1-2 days. Full homes (1500-2500 sq ft) typically take 5-10 days including prep, painting, and cleanup.',
			open: false
		},
		{
			q: 'Do I need to move my furniture?',
			a: 'We handle all furniture moving and protection. For large or valuable items like pianos, we ask you arrange specialized movers.',
			open: false
		},
		{
			q: "What's included in your service?",
			a: 'Surface prep (patching, sanding), complete protection, premium primer and paint (2 coats), crisp trim work, daily cleanup, and final walkthrough.',
			open: false
		}
	]);
</script>

<div class="bg-white">
	<section class="bg-gradient-to-br from-lime-500 to-emerald-600 px-6 py-40">
		<div class="mx-auto max-w-7xl">
			<div class="grid items-center gap-16 lg:grid-cols-2">
				<div>
					<h1 class="mb-8 text-[96px] leading-none font-bold text-white">Interior Excellence</h1>
					<p class="mb-12 text-3xl text-white/90">Edmonton's most trusted interior painting contractor since 2003</p>
					<button class="rounded-full bg-white px-14 py-6 text-2xl font-bold text-lime-600 hover:bg-gray-100">
						Free Quote
					</button>
				</div>
				<div class="rounded-3xl border-2 border-white/20 bg-white/10 p-12 backdrop-blur-xl">
					<h3 class="mb-8 text-4xl font-bold text-white">Fast Facts</h3>
					<div class="space-y-6 text-xl text-white">
						<div class="flex items-center justify-between border-b border-white/20 pb-4">
							<span>Projects Completed</span>
							<span class="text-3xl font-bold">2,400+</span>
						</div>
						<div class="flex items-center justify-between border-b border-white/20 pb-4">
							<span>Average Timeline</span>
							<span class="text-3xl font-bold">3-7 Days</span>
						</div>
						<div class="flex items-center justify-between border-b border-white/20 pb-4">
							<span>Satisfaction Rate</span>
							<span class="text-3xl font-bold">98.5%</span>
						</div>
						<div class="flex items-center justify-between">
							<span>Warranty Period</span>
							<span class="text-3xl font-bold">2 Years</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-white px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<h2 class="mb-20 text-[72px] font-bold text-gray-900">Complete Interior Services</h2>
			<div class="grid gap-8 md:grid-cols-3">
				{#each [{ title: 'Walls & Ceilings', desc: 'Smooth finishes on all surfaces', img: '/image-3.png' }, { title: 'Trim & Doors', desc: 'Crisp lines and perfect detail', img: '/image-36.png' }, { title: 'Specialty Surfaces', desc: 'Cabinets, built-ins, staircases', img: '/web-3.webp' }, { title: 'Color Consultation', desc: 'Expert help choosing the right palette', img: '/viv-1.avif' }, { title: 'Texture Matching', desc: 'Seamless repairs and blending', img: '/image-7.png' }, { title: 'Eco-Friendly Options', desc: 'Zero-VOC and low-odor paints', img: '/eco-friendly.png' }] as service}
					<div
						class="overflow-hidden rounded-3xl border-2 border-gray-200 bg-gray-50 transition-all hover:border-lime-500"
					>
						<img src={service.img} alt={service.title} class="h-64 w-full object-cover" />
						<div class="p-8">
							<h3 class="mb-3 text-3xl font-bold text-gray-900">{service.title}</h3>
							<p class="text-lg text-gray-600">{service.desc}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-gray-900 px-6 py-32">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-16 text-center text-[72px] font-bold text-white">Common Questions</h2>
			<div class="space-y-4">
				{#each faqs as faq, i}
					<button
						class="w-full rounded-2xl border border-white/20 bg-white/10 p-8 text-left backdrop-blur transition-all hover:bg-white/20"
						onclick={() => (faq.open = !faq.open)}
					>
						<div class="flex items-center justify-between">
							<h3 class="pr-8 text-2xl font-bold text-white">{faq.q}</h3>
							<span class="text-4xl text-lime-500 transition-transform {faq.open ? 'rotate-45' : ''}">+</span>
						</div>
						{#if faq.open}
							<p class="mt-6 text-lg leading-relaxed text-gray-300">{faq.a}</p>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-lime-500 px-6 py-32">
		<div class="mx-auto max-w-5xl text-center">
			<h2 class="mb-12 text-[72px] font-bold text-white">Ready to Start?</h2>
			<button class="rounded-full bg-white px-16 py-6 text-2xl font-bold text-lime-600 hover:bg-gray-100">
				Get Your Free Estimate
			</button>
		</div>
	</section>
</div>
