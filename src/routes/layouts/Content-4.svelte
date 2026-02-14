<script>
	import { onMount } from 'svelte';

	let visible = false;

	onMount(() => {
		visible = true;
	});
</script>

<svelte:head>
	<title>About NCS Painting | Edmonton Painting Company</title>
	<meta
		name="description"
		content="Learn about NCS Painting, a locally owned Edmonton painting company focused on quality prep, clean finishes, and dependable service."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-slate-50 pt-32 pb-24 md:pt-40 md:pb-32">
	<div class="mx-auto max-w-7xl px-6 md:px-8">
		<div class="max-w-4xl">
			<h1 class="mb-6 text-5xl leading-tight font-bold text-slate-900 md:text-7xl">About NCS Painting</h1>
			<p class="max-w-3xl text-xl leading-relaxed text-slate-600 md:text-2xl">
				A locally owned Edmonton painting company focused on quality prep, clean finishes, and dependable service for
				over 30 years.
			</p>
			<div class="mt-10 flex flex-col gap-4 sm:flex-row">
				<a
					href="/contact"
					class="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-slate-800"
				>
					Request a Free Quote
				</a>
				<a
					href="tel:7807225577"
					class="inline-flex items-center justify-center rounded-full border-2 border-slate-900 px-8 py-4 text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
				>
					Call the Painter
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Our Story Section -->
<section class="bg-white py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-6 md:px-8">
		<div class="grid items-center gap-16 md:grid-cols-2">
			<div>
				<h2 class="mb-8 text-4xl font-bold text-slate-900 md:text-5xl">Our Story</h2>
				<div class="space-y-6 text-lg leading-relaxed text-slate-700">
					<p>
						NCS Painting has been serving Edmonton and surrounding communities for over three decades. What started as a
						small family-owned business has grown into one of the most trusted painting companies in the region, built
						on a foundation of quality craftsmanship and honest service.
					</p>
					<p>
						Our commitment has always been simple: deliver exceptional painting results through thorough preparation,
						attention to detail, and respect for your home or business. Every project we take on reflects our dedication
						to doing things right, from the initial estimate to the final walkthrough.
					</p>
					<p>
						Today, we're proud to serve residential and commercial clients throughout Edmonton, St. Albert, Fort
						Saskatchewan, and Sherwood Park. Our experienced crews bring the same level of care and professionalism to
						every job, whether it's a single room refresh or a complete exterior transformation.
					</p>
				</div>
			</div>
			<div class="relative">
				<img src="/crew.jpg" alt="NCS Painting team" class="h-auto w-full rounded-3xl shadow-lg" loading="lazy" />
			</div>
		</div>
	</div>
</section>

<!-- What We Do Section -->
<section class="bg-slate-50 py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-6 md:px-8">
		<h2 class="mb-16 text-center text-4xl font-bold text-slate-900 md:text-5xl">What We Do</h2>
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
			<!-- Service Card 1 -->
			<div class="rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
				<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
					<svg class="h-8 w-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
						/>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-bold text-slate-900">Residential Interior Painting</h3>
				<p class="leading-relaxed text-slate-600">
					Walls, ceilings, trim, and doors with careful prep and crisp, clean lines.
				</p>
			</div>

			<!-- Service Card 2 -->
			<div class="rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
				<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
					<svg class="h-8 w-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
						/>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-bold text-slate-900">Residential Exterior Painting</h3>
				<p class="leading-relaxed text-slate-600">
					Siding, stucco, trim, and detail work built to handle Alberta weather.
				</p>
			</div>

			<!-- Service Card 3 -->
			<div class="rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
				<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
					<svg class="h-8 w-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
						/>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-bold text-slate-900">Cabinet Painting</h3>
				<p class="leading-relaxed text-slate-600">
					Professional kitchen and bath cabinet refinishing with smooth, durable finishes.
				</p>
			</div>

			<!-- Service Card 4 -->
			<div class="rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
				<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
					<svg class="h-8 w-8 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
						/>
					</svg>
				</div>
				<h3 class="mb-3 text-xl font-bold text-slate-900">Deck & Fence Staining</h3>
				<p class="leading-relaxed text-slate-600">
					Protect and refresh outdoor wood surfaces with quality stains and sealers.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose Us Section -->
