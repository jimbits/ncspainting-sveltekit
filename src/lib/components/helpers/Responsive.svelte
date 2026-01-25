<script lang="ts">
	import { X, Save, Download, LayersPlus } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
	import { cn } from '$lib/helpers/cn';
	import { getCurrentBreakpoint } from '$lib/helpers/twBreakpoint';

	let { isOpen = $bindable() } = $props();
	let viewportWidth = $state(0);

	let breakpoint = $derived(getCurrentBreakpoint(viewportWidth));

	// let cl = $derived(breakpoint.color);
	let tabBg = $derived(
		isOpen ? 'bg-green-500 hover:bg-lime-400 text-green-950' : 'bg-rose-500 hover:bg-red-600'
	);
</script>

<svelte:window bind:innerWidth={viewportWidth} />

{#if isOpen}
	<aside
		transition:fly={{ y: -300, duration: 300 }}
		class="fixed top-0 right-0 z-40 m-8 h-fit w-[300px] rounded-b-lg border border-stone-300 text-white shadow-xl"
	>
		<header class=" bg-stone-200 pb-2">
			<X
				onclick={() => (isOpen = false)}
				class="  ml-auto size-5 text-stone-500 hover:text-stone-900"
			/>
			<h2 class=" text-center text-stone-600">Responsive Tools</h2>
		</header>

		<div class="  bg-stone-100">
			<ul class="  space-y-3 px-2 py-6 text-xs font-semibold text-stone-500">
				<li class="flex items-center gap-4">
					<h4>Viewport Width:</h4>
					{#if viewportWidth}
						<output class="font-bold text-stone-600"
							>{viewportWidth} <span class="font-light">px</span></output
						>
					{/if}
				</li>
				<li class="flex items-center gap-2">
					<h4 class="font-bold">Tailwind Breakpoint:</h4>
					<div class="inline-flex items-center gap-3">
						<output class="text-sm font-bold">{breakpoint?.label}</output>
						<span class={cn('inline-block h-5 w-5 ', breakpoint?.color)}></span>
					</div>
				</li>
			</ul>
		</div>

		<footer class="bg-stone-200 py-2">
			<ul
				class=" icon-list flex justify-around text-center text-xs text-stone-400 text-stone-500 [&_svg]:mx-auto [&_svg]:size-4.25 [&_svg]:text-stone-500"
			>
				<li><Save />save</li>
				<li><LayersPlus />copy</li>
				<li><Download />download</li>
			</ul>
		</footer>
	</aside>
{/if}
