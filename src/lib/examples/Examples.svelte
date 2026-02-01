<script lang="ts">
	import { Amphora, PaintBucket, PaintRoller, Fence, ShieldCheck } from 'lucide-svelte';

	// Example Responsive Layouts for Exterior Painting Services

	// Content from docs/sections/expterior-painting-services.md
	const heading = 'Exterior Painting Services';
	const tagline =
		'Exterior painting in Edmonton that starts with proper prep—so your finish looks great and holds up through the seasons.';
	const copyBlock =
		'A durable exterior isn’t just about color—it’s about adhesion and protection. We prioritize surface prep and clean application for longer-lasting results.';
	const whatIncluded = ['Painting Fences', 'More Info Needed', 'Roll on Quality', 'Durable Coatings'];
	const microFAQ = [
		{
			q: 'What time of year is best for exterior painting in Edmonton?',
			a: 'Late spring through early fall is typically best, depending on temperature and humidity.'
		},
		{
			q: 'How long does exterior paint last?',
			a: 'It varies by surface, sun exposure, and prep—good prep extends lifespan.'
		}
	];

	// Placeholder images from static/
	const images = ['/hero-12.jpg', '/image-24.png', '/image-41.png', '/hero-16.jpg', '/hero-22.jpg', '/image-23.png'];
	const icons = [Amphora, PaintBucket, PaintRoller, Fence, ShieldCheck];
</script>

<section class="bg-stone-50 py-24">
	<div class="container mx-auto max-w-4xl px-6">
		<div class="mb-16 text-center">
			<h2 class="text-3xl font-bold text-stone-900">Use For FAQ</h2>
		</div>

		<div class="space-y-4">
			<details class="group rounded-lg bg-white p-6 shadow-sm open:ring-1 open:ring-cyan-600">
				<summary
					class="flex cursor-pointer items-center justify-between text-xl font-bold text-stone-900 marker:content-none hover:text-cyan-600"
				>
					Is it safe for my family immediately?
					<span class="text-stone-400 transition group-open:rotate-180">↓</span>
				</summary>
				<div class="mt-4 border-t border-stone-100 pt-4 text-stone-600">
					<p>Explain Zero-VOC (Volatile Organic Compounds) and how it means no harmful fumes.</p>
					<p class="mt-2 font-semibold text-cyan-600">Key benefit: Occupancy same-day.</p>
				</div>
			</details>

			<details class="group rounded-lg bg-white p-6 shadow-sm open:ring-1 open:ring-cyan-600">
				<summary
					class="flex cursor-pointer items-center justify-between text-xl font-bold text-stone-900 marker:content-none hover:text-cyan-600"
				>
					Does eco-friendly paint actually last?
					<span class="text-stone-400 transition group-open:rotate-180">↓</span>
				</summary>
				<div class="mt-4 border-t border-stone-100 pt-4 text-stone-600">
					<p>Address the myth that "green" paint is weaker. Highlighting durability and scrubbability.</p>
					<p class="mt-2 font-semibold text-cyan-600">Key benefit: Hospital-grade durability.</p>
				</div>
			</details>

			<details class="group rounded-lg bg-white p-6 shadow-sm open:ring-1 open:ring-cyan-600">
				<summary
					class="flex cursor-pointer items-center justify-between text-xl font-bold text-stone-900 marker:content-none hover:text-cyan-600"
				>
					Does it help with allergies?
					<span class="text-stone-400 transition group-open:rotate-180">↓</span>
				</summary>
				<div class="mt-4 border-t border-stone-100 pt-4 text-stone-600">
					<p>Mention Asthma & Allergy Friendly certifications. Huge for parents or pet owners.</p>
					<p class="mt-2 font-semibold text-cyan-600">Key benefit: Hypoallergenic formulas.</p>
				</div>
			</details>
		</div>
	</div>
