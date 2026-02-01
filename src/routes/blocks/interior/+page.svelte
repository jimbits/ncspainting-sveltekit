<script lang="ts" module>
	import type { Key } from 'lucide-svelte';
	type Key = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I';
	export let defaultLayout: Key = 'A';
</script>

<script lang="ts">
	// Import your 5 layout components (from the previous message)
	let showSelector = $state(true);
	import {
		Interior1,
		Interior2,
		Interior3,
		Interior4,
		Interior5,
		Interior6,
		Interior7,
		Interior8,
		Interior9
	} from './index';

	let active = $state<Key>(defaultLayout);

	const layouts: Record<Key, { label: string; desc: string; component: typeof Interior1 }> = {
		A: { label: 'Interior 1', desc: 'Split intro + service grid', component: Interior1 },
		B: { label: 'Interior 2', desc: 'Before/After + tabs', component: Interior2 },
		C: { label: 'Interior 3', desc: 'Sticky media + benefits', component: Interior3 },
		D: { label: 'Interior 4', desc: 'Checklist quote helper', component: Interior4 },
		E: { label: 'Interior 5', desc: 'Magazine cards + gallery', component: Interior5 },
		F: { label: 'Interior 6', desc: 'Magazine cards + gallery', component: Interior6 },
		G: { label: 'Interior 7', desc: 'Magazine cards + gallery', component: Interior7 },
		H: { label: 'Interior 8', desc: 'Magazine cards + gallery', component: Interior8 },
		I: { label: 'Interior 9', desc: 'Magazine cards + gallery', component: Interior9 }
	};

	// Optional: keep URL hash in sync so you can share previews like /#interior-layout=D
	function setHash(key: Key) {
		try {
			const url = new URL(window.location.href);
			url.hash = `interior-layout=${key}`;
			window.history.replaceState({}, '', url);
		} catch {
			// ignore (SSR or restricted environment)
		}
	}

	// Optional: read from hash on mount (client only)
	function readHash() {
		try {
			const h = window.location.hash;
			const m = h.match(/interior-layout=([A-E])/);
			if (m?.[1]) active = m[1] as Key;
		} catch {
			// ignore
		}
	}
</script>

<svelte:window on:load={readHash} />

<section class="bg-stone-950 text-stone-100">
	<!-- Preview toolbar -->
	{#if showSelector}
		<div class="sticky top-0 z-40 border-b border-stone-800 bg-stone-950/80 backdrop-blur">
			<div
				class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
			>
				<div class="min-w-0">
					<p class="text-xs font-semibold tracking-wide text-indigo-200/90">Interior Painting Section Preview</p>
					<p class="mt-1 truncate text-sm text-stone-300">
						Now viewing: <span class="font-semibold text-stone-100">{layouts[active].label}</span>
						— {layouts[active].desc}
					</p>
				</div>

				<div class="flex flex-wrap gap-2">
					{#each Object.keys(layouts) as k}
						{@const key = k as Key}
						<button
							type="button"
							class={[
								'rounded-full border px-4 py-2 text-sm font-semibold transition',
								active === key
									? 'border-amber-400 bg-amber-400/10 text-amber-100'
									: 'border-stone-700 bg-stone-900/10 text-stone-200 hover:border-stone-500'
							].join(' ')}
							onclick={() => {
								active = key;
								setHash(key);
							}}
						>
							{layouts[key].label}
						</button>
					{/each}

					<!-- optional: “hide toolbar” for clean screenshot -->
					<a
						href="#"
						class="rounded-full border border-stone-700 px-4 py-2 text-sm font-semibold text-stone-200 hover:border-stone-500"
						onclick={(e) => {
							e.preventDefault();
							showSelector = false;
						}}
					>
						Hide
					</a>
				</div>
			</div>
		</div>
	{/if}

	<!-- Render selected layout -->
	<div class="relative">
		<svelte:component this={layouts[active].component} />
	</div>
</section>
