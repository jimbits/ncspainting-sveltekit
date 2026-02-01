<script>
	import { onMount } from 'svelte';

	let scrollY = $state(0);
	let isVisible = $state(false);

	onMount(() => {
		isVisible = true;
		const handleScroll = () => {
			scrollY = window.scrollY;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div class="min-h-screen bg-white">
	<!-- Hero Section -->
	<section class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900">
		<div class="absolute inset-0 opacity-40">
			<img src="/hero-17.jpg" alt="Interior painting" class="h-full w-full object-cover" />
		</div>
		<div class="relative z-10 mx-auto max-w-7xl px-6 text-center">
			<h1
				class="mb-8 animate-[fadeInUp_1s_ease-out_0.2s_forwards] text-[96px] leading-none font-bold tracking-tight text-white opacity-0"
			>
				Interior Painting
				<br />
				<span class="text-lime-500">Edmonton</span>
			</h1>
			<p class="mx-auto mb-12 max-w-3xl animate-[fadeInUp_1s_ease-out_0.4s_forwards] text-2xl text-gray-300 opacity-0">
				Walls, ceilings, trim, and doors with careful prep and a clean finish. Edmonton's trusted painting
				professionals.
			</p>
			<div class="flex animate-[fadeInUp_1s_ease-out_0.6s_forwards] justify-center gap-6 opacity-0">
				<button
					class="rounded-full bg-lime-500 px-12 py-5 text-lg font-bold text-gray-900 transition-all hover:scale-105 hover:bg-lime-400"
				>
					Request Free Quote
				</button>
				<button
					class="rounded-full border border-white/20 bg-white/10 px-12 py-5 text-lg font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
				>
					Call: (780) 555-0123
				</button>
			</div>
		</div>
	</section>

	<!-- What We Paint - Bento Grid -->
	<section class="bg-white px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<h2 class="mb-4 text-[72px] font-bold text-gray-900">What We Paint</h2>
			<p class="mb-16 max-w-2xl text-xl text-gray-600">
				Every surface in your Edmonton home, prepared and painted to perfection
			</p>

			<div class="grid grid-cols-12 gap-6">
				<!-- Large Feature Box -->
				<div class="col-span-12 row-span-2 rounded-3xl border-2 border-gray-200 bg-gray-50 p-16 lg:col-span-7">
					<div class="mb-8 flex items-start gap-8">
						<div class="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-lime-500">
							<svg class="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
						</div>
						<div>
							<h3 class="mb-4 text-4xl font-bold text-gray-900">Residential Interiors</h3>
							<p class="text-xl text-gray-600">Complete interior transformations for Edmonton homes</p>
						</div>
					</div>
					<img src="/image-7.png" alt="Interior painting" class="h-96 w-full rounded-2xl object-cover" />
				</div>

				<!-- Walls -->
				<div class="col-span-6 rounded-3xl bg-lime-500 p-12 text-white lg:col-span-5">
					<h3 class="mb-4 text-4xl font-bold">Walls</h3>
					<p class="mb-8 text-lg opacity-90">
						Smooth, even coverage on all wall surfaces. Perfect for Edmonton's dry climate.
					</p>
					<ul class="space-y-3">
						<li class="flex items-center gap-3">
							<span class="h-2 w-2 rounded-full bg-white"></span>
							<span>Living rooms & bedrooms</span>
						</li>
						<li class="flex items-center gap-3">
							<span class="h-2 w-2 rounded-full bg-white"></span>
							<span>Hallways & entryways</span>
						</li>
						<li class="flex items-center gap-3">
							<span class="h-2 w-2 rounded-full bg-white"></span>
							<span>Accent walls</span>
						</li>
					</ul>
				</div>

				<!-- Ceilings -->
				<div class="col-span-6 rounded-3xl bg-gray-900 p-12 text-white lg:col-span-5">
					<h3 class="mb-4 text-4xl font-bold">Ceilings</h3>
					<p class="mb-8 text-lg text-gray-300">Expert ceiling painting including textured and vaulted ceilings.</p>
					<ul class="space-y-3 text-gray-300">
						<li class="flex items-center gap-3">
							<span class="h-2 w-2 rounded-full bg-lime-500"></span>
							<span>Flat & textured surfaces</span>
						</li>
						<li class="flex items-center gap-3">
							<span class="h-2 w-2 rounded-full bg-lime-500"></span>
							<span>Cathedral ceilings</span>
						</li>
						<li class="flex items-center gap-3">
							<span class="h-2 w-2 rounded-full bg-lime-500"></span>
							<span>Crown molding integration</span>
						</li>
					</ul>
				</div>

				<!-- Trim & Doors -->
				<div class="col-span-6 rounded-3xl border-2 border-gray-900 bg-gray-50 p-10 lg:col-span-4">
					<h3 class="mb-4 text-3xl font-bold text-gray-900">Trim & Baseboards</h3>
					<p class="mb-6 text-gray-600">Crisp, clean lines on all trim work</p>
					<img src="/image-36.png" alt="Trim painting" class="h-48 w-full rounded-xl object-cover" />
				</div>

				<div class="col-span-6 rounded-3xl border-2 border-gray-900 bg-gray-50 p-10 lg:col-span-4">
					<h3 class="mb-4 text-3xl font-bold text-gray-900">Doors & Frames</h3>
					<p class="mb-6 text-gray-600">Interior doors painted or stained</p>
					<img src="/image-3.png" alt="Door painting" class="h-48 w-full rounded-xl object-cover" />
				</div>

				<!-- Specialty -->
				<div class="col-span-12 flex flex-col justify-center rounded-3xl bg-lime-500 p-10 text-white lg:col-span-4">
					<h3 class="mb-4 text-3xl font-bold">Specialty Surfaces</h3>
					<ul class="space-y-2">
						<li>• Closets & storage</li>
						<li>• Staircases & railings</li>
						<li>• Kitchen cabinets</li>
						<li>• Built-in shelving</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- What's Included -->
	<section class="bg-gray-900 px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<div class="mb-16 grid grid-cols-12 items-center gap-8">
				<div class="col-span-12 lg:col-span-6">
					<h2 class="mb-6 text-[72px] leading-none font-bold text-white">What's Included</h2>
					<p class="text-2xl text-gray-400">
						Professional prep, protection, and finishing for every Edmonton interior project
					</p>
				</div>
				<div class="col-span-12 lg:col-span-6">
					<img src="/image-33.png" alt="Professional painting" class="h-96 w-full rounded-3xl object-cover" />
				</div>
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				<div
					class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:border-lime-500"
				>
					<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-lime-500">
						<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-3 text-2xl font-bold text-white">Surface Prep</h3>
					<p class="text-gray-400">Light patching, sanding, and caulking to ensure smooth, professional results</p>
				</div>

				<div
					class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:border-lime-500"
				>
					<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-lime-500">
						<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
							/>
						</svg>
					</div>
					<h3 class="mb-3 text-2xl font-bold text-white">Full Protection</h3>
					<p class="text-gray-400">Drop cloths, plastic sheeting, and careful masking of all floors and furniture</p>
				</div>

				<div
					class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:border-lime-500"
				>
					<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-lime-500">
						<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
							/>
						</svg>
					</div>
					<h3 class="mb-3 text-2xl font-bold text-white">Premium Priming</h3>
					<p class="text-gray-400">High-quality primer for even coverage and long-lasting adhesion</p>
				</div>

				<div
					class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:border-lime-500"
				>
					<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-lime-500">
						<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
							/>
						</svg>
					</div>
					<h3 class="mb-3 text-2xl font-bold text-white">Crisp Cut Lines</h3>
					<p class="text-gray-400">Hand-cut edges on all trim, corners, and architectural details</p>
				</div>

				<div
					class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:border-lime-500"
				>
					<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-lime-500">
						<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg>
					</div>
					<h3 class="mb-3 text-2xl font-bold text-white">Daily Cleanup</h3>
					<p class="text-gray-400">End-of-day tidying so your home stays livable during the project</p>
				</div>

				<div
					class="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:border-lime-500"
				>
					<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-lime-500">
						<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
							/>
						</svg>
					</div>
					<h3 class="mb-3 text-2xl font-bold text-white">Final Walkthrough</h3>
					<p class="text-gray-400">Detailed inspection with you to ensure complete satisfaction</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Process -->
	<section class="bg-white px-6 py-32">
		<div class="mx-auto max-w-7xl">
			<h2 class="mb-16 text-center text-[72px] font-bold text-gray-900">Our Process</h2>

			<div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
				<div class="relative">
					<div class="absolute -top-6 -left-6 text-[120px] font-bold text-lime-500 opacity-20">01</div>
					<div class="relative rounded-3xl border-2 border-gray-200 bg-gray-50 p-10">
						<h3 class="mb-4 text-3xl font-bold text-gray-900">Estimate</h3>
						<p class="mb-6 text-gray-600">Free in-home consultation and detailed quote for your Edmonton property</p>
						<img src="/viv-1.avif" alt="Estimate" class="h-48 w-full rounded-xl object-cover" />
					</div>
				</div>

				<div class="relative">
					<div class="absolute -top-6 -left-6 text-[120px] font-bold text-lime-500 opacity-20">02</div>
					<div class="relative rounded-3xl border-2 border-gray-200 bg-gray-50 p-10">
						<h3 class="mb-4 text-3xl font-bold text-gray-900">Prep & Protect</h3>
						<p class="mb-6 text-gray-600">Thorough surface preparation and complete protection of your belongings</p>
						<img src="/image-36.png" alt="Prep work" class="h-48 w-full rounded-xl object-cover" />
					</div>
				</div>

				<div class="relative">
					<div class="absolute -top-6 -left-6 text-[120px] font-bold text-lime-500 opacity-20">03</div>
					<div class="relative rounded-3xl border-2 border-gray-200 bg-gray-50 p-10">
						<h3 class="mb-4 text-3xl font-bold text-gray-900">Paint & Detail</h3>
						<p class="mb-6 text-gray-600">Expert application with attention to every corner and edge</p>
						<img src="/image-3.png" alt="Painting" class="h-48 w-full rounded-xl object-cover" />
					</div>
				</div>

				<div class="relative">
					<div class="absolute -top-6 -left-6 text-[120px] font-bold text-lime-500 opacity-20">04</div>
					<div class="relative rounded-3xl border-2 border-gray-200 bg-gray-50 p-10">
						<h3 class="mb-4 text-3xl font-bold text-gray-900">Final Review</h3>
						<p class="mb-6 text-gray-600">Walkthrough and touch-ups to ensure your complete satisfaction</p>
						<img src="/image-7.png" alt="Final review" class="h-48 w-full rounded-xl object-cover" />
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQs -->
	<section class="bg-gray-50 px-6 py-32">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-16 text-center text-[72px] font-bold text-gray-900">Common Questions</h2>

			<div class="space-y-6">
				<details class="group overflow-hidden rounded-2xl border-2 border-gray-200 bg-white">
					<summary
						class="flex cursor-pointer items-center justify-between p-8 text-2xl font-bold text-gray-900 transition-colors hover:text-lime-500"
					>
						How much does it cost to paint a room in Edmonton?
						<span class="text-4xl text-lime-500 transition-transform group-open:rotate-45">+</span>
					</summary>
					<div class="px-8 pb-8 text-lg text-gray-600">
						Most rooms range from $400-$800 depending on size, ceiling height, and condition. Edmonton's 2-story homes
						typically cost $3,500-$6,500 for full interior painting. We provide detailed, itemized quotes after our free
						consultation.
					</div>
				</details>

				<details class="group overflow-hidden rounded-2xl border-2 border-gray-200 bg-white">
					<summary
						class="flex cursor-pointer items-center justify-between p-8 text-2xl font-bold text-gray-900 transition-colors hover:text-lime-500"
					>
						How long does interior painting take?
						<span class="text-4xl text-lime-500 transition-transform group-open:rotate-45">+</span>
					</summary>
					<div class="px-8 pb-8 text-lg text-gray-600">
						A single room takes 1-2 days including prep and 2 coats. Full home interiors typically take 5-10 days. We
						work efficiently while maintaining quality, and Edmonton's low humidity helps paint dry faster.
					</div>
				</details>

				<details class="group overflow-hidden rounded-2xl border-2 border-gray-200 bg-white">
					<summary
						class="flex cursor-pointer items-center justify-between p-8 text-2xl font-bold text-gray-900 transition-colors hover:text-lime-500"
					>
						Do you move furniture or should we?
						<span class="text-4xl text-lime-500 transition-transform group-open:rotate-45">+</span>
					</summary>
					<div class="px-8 pb-8 text-lg text-gray-600">
						We move and protect furniture as part of our service. For heavy or delicate items like pianos or antiques,
						we ask that you arrange specialized movers. Everything else, we handle.
					</div>
				</details>

				<details class="group overflow-hidden rounded-2xl border-2 border-gray-200 bg-white">
					<summary
						class="flex cursor-pointer items-center justify-between p-8 text-2xl font-bold text-gray-900 transition-colors hover:text-lime-500"
					>
						What paint sheen should I choose?
						<span class="text-4xl text-lime-500 transition-transform group-open:rotate-45">+</span>
					</summary>
					<div class="px-8 pb-8 text-lg text-gray-600">
						We recommend eggshell for living spaces (easy to clean, subtle sheen), flat for ceilings, and semi-gloss for
						trim and high-traffic areas. Edmonton's dry climate means less moisture concerns, giving you more
						flexibility.
					</div>
				</details>

				<details class="group overflow-hidden rounded-2xl border-2 border-gray-200 bg-white">
					<summary
						class="flex cursor-pointer items-center justify-between p-8 text-2xl font-bold text-gray-900 transition-colors hover:text-lime-500"
					>
						Can you paint during Edmonton winters?
						<span class="text-4xl text-lime-500 transition-transform group-open:rotate-45">+</span>
					</summary>
					<div class="px-8 pb-8 text-lg text-gray-600">
						Yes! Interior painting is perfect year-round in Edmonton. We maintain proper ventilation and temperature
						control. Winter is actually our busy season as homeowners prepare for holiday gatherings.
					</div>
				</details>

				<details class="group overflow-hidden rounded-2xl border-2 border-gray-200 bg-white">
					<summary
						class="flex cursor-pointer items-center justify-between p-8 text-2xl font-bold text-gray-900 transition-colors hover:text-lime-500"
					>
						Do you offer color consultation?
						<span class="text-4xl text-lime-500 transition-transform group-open:rotate-45">+</span>
					</summary>
					<div class="px-8 pb-8 text-lg text-gray-600">
						Yes! We help you select colors that work with Edmonton's natural light patterns and your home's
						architecture. We can provide sample patches on your walls to see colors in your actual lighting conditions.
					</div>
				</details>
			</div>
		</div>
	</section>

	<!-- Service Areas -->
	<section class="bg-lime-500 px-6 py-32">
		<div class="mx-auto max-w-7xl text-center">
			<h2 class="mb-12 text-[72px] font-bold text-white">Serving Edmonton & Area</h2>
			<div class="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
				<div class="rounded-2xl bg-white/10 p-8 backdrop-blur">
					<h3 class="mb-2 text-3xl font-bold text-white">Edmonton</h3>
					<p class="text-white/80">All Quadrants</p>
				</div>
				<div class="rounded-2xl bg-white/10 p-8 backdrop-blur">
					<h3 class="mb-2 text-3xl font-bold text-white">St. Albert</h3>
					<p class="text-white/80">Full Coverage</p>
				</div>
				<div class="rounded-2xl bg-white/10 p-8 backdrop-blur">
					<h3 class="mb-2 text-3xl font-bold text-white">Sherwood Park</h3>
					<p class="text-white/80">All Areas</p>
				</div>
				<div class="rounded-2xl bg-white/10 p-8 backdrop-blur">
					<h3 class="mb-2 text-3xl font-bold text-white">Fort Saskatchewan</h3>
					<p class="text-white/80">Complete Service</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Final CTA -->
	<section class="bg-gray-900 px-6 py-32">
		<div class="mx-auto max-w-5xl text-center">
			<h2 class="mb-8 text-[72px] font-bold text-white">Ready to Transform Your Space?</h2>
			<p class="mb-12 text-2xl text-gray-400">
				Dolor ut quia repellendus. Dolor modi ut pariatur quia. Repellendus earum nam voluptatem inventore.
			</p>
			<div class="flex flex-col justify-center gap-6 sm:flex-row">
				<button
					class="rounded-full bg-lime-500 px-16 py-6 text-xl font-bold text-gray-900 transition-all hover:scale-105 hover:bg-lime-400"
				>
					Request Free Quote
				</button>
				<button
					class="rounded-full border border-white/20 bg-white/10 px-16 py-6 text-xl font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
				>
					Call: (780) 555-0123
				</button>
			</div>
		</div>
	</section>
</div>

<style>
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	details summary::-webkit-details-marker {
		display: none;
	}
</style>
