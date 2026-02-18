<script lang="ts">
	import { ArrowRight, MapPin } from 'lucide-svelte';

	type ServiceArea = {
		name: string;
		href: string;
		image: string;
		blurb: string;
		badge?: string;
	};

	const defaultItems: ServiceArea[] = [
		{
			name: 'St. Albert',
			href: '/locations/st-albert-painters',
			image: '/image-34.png',
			blurb: 'Interior & exterior painting with clean prep and crisp lines.',
			badge: 'Most requested'
		},
		{
			name: 'Sherwood Park',
			href: '/locations/sherwood-park-painters',
			image: '/image-40.png',
			blurb: 'Reliable scheduling, tidy work habits, durable finishes.'
		},
		{
			name: 'Fort Saskatchewan',
			href: '/locations/fort-saskatchewan-painters',
			image: '/image-41.png',
			blurb: 'Great for repaints, trim refreshes, and curb-appeal upgrades.'
		},
		{
			name: 'Beaumont',
			href: '/locations/beaumont-painters',
			image: '/image-42.png',
			blurb: 'Modern finishes, smooth walls, and sharp cut lines.'
		}
	];

	let {
		title = 'Service Areas',
		subtitle = 'Local painters serving Edmonton-area communities',
		items = defaultItems
	}: {
		title?: string;
		subtitle?: string;
		items?: ServiceArea[];
	} = $props();
</script>

<section class="bg-white">
	<div class="mx-auto max-w-6xl px-4 py-12 sm:py-14 lg:py-16">
		<header class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
			<div>
				<p
					class="inline-flex items-center gap-2 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700"
				>
					<MapPin class="h-4 w-4 text-stone-600" />
					{subtitle}
				</p>
				<h2 class="mt-3 text-2xl font-semibold tracking-tight text-stone-950 sm:text-3xl">{title}</h2>
				<p class="mt-2 max-w-2xl text-sm text-stone-600 sm:text-base">
					Explore your area for service details, FAQs, and project-ready booking options.
				</p>
			</div>

			<a
				href="/locations"
				class="group inline-flex w-fit items-center gap-2 rounded-xl bg-stone-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-stone-900 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
			>
				View all locations
				<ArrowRight class="h-4 w-4 transition group-hover:translate-x-0.5" />
			</a>
		</header>

		<!-- Bento grid -->
		<div class="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-12">
			{#each items as area, i (area.href)}
				<a
					href={area.href}
					data-event="location_click"
					class={[
						'group relative overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition',
						'hover:-translate-y-1 hover:border-stone-300 hover:shadow-md focus:ring-2 focus:ring-indigo-300 focus:outline-none',
						// bento sizing
						i === 0 ? 'lg:col-span-7 lg:row-span-2' : i === 1 ? 'lg:col-span-5' : 'lg:col-span-6'
					].join(' ')}
				>
					<!-- Image -->
					<div class="relative h-52 sm:h-56 lg:h-full">
						<img
							src={area.image}
							alt={'Painting services in ' + area.name}
							class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
							loading="lazy"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent"></div>

						{#if area.badge}
							<div
								class="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-900 backdrop-blur"
							>
								{area.badge}
							</div>
						{/if}
					</div>

					<!-- Content -->
					<div class="absolute inset-x-0 bottom-0 p-5 sm:p-6">
						<h3 class="text-lg font-semibold text-white sm:text-xl">{area.name}</h3>
						<p class="mt-1 max-w-[42ch] text-sm text-stone-100/90">
							{area.blurb}
						</p>

						<div class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-200">
							View details
							<ArrowRight class="h-4 w-4 transition group-hover:translate-x-0.5" />
						</div>
					</div>

					<!-- subtle corner accent -->
					<div
						class="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-indigo-200/30 blur-2xl transition group-hover:bg-indigo-200/40"
					></div>
				</a>
			{/each}
		</div>
	</div>
</section>
