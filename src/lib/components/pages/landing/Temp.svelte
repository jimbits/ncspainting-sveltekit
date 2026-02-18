<script lang="ts">
	// Temp Component - Modern Minimalist Bento Grid Layout
</script>

<section class="relative isolate overflow-hidden bg-white py-16 md:py-24">
	<!-- Subtle Background Pattern -->
	<div class="absolute inset-0 -z-10 overflow-hidden">
		<svg viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg" class="h-full w-full object-cover opacity-5">
			<defs>
				<filter id="temp-blur" x="-50%" y="-50%" width="200%" height="200%">
					<feGaussianBlur stdDeviation="50" />
				</filter>
			</defs>
			<circle cx="720" cy="450" r="300" fill="gray" filter="url(#temp-blur)" />
		</svg>
	</div>

	<div class="container mx-auto px-4">
		<!-- Section Header -->
		<header class="mb-12 text-center">
			<span
				class="mb-4 inline-block rounded-full bg-gray-100 px-4 py-1 text-xs font-bold tracking-widest text-gray-700 uppercase"
			>
				Temp Section
			</span>
			<h2 class="mb-4 text-4xl leading-tight font-black text-black md:text-5xl lg:text-6xl">
				Modern <span class="text-gray-600">Design</span>
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				A minimalist approach to showcasing content with a clean bento grid layout.
			</p>
		</header>

		<!-- Bento Grid Layout -->
		<div class="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			<!-- Large Hero Card - spans 2 cols, 2 rows -->
			<div
				class="group relative col-span-1 row-span-2 overflow-hidden rounded-3xl bg-gray-900 md:col-span-2 lg:col-span-2"
			>
				<img
					src="/hero-4.jpg"
					alt="Hero image for temp section"
					class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
					loading="lazy"
				/>
				<div class="absolute inset-0 bg-black/30"></div>
				<div class="absolute bottom-6 left-6 text-white">
					<h3 class="text-2xl font-bold">Featured Content</h3>
					<p class="text-sm opacity-90">Highlight your key message here</p>
				</div>
			</div>

			<!-- Small Card 1 -->
			<div class="col-span-1 row-span-1 rounded-3xl bg-gray-50 p-6 md:col-span-1 lg:col-span-1">
				<h3 class="mb-4 text-xl font-bold text-black">Card Title</h3>
				<p class="text-sm text-gray-700">Brief description of the content in this card.</p>
			</div>

			<!-- Small Card 2 -->
			<div class="col-span-1 row-span-1 rounded-3xl bg-black p-6 text-white md:col-span-1 lg:col-span-1">
				<h3 class="mb-4 text-xl font-bold">Another Card</h3>
				<p class="text-sm opacity-90">More information or a call to action.</p>
			</div>

			<!-- Medium Card - spans 2 cols -->
			<div class="col-span-1 row-span-1 rounded-3xl bg-gray-100 p-6 md:col-span-2 lg:col-span-2">
				<h3 class="mb-4 text-2xl font-bold text-black">Wider Content</h3>
				<p class="text-sm text-gray-700">This card spans two columns for more detailed content or multiple elements.</p>
				<div class="mt-4 grid grid-cols-2 gap-4">
					<div class="text-center">
						<div class="text-2xl font-bold text-gray-600">1</div>
						<p class="text-xs text-gray-500">Item 1</p>
					</div>
					<div class="text-center">
						<div class="text-2xl font-bold text-gray-600">2</div>
						<p class="text-xs text-gray-500">Item 2</p>
					</div>
				</div>
			</div>

			<!-- Small Card 3 -->
			<div class="col-span-1 row-span-1 rounded-3xl border border-gray-200 bg-white p-6 md:col-span-1 lg:col-span-1">
				<h3 class="mb-4 text-xl font-bold text-black">Info Card</h3>
				<ul class="space-y-2 text-sm text-gray-700">
					<li>• Point one</li>
					<li>• Point two</li>
					<li>• Point three</li>
				</ul>
			</div>

			<!-- Small Card 4 -->
			<div class="col-span-1 row-span-1 rounded-3xl bg-gray-900 p-6 text-white md:col-span-1 lg:col-span-1">
				<h3 class="mb-4 text-xl font-bold">FAQ</h3>
				<details>
					<summary class="cursor-pointer font-semibold">Question?</summary>
					<p class="mt-2 text-sm opacity-90">Answer here.</p>
				</details>
			</div>

			<!-- Full Width CTA - spans all 4 cols -->
			<div class="col-span-1 row-span-1 rounded-3xl bg-black p-8 text-center text-white md:col-span-2 lg:col-span-4">
				<h3 class="mb-4 text-2xl font-bold">Call to Action</h3>
				<p class="mb-6 text-gray-300">Encourage user engagement with a clear next step.</p>
				<div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
					<a
						href="#"
						class="rounded-full bg-white px-8 py-3 font-semibold text-black transition-colors hover:bg-gray-100"
						aria-label="Primary action"
					>
						Primary Button
					</a>
					<a
						href="#"
						class="rounded-full bg-gray-700 px-8 py-3 font-semibold text-white transition-colors hover:bg-gray-600"
						aria-label="Secondary action"
					>
						Secondary Button
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