</section>
<section class="bg-white py-24">
	<div class="container mx-auto px-6">
		<div class="mb-16 text-center">
			<h2 class="text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl">Healthy Home Standards</h2>
			<p class="mt-6 text-lg text-stone-500">Why modern homeowners are switching to premium eco-friendly finishes.</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			<div
				class="  group border-t-4 border-stone-100 bg-stone-50 p-8 transition-colors hover:border-cyan-600 hover:bg-white hover:shadow-lg"
			>
				<h3 class="text-xl font-bold text-stone-900">Safety First</h3>
				<p class="mt-4 text-stone-600">Zero-VOC formulas mean no harmful fumes during or after the process.</p>
				<span class="mt-6 block text-sm font-bold text-cyan-600">Occupancy same-day</span>
			</div>

			<div
				class="group border-t-4 border-stone-100 bg-stone-50 p-8 transition-colors hover:border-cyan-600 hover:bg-white hover:shadow-lg"
			>
				<h3 class="text-xl font-bold text-stone-900">Lasting Durability</h3>
				<p class="mt-4 text-stone-600">Modern acrylics offer superior scrubbability without the chemicals.</p>
				<span class="mt-6 block text-sm font-bold text-cyan-600">Hospital-grade durability</span>
			</div>

			<div
				class="group border-t-4 border-stone-100 bg-stone-50 p-8 transition-colors hover:border-cyan-600 hover:bg-white hover:shadow-lg"
			>
				<h3 class="text-xl font-bold text-stone-900">Allergy Friendly</h3>
				<p class="mt-4 text-stone-600">Certified asthma and allergy-friendly formulas for sensitive residents.</p>
				<span class="mt-6 block text-sm font-bold text-cyan-600">Hypoallergenic formulas</span>
			</div>

			<div
				class="group border-t-4 border-stone-100 bg-stone-50 p-8 transition-colors hover:border-cyan-600 hover:bg-white hover:shadow-lg"
			>
				<h3 class="text-xl font-bold text-stone-900">Odor Free</h3>
				<p class="mt-4 text-stone-600">Low-odor application allows for winter painting with windows closed.</p>
				<span class="mt-6 block text-sm font-bold text-cyan-600">No lingering paint smell</span>
			</div>

			<div
				class="group border-t-4 border-stone-100 bg-stone-50 p-8 transition-colors hover:border-cyan-600 hover:bg-white hover:shadow-lg"
			>
				<h3 class="text-xl font-bold text-stone-900">Mold Resistance</h3>
				<p class="mt-4 text-stone-600">Natural moisture resistance without harsh chemicals, perfect for baths.</p>
				<span class="mt-6 block text-sm font-bold text-cyan-600">Moisture resistant</span>
			</div>

			<div
				class="group border-t-4 border-stone-100 bg-stone-50 p-8 transition-colors hover:border-cyan-600 hover:bg-white hover:shadow-lg"
			>
				<h3 class="text-xl font-bold text-stone-900">True Value</h3>
				<p class="mt-4 text-stone-600">
					Slightly higher material cost for significantly safer, longer-lasting results.
				</p>
				<span class="mt-6 block text-sm font-bold text-cyan-600">Peace of mind</span>
			</div>
		</div>
	</div>
