<script lang="ts">
	// Svelte 5 – FAQ section using native <details>/<summary>
	// All items closed by default (no open attribute set)

	type FaqItem = {
		question: string;
		answer: string;
	};

	const faqs: FaqItem[] = [
		{
			question: 'How much does it cost to paint the interior of a house?',
			answer:
				"Interior painting costs in Edmonton typically range from $1.50–$3.50 per square foot, depending on ceiling height, number of rooms, surface condition, and paint quality. A standard 1,000 sq ft main floor generally runs between $1,500–$3,500. We provide a detailed, no-obligation estimate after a quick walkthrough so you know exactly what's included before any work begins."
		},
		{
			question: 'What is the best time of year to paint the exterior of my home?',
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
		}
	];
</script>

<!--
  FAQ Section – NCS Painting Home Page
  Uses native <details> / <summary> for full semantic correctness.
  Animation: CSS grid-template-rows trick on the answer panel.
  All questions closed by default (no `open` attribute on <details>).
-->
<section id="faq" aria-labelledby="faq-heading" class="bg-gray-950 py-16 md:py-20 lg:py-24">
	<div class="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
		<!-- Two-column grid -->
		<div class="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
			<!-- ── LEFT COLUMN ── -->
			<div class="  flex flex-col gap-8">
				<!-- Section label + heading -->
				<header class="mb-12">
					<p class="mb-3 flex items-center gap-2 text-sm font-semibold tracking-widest text-lime-500 uppercase">
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
						class="text-[clamp(2rem,4vw,2.75rem)] leading-tight tracking-tight text-[#0B0B0B] text-white"
					>
						Commonly Asked Questions
					</h2>
					<p class="mt-4 max-w-md text-base leading-relaxed text-[#6B7280]">
						Edmonton homeowners ask us these questions all the time. Here are straightforward answers from our team.
					</p>
				</header>
				<!-- Image card with contact CTA -->

				<!-- Overlay card -->
				<div class="  m-4 rounded-[18px] bg-white/95 p-5 shadow-lg backdrop-blur-sm">
					<p class="text-3xl font-bold text-slate-800">Do You Have Questions?</p>
					<p class="mt-1 text-base text-slate-700">
						We're here to help. If you have a question you can email or call and Niall will get back to you as soon as
						possible.
					</p>
					<a
						href="/contact"
						class="mt-4 inline-flex items-center gap-2 rounded-xl bg-lime-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
					>
						Ask The Painter
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

			<!-- ── RIGHT COLUMN – details/summary accordion ── -->
			<div class="  flex flex-col gap-3">
				{#each faqs as faq, i}
					<!--
            <details> manages open/closed state natively in the browser.
            No `open` attribute = closed by default.
            `group` lets child elements react to open state via group-open:
          -->
					<details
						class="animated-details group overflow-hidden rounded-[20px] bg-white shadow-sm transition-shadow duration-200 open:shadow-md"
					>
						<!--
              <summary> is the native clickable trigger.
              list-none + [&::-webkit-details-marker]:hidden removes
              the default browser triangle/arrow marker.
            -->
						<summary
							class="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden"
						>
							<div class="flex items-center gap-2 text-sm leading-snug font-bold text-[#111827] sm:text-base">
								<span class="mr-2 text-2xl text-lime-500">{i + 1}.</span>
								<p class="text-lg">{faq.question}</p>
							</div>

							<!-- + icon rotates 45deg to form × when details is open -->
							<span
								aria-hidden="true"
								class="flex-shrink-0 text-[#374151] transition-transform duration-300 group-open:rotate-45"
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
						</summary>

						<!--
              Answer panel – same grid-rows animation as before.
              grid-rows-[0fr] = collapsed, grid-rows-[1fr] = expanded.
              group-open: variant applies when the parent <details> has the open attribute.
            -->
						<div class="content">
							<div class="overflow-hidden">
								<p class="px-6 pt-1 pb-5 text-sm leading-relaxed text-[#6B7280] sm:text-base">
									{faq.answer}
								</p>
							</div>
						</div>
					</details>
				{/each}
			</div>
			<!-- end right column -->
		</div>
	</div>
</section>

<style>
	/* Enable smooth transitions for intrinsic sizes (like height: auto) */
	:root {
		interpolate-size: allow-keywords;
	}

	.animated-details {
		border: 1px solid #ddd;
		border-radius: 8px;
		overflow: hidden;
	}

	/* Target the expandable content container */
	.animated-details::details-content {
		/* 1. Define the transition for height/opacity */
		transition:
			height 0.5s ease,
			opacity 0.5s ease,
			content-visibility 0.5s ease;

		/* 2. THE SECRET: Allow discrete property transitions to wait for the animation */
		transition-behavior: allow-discrete;

		/* Initial closed state */
		height: 0;
		opacity: 0;
		overflow: hidden;
	}

	/* Define the state when the details element is [open] */
	.animated-details[open]::details-content {
		height: auto;
		opacity: 1;
	}
</style>
