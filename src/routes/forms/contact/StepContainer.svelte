<script lang="ts">
	import StepIndicator from './StepIndicator.svelte';
	import { FirstStep } from './steps';

	function handleClick(e: MouseEvent) {
		e.currentTarget.id === 'next' ? console.log(1) : console.log(0);
	}
</script>

<aside class="max-w-lg">
	<header class="mb-12">
		<StepIndicator />
	</header>
	<FirstStep />
	<footer class="flex justify-between gap-4">
		<button id="next" onclick={handleClick} class="rounded-lg border px-6 py-2">next</button>
		<button id="back" onclick={handleClick} class="rounded-lg border px-6 py-2">previous</button>
	</footer>
</aside>

<style>
</style>
