<!--
Component: AdditionalPaintingServices.svelte
Description: A section highlighting specialty and add-on painting services like cabinet painting,
             trim/door painting, deck staining, and drywall patching in the Edmonton area.
-->
<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let servicesWithTags = [
		{
			icon: 'archive',
			title: 'Cabinet Painting / Refinishing',
			description: 'Transform your kitchen or bathroom with a professional cabinet finish.',
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
			icon: 'paint-roller',
			title: 'Trim and Door Painting',
			description: 'Create crisp, clean lines and a polished look for your entire space.',
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
			icon: 'fence',
			title: 'Deck and Fence Staining',
			description: 'Protect and beautify your outdoor wood structures from Alberta weather.',
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
			icon: 'wrench',
			title: 'Drywall Patching & Repairs',
			description: 'We handle light patching and surface prep for a flawless final paint coat.',
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
			icon: 'building',
			title: 'Small Commercial Touch-Ups',
			description: 'Ideal for offices and retail spaces needing a quick, professional refresh.',
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
			icon: 'plus',
			title: 'And More...',
			description: 'Have a special project? Ask us for a quote to see how we can help.',
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

	onMount(async () => {
		try {
			const lucide = await import('lucide-svelte');
			lucide.createIcons();
		} catch (error) {
			console.error('Failed to load lucide-svelte:', error);
		}

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
					Need more than just walls? We also handle specialty painting and add-on services to give your Edmonton home a
					complete, polished look.
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
						<i
							data-lucide={service.icon}
							class="h-12 w-12 text-cyan-500 transition-colors group-hover:text-cyan-400"
						></i>
						<h3 class="mt-6 mb-3 text-2xl font-bold text-white">{service.title}</h3>
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
								<i
									data-lucide="chevron-down"
									class="h-5 w-5 text-gray-400 transition-transform duration-300 group-open:rotate-180"
								></i>
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
								<i
									data-lucide="chevron-down"
									class="h-5 w-5 text-gray-400 transition-transform duration-300 group-open:rotate-180"
								></i>
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
								<i
									data-lucide="chevron-down"
									class="h-5 w-5 text-gray-400 transition-transform duration-300 group-open:rotate-180"
								></i>
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
					<h3 class="text-2xl font-bold text-white">Find out more about NCS Interior Painting Services</h3>
					<p class="mt-2 mb-4 text-gray-400">
						Bundle these services with your main project for a complete home refresh. Let's discuss your needs.
					</p>
					<div class="flex items-start gap-4">
						<a
							href="#quote-form"
							class="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600"
						>
							Request a Free Quote
						</a>
						<a href="/services/interior-painting" class="text-cyan-400 transition hover:text-cyan-300">
							Call To Action
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
