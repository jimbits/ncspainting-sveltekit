<script lang="ts">
	import Dialog from '$lib/components/modals/Dialog.svelte';
	import QuoteForm from '$lib/components/modals/content/QuoteForm.svelte';

	let isOpen = $state(false);
</script>

<section id="interior-painting" class="relative isolate overflow-hidden py-16 md:py-24">
	<div class="container mx-auto px-4">
		<!-- Section Header -->
		<header class="mb-12 text-center">
			<span
				class="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1 text-xs font-bold tracking-widest text-emerald-700 uppercase"
			>
				Interior Services
			</span>
			<h2 class="mb-4 text-4xl leading-tight font-black text-slate-900 md:text-5xl lg:text-6xl">
				Interior Painting <span class="text-emerald-500">Services</span>
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-slate-600">
				Interior painting in Edmonton for walls, ceilings, trim, and doors—with careful prep and a clean finish.
			</p>
		</header>

		<!-- Bento Grid -->
		<div class="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
			<!-- Large Feature Image - spans 2 cols, 2 rows -->
			<div class="group relative col-span-1 row-span-2 overflow-hidden rounded-3xl md:col-span-2 lg:col-span-2">
				<img
					src="/image-41.png"
					alt="Professional interior painting in Edmonton"
					class="h-full min-h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
				<div class="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
				<div class="absolute bottom-0 left-0 p-6 md:p-8">
					<h3 class="mb-2 text-2xl font-bold text-white md:text-3xl">Transform Your Space</h3>
					<p class="max-w-sm text-sm text-slate-200">
						We focus on the details that make interiors feel "new": smooth surfaces, crisp cut lines, and a clean job
						site from start to finish.
					</p>
				</div>
			</div>

			<!-- What's Included Card -->

			<div class="lg:col-span- col-span-1 row-span-2 space-y-8 rounded-3xl bg-slate-900 p-6 md:col-span-2">
				<div>
					<h4 class="mb-4 text-lg font-bold text-white">We Specialize In Interiors</h4>
					<div class="grid grid-cols-2 gap-2">
						<span class="rounded-lg bg-slate-800 px-3 py-2 text-center text-sm font-medium text-slate-200">Walls</span>
						<span class="rounded-lg bg-slate-800 px-3 py-2 text-center text-sm font-medium text-slate-200">
							Ceilings
						</span>
						<span class="rounded-lg bg-slate-800 px-3 py-2 text-center text-sm font-medium text-slate-200">Trim</span>
						<span class="rounded-lg bg-slate-800 px-3 py-2 text-center text-sm font-medium text-slate-200">Doors</span>
						<span class="rounded-lg bg-slate-800 px-3 py-2 text-center text-sm font-medium text-slate-200">
							Hallways
						</span>
						<span class="rounded-lg bg-slate-800 px-3 py-2 text-center text-sm font-medium text-slate-200">
							Bathrooms
						</span>
						<span class="rounded-lg bg-slate-800 px-3 py-2 text-center text-sm font-medium text-slate-200">
							Family Rooms
						</span>
						<span class="rounded-lg bg-slate-800 px-3 py-2 text-center text-sm font-medium text-slate-200">
							Kitchens
						</span>
					</div>
				</div>
				<div class="flex gap-8 rounded-3xl bg-emerald-50/15 p-6 shadow-lg">
					<div class="md:flex-2">
						<h4 class="mb-4 text-lg font-bold text-white">What's Included</h4>
						<ul class="space-y-3">
							<li class="flex items-start gap-3">
								<svg
									class="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-sm text-white/80">Light patching, sanding & surface prep</span>
							</li>
							<li class="flex items-start gap-3">
								<svg
									class="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-sm text-white/80">Protection for floors & furniture</span>
							</li>
							<li class="flex items-start gap-3">
								<svg
									class="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-sm text-white">Crisp cut lines on trim & corners</span>
							</li>
							<li class="flex items-start gap-3">
								<svg
									class="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-sm text-white">Priming for even coverage</span>
							</li>
							<li class="flex items-start gap-3">
								<svg
									class="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
								</svg>
								<span class="text-sm text-white/80">Daily cleanup & final walkthrough</span>
							</li>
						</ul>
					</div>
					<div class="hidden rounded-3xl bg-emerald-400 p-6 shadow-lg md:block md:flex-1">
						<h4 class="mb-4 text-lg font-bold text-gray-950">Action</h4>
					</div>
				</div>
			</div>

			<!-- Small Image Card -->
			<div class="group relative col-span-1 overflow-hidden rounded-3xl">
				<img
					src="/image-38.png"
					alt="Interior wall painting Edmonton"
					class="h-full min-h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
			</div>

			<!-- FAQ Card 1 -->
			<div class="col-span-1 rounded-3xl bg-white p-6 shadow-lg">
				<div class="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
					<svg class="h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<h4 class="mb-2 text-sm font-bold text-slate-900">How much does it cost to paint a room?</h4>
				<p class="text-xs leading-relaxed text-slate-500">
					Cost depends on room size, wall condition, paint choice, and prep. Request a free quote for an exact price.
				</p>
			</div>

			<!-- Second Small Image -->
			<div class="group relative col-span-1 overflow-hidden rounded-3xl">
				<img
					src="/image-46.png"
					alt="Detailed prep work for painting"
					class="h-full min-h-[180px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
				/>
			</div>

			<!-- Interior Gallery -->
			<div class="col-span-1 flex flex-col items-center justify-center rounded-3xl bg-white p-6 text-center shadow-lg">
				<p class="text-5xl font-black text-emerald-400">Interior Painting Gallery Call To Action</p>
			</div>
		</div>

		<!-- CTA Footer -->
		<footer
			class="mt-12 flex flex-col items-center gap-6 rounded-3xl bg-slate-900 p-8 md:p-10 xl:flex-row xl:justify-between xl:gap-12"
		>
			<div class=" ">
				<h3 class="mb-2 text-2xl font-bold text-white md:text-3xl">Ready to refresh your interior?</h3>
				<p class=" text-sm text-slate-400">Get a free, no-obligation quote for your Edmonton home.</p>
			</div>
			<div class="flex flex-row gap-4">
				<button
					onclick={() => (isOpen = true)}
					class="rounded-xl bg-emerald-500 px-4 py-4 text-center text-sm font-bold text-white transition-all hover:bg-emerald-600 hover:shadow-xl sm:px-8 sm:text-base"
				>
					Get a Free Quote →
				</button>

				<Dialog bind:open={isOpen}>
					<QuoteForm />
				</Dialog>
				<a
					href="tel:5872084445"
					class="flex items-center justify-center gap-2 rounded-xl bg-transparent px-4 py-4 text-center text-sm font-bold text-white transition-all hover:bg-emerald-500/25 sm:text-base"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
						/>
					</svg>
					Call 587-208-4445
				</a>
			</div>
		</footer>
	</div>
</section>