<section class="bg-white py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-6 md:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">Why Homeowners Choose Us</h2>
			<p class="mx-auto max-w-3xl text-xl text-slate-600">
				We've built our reputation on consistent quality, clear communication, and treating every home with care.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-3 lg:gap-12">
			<!-- Benefit 1 -->
			<div class="text-center">
				<div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100">
					<img src="/cleanlines.png" alt="Clean lines icon" class="h-12 w-12" loading="lazy" />
				</div>
				<h3 class="mb-4 text-2xl font-bold text-slate-900">Clear Estimates & Scope</h3>
				<p class="text-lg leading-relaxed text-slate-600">
					We provide detailed, upfront estimates so you know exactly what to expect—no hidden costs or surprises.
				</p>
			</div>

			<!-- Benefit 2 -->
			<div class="text-center">
				<div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100">
					<img src="/prepwork.png" alt="Prep work icon" class="h-12 w-12" loading="lazy" />
				</div>
				<h3 class="mb-4 text-2xl font-bold text-slate-900">Clean Prep & Tidy Sites</h3>
				<p class="text-lg leading-relaxed text-slate-600">
					Proper preparation is the foundation of every quality paint job. We protect your space and clean up daily.
				</p>
			</div>

			<!-- Benefit 3 -->
			<div class="text-center">
				<div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-100">
					<img src="/insured.png" alt="Professional crew icon" class="h-12 w-12" loading="lazy" />
				</div>
				<h3 class="mb-4 text-2xl font-bold text-slate-900">Professional Crews</h3>
				<p class="text-lg leading-relaxed text-slate-600">
					Our experienced teams are friendly, respectful, and committed to delivering work you'll be proud to show off.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Service Areas Section -->
<section class="bg-slate-50 py-24 md:py-32">
	<div class="mx-auto max-w-7xl px-6 md:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">Service Areas</h2>
			<p class="mx-auto max-w-3xl text-xl text-slate-600">
				Proudly serving Edmonton and surrounding communities with reliable, professional painting services.
			</p>
		</div>

		<div class="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<div class="rounded-3xl bg-white p-8 text-center shadow-sm">
				<h3 class="text-2xl font-bold text-slate-900">Edmonton</h3>
			</div>
			<div class="rounded-3xl bg-white p-8 text-center shadow-sm">
				<h3 class="text-2xl font-bold text-slate-900">St. Albert</h3>
			</div>
			<div class="rounded-3xl bg-white p-8 text-center shadow-sm">
				<h3 class="text-2xl font-bold text-slate-900">Fort Saskatchewan</h3>
			</div>
			<div class="rounded-3xl bg-white p-8 text-center shadow-sm">
				<h3 class="text-2xl font-bold text-slate-900">Sherwood Park</h3>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="bg-slate-900 py-24 md:py-32">
	<div class="mx-auto max-w-4xl px-6 text-center md:px-8">
		<h2 class="mb-6 text-4xl font-bold text-white md:text-5xl">Ready to Transform Your Space?</h2>
		<p class="mb-10 text-xl leading-relaxed text-slate-300">
			Get a free, no-obligation estimate for your painting project. We'll respond quickly with clear pricing and
			scheduling options.
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/contact"
				class="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition-colors hover:bg-slate-100"
			>
				Request a Free Quote
			</a>
			<a
				href="tel:7807225577"
				class="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-slate-900"
			>
				Call the Painter
			</a>
		</div>
	</div>
</section>

<style>
	section {
		animation: fadeIn 0.6s ease-in;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	:global(body) {
		font-family: 'Inter', sans-serif;
	}
</style>
