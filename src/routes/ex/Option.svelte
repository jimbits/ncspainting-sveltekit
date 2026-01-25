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
	import { Check, Mail } from '@lucide/svelte';
	import { Phone } from 'lucide-svelte';

	const base = 'inline-flex items-center gap-2 rounded px-4 py-2 transition-colors bg-gray-100';

	const variants = {
		default: 'bg-transparent text-gray-700 hover:bg-blue-200',
		selected: 'bg-orange-600 text-white'
	} as const;

	type VariantKey = keyof typeof variants;

	let variantKey = $state<VariantKey>('default');

	// derived class string from the key
	const variantClass = $derived(variants[variantKey]);

	function handleClick() {
		console.log('variantKey');
	}
</script>

<div class="button-grid">
	<button class={cn(base, variantClass)} onclick={() => (variantKey = 'selected')}>
		Email
		<Mail class="w-5" />
	</button>

	<button class={cn(base, variantClass)} onclick={() => (variantKey = 'selected')}>
		Phone
		<Phone class="w-5" />
	</button>

	<button class={cn(base, variantClass)} onclick={() => (variantKey = 'selected')}>
		Either
		<Check class="w-5" />
	</button>
</div>

<style>
	.button-grid {
		display: grid;
		grid-template-columns: repeat(3, max-content);
		column-gap: 1rem;
		grid-template-rows: 250px;
		align-items: center;
	}
</style>
