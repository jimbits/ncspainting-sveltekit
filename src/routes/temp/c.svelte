<script>
	import { CircleCheck } from '@lucide/svelte';
</script>

<section class="bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
	<!-- Section Header -->
	<div class="mx-auto mb-16 max-w-2xl text-center">
		<span
			class="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold tracking-widest text-slate-500 uppercase shadow-sm"
		>
			<span class="inline-block h-2 w-2 rounded-full bg-sky-400"></span>
			NCS Exterior Services
		</span>
		<h2 class="mb-4 text-5xl leading-tight font-black tracking-tight text-slate-900 sm:text-6xl">
			Top <span class="text-sky-500">Exterior Painting Services</span>
			in Edmonton
		</h2>
		<p class="text-lg leading-relaxed text-slate-500">
			NCS Painting delivers high-demand exterior services with prep-first workmanship and durable finishes built for
			Edmonton weather.
		</p>
	</div>

	<!-- Bento Grid -->
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
		<!-- Row 1: Image left (tall), two feature cards right -->
		<div class="min-h-[420px] overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm md:row-span-2">
			<img src="image-12.png" alt="Exterior house painting project in Edmonton" class="h-full w-full object-cover" />
		</div>

		<div class="rounded-3xl border border-slate-800 bg-slate-950 p-4 shadow-sm sm:p-5">
			<div class="flex flex-col gap-5">
				<div class="overflow-hidden rounded-2xl border border-slate-800">
					<img
						src="hero-21.jpg"
						alt="NCS exterior house painting service in Edmonton"
						class="h-56 w-full object-cover sm:h-64"
					/>
				</div>
				<div class="flex flex-col justify-between">
					<div>
						<h3 class="mb-3 text-3xl font-bold text-white sm:text-4xl">Exterior House Painting Edmonton</h3>
						<p class="leading-relaxed text-slate-300">
							NCS Painting provides full-service exterior house painting with prep-first workmanship and finishes built
							for Edmonton weather.
						</p>
						<ul class="space-y-1.5 px-1 py-4 text-white">
							<li class="flex items-center gap-2 text-xl font-medium text-slate-400">
								<CircleCheck class="h-5 w-5" /> Enhanced curb appeal
							</li>
							<li class="flex items-center gap-2 text-xl font-medium text-slate-400">
								<CircleCheck class="h-5 w-5" /> Increas your properties value
							</li>
							<li class="flex items-center gap-2 text-xl font-medium text-slate-400">
								<CircleCheck class="h-5 w-5" /> Protection from harsh climate
							</li>
							<li class="flex items-center gap-2 text-xl font-medium text-slate-400">
								<CircleCheck class="h-5 w-5" /> Increase durability of window doors and siding
							</li>
						</ul>
					</div>

					<div class="mt-5 grid grid-cols-1 gap-3">
						<a
							href="/exterior-services"
							class="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-lime-500 p-4 text-base font-semibold text-white transition hover:bg-green-400"
						>
							All about NCS Exteriors Services
						</a>
						<a
							href="/gallery/old-gallery"
							class="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 p-4 text-base font-semibold text-white transition hover:bg-white/15"
						>
							Exterior Gallery
						</a>
					</div>
				</div>
			</div>
		</div>

		<div class="  rounded-3xl bg-transparent p-4 shadow-sm sm:p-6">
			<p class="mb-2 w-fit rounded-lg bg-lime-200 px-2 py-1 text-sm text-lime-700">Faster is not always better.</p>
			<h3 class="mb-4 text-5xl font-bold">Deck & Fence Painting</h3>
			<p class="font-medium text-gray-700">
				When it comes to decks and fences it's all about the surface preparation. Primers and durable exterior coatings
				are only as good as the surface there applied to. If your want a weather-ready durable finish that last the test
				of time don't skip the prep.
			</p>
		</div>

		<!-- Row 2: two feature cards left, image right (tall) -->
		<div class="flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
			<div>
				<h3 class="mb-3 text-2xl font-bold text-slate-900">Stucco Painting Edmonton</h3>
				<p class="leading-relaxed text-slate-500">
					We patch and prep textured surfaces before applying breathable, weather-resistant coatings designed for stucco
					in Alberta conditions.
				</p>
			</div>
		</div>

		<div class="min-h-[420px] overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm md:row-span-2">
			<img src="deck-1.png" alt="Deck and fence staining service in Edmonton" class="h-full w-full object-cover" />
		</div>

		<div class="flex flex-col justify-between rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
			<div>
				<h3 class="mb-3 text-2xl font-bold text-slate-900">Deck &amp; Fence Staining Edmonton</h3>
				<p class="leading-relaxed text-slate-500">
					Protect your outdoor wood surfaces with professional deck and fence staining that improves appearance and
					helps extend service life.
				</p>
			</div>
		</div>
	</div>

	<!-- CTA Footer -->
	<div class="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
		<a
			href="/exterior-services"
			class="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-sm transition-colors duration-200 hover:bg-slate-700"
		>
			View Exterior Services
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
			href="/locations"
			class="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-900 shadow-sm transition-colors duration-200 hover:bg-slate-50"
		>
			See Service Areas
		</a>
	</div>
</section>
