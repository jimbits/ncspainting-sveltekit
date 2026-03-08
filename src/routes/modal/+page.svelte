<script>
	import Dialog from './Dialog.svelte';
	import ExampleContent from './ExampleContent.svelte';

	let isOpen = $state(false);
</script>

<button onclick={() => (isOpen = true)}>Open Dialog</button>

<Dialog bind:open={isOpen}>
	<ExampleContent />
</Dialog>
