<script>
	let areas = $state([
		'Edmonton (All Quadrants)',
		'St. Albert',
		'Sherwood Park',
		'Fort Saskatchewan',
		'Spruce Grove',
		'Stony Plain',
		'Leduc',
		'Beaumont'
	]);
</script>

<div class="min-h-screen bg-white">
	<section class="relative flex min-h-screen items-center">
		<div class="absolute inset-0 bg-gray-900">
			<img src="/hero-17.jpg" alt="Hero" class="h-full w-full object-cover opacity-50" />
		</div>
		<div class="relative z-10 mx-auto max-w-7xl px-6 py-32">
			<h1 class="mb-8 text-[108px] leading-none font-bold text-white">
				Transform
				<br />
				Your Space
			</h1>
			<p class="mb-6 text-4xl font-bold text-orange-500">Professional Interior Painting</p>
			<p class="mb-12 max-w-3xl text-2xl text-gray-300">
				Edmonton's premier choice for quality interior painting with 20+ years experience
			</p>
			<div class="flex gap-6">
				<button class="rounded-full bg-orange-500 px-14 py-6 text-xl font-bold text-white">Book Now</button>
				<button class="rounded-full border-2 border-white/30 bg-white/10 px-14 py-6 text-xl text-white backdrop-blur">
					Call Us
				</button>
			</div>
		</div>
	</section>

	<section class="bg-white px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<h2 class="mb-20 text-center text-[72px] font-bold text-gray-900">Why Choose NCS Painting?</h2>
			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
				<div class="text-center">
					<div class="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-orange-500">
						<span class="text-5xl font-bold text-white">20+</span>
					</div>
					<h3 class="mb-3 text-2xl font-bold text-gray-900">Years Experience</h3>
					<p class="text-gray-600">Trusted by Edmonton homeowners since 2003</p>
				</div>
				<div class="text-center">
					<div class="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-orange-500">
						<span class="text-5xl font-bold text-white">2K+</span>
					</div>
					<h3 class="mb-3 text-2xl font-bold text-gray-900">Happy Clients</h3>
					<p class="text-gray-600">Homes transformed across the city</p>
				</div>
				<div class="text-center">
					<div class="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-orange-500">
						<span class="text-5xl font-bold text-white">98%</span>
					</div>
					<h3 class="mb-3 text-2xl font-bold text-gray-900">Satisfaction</h3>
					<p class="text-gray-600">Industry-leading customer ratings</p>
				</div>
				<div class="text-center">
					<div class="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-orange-500">
						<span class="text-5xl font-bold text-white">2yr</span>
					</div>
					<h3 class="mb-3 text-2xl font-bold text-gray-900">Warranty</h3>
					<p class="text-gray-600">All workmanship guaranteed</p>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-gray-50 px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<div class="grid items-center gap-16 lg:grid-cols-2">
				<div class="space-y-16">
					<div>
						<h2 class="mb-8 text-[72px] leading-none font-bold text-gray-900">What's Included</h2>
						<p class="text-2xl text-gray-600">Every project includes comprehensive prep, protection, and finishing</p>
					</div>
					<div class="space-y-8">
						{#each ['Complete surface preparation', 'Premium paint & materials', 'Daily cleanup service', 'Final walkthrough inspection'] as item}
							<div class="flex items-center gap-6">
								<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500">
									<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
									</svg>
								</div>
								<span class="text-2xl font-semibold text-gray-900">{item}</span>
							</div>
						{/each}
					</div>
				</div>
				<img
					src="/image-33.png"
					alt="Professional service"
					class="h-[700px] w-full rounded-3xl object-cover shadow-2xl"
				/>
			</div>
		</div>
	</section>

	<section class="bg-orange-500 px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<h2 class="mb-16 text-center text-[72px] font-bold text-white">Serving Edmonton & Area</h2>
			<div class="grid gap-6 md:grid-cols-4">
				{#each areas as area}
					<div class="rounded-2xl border-2 border-white/20 bg-white/10 p-8 text-center backdrop-blur">
						<p class="text-2xl font-bold text-white">{area}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-gray-900 px-6 py-32">
		<div class="mx-auto max-w-5xl text-center">
			<h2 class="mb-8 text-[72px] font-bold text-white">Get Started Today</h2>
			<p class="mb-12 text-3xl text-gray-400">Free estimates • No obligation • Fast response</p>
			<button class="rounded-full bg-orange-500 px-16 py-6 text-2xl font-bold text-white">Request Free Quote</button>
		</div>
	</section>
</div>
