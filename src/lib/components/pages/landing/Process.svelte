<script>
	import {
		Footprints,
		GitPullRequest,
		Notebook,
		NotebookText,
		Paintbrush,
		PaintBucket,
		TrafficCone
	} from '@lucide/svelte';
	import { Paintbrush2Icon, TextQuote } from 'lucide-svelte';
</script>

<!-- Our Process Section -->

<section id="process" class="bg-[#F9F8F3] py-16 md:py-24">
	<div class="container mx-auto px-4">
		<div class="mx-auto mb-16 max-w-3xl text-center md:mb-24">
			<span class="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-600 uppercase">
				<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
					<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
					<path
						fill-rule="evenodd"
						d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
						clip-rule="evenodd"
					/>
				</svg>
				Our Process
			</span>
			<h2 class="mb-6 text-4xl font-extrabold text-slate-900 md:text-5xl">A simple, clean painting process</h2>
			<p class="text-lg leading-relaxed text-slate-600">
				We make residential painting in <strong>Edmonton</strong>
				straightforward—from your written estimate to the final walkthrough, ensuring you are confident in every coat.
			</p>
		</div>

		<div class="relative">
			<div
				class="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-12 border-t-2 border-dashed border-slate-200 lg:block"
			></div>

			<div class="relative grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-5">
				<div class="group flex flex-col items-center text-center">
					<div class="relative mb-8">
						<div
							class="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-slate-200 bg-white transition-colors group-hover:border-amber-500"
						>
							<GitPullRequest class="h-8 w-8" />
						</div>
						<span
							class="absolute -top-2 -right-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white"
						>
							01
						</span>
					</div>
					<h3 class="mb-3 text-xl font-bold text-slate-900">Request a Quote</h3>
					<p class="text-sm leading-relaxed text-slate-500">
						Tell us your project details in Edmonton or nearby. We respond quickly with clear next steps.
					</p>
				</div>

				<div class="group flex flex-col items-center text-center">
					<div class="relative mb-8">
						<div
							class="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-slate-200 bg-white transition-colors group-hover:border-amber-500"
						>
							<NotebookText class="h-8 w-8" />
						</div>
						<span
							class="absolute -top-2 -right-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white"
						>
							02
						</span>
					</div>
					<h3 class="mb-3 text-xl font-bold text-slate-900">Written Estimate</h3>
					<p class="text-sm leading-relaxed text-slate-500">
						On-site assessment to confirm scope and prep needs. You get a firm, written estimate.
					</p>
				</div>

				<div class="group flex flex-col items-center text-center">
					<div class="relative mb-8">
						<div
							class="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-slate-200 bg-white transition-colors group-hover:border-amber-500"
						>
							<TrafficCone class="h-8 w-8" />
						</div>
						<span
							class="absolute -top-2 -right-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white"
						>
							03
						</span>
					</div>
					<h3 class="mb-3 text-xl font-bold text-slate-900">Prep & Protection</h3>
					<p class="text-sm leading-relaxed text-slate-500">
						We protect floors and furniture, then patch, sand, and prime for a clean, durable finish.
					</p>
				</div>

				<div class="group flex flex-col items-center text-center">
					<div class="relative mb-8">
						<div
							class="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-slate-200 bg-white transition-colors group-hover:border-amber-500"
						>
							<Paintbrush class="h-8 w-8" />
						</div>
						<span
							class="absolute -top-2 -right-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white"
						>
							04
						</span>
					</div>
					<h3 class="mb-3 text-xl font-bold text-slate-900">Professional Painting</h3>
					<p class="text-sm leading-relaxed text-slate-500">
						Even coverage and crisp lines using coatings selected for durability in <strong>Alberta conditions</strong>
						.
					</p>
				</div>

				<div class="group flex flex-col items-center text-center">
					<div class="relative mb-8">
						<div
							class="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 border-slate-200 bg-white transition-colors group-hover:border-amber-500"
						>
							<Footprints class="h-8 w-8" />
						</div>
						<span
							class="absolute -top-2 -right-2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white"
						>
							05
						</span>
					</div>
					<h3 class="mb-3 text-xl font-bold text-slate-900">Final Walkthrough</h3>
					<p class="text-sm leading-relaxed text-slate-500">
						Complete cleanup and a detail review with you to ensure you're happy before we wrap up.
					</p>
				</div>
			</div>
		</div>

		<div class="mt-20 flex flex-col items-center justify-center gap-6 sm:flex-row">
			<a
				href="/quote"
				class="flex items-center gap-2 rounded-xl bg-amber-500 px-10 py-4 font-bold text-slate-950 shadow-lg transition-all hover:bg-amber-600"
			>
				Get a Free Quote
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
				</svg>
			</a>
			<a
				href="tel:17807225577"
				class="flex items-center gap-2 font-bold text-slate-900 transition-colors hover:text-amber-600"
			>
				<div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
						<path
							d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
						/>
					</svg>
				</div>
				780-722-5577
			</a>
		</div>
	</div>
</section>
