<!-- <script lang="ts" module>
	import { Mail } from 'lucide-svelte';
	import { cn } from 'tailwind-variants';
	export type Item = {
		id: number;
	};
</script>

<script lang="ts">
	import type { Item } from "$lib/ui/item";

	let emailRef;
	let base = ' flex items-center gap-2 rounded px-4 transition-colors hover:bg-blue-50  hover:text-blue-700';
	const variants = {
		selected: 'bg-blue-500 text-white ',
		active: 'bg-orange-600 text-white',
		disabled: 'cursor-not-allowed opacity-50 text-gray-400'
	} as const;

	type Variant = keyof typeof variants;

	let variant: Variant = 'active';

	function handleClick(item: Item) {
		console.log(item.id);
	}
</script>

<button bind:this={emailRef} onclick={() => handleClick({ id: 1 })} class={cn(base)} class={cn(base, variants[variant])}>
	<Mail class="w-5" />
	<span>Email</span>
</button> -->
<script lang="ts">
	import { cn } from '$lib/helpers/cn';
	import Item from '$lib/ui/item/item.svelte';
	import { Check, Mail, Phone } from '@lucide/svelte';
	let selections = ['Email', 'Phone', 'Either'] as const;
	type Item = (typeof selections)[number];
	let selected = $state<Item>('Either');
	// ✅ for roving focus (keyboard arrows)
	let btnRefs: HTMLButtonElement[] = [];
	function handleClick(e, method: Item) {
		selected = method;
		console.log(e.currentTarget.name, e.currentTarget.value);
		console.log(btnRefs[0]);
	}
</script>

<div class="button-grid" role="radiogroup" aria-label="Preferred contact method">
	{#each selections as method, i}
		{@const isSelected = selected === method}
		<button
			bind:this={btnRefs[i]}
			value={method}
			name="contactMethod"
			role="radio"
			aria-checked={selected === method}
			tabindex={isSelected ? 0 : -1}
			data-state={isSelected ? 'on' : 'off'}
			onclick={(e) => handleClick(e, method)}
			class={cn(
				'inline-flex items-center gap-2 rounded bg-gray-100 px-4 py-1 text-sm transition-colors',
				' hover:bg-blue-100 hover:text-blue-700',
				'focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none',
				selected === method ? 'bg-blue-500 text-white' : ''
			)}
		>
			<span>{method}</span>

			{#if method === 'Email'}
				<Mail class="w-4" />
			{/if}
			{#if method === 'Phone'}
				<Phone class="w-4" />
			{/if}
			{#if method === 'Either'}
				<Check class="w-4" />
			{/if}
		</button>
	{/each}
	<!-- Optional: include this if you want native form submission -->
	<input type="hidden" name="contactMethod" value={selected} />
</div>

<style>
	.button-grid {
		display: grid;
		grid-template-columns: repeat(4, auto);
		column-gap: 1rem;
		grid-template-rows: auto;
		align-items: center;
	}
</style>
