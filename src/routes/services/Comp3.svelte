<script>
	let activeStep = $state(null);
</script>

<div class="bg-white">
	<!-- Hero -->
	<section class="relative overflow-hidden bg-sky-500 px-6 py-32">
		<div class="absolute inset-0 opacity-10">
			<div
				class="absolute inset-0"
				style="background-image: url(/image-3.png); background-size: cover; background-position: center;"
			></div>
		</div>
		<div class="relative mx-auto max-w-7xl text-center">
			<h1 class="mb-8 text-[96px] leading-none font-bold text-white">
				Professional Interior
				<br />
				Painting Services
			</h1>
			<p class="mx-auto mb-12 max-w-4xl text-3xl text-white/90">
				Edmonton's choice for quality craftsmanship, clean workmanship, and lasting results
			</p>
			<button class="rounded-full bg-white px-16 py-6 text-xl font-bold text-sky-600 transition-all hover:bg-gray-100">
				Schedule Consultation
			</button>
		</div>
	</section>

	<!-- Our Guarantee Bento -->
	<section class="bg-white px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<h2 class="mb-20 text-[72px] font-bold text-gray-900">The NCS Guarantee</h2>

			<div class="grid grid-cols-12 gap-6">
				<div class="col-span-12 row-span-2 rounded-3xl bg-gray-900 p-16 lg:col-span-6">
					<h3 class="mb-8 text-5xl font-bold text-white">No Mess Left Behind</h3>
					<p class="mb-12 text-2xl text-gray-300">
						We treat your Edmonton home with respect. Daily cleanup, protected floors, and a spotless finish are
						standard on every project.
					</p>
					<img src="/image-36.png" alt="Clean workspace" class="mb-8 h-80 w-full rounded-2xl object-cover" />
					<div class="grid grid-cols-2 gap-6">
						<div class="rounded-2xl bg-white/10 p-6 backdrop-blur">
							<h4 class="mb-2 text-3xl font-bold text-sky-500">100%</h4>
							<p class="text-white">Protected Floors</p>
						</div>
						<div class="rounded-2xl bg-white/10 p-6 backdrop-blur">
							<h4 class="mb-2 text-3xl font-bold text-sky-500">Daily</h4>
							<p class="text-white">Site Cleanup</p>
						</div>
					</div>
				</div>

				<div
					class="col-span-12 flex flex-col justify-center rounded-3xl bg-sky-500 p-10 text-center text-white lg:col-span-3"
				>
					<svg class="mx-auto mb-6 h-20 w-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
						/>
					</svg>
					<h3 class="mb-4 text-4xl font-bold">2-Year Warranty</h3>
					<p class="text-xl opacity-90">All workmanship guaranteed</p>
				</div>

				<div
					class="col-span-12 flex flex-col justify-center rounded-3xl border-2 border-gray-900 bg-gray-50 p-10 lg:col-span-3"
				>
					<svg class="mb-6 h-20 w-20 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<h3 class="mb-3 text-3xl font-bold text-gray-900">Fair Pricing</h3>
					<p class="text-lg text-gray-600">No hidden costs or surprises</p>
				</div>

				<div class="col-span-12 rounded-3xl border-2 border-gray-200 bg-gray-50 p-10 lg:col-span-4">
					<h3 class="mb-4 text-3xl font-bold text-gray-900">Licensed & Insured</h3>
					<p class="mb-6 text-lg text-gray-600">Full WCB coverage and liability insurance for your peace of mind</p>
					<img src="/image-33.png" alt="Professional team" class="h-48 w-full rounded-xl object-cover" />
				</div>

				<div class="col-span-12 rounded-3xl bg-sky-500 p-10 text-center text-white lg:col-span-2">
					<h3 class="mb-2 text-5xl font-bold">20+</h3>
					<p class="text-xl">Years Experience</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Process Steps -->
	<section class="bg-gray-50 px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<h2 class="mb-6 text-center text-[72px] font-bold text-gray-900">How We Work</h2>
			<p class="mx-auto mb-20 max-w-3xl text-center text-2xl text-gray-600">
				A proven 4-step process that delivers exceptional results for Edmonton homeowners
			</p>

			<div class="grid gap-16 md:grid-cols-2">
				<button
					class="rounded-3xl border-2 bg-white p-12 text-left transition-all {activeStep === 1
						? 'border-sky-500'
						: 'border-gray-200'}"
					onclick={() => (activeStep = activeStep === 1 ? null : 1)}
				>
					<div class="mb-6 flex items-center gap-6">
						<div class="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500">
							<span class="text-3xl font-bold text-white">01</span>
						</div>
						<h3 class="text-4xl font-bold text-gray-900">Free Consultation</h3>
					</div>
					<p class="mb-6 text-xl text-gray-600">
						We visit your Edmonton home to assess the space, discuss colors, and provide a detailed written estimate. No
						pressure, just honest advice.
					</p>
					{#if activeStep === 1}
						<div class="border-t-2 border-gray-200 pt-6">
							<ul class="space-y-3 text-lg text-gray-700">
								<li class="flex items-center gap-3">
									<svg class="h-6 w-6 flex-shrink-0 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									<span>30-45 minute walkthrough</span>
								</li>
								<li class="flex items-center gap-3">
									<svg class="h-6 w-6 flex-shrink-0 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									<span>Color consultation included</span>
								</li>
								<li class="flex items-center gap-3">
									<svg class="h-6 w-6 flex-shrink-0 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									<span>Written quote within 24 hours</span>
								</li>
							</ul>
						</div>
					{/if}
				</button>

				<button
					class="rounded-3xl border-2 bg-white p-12 text-left transition-all {activeStep === 2
						? 'border-sky-500'
						: 'border-gray-200'}"
					onclick={() => (activeStep = activeStep === 2 ? null : 2)}
				>
					<div class="mb-6 flex items-center gap-6">
						<div class="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500">
							<span class="text-3xl font-bold text-white">02</span>
						</div>
						<h3 class="text-4xl font-bold text-gray-900">Prep & Protect</h3>
					</div>
					<p class="mb-6 text-xl text-gray-600">
						We prepare surfaces properly and protect everything in your home. This step makes the difference between
						good and great results.
					</p>
					{#if activeStep === 2}
						<div class="border-t-2 border-gray-200 pt-6">
							<ul class="space-y-3 text-lg text-gray-700">
								<li class="flex items-center gap-3">
									<svg class="h-6 w-6 flex-shrink-0 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									<span>Move and cover furniture</span>
								</li>
								<li class="flex items-center gap-3">
									<svg class="h-6 w-6 flex-shrink-0 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									<span>Fill holes and sand surfaces</span>
								</li>
								<li class="flex items-center gap-3">
									<svg class="h-6 w-6 flex-shrink-0 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									<span>Tape trim and mask surfaces</span>
								</li>
							</ul>
						</div>
					{/if}
				</button>

				<button
					class="rounded-3xl border-2 bg-white p-12 text-left transition-all {activeStep === 3
						? 'border-sky-500'
						: 'border-gray-200'}"
					onclick={() => (activeStep = activeStep === 3 ? null : 3)}
				>
					<div class="mb-6 flex items-center gap-6">
						<div class="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500">
							<span class="text-3xl font-bold text-white">03</span>
						</div>
						<h3 class="text-4xl font-bold text-gray-900">Paint with Precision</h3>
					</div>
					<p class="mb-6 text-xl text-gray-600">
						Expert application using premium paints. We cut in by hand for crisp lines and apply multiple coats for even
						coverage.
					</p>
					{#if activeStep === 3}
						<div class="border-t-2 border-gray-200 pt-6">
							<ul class="space-y-3 text-lg text-gray-700">
								<li class="flex items-center gap-3">
									<svg class="h-6 w-6 flex-shrink-0 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									<span>Premium paint brands</span>
								</li>
								<li class="flex items-center gap-3">
									<svg class="h-6 w-6 flex-shrink-0 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									<span>2-3 coats for perfect coverage</span>
								</li>
								<li class="flex items-center gap-3">
									<svg class="h-6 w-6 flex-shrink-0 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									<span>Hand-cut edges for clean lines</span>
								</li>
							</ul>
						</div>
					{/if}
				</button>

				<button
					class="rounded-3xl border-2 bg-white p-12 text-left transition-all {activeStep === 4
						? 'border-sky-500'
						: 'border-gray-200'}"
					onclick={() => (activeStep = activeStep === 4 ? null : 4)}
				>
					<div class="mb-6 flex items-center gap-6">
						<div class="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500">
							<span class="text-3xl font-bold text-white">04</span>
						</div>
						<h3 class="text-4xl font-bold text-gray-900">Inspect & Deliver</h3>
					</div>
					<p class="mb-6 text-xl text-gray-600">
						We walk through with you to ensure everything is perfect. Any touch-ups are done immediately, and we leave
						your home clean.
					</p>
					{#if activeStep === 4}
						<div class="border-t-2 border-gray-200 pt-6">
							<ul class="space-y-3 text-lg text-gray-700">
								<li class="flex items-center gap-3">
									<svg class="h-6 w-6 flex-shrink-0 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									<span>Room-by-room inspection</span>
								</li>
								<li class="flex items-center gap-3">
									<svg class="h-6 w-6 flex-shrink-0 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									<span>Immediate touch-ups if needed</span>
								</li>
								<li class="flex items-center gap-3">
									<svg class="h-6 w-6 flex-shrink-0 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
									</svg>
									<span>Complete cleanup and removal</span>
								</li>
							</ul>
						</div>
					{/if}
				</button>
			</div>
		</div>
	</section>

	<!-- Edmonton Specific -->
	<section class="bg-white px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<div class="grid items-center gap-16 lg:grid-cols-2">
				<div>
					<h2 class="mb-8 text-[72px] leading-none font-bold text-gray-900">Built for Edmonton Homes</h2>
					<p class="mb-12 text-2xl text-gray-600">We understand the unique needs of painting in Alberta's capital</p>
					<div class="space-y-8">
						<div class="flex items-start gap-6">
							<div class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-sky-500">
								<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<div>
								<h3 class="mb-3 text-3xl font-bold text-gray-900">Dry Climate Expertise</h3>
								<p class="text-xl text-gray-600">
									Edmonton's low humidity means faster drying times and fewer moisture issues. We use this to our
									advantage for efficient project completion.
								</p>
							</div>
						</div>

						<div class="flex items-start gap-6">
							<div class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-sky-500">
								<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
									/>
								</svg>
							</div>
							<div>
								<h3 class="mb-3 text-3xl font-bold text-gray-900">Historic Home Specialists</h3>
								<p class="text-xl text-gray-600">
									From Glenora mansions to Strathcona character homes, we respect architectural details and use
									appropriate techniques for older construction.
								</p>
							</div>
						</div>

						<div class="flex items-start gap-6">
							<div class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-sky-500">
								<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
									/>
								</svg>
							</div>
							<div>
								<h3 class="mb-3 text-3xl font-bold text-gray-900">Year-Round Service</h3>
								<p class="text-xl text-gray-600">
									Interior painting works perfectly through Edmonton winters. We maintain proper ventilation while
									keeping your home comfortable.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="relative">
					<img
						src="/image-7.png"
						alt="Edmonton home painting"
						class="h-[600px] w-full rounded-3xl object-cover shadow-2xl"
					/>
					<div class="absolute -bottom-8 -left-8 rounded-2xl bg-sky-500 p-8 shadow-xl">
						<h4 class="mb-2 text-4xl font-bold text-white">2000+</h4>
						<p class="text-xl text-white">Edmonton Homes Painted</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="bg-sky-500 px-6 py-32">
		<div class="mx-auto max-w-5xl text-center">
			<h2 class="mb-8 text-[72px] font-bold text-white">Let's Discuss Your Project</h2>
			<p class="mb-12 text-3xl text-white/90">Free estimates for all Edmonton area homeowners</p>
			<div class="flex flex-col justify-center gap-6 sm:flex-row">
				<button
					class="rounded-full bg-white px-16 py-6 text-xl font-bold text-sky-600 transition-all hover:bg-gray-100"
				>
					Book Consultation
				</button>
				<button
					class="rounded-full border-2 border-white bg-white/20 px-16 py-6 text-xl font-semibold text-white backdrop-blur transition-all hover:bg-white/30"
				>
					Call: (780) 555-0123
				</button>
			</div>
		</div>
	</section>
</div>
