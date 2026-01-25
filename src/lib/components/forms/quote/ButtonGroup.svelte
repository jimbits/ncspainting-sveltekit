<script lang="ts" module>
	interface ButtonGroupProps {
		class?: string;
		[key: string]: any;
	}
</script>

<script lang="ts">
	import { cn } from '$lib/helpers/cn';
	import { Check, Mail, Phone, Blend } from '@lucide/svelte';
	import { tick } from 'svelte';

	const selections = ['Email', 'Phone', 'Either'] as const;
	type Item = (typeof selections)[number];

	// ✅ default selected on first render
	let selected = $state<Item>('Either');
	let { class: className, ...rest }: ButtonGroupProps = $props();
	// ✅ for roving focus (keyboard arrows)
	let btnRefs: HTMLButtonElement[] = [];

	function select(method: Item) {
		selected = method;
	}

	function indexOf(method: Item) {
		return selections.indexOf(method);
	}

	async function moveSelection(delta: number) {
		const current = indexOf(selected);
		const next = (current + delta + selections.length) % selections.length;
		const nextValue = selections[next];

		selected = nextValue;

		// wait for DOM update, then focus the newly selected button
		await tick();
		btnRefs[next]?.focus();
	}

	function onKeydown(e: KeyboardEvent) {
		switch (e.key) {
			case 'ArrowRight':
			case 'ArrowDown':
				e.preventDefault();
				moveSelection(1);
				break;
			case 'ArrowLeft':
			case 'ArrowUp':
				e.preventDefault();
				moveSelection(-1);
				break;
			case 'Home':
				e.preventDefault();
				selected = selections[0];
				tick().then(() => btnRefs[0]?.focus());
				break;
			case 'End':
				e.preventDefault();
				selected = selections[selections.length - 1];
				tick().then(() => btnRefs[selections.length - 1]?.focus());
				break;
		}
	}

	function idFor(method: Item) {
		return `contact-method-${method.toLowerCase()}`;
	}
</script>

<div class={cn('flex gap-5', className)} role="radiogroup" aria-label="Preferred contact method">
	{#each selections as method, i}
		{@const isSelected = selected === method}

		<button
			bind:this={btnRefs[i]}
			type="button"
			id={idFor(method)}
			role="radio"
			aria-checked={isSelected}
			tabindex={isSelected ? 0 : -1}
			data-state={isSelected ? 'on' : 'off'}
			onclick={() => select(method)}
			onkeydown={onKeydown}
			class={cn(
				'inline-flex w-fit items-center justify-center gap-0.5 rounded py-0.5    text-sm font-semibold transition-all',
				'focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none',
				isSelected
					? 'bg-blue-50 px-3   text-blue-600 ring-2 ring-blue-400 ring-offset-1'
					: ' text-gray-500 hover:bg-blue-100 hover:text-blue-700'
			)}
		>
			<span>{method}</span>

			{#if isSelected}
				<span class="  text-blue-700"><Check class="h-4 w-4" /></span>
			{/if}
		</button>
	{/each}

	<!-- Optional: include this if you want native form submission -->
	<input type="hidden" name="contactMethod" value={selected} />
</div>

<style>
	.button-grid {
		display: grid;
		grid-template-columns: repeat(3, auto);
		column-gap: 1rem;
		align-items: center;
	}
</style>
