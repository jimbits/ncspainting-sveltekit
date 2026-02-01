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

		<div class="0 absolute inset-0 bg-gradient-to-b from-transparent via-orange-50 to-transparent"></div>
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
					<ul class=" mb-16 grid max-w-2xl gap-y-5 sm:grid-cols-2">
						{#each benefits as benefit}
							<li class="flex items-start gap-3">
								<span
									class=" inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 text-white ring-1 ring-white/20"
									aria-hidden="true"
								>
									✓
								</span>
								<span class="text-sm font-medium text-slate-700 sm:text-base">{benefit}</span>
							</li>
						{/each}
					</ul>
					<!-- Call To Action Buttons -->

					<div class="  flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
						<a
							href="/quote"
							class="w-full transform rounded-2xl bg-sky-500 px-10 py-5 font-bold text-white shadow-2xl transition-colors delay-100 duration-300 ease-in-out hover:text-slate-950 sm:w-auto"
						>
							Get a Free Quote →
						</a>
						<a
							href="tel:17807225577"
							class=" w-full rounded-2xl bg-emerald-500 px-10 py-5 font-bold text-white shadow-sm transition-colors delay-100 duration-300 ease-in-out hover:text-neutral-950 hover:shadow-md sm:w-auto"
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
						class="absolute -top-10 -right-10 z-20 hidden -rotate-3 transform cursor-default rounded-3xl bg-orange-400 p-8 text-orange-50 shadow-2xl transition-transform text-shadow-2xs hover:rotate-0 md:block"
					>
						<div class="text-4xl leading-none font-black">35+</div>
						<div class="mt-1 text-xs font-bold tracking-widest uppercase">
							Years Local
							<br />
							Experience
						</div>
					</div>

					<aside class="mt-8 flex flex-col items-center">
						<header
							class="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-200 px-3 py-1 text-xs font-bold tracking-widest text-amber-900 uppercase"
						>
							<span class="relative flex h-2 w-2">
								<span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"
								></span>
								<span class="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
							</span>
							<p>Local Service Area</p>
						</header>
						<ul class="  flex items-center text-sm font-semibold tracking-tight uppercase">
							<li><span>Edmonton</span></li>
							<li class="mx-2"><span class="text-gray-600"><Plus class="h-3 w-3" /></span></li>
							<li><span>Sherwood Park</span></li>
							<li class="mx-2"><span class="text-gray-600"><Plus class="h-3 w-3" /></span></li>
							<li><span>Fort Saskatchewan</span></li>
							<li class="mx-2"><span class="text-gray-600"><Plus class="h-3 w-3" /></span></li>
							<li><span>St Albert</span></li>
						</ul>
					</aside>
				</div>
			</div>
		</div>
	</div>
</section>
