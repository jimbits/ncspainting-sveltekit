<script lang="ts">
	const services = [
		{
			id: '01',
			title: 'Wall & Feature Painting',
			desc: 'Expert accent walls and professional room painting.',
			size: 'md:col-span-2'
		},
		{ id: '02', title: 'Cabinet Refinishing', desc: 'Factory-like durability.', size: 'md:col-span-1' },
		{ id: '03', title: 'Popcorn Removal', desc: 'Clean, dust-free texture removal.', size: 'md:col-span-1' },
		{ id: '04', title: 'Ceiling & Trim', desc: 'Precision work on crown molding.', size: 'md:col-span-2' }
	];
</script>

<section class="bg-stone-50 py-16 lg:py-24">
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<div class="flex flex-col gap-16 lg:flex-row lg:items-start">
			<div class="w-full lg:sticky lg:top-10 lg:w-1/2">
				<div class="relative overflow-hidden rounded-[4rem] rounded-br-2xl shadow-2xl">
					<img src="/image-37.png" alt="NCS Painting interior specialist" class="aspect-[4/5] w-full object-cover" />
					<div class="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/60 p-8 text-white">
						<p class="text-xl font-medium italic">"Flawless finishes for Edmonton homes."</p>
					</div>
				</div>
			</div>

			<div class="w-full lg:w-1/2">
				<header class="mb-12">
					<span class="text-sm font-bold tracking-widest uppercase opacity-50">Interior Services</span>
					<h2 class="mt-4 text-5xl font-extrabold tracking-tight">Interior Home Painting</h2>
				</header>

				<div class="divide-y divide-stone-200">
					{#each [{ id: '01', title: 'Wall & Feature Painting', desc: 'Expert accent walls and professional room painting.' }, { id: '02', title: 'Ceiling & Trim', desc: 'Precision work on crown molding, baseboards, and ceilings.' }, { id: '05', title: 'Cabinet Painting', desc: 'Factory-like refinishing for kitchen and bathroom cabinets.' }] as service}
						<div class="group py-10 transition-all hover:pl-4">
							<div class="flex items-baseline gap-6">
								<span class="font-mono text-lg opacity-30">{service.id}</span>
								<div>
									<h3 class="text-3xl font-bold transition-colors group-hover:text-orange-600">{service.title}</h3>
									<p class="mt-3 max-w-md leading-relaxed text-stone-600">{service.desc}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
</style>