</section>
<!-- Layout 1: White background with Lime 500 accent -->
<section class="bg-white py-12 text-slate-900 md:py-20">
	<div class=" mx-auto max-w-7xl px-4">
		<header class="mb-24 text-center">
			<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl dark:text-white">
				{heading}
			</h2>
			<p class="mx-auto font-light text-gray-500 sm:px-8 sm:text-lg lg:w-2xl dark:text-gray-400">
				{tagline}
			</p>
		</header>

		<div class="grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
			<!-- Top Row -->
			<div class="h-full lg:col-span-2">
				<img src="hero-8.jpg" alt="Exterior painting project" class="h-full w-full rounded-xl shadow-lg" />
			</div>

			<!-- Middle Row -->
			<div class="flex flex-col gap-6">
				<div class="rounded-xl bg-gray-50 p-6 shadow-sm">
					<h3 class="mb-4 text-2xl font-semibold text-lime-500">Key Point</h3>
					<p class=" text-sm text-slate-700">{copyBlock}</p>
				</div>
				<div class="  rounded-xl bg-gray-900 p-6 shadow-sm">
					<h3 class="mb-2 text-2xl font-semibold text-lime-500">Key Point</h3>
					<p class=" mb-3.5 text-sm text-slate-100/80">{copyBlock}</p>
					<button class="rounded-md bg-lime-400 px-6 py-1 text-white">call to action</button>
				</div>
				<div class="rounded-xl bg-gray-50 p-6 shadow-sm">
					<h3 class="mb-4 text-2xl font-semibold text-lime-500">Key Point</h3>
					<p class=" text-sm text-slate-700">{copyBlock}</p>
				</div>
			</div>

			<!-- Bottom Row Key Points -->
			<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-3 lg:grid-cols-4">
				<div class="flex overflow-hidden rounded-2xl bg-slate-950 shadow-sm lg:col-span-4">
					<div class=" self-center px-16">
						<h2 class="mb-3 text-5xl font-bold text-lime-400">Important Section</h2>
						<p class="w-[95%] text-sm text-lime-50">
							Sipi to sunt odit, quae asper natur quam, sa piente mmodi, rerum similique. Natus corrupti odio, iste
							autem susc ipit rerum cupidi tate.
						</p>
						<div class="my-8">
							<span class="mr-2 text-8xl font-extrabold text-lime-300">$29</span>
							<span class="text-white">/month</span>
						</div>
					</div>
					<img src="/image-50.png" alt="" class=" object-fit max-h-[360px] object-top-right" />
				</div>
			</div>
		</div>

		<div class="mt-12 flex justify-center gap-4">
			<a href="#quote-form" class="rounded-lg bg-lime-500 px-6 py-3 font-bold text-white shadow-md hover:bg-lime-600">
				Request a Free Quote
			</a>
			<a
				href="tel:7807225577"
				class="rounded-lg border border-lime-500 bg-white px-6 py-3 font-bold text-lime-500 shadow-md hover:bg-lime-50"
			>
				Call the Painter
			</a>
		</div>
	</div>
</section>

