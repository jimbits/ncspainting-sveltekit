<script lang="ts">
	import { Button } from '$lib/ui/button';
	import { Check, Plus } from 'lucide-svelte';

	const benefits = [
		'Fast, free estimates',
		'Careful prep + protected floors',
		'Clean lines on trim and edges',
		'Daily cleanup + final walkthrough',
		'Friendly, professional crews'
	];
</script>

<section class="relative isolate overflow-hidden pb-24">
	<!-- BACKGROUND EFFECTS -->
	<div class="absolute inset-0 -z-10 overflow-hidden bg-stone-50">
		<svg viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg" class="h-full w-full object-cover">
			<defs>
				<filter id="hero-blur" x="-50%" y="-50%" width="200%" height="200%">
					<feGaussianBlur stdDeviation="80" />
				</filter>
			</defs>
			<ellipse cx="720" cy="-100" rx="800" ry="400" class="fill-orange-300/30" filter="url(#hero-blur)" />
			<circle cx="400" cy="0" r="300" fill="#F59E0B" fill-opacity="0.2" filter="url(#hero-blur)" />
			<ellipse cx="720" cy="1000" rx="900" ry="500" class="fill-orange-500/20" filter="url(#hero-blur)" />
			<circle cx="1100" cy="900" r="400" class="fill-amber-600/10" filter="url(#hero-blur)" />
			<circle cx="720" cy="450" r="400" fill="#FFFFFF" fill-opacity="0.2" filter="url(#hero-blur)" />
		</svg>
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-stone-50 to-transparent"></div>
	</div>

	<!-- CONTENT -->
	<div class="flex min-h-[90vh] items-center py-12 sm:py-20 lg:py-0">
		<div class="relative z-10 container mx-auto px-4">
			<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
				<!-- TEXT COLUMN -->
				<div class="text-center lg:text-left">
					<h1 class="mb-4 text-4xl leading-tight font-black text-stone-900 sm:text-5xl md:text-6xl lg:text-7xl">
						House Painters in Edmonton
					</h1>

					<p class="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-stone-600 md:text-xl lg:mx-0">
						Interior & exterior painting with clean prep, clear communication, and a finish you’ll love.
					</p>

					<ul class="mb-10 grid max-w-lg gap-3 text-left sm:mx-auto lg:mx-0">
						{#each benefits as benefit}
							<li class="flex items-start gap-3">
								<Check class="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
								<span class="font-medium text-stone-700">{benefit}</span>
							</li>
						{/each}
					</ul>

					<div class="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
						<Button href="/quote" size="lg" class="w-full sm:w-auto">Request a Free Quote</Button>
						<Button href="tel:17807225577" size="lg" variant="outline" class="w-full sm:w-auto">
							Call the Painter
						</Button>
					</div>
				</div>

				<!-- IMAGE COLUMN -->
				<div class="relative w-full">
					<div class="relative z-10 overflow-hidden rounded-[2rem] border-8 border-white shadow-xl">
						<picture>
							<!-- You can add <source> tags here for different image formats or sizes -->
							<img
								src="/hero-12.jpg"
								alt="A freshly painted modern home exterior by Edmonton house painters."
								class="aspect-[4/5] h-full w-full object-cover object-center lg:aspect-square"
								fetchpriority="high"
								loading="eager"
								width="800"
								height="1000"
							/>
						</picture>
					</div>
					<footer class="mt-8 flex flex-col items-center">
						<header
							class="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-200 px-3 py-1 text-xs font-bold tracking-widest text-amber-900 uppercase"
						>
							<span class="relative flex h-2 w-2">
								<span
									class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"
								></span>
								<span class="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
							</span>
							<p>Service Area</p>
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
					</footer>
				</div>
			</div>
		</div>
	</div>
</section>
