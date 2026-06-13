<script lang="ts">
	import Dialog from '$lib/components/modals/Dialog.svelte';
	import QuoteForm from '$lib/components/modals/content/QuoteForm.svelte';

	let isOpen = $state(false);

	const benefits = [
		'Fast, free estimates',
		'Careful prep + protected floors',
		'Clean lines on trim and edges',
		'Daily cleanup + final walkthrough',
		'Friendly, professional reliable',
		'Licensed and Insublue'
	];
</script>

<section class=" relative isolate overflow-hidden border border-t-8 border-sky-900 bg-blue-50 pb-12">
	<!-- CONTENT -->
	<div class="flex min-h-[90vh] items-center">
		<div class="relative z-10 container mx-auto px-4 py-12 lg:py-20">
			<div class="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
				<!-- TEXT COLUMN -->

				<div class="w-full space-y-6 lg:w-1/2 lg:text-left">
					<h1 class="mb-6 text-5xl leading-[1.1] font-black text-slate-900 md:text-6xl lg:text-7xl">
						A Residential House Painting Company
					</h1>
					<!-- Arch/Pill Image Wrapper -->
					<div class="relative z-10 flex-grow">
						<div
							class="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-[6px] border-emerald-50/50 shadow-lg"
						>
							<img
								src="/hero-28.png"
								alt="Painter applying fresh coat to home exterior"
								class="h-full w-full object-cover object-[70%_50%]"
							/>
						</div>
					</div>

					<p class="mx-auto max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl lg:mx-0">
						We are a local family run painting company with over 30+ years of experience in the trade and we would like
						to the opportunity to earn your buisness.
					</p>

					<!-- Bullet Points -->
					<ul class=" mx-auto grid hidden w-fit max-w-2xl gap-y-5 sm:mb-12 sm:grid-cols-2 md:mb-16 lg:w-full">
						{#each benefits as benefit}
							<li class="0 flex items-center gap-3">
								<span
									class=" inline-flex min-h-6 min-w-6 items-center justify-center rounded-full text-rose-500"
									aria-hidden="true"
								>
									✓
								</span>
								<span class="text-sm font-medium text-slate-700 sm:text-base/5">{benefit}</span>
							</li>
						{/each}
					</ul>
					<!-- Call To Action Buttons -->

					<div
						class=" mx-auto flex max-w-[289px] flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row lg:justify-start"
					>
						<!-- Get A Free Quote -->
						<button
							onclick={() => (isOpen = true)}
							class="w-full transform rounded-2xl bg-blue-400 px-10 py-5 text-lg font-bold text-white shadow-2xl transition-colors delay-100 duration-300 ease-in-out hover:bg-blue-700 sm:w-auto lg:text-lg"
						>
							Get a Free Quote →
						</button>

						<Dialog bind:open={isOpen}>
							<QuoteForm />
						</Dialog>
						<a
							href="tel:15872084445"
							class=" w-full rounded-2xl border border-sky-700 bg-sky-900 px-10 py-5 text-center text-lg font-bold text-white transition-colors delay-100 duration-300 ease-in-out hover:bg-sky-950 hover:text-white sm:w-auto"
						>
							Call 587-208-4445
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
							src="/hero-27.png"
							alt="Interior home painting in progress showing clean prep and professional finish"
							class="aspect-[4/5] h-full w-full object-cover object-center lg:aspect-square"
						/>
					</div>

					<div
						class="absolute -top-10 -right-10 z-20 hidden -rotate-3 transform cursor-default rounded-3xl bg-blue-600 p-8 text-cyan-50 shadow-2xl transition-transform hover:rotate-0 sm:-top-6 sm:right-0 sm:block lg:-top-10 lg:-right-8"
					>
						<div class="text-4xl leading-none font-black">30+</div>
						<div class="mt-1 text-xs font-bold tracking-widest uppercase">
							Years Local
							<br />
							Experience
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
