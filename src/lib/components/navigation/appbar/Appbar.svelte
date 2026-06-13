<script>
	import Logo from '$lib/assets/brand/Logo.svelte';
	import { Menu, Phone } from 'lucide-svelte';
</script>

<section>
	<header>
		<div class=" flex items-center justify-between px-3 pt-1 pb-4 sm:flex lg:py-3">
			<div class=" items-center sm:flex sm:gap-2">
				<Logo class="h-7 w-7" rings="fill-blue-600" handle="fill-zinc-700" brush="fill-zinc-400" />
				<div class="hidden sm:block">
					<h2 class=" text-lg font-bold text-stone-900">NCS Painting</h2>
				</div>
			</div>
			<div class=" text-center sm:hidden">
				<h2 class="  font-bold text-zinc-500">NCS Painting</h2>
			</div>

			<div class="block sm:hidden">
				<Menu class="ml-auto" />
			</div>
			<ul class="hidden sm:flex sm:flex-col sm:gap-2 md:flex-row">
				<li
					class=" order-2 inline-flex flex-1 items-center gap-2 rounded-xl px-2 py-1.75 text-sm font-semibold uppercase md:order-0"
				>
					<Phone class="h-4 w-4" />
					<a href="tel:15872084445" class=" w-full">Call 587-208-4445</a>
				</li>
			</ul>
		</div>
	</header>
</section>
