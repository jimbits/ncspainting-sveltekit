<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { slide } from 'svelte/transition';
	type QuestionSummaryProps = {
		class?: string;
		question: string;
		answer: string;
	};
	let { class: className, question, answer, ...rest }: QuestionSummaryProps = $props();
	let isOpen = $state(false);
</script>

<div class={cn('overflow-hidden rounded-lg bg-white', className)}>
	<button
		onclick={() => (isOpen = !isOpen)}
		class="flex w-full cursor-pointer items-center justify-between p-4 text-left font-medium text-gray-800 transition-colors hover:bg-orange-50"
		aria-expanded={isOpen}
	>
		<span>{question}</span>

		<svg
			class="h-5 w-5 shrink-0 text-orange-500 transition-transform duration-300 {isOpen ? 'rotate-180' : ''}"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</button>

	{#if isOpen}
		<div transition:slide={{ duration: 300, axis: 'y' }}>
			<p class="border-t border-gray-100 px-4 pt-4 pb-4 text-gray-600">
				{answer}
			</p>
		</div>
	{/if}
</div>