<!-- Layout 2: White background with Lime 600 accent -->
<!-- <section class="bg-white py-12 text-slate-900 md:py-20">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
			<div class="lg:col-span-7">
				<h2 class="mb-4 text-4xl font-extrabold text-lime-600">{heading}</h2>
				<p class="mb-6 text-xl text-slate-700">{tagline}</p>
				<p class="mb-8 text-slate-600">{copyBlock}</p>
				<div class="flex gap-4">
					<a href="#quote-form" class="rounded-md bg-lime-600 px-6 py-3 font-bold text-white shadow hover:bg-lime-700">
						Get Your Free Estimate
					</a>
					<a
						href="tel:7807225577"
						class="rounded-md border border-lime-600 bg-white px-6 py-3 font-bold text-lime-600 shadow hover:bg-lime-50"
					>
						Call Now
					</a>
				</div>
			</div>
			<div class="lg:col-span-5">
				<Picture src={images[1]} alt="House exterior detail" class="w-full rounded-xl shadow-lg" />
			</div>
		</div>

		<div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
			<div class="rounded-xl bg-lime-50 p-6 shadow-sm">
				<h3 class="mb-3 text-xl font-semibold text-lime-600">What's Included</h3>
				<ul class="list-inside list-disc space-y-2 text-slate-700">
					{#each whatIncluded as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
			<div class="rounded-xl bg-lime-50 p-6 shadow-sm">
				<h3 class="mb-3 text-xl font-semibold text-lime-600">FAQs</h3>
				<div class="space-y-4">
					<div>
						<h4 class="font-semibold text-lime-700">{microFAQ[0].q}</h4>
						<p class="text-sm text-slate-600">{microFAQ[0].a}</p>
					</div>
					<div>
						<h4 class="font-semibold text-lime-700">{microFAQ[1].q}</h4>
						<p class="text-sm text-slate-600">{microFAQ[1].a}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> -->

<!-- Layout 3: White background with Orange 500 accent -->
<!-- <section class="bg-white py-12 text-slate-900 md:py-20">
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="text-4xl font-bold text-orange-500">{heading}</h2>
			<p class="mx-auto mt-2 max-w-3xl text-lg text-slate-700">{tagline}</p>
		</div>

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
			<div class="lg:col-span-2">
				<Picture src={images[2]} alt="Painter working on exterior" class="w-full rounded-2xl shadow-lg" />
			</div>
			<div class="flex flex-col justify-between rounded-2xl bg-gray-50 p-8 shadow-sm lg:col-span-1">
				<div>
					<h3 class="mb-4 text-2xl font-semibold text-orange-500">Protecting Your Investment</h3>
					<p class="mb-6 text-slate-700">{copyBlock}</p>
					<ul class="list-inside list-disc space-y-2 text-slate-700">
						{#each whatIncluded.slice(0, 3) as item}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
				<div class="mt-8">
					<a
						href="#quote-form"
						class="rounded-full bg-orange-500 px-6 py-3 font-bold text-white shadow-md hover:bg-orange-600"
					>
						Request a Quote
					</a>
				</div>
			</div>
		</div>

		<div class="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
			<div class="rounded-xl bg-orange-50 p-6 shadow-sm">
				<h4 class="mb-2 text-lg font-semibold text-orange-700">{microFAQ[0].q}</h4>
				<p class="text-sm text-slate-600">{microFAQ[0].a}</p>
			</div>
			<div class="rounded-xl bg-orange-50 p-6 shadow-sm">
				<h4 class="mb-2 text-lg font-semibold text-orange-700">{microFAQ[1].q}</h4>
				<p class="text-sm text-slate-600">{microFAQ[1].a}</p>
			</div>
		</div>
	</div>
</section> -->

<!-- Layout 4: White background with Orange 600 accent -->
<!-- <section class="bg-white py-12 text-slate-900 md:py-20">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-4">
			<div class="lg:col-span-1">
				<h2 class="mb-4 text-3xl font-bold text-orange-600">{heading}</h2>
				<p class="mb-6 text-slate-700">{copyBlock}</p>
				<a
					href="tel:7807225577"
					class="rounded-md bg-orange-600 px-4 py-2 font-bold text-white shadow hover:bg-orange-700"
				>
					Call for Details
				</a>
			</div>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3 lg:col-span-3">
				<div class="md:col-span-2">
					<Picture src={images[3]} alt="Preparation for exterior painting" class="w-full rounded-xl shadow-lg" />
				</div>
				<div class="flex flex-col justify-center rounded-xl bg-orange-50 p-6 shadow-sm">
					<h3 class="mb-3 text-xl font-semibold text-orange-600">Key Services</h3>
					<ul class="list-none space-y-1 text-slate-700">
						{#each whatIncluded.slice(0, 3) as item}
							<li>
								<span class="mr-2 text-orange-600">&bull;</span>
								{item}
							</li>
						{/each}
					</ul>
				</div>
				<div class="rounded-xl bg-orange-50 p-6 shadow-sm">
					<h4 class="mb-2 font-semibold text-orange-700">{microFAQ[0].q}</h4>
					<p class="text-sm text-slate-600">{microFAQ[0].a}</p>
				</div>
				<div class="rounded-xl bg-gray-50 p-6 shadow-sm md:col-span-2">
					<h4 class="mb-2 font-semibold text-orange-700">{microFAQ[1].q}</h4>
					<p class="text-sm text-slate-600">{microFAQ[1].a}</p>
				</div>
			</div>
		</div>
	</div>
</section> -->

<!-- Layout 5: White background with Sky 500 accent -->
<!-- <section class="bg-white py-12 text-slate-900 md:py-20">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-5">
			<div class="flex flex-col justify-center rounded-2xl bg-sky-50 p-8 shadow-sm lg:col-span-2">
				<h2 class="mb-4 text-4xl font-bold text-sky-500">{heading}</h2>
				<p class="mb-6 text-lg text-slate-700">{tagline}</p>
				<ul class="list-inside list-disc space-y-2 text-slate-700">
					{#each whatIncluded.slice(0, 3) as item}
						<li>{item}</li>
					{/each}
				</ul>
				<div class="mt-8">
					<a href="#quote-form" class="rounded-lg bg-sky-500 px-6 py-3 font-bold text-white shadow-md hover:bg-sky-600">
						Request a Free Quote
					</a>
				</div>
			</div>
			<div class="lg:col-span-3">
				<Picture
					src={images[4]}
					alt="Painted house exterior"
					class="h-full w-full rounded-2xl object-cover shadow-lg"
				/>
			</div>
		</div>

		<div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
			<div class="rounded-xl bg-sky-50 p-6 shadow-sm">
				<h3 class="mb-3 text-xl font-semibold text-sky-700">{microFAQ[0].q}</h3>
				<p class="text-sm text-slate-600">{microFAQ[0].a}</p>
			</div>
			<div class="rounded-xl bg-sky-50 p-6 shadow-sm">
				<h3 class="mb-3 text-xl font-semibold text-sky-700">{microFAQ[1].q}</h3>
				<p class="text-sm text-slate-600">{microFAQ[1].a}</p>
			</div>
		</div>
	</div>
</section> -->

<!-- Layout 6: White background with Sky 600 accent -->
<!-- <section class="bg-white py-12 text-slate-900 md:py-20">
	<div class="container mx-auto px-4">
		<div class="mb-12 text-center">
			<h2 class="text-4xl font-bold text-sky-600">{heading}</h2>
			<p class="mx-auto mt-2 max-w-3xl text-lg text-slate-700">{tagline}</p>
		</div>

		<div class="grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-5">
			<div class="lg:col-span-3">
				<Picture src={images[5]} alt="Painter using a roller on exterior wall" class="w-full rounded-xl shadow-lg" />
			</div>
			<div class="flex flex-col gap-6 lg:col-span-2">
				<div class="rounded-xl bg-gray-50 p-6 shadow-sm">
					<h3 class="mb-4 text-2xl font-semibold text-sky-600">Our Commitment to Quality</h3>
					<p class="text-slate-700">{copyBlock}</p>
				</div>
				<div class="rounded-xl bg-sky-50 p-6 shadow-sm">
					<ul class="list-none space-y-2 text-slate-700">
						{#each whatIncluded as item}
							<li>
								<span class="mr-2 text-sky-600">&bull;</span>
								{item}
							</li>
						{/each}
					</ul>
				</div>
				<div class="mt-4 flex justify-center gap-4 md:justify-start">
					<a href="#quote-form" class="rounded-lg bg-sky-600 px-6 py-3 font-bold text-white shadow-md hover:bg-sky-700">
						Request a Free Quote
					</a>
					<a
						href="mailto:[EMAIL_ADDRESS]"
						class="rounded-lg border border-sky-600 bg-white px-6 py-3 font-bold text-sky-600 shadow-md hover:bg-sky-50"
					>
						Email the Painter
					</a>
				</div>
			</div>
		</div>
	</div>
</section> -->

<style lang="postcss">
	/* Add any specific vanilla CSS here if needed */
	.container {
		max-width: 1280px; /* Max width from visual-style-guide */
	}
	section {
		padding-top: 64px; /* Section padding from visual-style-guide */
		padding-bottom: 64px;
	}
	@media (max-width: 768px) {
		section {
			padding-top: 48px;
			padding-bottom: 48px;
		}
	}
	@media (max-width: 640px) {
		section {
			padding-top: 32px;
			padding-bottom: 32px;
		}
	}
</style>
