<!--
Component: AdditionalPaintingServices.svelte
Description: A section highlighting specialty and add-on painting services like cabinet painting,
             trim/door painting, deck staining, and drywall patching in the Edmonton area.
-->
<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { ChevronDown } from 'lucide-svelte';

	let servicesWithTags = [
		{
			title: 'Cabinet Painting / Refinishing',
			description:
				'A cost-effective way to completely transform your kitchen or bathroom. We use durable, high-adhesion paints for a smooth, long-lasting factory finish.',
			image: '/image-12.png',
			tags: [
				'Kitchens',
				'Bathrooms',
				'Refinishing',
				'Hardware Upgrades',
				'Lacquer Finish',
				'Durable Enamel',
				'Sanding & Prep',
				'Color Consultation'
			],
			randomizedTags: []
		},
		{
			title: 'Trim and Door Painting',
			description:
				'Nothing makes a room feel more complete than freshly painted trim and doors. We create crisp, clean lines for a truly polished and professional look.',
			image: '/image-15.png',
			tags: [
				'Baseboards',
				'Crown Molding',
				'Window Casings',
				'Door Frames',
				'Crisp Lines',
				'Scuff-Resistant',
				'Semi-Gloss',
				'Accent Colors'
			],
			randomizedTags: []
		},
		{
			title: 'Deck and Fence Staining',
			description:
				'Protect and beautify your outdoor wood structures. Our staining process prevents UV damage and water intrusion, extending the life of your deck or fence.',
			image: '/image-24.png',
			tags: [
				'Wood Protection',
				'UV Resistance',
				'Waterproofing',
				'Stain & Seal',
				'Pressure Washing',
				'Fence Painting',
				'Deck Restoration'
			],
			randomizedTags: []
		},
		{
			title: 'Drywall Patching & Repairs',
			description:
				'From minor dings to larger holes, we handle light drywall repairs and surface preparation to ensure your final paint coat is absolutely flawless.',
			image: '/image-46.png',
			tags: [
				'Hole Repair',
				'Crack Filling',
				'Sanding',
				'Priming',
				'Seamless Patches',
				'Texture Matching',
				'Water Damage'
			],
			randomizedTags: []
		},
		{
			title: 'Small Commercial Touch-Ups',
			description:
				'Ideal for offices, retail spaces, and other commercial properties needing a quick and professional refresh without disrupting your business operations.',
			image: '/image-50.png',
			tags: [
				'Office Painting',
				'Retail Spaces',
				'Common Areas',
				'Maintenance',
				'After Hours',
				'Quick Turnaround',
				'Low-Odor Paint'
			],
			randomizedTags: []
		},
		{
			title: 'And More...',
			description:
				'Have a special project not listed here? From garage floors to unique feature walls, ask us for a quote to see how we can bring your vision to life.',
			image: '/image-1.png',
			tags: [
				'Garage Floors',
				'Feature Walls',
				'Custom Projects',
				'Ask Us',
				'Free Estimate',
				'Specialty Coatings',
				'Unique Surfaces'
			],
			randomizedTags: []
		}
	];

	onMount(() => {
		// Randomize tags for each service on mount
		servicesWithTags = servicesWithTags.map((service) => {
			const shuffled = [...service.tags].sort(() => 0.5 - Math.random());
			const count = Math.floor(Math.random() * 3) + 5; // 5 to 7 tags
			service.randomizedTags = shuffled.slice(0, count);
			return service;
		});
	});
</script>

