<script>
	import Dialog from '$lib/components/modals/Dialog.svelte';

	let isOpen = false;
</script>

<main>
	<button class="trigger" on:click={() => (isOpen = true)}>Open Dialog</button>

	<Dialog bind:open={isOpen} title="Unsaved Changes">
		<p>You have unsaved changes. Are you sure you want to leave without saving?</p>

		<!-- Named footer slot -->
		<svelte:fragment slot="footer">
			<button class="btn btn--ghost" on:click={() => (isOpen = false)}>Cancel</button>
			<button class="btn btn--accent" on:click={() => (isOpen = false)}>Confirm</button>
		</svelte:fragment>
	</Dialog>
</main>

<style>
	main {
		min-height: 100vh;
		display: grid;
		place-items: center;
	}

	.trigger {
		font-family: 'Georgia', serif;
		background: #e8ff5a;
		color: #0a0a0d;
		border: none;
		padding: 0.75rem 1.75rem;
		border-radius: 0.5rem;
		font-size: 0.95rem;
		font-weight: 600;
		cursor: pointer;
		transition: opacity 150ms;
	}
	.trigger:hover {
		opacity: 0.85;
	}

	/* Shared button base */
	.btn {
		font-family: 'Georgia', serif;
		font-size: 0.875rem;
		padding: 0.55rem 1.25rem;
		border-radius: 0.5rem;
		cursor: pointer;
		transition:
			background 150ms,
			color 150ms;
	}
	.btn--ghost {
		background: transparent;
		border: 1px solid rgba(255 255 255 / 0.12);
		color: rgba(232 230 223 / 0.6);
	}
	.btn--ghost:hover {
		background: rgba(255 255 255 / 0.06);
		color: #e8e6df;
	}
	.btn--accent {
		background: #e8ff5a;
		border: none;
		color: #0a0a0d;
		font-weight: 600;
	}
	.btn--accent:hover {
		opacity: 0.85;
	}
</style>
