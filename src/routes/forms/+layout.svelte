<script>
	let { children } = $props();
</script>

<main class="viewport-center">
	{@render children()}
</main>

<style>
	.viewport-center {
		display: flex;
		justify-content: center; /* Horizontal centering */
		align-items: center; /* Vertical centering */
		min-height: 100dvh; /* Full height of the viewport */
		width: 100dvw; /* Full width */
		background-color: rgb(251, 251, 251);
	}
</style>
