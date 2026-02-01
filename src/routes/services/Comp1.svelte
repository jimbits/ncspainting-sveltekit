<script>
	import { onMount } from 'svelte';

	let currentTestimonial = $state(0);
	let testimonials = [
		{ text: 'Incredible attention to detail. Our home looks brand new!', author: 'Sarah M., Oliver' },
		{ text: 'Professional, clean, and finished ahead of schedule.', author: 'James T., Glenora' },
		{ text: 'Best painters in Edmonton. Highly recommend!', author: 'Linda K., Riverbend' }
	];

	onMount(() => {
		const interval = setInterval(() => {
			currentTestimonial = (currentTestimonial + 1) % testimonials.length;
		}, 5000);
		return () => clearInterval(interval);
	});
</script>

<div class="bg-white">
	<!-- Hero with Split Design -->
	<section class="grid min-h-screen lg:grid-cols-2">
		<div class="flex flex-col justify-center bg-gray-900 p-16 lg:p-24">
			<div class="max-w-2xl">
				<div class="mb-6 text-xl font-semibold tracking-wider text-orange-500 uppercase">NCS Painting</div>
				<h1 class="mb-8 text-[84px] leading-none font-bold text-white">
					Interior
					<br />
					Painting
					<br />
					<span class="text-orange-500">Experts</span>
				</h1>
				<p class="mb-12 text-2xl text-gray-400">
					Transforming Edmonton homes with precision prep, premium paint, and impeccable finishing.
				</p>
				<div class="flex flex-col gap-4 sm:flex-row">
					<button
						class="rounded-full bg-orange-500 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-orange-400"
					>
						Get Free Estimate
					</button>
					<button
						class="rounded-full border border-white/20 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
					>
						(780) 555-0123
					</button>
				</div>
			</div>
		</div>
		<div class="relative min-h-[600px] lg:min-h-screen">
			<img src="/image-7.png" alt="Interior painting Edmonton" class="absolute inset-0 h-full w-full object-cover" />
		</div>
	</section>

	<!-- Why Choose Us Bento -->
	<section class="bg-white px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<h2 class="mb-20 text-[72px] font-bold text-gray-900">Why Edmonton Homeowners Choose Us</h2>

			<div class="grid grid-cols-12 gap-6">
				<!-- Large feature -->
				<div class="col-span-12 rounded-3xl bg-orange-500 p-16 text-white lg:col-span-8">
					<h3 class="mb-6 text-5xl font-bold">20+ Years Edmonton Experience</h3>
					<p class="mb-12 text-2xl opacity-90">
						We understand Edmonton homes - from heritage character homes in Strathcona to modern builds in Windermere.
						Our team knows how local climate affects paint application and durability.
					</p>
					<div class="grid grid-cols-3 gap-8">
						<div>
							<div class="mb-2 text-6xl font-bold">2000+</div>
							<div class="text-xl opacity-90">Homes Painted</div>
						</div>
						<div>
							<div class="mb-2 text-6xl font-bold">98%</div>
							<div class="text-xl opacity-90">Satisfaction Rate</div>
						</div>
						<div>
							<div class="mb-2 text-6xl font-bold">5★</div>
							<div class="text-xl opacity-90">Average Rating</div>
						</div>
					</div>
				</div>

				<!-- Right column -->
				<div class="col-span-12 space-y-6 lg:col-span-4">
					<div class="rounded-3xl bg-gray-900 p-10 text-white">
						<svg class="mb-6 h-16 w-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<h3 class="mb-4 text-3xl font-bold">On-Time</h3>
						<p class="text-lg text-gray-400">Projects completed when promised, every time</p>
					</div>

					<div class="rounded-3xl border-2 border-gray-900 bg-gray-50 p-10">
						<svg class="mb-6 h-16 w-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
							/>
						</svg>
						<h3 class="mb-4 text-3xl font-bold text-gray-900">Insured</h3>
						<p class="text-lg text-gray-600">Fully licensed and WCB covered</p>
					</div>
				</div>

				<!-- Bottom row -->
				<div class="col-span-12 rounded-3xl border-2 border-gray-200 bg-gray-50 p-12 lg:col-span-5">
					<h3 class="mb-6 text-4xl font-bold text-gray-900">Zero-VOC Paints Available</h3>
					<p class="mb-8 text-xl text-gray-600">
						Safe for families, pets, and Edmonton's environment. Low-odor formulas perfect for occupied homes.
					</p>
					<img src="/eco-friendly.png" alt="Eco-friendly paint" class="h-64 w-full rounded-2xl object-cover" />
				</div>

				<div class="col-span-12 grid overflow-hidden rounded-3xl bg-gray-900 lg:col-span-7 lg:grid-cols-2">
					<div class="flex flex-col justify-center p-12">
						<h3 class="mb-6 text-4xl font-bold text-white">Detailed Estimates</h3>
						<p class="mb-8 text-xl text-gray-400">
							No hidden fees. Transparent pricing with itemized breakdowns for materials and labor.
						</p>
						<button
							class="self-start rounded-full bg-orange-500 px-8 py-4 font-semibold text-white hover:bg-orange-400"
						>
							Request Quote
						</button>
					</div>
					<img src="/viv-1.avif" alt="Estimate" class="h-full w-full object-cover" />
				</div>
			</div>
		</div>
	</section>

	<!-- Services Grid -->
	<section class="bg-gray-50 px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<h2 class="mb-6 text-[72px] font-bold text-gray-900">Complete Interior Solutions</h2>
			<p class="mb-16 max-w-3xl text-2xl text-gray-600">From single rooms to whole-home transformations</p>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				<div class="rounded-3xl border-2 border-gray-200 bg-white p-10 transition-all hover:border-orange-500">
					<div class="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500">
						<svg class="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-3xl font-bold text-gray-900">Living Spaces</h3>
					<p class="mb-6 text-lg text-gray-600">Living rooms, dining rooms, family rooms with perfect color matching</p>
					<ul class="space-y-2 text-gray-600">
						<li>• Feature wall accents</li>
						<li>• High ceilings & vaulted</li>
						<li>• Open concept areas</li>
					</ul>
				</div>

				<div class="rounded-3xl border-2 border-gray-200 bg-white p-10 transition-all hover:border-orange-500">
					<div class="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500">
						<svg class="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-3xl font-bold text-gray-900">Bedrooms</h3>
					<p class="mb-6 text-lg text-gray-600">Peaceful, low-odor painting for sleeping areas</p>
					<ul class="space-y-2 text-gray-600">
						<li>• Master suites</li>
						<li>• Children's rooms</li>
						<li>• Guest bedrooms</li>
					</ul>
				</div>

				<div class="rounded-3xl border-2 border-gray-200 bg-white p-10 transition-all hover:border-orange-500">
					<div class="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500">
						<svg class="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-3xl font-bold text-gray-900">Kitchens</h3>
					<p class="mb-6 text-lg text-gray-600">Scrubbable finishes for high-traffic areas</p>
					<ul class="space-y-2 text-gray-600">
						<li>• Cabinet refinishing</li>
						<li>• Moisture-resistant paint</li>
						<li>• Backsplash integration</li>
					</ul>
				</div>

				<div class="rounded-3xl border-2 border-gray-200 bg-white p-10 transition-all hover:border-orange-500">
					<div class="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500">
						<svg class="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-3xl font-bold text-gray-900">Bathrooms</h3>
					<p class="mb-6 text-lg text-gray-600">Mold-resistant coatings for humid spaces</p>
					<ul class="space-y-2 text-gray-600">
						<li>• Powder rooms</li>
						<li>• Full baths</li>
						<li>• Ensuite bathrooms</li>
					</ul>
				</div>

				<div class="rounded-3xl border-2 border-gray-200 bg-white p-10 transition-all hover:border-orange-500">
					<div class="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500">
						<svg class="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-3xl font-bold text-gray-900">Trim & Doors</h3>
					<p class="mb-6 text-lg text-gray-600">Crisp, clean lines throughout your home</p>
					<ul class="space-y-2 text-gray-600">
						<li>• Baseboards</li>
						<li>• Crown molding</li>
						<li>• Window casings</li>
					</ul>
				</div>

				<div class="rounded-3xl border-2 border-gray-200 bg-white p-10 transition-all hover:border-orange-500">
					<div class="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500">
						<svg class="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-3xl font-bold text-gray-900">Staircases</h3>
					<p class="mb-6 text-lg text-gray-600">Safe, professional painting of complex areas</p>
					<ul class="space-y-2 text-gray-600">
						<li>• Railings & spindles</li>
						<li>• Stairwell walls</li>
						<li>• Landing areas</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Testimonials -->
	<section class="bg-orange-500 px-6 py-32">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-16 text-[72px] font-bold text-white">What Edmonton Says</h2>
			<div class="rounded-3xl border border-white/20 bg-white/10 p-16 backdrop-blur">
				<svg class="mx-auto mb-8 h-16 w-16 text-white/50" fill="currentColor" viewBox="0 0 24 24">
					<path
						d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
					/>
				</svg>
				<p class="mb-8 text-3xl leading-relaxed text-white">
					{testimonials[currentTestimonial].text}
				</p>
				<div class="text-xl font-semibold text-white/80">
					— {testimonials[currentTestimonial].author}
				</div>
			</div>
		</div>
	</section>

	<!-- Pricing Transparency -->
	<section class="bg-white px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<div class="grid items-center gap-16 lg:grid-cols-2">
				<div>
					<h2 class="mb-8 text-[72px] leading-none font-bold text-gray-900">Transparent Pricing</h2>
					<p class="mb-12 text-2xl text-gray-600">No hidden fees or surprise costs. Clear quotes you can understand.</p>

					<div class="space-y-6">
						<div class="flex items-start gap-4">
							<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500">
								<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="mb-2 text-2xl font-bold text-gray-900">Labor & Materials Breakdown</h3>
								<p class="text-lg text-gray-600">See exactly where your money goes</p>
							</div>
						</div>

						<div class="flex items-start gap-4">
							<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500">
								<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="mb-2 text-2xl font-bold text-gray-900">Warranty Included</h3>
								<p class="text-lg text-gray-600">2-year workmanship guarantee on all projects</p>
							</div>
						</div>

						<div class="flex items-start gap-4">
							<div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-500">
								<svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<div>
								<h3 class="mb-2 text-2xl font-bold text-gray-900">Flexible Payment</h3>
								<p class="text-lg text-gray-600">Payment plans available for larger projects</p>
							</div>
						</div>
					</div>
				</div>
				<div class="rounded-3xl border-2 border-gray-200 bg-gray-50 p-12">
					<h3 class="mb-8 text-4xl font-bold text-gray-900">Typical Room Cost</h3>
					<div class="space-y-6">
						<div class="flex items-center justify-between border-b-2 border-gray-200 pb-4">
							<span class="text-xl text-gray-600">Small Bedroom (10x12)</span>
							<span class="text-2xl font-bold text-gray-900">$400-550</span>
						</div>
						<div class="flex items-center justify-between border-b-2 border-gray-200 pb-4">
							<span class="text-xl text-gray-600">Living Room (15x18)</span>
							<span class="text-2xl font-bold text-gray-900">$650-850</span>
						</div>
						<div class="flex items-center justify-between border-b-2 border-gray-200 pb-4">
							<span class="text-xl text-gray-600">Master Bedroom (14x16)</span>
							<span class="text-2xl font-bold text-gray-900">$550-750</span>
						</div>
						<div class="flex items-center justify-between border-b-2 border-gray-200 pb-4">
							<span class="text-xl text-gray-600">Full Home (1500 sq ft)</span>
							<span class="text-2xl font-bold text-gray-900">$4500-6500</span>
						</div>
					</div>
					<p class="mt-8 text-lg text-gray-600">
						*Prices include prep, materials, and labor. Final quote depends on condition and scope.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Final CTA -->
	<section class="bg-gray-900 px-6 py-32">
		<div class="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
			<div>
				<h2 class="mb-8 text-[72px] leading-none font-bold text-white">Start Your Project Today</h2>
				<p class="mb-12 text-2xl text-gray-400">Free in-home estimates across Edmonton and surrounding areas</p>
				<div class="flex flex-col gap-6 sm:flex-row">
					<button
						class="rounded-full bg-orange-500 px-12 py-6 text-xl font-bold text-white transition-all hover:bg-orange-400"
					>
						Get Free Quote
					</button>
					<button
						class="rounded-full border border-white/20 bg-white/10 px-12 py-6 text-xl font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
					>
						Call Now
					</button>
				</div>
			</div>
			<div class="rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur">
				<h3 class="mb-8 text-3xl font-bold text-white">Serving These Areas</h3>
				<div class="grid grid-cols-2 gap-4 text-lg text-gray-400">
					<div>• Edmonton (All)</div>
					<div>• St. Albert</div>
					<div>• Sherwood Park</div>
					<div>• Fort Saskatchewan</div>
					<div>• Spruce Grove</div>
					<div>• Stony Plain</div>
					<div>• Leduc</div>
					<div>• Beaumont</div>
				</div>
			</div>
		</div>
	</section>
</div>
