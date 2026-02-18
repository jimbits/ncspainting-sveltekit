<script lang="ts">
	import { Check, Plus } from '@lucide/svelte';

	const benefits = [
		'Fast, free estimates',
		'Careful prep + protected floors',
		'Clean lines on trim and edges',
		'Daily cleanup + final walkthrough',
		'Friendly, professional crews',
		'Licensed and Insured'
	];
</script>

<section class="  relative isolate overflow-hidden pb-12">
	<!-- BACKGROUND EFFECTS -->
	<div class="absolute inset-0 -z-10 overflow-hidden bg-orange-50">
		<svg viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg" class="h-full w-full object-cover">
			<defs>
				<filter id="hero-blur" x="-50%" y="-50%" width="200%" height="200%">
					<feGaussianBlur stdDeviation="80" />
				</filter>
			</defs>

			<ellipse cx="720" cy="-100" rx="800" ry="400" class="fill-orange-300/50" filter="url(#hero-blur)" />
			<circle cx="400" cy="0" r="300" fill="#F59E0B" fill-opacity="0.3" filter="url(#hero-blur)" />

			<ellipse cx="720" cy="1000" rx="900" ry="500" class="fill-orange-500/40" filter="url(#hero-blur)" />
			<circle cx="1100" cy="900" r="400" class="fill-amber-600/20" filter="url(#hero-blur)" />

			<circle cx="720" cy="450" r="400" fill="#FFFFFF" fill-opacity="0.25" filter="url(#hero-blur)" />
		</svg>

		<div class="0 absolute inset-0 bg-linear-to-b from-transparent via-orange-50 to-transparent"></div>
	</div>

	<!-- CONTENT -->
	<div class="flex min-h-[90vh] items-center">
		<div class="relative z-10 container mx-auto px-4 py-12 lg:py-20">
			<div class="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
				<!-- TEXT COLUMN -->
				<div class="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
					<h1 class="mb-6 text-5xl leading-[1.1] font-black text-slate-900 md:text-6xl lg:text-7xl">
						Professional <span class="text-orange-500">Residential</span>
						House Painting
					</h1>

					<p class="mx-auto max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl lg:mx-0">
						NCS Painting specializes in residential interior and exterior house painting. We use planet friendly
						coatings, professional application, and durable finishes built for our Edmonton climate. Experience the
						difference of 35+ years of local expertise. Roll on quality roll on NCS.
					</p>

					<!-- Bullet Points -->
					<ul class=" mx-auto grid w-fit max-w-2xl gap-y-5 sm:mb-12 sm:grid-cols-2 md:mb-16 lg:w-full">
						{#each benefits as benefit}
							<li class="0 flex items-center gap-3">
								<span
									class=" inline-flex min-h-6 min-w-6 items-center justify-center rounded-full bg-emerald-400 text-white ring-1 ring-white"
									aria-hidden="true"
								>
									✓
								</span>
								<span class="text-sm font-medium text-slate-700 sm:text-base/5">{benefit}</span>
							</li>
						{/each}
					</ul>
					<!-- Call To Action Buttons -->

					<div class="  flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
						<a
							href="/quote"
							class="w-full transform rounded-2xl bg-sky-400 px-10 py-5 font-bold text-white shadow-2xl transition-colors delay-100 duration-300 ease-in-out hover:bg-teal-500 sm:w-auto"
						>
							Get a Free Quote →
						</a>
						<a
							href="tel:17807225577"
							class=" w-full rounded-2xl bg-emerald-500 px-10 py-5 font-bold text-white shadow-sm transition-colors delay-100 duration-300 ease-in-out hover:bg-cyan-500 hover:shadow-md sm:w-auto"
						>
							Call 780-722-5577
						</a>
					</div>
				</div>
				<!--  IMAGE COLUMN -->
				<div class="relative w-full lg:w-1/2">
					<div
						class="relative z-10 overflow-hidden rounded-[3rem] border-8 border-white shadow-[0_10px_10px_3px_rgba(0,0,0,0.05)]"
					>
						<!--
					src="/viv-4.avif"
					src="/hero-23.jpg"
					-->
						<img
							src="/image-12.png"
							alt="Interior home painting in progress showing clean prep and professional finish"
							class="aspect-[4/5] h-full w-full object-cover object-center lg:aspect-square"
						/>
					</div>

					<div
						class="absolute -top-10 -right-10 z-20 hidden -rotate-3 transform cursor-default rounded-3xl bg-orange-400 p-8 text-cyan-50 shadow-2xl transition-transform hover:rotate-0 md:block"
					>
						<div class="text-4xl leading-none font-black">35+</div>
						<div class="mt-1 text-xs font-bold tracking-widest uppercase">
							Years Local
							<br />
							Experience
						</div>
					</div>

					<aside class="mt-8 overflow-hidden rounded-2xl bg-white/35">
						<div class=" bg-gray-transparant flex flex-col items-center rounded-xl p-3">
							<header
								class="  inline-flex items-center gap-2 rounded-full py-1 text-sm font-bold tracking-widest uppercase"
							>
								<!-- <span class="relative flex h-2 w-2">
									<span
										class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
									></span>
									<span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
								</span> -->
								<h3 class="text-lg">Service Area</h3>
							</header>
							<ul
								class=" grid grid-cols-3 justify-items-center gap-x-4 gap-y-1 text-sm font-semibold tracking-tight text-gray-500 uppercase md:grid-cols-3"
							>
								<li>Edmonton</li>

								<li>Sherwood Park</li>

								<li>Beaumont</li>

								<li class="col-span-3">
									<span class="pr-5">Saint Albert</span>
									<span>Fort Saskatchewan</span>
								</li>
							</ul>
						</div>
					</aside>
				</div>
			</div>
		</div>
	</div>
</section>
