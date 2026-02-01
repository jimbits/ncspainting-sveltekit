<script lang="ts">
	import {
		Home,
		CheckCircle2,
		Clock,
		Paintbrush,
		ShieldCheck,
		MessageSquareText
	} from 'lucide-svelte';

	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: [
			{
				'@type': 'Question',
				name: 'Are you licensed and insured?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Yes. We carry appropriate coverage for residential painting projects and provide details upon request.'
				}
			},
			{
				'@type': 'Question',
				name: 'How do you price a painting project?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'We provide a written estimate based on scope, prep needs, surfaces, and finishes so you know what’s included before work starts.'
				}
			},
			{
				'@type': 'Question',
				name: 'What areas do you serve near Edmonton?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'We serve Edmonton and nearby communities including Sherwood Park, St. Albert, and Fort Saskatchewan.'
				}
			}
		]
	};
</script>

<svelte:head>
	<script type="application/ld+json">
{JSON.stringify(faqSchema)}
	</script>
</svelte:head>

<section
	aria-labelledby="why-choose-us"
	class="relative isolate bg-stone-50"
>
	<!-- subtle background wash -->
	<div
		class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/60 via-stone-50 to-stone-50"
	></div>

	<div
		class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
	>
		<!-- Header -->
		<div class="mx-auto max-w-3xl text-center">
			<p
				class="text-sm font-semibold tracking-wide text-indigo-700"
			>
				Why Choose Us
			</p>

			<h2
				id="why-choose-us"
				class="mt-2 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
			>
				Why Edmonton homeowners choose NCS Painting
			</h2>

			<p
				class="mt-4 text-base leading-relaxed text-stone-600"
			>
				Residential interior and exterior painting with
				careful prep, clean workspaces, and a finish built
				to last.
			</p>

			<p class="mt-2 text-sm text-stone-600">
				Serving Edmonton + Sherwood Park, St. Albert, and
				Fort Saskatchewan.
			</p>

			<!-- Proof chips -->
			<div class="mt-6 flex flex-wrap justify-center gap-2">
				<span
					class="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-sm text-stone-700 shadow-sm"
				>
					<span
						class="h-2 w-2 rounded-full bg-amber-400"
					></span>
					35+ Years Experience
				</span>
				<span
					class="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-sm text-stone-700 shadow-sm"
				>
					<span
						class="h-2 w-2 rounded-full bg-amber-400"
					></span>
					Licensed &amp; Insured
				</span>
				<span
					class="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1 text-sm text-stone-700 shadow-sm"
				>
					<span
						class="h-2 w-2 rounded-full bg-amber-400"
					></span>
					Written Estimates
				</span>
			</div>
		</div>

		<!-- Main layout -->
		<div
			class="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-center"
		>
			<!-- Left features -->
			<div
				class="order-2 grid gap-4 lg:order-1 lg:col-span-4"
			>
				<div
					class="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
				>
					<div class="flex items-start gap-4">
						<div
							class="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
						>
							<Home
								class="h-6 w-6"
								aria-hidden="true"
							/>
						</div>
						<div>
							<h3
								class="text-base font-semibold text-stone-900"
							>
								Detailed prep work
							</h3>
							<p
								class="mt-1 text-sm leading-relaxed text-stone-600"
							>
								Patch, sand, prime, and protect floors &amp;
								furniture before we paint.
							</p>
						</div>
					</div>
				</div>

				<div
					class="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
				>
					<div class="flex items-start gap-4">
						<div
							class="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
						>
							<CheckCircle2
								class="h-6 w-6"
								aria-hidden="true"
							/>
						</div>
						<div>
							<h3
								class="text-base font-semibold text-stone-900"
							>
								Clean, respectful crews
							</h3>
							<p
								class="mt-1 text-sm leading-relaxed text-stone-600"
							>
								Tidy work area, daily cleanup, and minimal
								disruption in your home.
							</p>
						</div>
					</div>
				</div>

				<div
					class="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
				>
					<div class="flex items-start gap-4">
						<div
							class="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
						>
							<Clock
								class="h-6 w-6"
								aria-hidden="true"
							/>
						</div>
						<div>
							<h3
								class="text-base font-semibold text-stone-900"
							>
								Clear communication
							</h3>
							<p
								class="mt-1 text-sm leading-relaxed text-stone-600"
							>
								Written scope, timelines, and
								straightforward updates—no surprises.
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Center image -->
			<div class="order-1 lg:order-2 lg:col-span-4">
				<div
					class="relative overflow-hidden rounded-3xl border border-stone-200 bg-stone-100 shadow-sm"
				>
					<img
						src="/images/why-choose-us.jpg"
						alt="Painter applying finish coat to interior trim in Edmonton home"
						class="h-[360px] w-full object-cover sm:h-[420px]"
						loading="lazy"
						decoding="async"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-stone-900/55 via-stone-900/10 to-indigo-900/10"
					></div>

					<div class="absolute right-4 bottom-4 left-4">
						<div
							class="rounded-2xl bg-white/90 p-4 shadow-sm ring-1 ring-white/40 backdrop-blur"
						>
							<p
								class="text-sm font-semibold text-stone-900"
							>
								“Clean prep. Crisp lines. Durable finish.”
							</p>
							<p class="mt-1 text-sm text-stone-600">
								Local Edmonton house painters for interiors,
								exteriors, and detailed trim work.
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Right features -->
			<div class="order-3 grid gap-4 lg:col-span-4">
				<div
					class="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
				>
					<div class="flex items-start gap-4">
						<div
							class="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
						>
							<Paintbrush
								class="h-6 w-6"
								aria-hidden="true"
							/>
						</div>
						<div>
							<h3
								class="text-base font-semibold text-stone-900"
							>
								Crisp professional finish
							</h3>
							<p
								class="mt-1 text-sm leading-relaxed text-stone-600"
							>
								Sharp cut lines, consistent coverage, and
								coatings chosen for durability.
							</p>
						</div>
					</div>
				</div>

				<div
					class="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
				>
					<div class="flex items-start gap-4">
						<div
							class="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
						>
							<ShieldCheck
								class="h-6 w-6"
								aria-hidden="true"
							/>
						</div>
						<div>
							<h3
								class="text-base font-semibold text-stone-900"
							>
								Licensed &amp; insured
							</h3>
							<p
								class="mt-1 text-sm leading-relaxed text-stone-600"
							>
								Peace of mind for homeowners, landlords, and
								property managers.
							</p>
						</div>
					</div>
				</div>

				<div
					class="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
				>
					<div class="flex items-start gap-4">
						<div
							class="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
						>
							<MessageSquareText
								class="h-6 w-6"
								aria-hidden="true"
							/>
						</div>
						<div>
							<h3
								class="text-base font-semibold text-stone-900"
							>
								Local Edmonton experience
							</h3>
							<p
								class="mt-1 text-sm leading-relaxed text-stone-600"
							>
								Interior &amp; exterior painting built for
								Alberta weather and real-life wear.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Internal links -->
		<nav
			aria-label="Painting services"
			class="mt-10 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
		>
			<p class="text-sm font-semibold text-stone-900">
				Explore our services
			</p>
			<div class="mt-3 flex flex-wrap gap-2">
				<a
					href="/interior-painting"
					class="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700 hover:bg-stone-200"
				>
					Interior Painting
				</a>
				<a
					href="/exterior-painting"
					class="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700 hover:bg-stone-200"
				>
					Exterior Painting
				</a>
				<a
					href="/cabinet-painting"
					class="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700 hover:bg-stone-200"
				>
					Cabinet Painting
				</a>
				<a
					href="/commercial-painting"
					class="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700 hover:bg-stone-200"
				>
					Commercial Painting
				</a>
			</div>
		</nav>

		<!-- CTA -->
		<div
			class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
		>
			<a
				href="#quote"
				class="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-700 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-800 sm:w-auto"
			>
				Get a Free Quote
				<span
					class="inline-flex items-center rounded-full bg-amber-400/90 px-2 py-0.5 text-xs font-semibold text-stone-900"
				>
					Fast Response
				</span>
			</a>

			<a
				href="tel:17807225577"
				class="inline-flex w-full items-center justify-center rounded-2xl border border-stone-300 bg-white px-6 py-3 text-base font-semibold text-stone-900 shadow-sm hover:bg-stone-50 sm:w-auto"
			>
				Call 780-722-5577
			</a>
		</div>

		<!-- Mini FAQ -->
		<div class="mx-auto mt-12 max-w-3xl">
			<h3 class="text-lg font-semibold text-stone-900">
				Quick questions
			</h3>

			<div class="mt-4 space-y-3">
				<details
					class="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
				>
					<summary
						class="cursor-pointer list-none font-semibold text-stone-900"
					>
						Are you licensed and insured?
						<span
							class="float-right text-indigo-700 group-open:rotate-180"
						>
							▾
						</span>
					</summary>
					<p
						class="mt-3 text-sm leading-relaxed text-stone-600"
					>
						Yes — we carry appropriate coverage so you can
						feel confident inviting our team into your home.
					</p>
				</details>

				<details
					class="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
				>
					<summary
						class="cursor-pointer list-none font-semibold text-stone-900"
					>
						How do you price a painting project?
						<span
							class="float-right text-indigo-700 group-open:rotate-180"
						>
							▾
						</span>
					</summary>
					<p
						class="mt-3 text-sm leading-relaxed text-stone-600"
					>
						We provide a detailed written estimate based on
						scope, prep needs, surfaces, and finishes—so you
						know exactly what’s included.
					</p>
				</details>

				<details
					class="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm"
				>
					<summary
						class="cursor-pointer list-none font-semibold text-stone-900"
					>
						What areas do you serve near Edmonton?
						<span
							class="float-right text-indigo-700 group-open:rotate-180"
						>
							▾
						</span>
					</summary>
					<p
						class="mt-3 text-sm leading-relaxed text-stone-600"
					>
						Edmonton and nearby communities like Sherwood
						Park, St. Albert, and Fort Saskatchewan.
					</p>
				</details>
			</div>
		</div>
	</div>
</section>
