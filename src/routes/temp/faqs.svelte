<script lang="ts">
	// Svelte 5 runes – accordion FAQ section for NCS Painting homepage

	type FaqItem = {
		question: string;
		answer: string;
	};

	const faqs: FaqItem[] = [
		{
			question: 'How much does it cost to paint the interior of a house in Edmonton?',
			answer:
				"Interior painting costs in Edmonton typically range from $1.50–$3.50 per square foot, depending on ceiling height, number of rooms, surface condition, and paint quality. A standard 1,000 sq ft main floor generally runs between $1,500–$3,500. We provide a detailed, no-obligation estimate after a quick walkthrough so you know exactly what's included before any work begins."
		},
		{
			question: 'What is the best time of year to paint the exterior of my home in Edmonton?',
			answer:
				"In Edmonton, the ideal exterior painting window is late May through early September when temperatures consistently stay above 10°C and humidity is lower. Applying paint in freezing or near-freezing conditions causes poor adhesion and premature peeling. We monitor forecasts closely and schedule your project around Edmonton's unpredictable weather to ensure a durable, long-lasting finish."
		},
		{
			question: 'How do you protect my floors and furniture during an interior paint job?',
			answer:
				"We use drop cloths, plastic sheeting, and painter's tape to fully protect your floors, furniture, and trim before we touch a brush or roller. Small items are moved out of the work area and larger pieces are covered in place. At the end of each day, we tidy up and leave your home as clean and livable as we found it."
		},
		{
			question: 'How long does it take to paint a typical Edmonton home?',
			answer:
				'A standard interior paint job—walls, ceilings, and trim across 3–4 bedrooms—usually takes 3–5 business days. Exterior painting on an average single-family home takes 4–7 days, depending on prep work needed, number of stories, and weather. We give you a clear timeline in your estimate and communicate any changes as the project progresses.'
		},
		{
			question: 'Do I need to do anything to prepare my home before your crew arrives?',
			answer:
				'Very little is needed from you. We ask that you remove small personal items (photos, décor, valuables) from walls and clear pathways in rooms being painted. We handle all furniture moving, surface prep, patching, priming, and masking. For exterior jobs, trimming back shrubs or plants that press against the siding helps us work efficiently and safely.'
		},
		{
			question: 'What type of paint do you use and can I choose my own colours?',
			answer:
				'We work primarily with premium brands like Benjamin Moore and Sherwin-Williams, which offer superior coverage, durability, and a wide colour range. You are absolutely welcome to choose your own colours—we can even arrange a complimentary colour consultation to help you narrow down options. We also recommend the right sheen (matte, eggshell, satin, semi-gloss) for each surface to ensure the best performance and look.'
		}
	];

	// Svelte 5 rune: track which item is open (null = all closed)
	let openIndex = $state<number | null>(0);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<!-- =====================================================================
     FAQ Section – NCS Painting Home Page
     Layout: Two-column on lg+ (left: heading + image card, right: accordion)
     Responsive: stacks to single column on mobile / tablet
     ===================================================================== -->
<section id="faq" aria-labelledby="faq-heading" class="bg-[#F3F4F6] py-16 md:py-20 lg:py-24">
	<div class="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
		<!-- Two-column grid -->
		<div class="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
			<!-- ── LEFT COLUMN ── -->
			<div class="flex flex-col gap-8">
				<!-- Section label + heading -->
				<div>
					<p class="mb-3 flex items-center gap-2 text-sm font-semibold tracking-widest text-orange-600 uppercase">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2.5"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
							<circle cx="12" cy="12" r="3" />
						</svg>
						Clear Your Doubts
					</p>
					<h2
						id="faq-heading"
						class="text-[clamp(2rem,4vw,2.75rem)] leading-tight font-black tracking-tight text-[#0B0B0B]"
					>
						Commonly Asked Questions
					</h2>
					<p class="mt-4 max-w-md text-base leading-relaxed text-[#6B7280]">
						Edmonton homeowners ask us these questions all the time. Here are straightforward answers from our team.
					</p>
				</div>

				<!-- Image card with contact CTA -->
				<div class="relative overflow-hidden rounded-[24px]">
					<picture>
						<source srcset="/hero12.jpg" type="image/jpeg" />
						<img
							src="/hero12.jpg"
							alt="NCS Painting crew working on an Edmonton home exterior"
							class="h-72 w-full object-cover sm:h-80 lg:h-[340px]"
							width="640"
							height="340"
							loading="lazy"
						/>
					</picture>

					<!-- Overlay card -->
					<div class="absolute right-0 bottom-0 left-0 m-4 rounded-[18px] bg-white/95 p-5 shadow-lg backdrop-blur-sm">
						<p class="text-base font-bold text-[#0B0B0B]">Questions? We're Ready To Help!</p>
						<p class="mt-1 text-sm text-[#6B7280]">
							We're available Mon–Fri, 9 AM–5 PM. Reply within 24–48 business hours.
						</p>
						<a
							href="/contact"
							class="mt-4 inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
						>
							Contact Us
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2.5"
								stroke-linecap="round"
								stroke-linejoin="round"
								aria-hidden="true"
							>
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg>
						</a>
					</div>
				</div>
			</div>

			<!-- ── RIGHT COLUMN – Accordion ── -->
			<div class="flex flex-col gap-3">
				{#each faqs as faq, i}
					{@const isOpen = openIndex === i}
					<div
						class="overflow-hidden rounded-[20px] border border-[#E5E7EB] bg-white shadow-sm transition-shadow duration-200"
						class:shadow-md={isOpen}
					>
						<!-- Summary / trigger -->
						<button
							type="button"
							aria-expanded={isOpen}
							aria-controls={`faq-answer-${i}`}
							id={`faq-trigger-${i}`}
							onclick={() => toggle(i)}
							class="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
						>
							<span class="text-sm leading-snug font-bold text-[#111827] sm:text-base">
								<span class="mr-2 text-orange-600">{i + 1}.</span>
								{faq.question}
							</span>

							<!-- ± icon -->
							<span
								aria-hidden="true"
								class="flex-shrink-0 text-[#374151] transition-transform duration-300"
								class:rotate-45={isOpen}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path d="M12 5v14M5 12h14" />
								</svg>
							</span>
						</button>

						<!-- Answer panel – CSS grid-rows trick for smooth accordion -->
						<div
							id={`faq-answer-${i}`}
							role="region"
							aria-labelledby={`faq-trigger-${i}`}
							class="grid transition-[grid-template-rows] duration-300 ease-in-out"
							style:grid-template-rows={isOpen ? '1fr' : '0fr'}
						>
							<div class="overflow-hidden">
								<p class="px-6 pt-1 pb-5 text-sm leading-relaxed text-[#6B7280] sm:text-base">
									{faq.answer}
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
			<!-- end right column -->
		</div>
	</div>
</section>

<style>
</style>
