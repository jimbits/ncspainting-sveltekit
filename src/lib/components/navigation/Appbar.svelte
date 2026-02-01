<script>
	import { MapPin, Menu, Phone } from 'lucide-svelte';
	import Logo from '$lib/assets/icons/logo.svg?component';
</script>

<header>
	<div class="mx-2 my-1 grid grid-cols-[75px_1fr_75px] items-center justify-between sm:flex lg:py-3">
		<div class=" items-center sm:flex sm:gap-2">
			<Logo class="h-12 w-12" />
			<div class="hidden sm:block">
				<h2 class="   text-2xl font-bold text-stone-900 sm:text-3xl">NCS Painting</h2>
			</div>
		</div>
		<div class=" text-center sm:hidden">
			<h2 class="  text-2xl font-bold">NCS Painting</h2>
		</div>
		<!-- Local trust + service area -->
		<p
			class="hidden items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-sm font-medium text-indigo-950 lg:inline-flex"
		>
			<span aria-hidden="true">
				<MapPin class="stroke-indigo-500" />
			</span>
			Serving Edmonton, Sherwood Park, St. Albert & Fort Saskatchewan
		</p>

		<div class="block sm:hidden">
			<Menu class="ml-auto" />
		</div>
		<ul class="hidden sm:flex sm:flex-col sm:gap-2 md:flex-row">
			<li
				class=" order-2 inline-flex flex-1 items-center gap-2 rounded-xl px-2 py-1.75 text-sm font-semibold text-blue-700 uppercase md:order-0"
			>
				<Phone class="h-4 w-4" />
				<a href="tel:7807225577">Call 780-722-5577</a>
			</li>
			<li>
				<button
					type="button"
					class=" w-full rounded-xl bg-gradient-to-b from-blue-500 via-sky-600 to-blue-600 px-4 py-1.75 text-sm font-semibold text-white uppercase"
				>
					login
				</button>
			</li>
		</ul>
	</div>
</header>