<section class="bg-gray-900 px-6 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl">
		<div class="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
			<div class="text-center lg:text-left">
				<h2 class="text-5xl leading-tight font-bold text-white sm:text-6xl">Additional Painting Services</h2>
				<p class="mt-6 text-xl text-gray-400">
					Need more than just walls? We also handle specialty painting and add-on services to give your home a complete,
					polished look. Dents, dings, and nail pops—fixed fast. We handle drywall repair, then finish strong with
					smooth paint, sharp trim & door lines, and optional eco/low-odor paint for a more comfortable home.
				</p>
			</div>
			<img
				src="/image-33.png"
				alt="Close-up of detailed painting work"
				class="hidden h-80 w-full rounded-3xl object-cover lg:block"
			/>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each servicesWithTags as service, i}
				<div
					in:fly={{ y: 50, duration: 800, delay: i * 100, easing: quintOut }}
					class="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-cyan-400/50"
				>
					<img src={service.image} alt={service.title} class="h-48 w-full object-cover" />
					<div class="flex flex-1 flex-col p-8">
						<h3 class="mt-4 mb-3 text-2xl font-bold text-white">{service.title}</h3>
						<p class="flex-1 text-gray-400">{service.description}</p>
						<div class="mt-4 flex flex-wrap gap-2">
							{#each service.randomizedTags as tag}
								<span class="rounded-full bg-gray-700/50 px-3 py-1 text-xs text-gray-300">
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="mt-16 rounded-3xl bg-gray-800 p-12">
			<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
				<div>
					<h3 class="text-3xl font-bold text-white">Frequently Asked Questions</h3>
					<div class="mt-6 space-y-4 border-t border-white/10 pt-6">
						<details class="group rounded-lg bg-gray-900/50 p-4" name="faq">
							<summary class="flex cursor-pointer list-none items-center justify-between font-semibold text-white">
								<span>Can you refinish kitchen cabinets?</span>
								<div class="h-5 w-5 text-gray-400 transition-transform duration-300 group-open:rotate-180">
									<ChevronDown />
								</div>
							</summary>
							<div class="mt-4 border-t border-white/10 pt-4 text-gray-300">
								<p>
									Yes—cabinet finishes depend on prep and the coating choice. Ask for a quote based on your layout and
									finish goals.
								</p>
							</div>
						</details>
						<details class="group rounded-lg bg-gray-900/50 p-4" name="faq">
							<summary class="flex cursor-pointer list-none items-center justify-between font-semibold text-white">
								<span>Do you do small repairs before painting?</span>
								<div class="h-5 w-5 text-gray-400 transition-transform duration-300 group-open:rotate-180">
									<ChevronDown />
								</div>
							</summary>
							<div class="mt-4 border-t border-white/10 pt-4 text-gray-300">
								<p>
									Light patching and surface prep are typically included in our work. We’ll confirm the scope during the
									estimate.
								</p>
							</div>
						</details>
						<details class="group rounded-lg bg-gray-900/50 p-4" name="faq">
							<summary class="flex cursor-pointer list-none items-center justify-between font-semibold text-white">
								<span>How is the cost of these services determined?</span>
								<div class="h-5 w-5 text-gray-400 transition-transform duration-300 group-open:rotate-180">
									<ChevronDown />
								</div>
							</summary>
							<div class="mt-4 border-t border-white/10 pt-4 text-gray-300">
								<p>
									Cost is based on the project size, materials needed, and the amount of prep work required. We provide
									a detailed, transparent quote for every project.
								</p>
							</div>
						</details>
					</div>
				</div>
				<div class="flex flex-col items-start justify-center rounded-2xl bg-gray-900 p-8">
					<h3 class="text-2xl font-bold text-white">One crew, four upgrades</h3>
					<p class="mt-2 mb-4 text-gray-400">
						Patch and smooth drywall, modernize cabinets, brighten trim & doors, and opt for eco paint—a bundled refresh
						that boosts the look of your home fast.. Serving Edmonton plus St. Albert, Fort Saskatchewan, and Sherwood
						Park.
					</p>
					<div class="flex items-center gap-4">
						<a
							href="/services/interior-painting"
							class="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600"
						>
							Talk to a Painter
						</a>
						<a
							href="#quote-form"
							class="rounded-xl bg-cyan-500/10 px-8 py-4 font-semibold text-white transition hover:bg-cyan-500/20"
						>
							Request Pricing
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
