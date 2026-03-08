<script>
	let { open = $bindable(false), children } = $props();

	let dialog;

	$effect(() => {
		if (!dialog) return;
		open ? dialog.showModal() : dialog.close();
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_noninteractive_element_interactions -->
<dialog bind:this={dialog} class="dialog" class:open onclick={(e) => e.target === dialog && (open = false)}>
	<div class="dialog-panel">
		<button class="close-btn" onclick={() => (open = false)} aria-label="Close">✕</button>
		{@render children()}
	</div>
</dialog>

<style>
	.dialog {
		border: none;
		background: transparent;
		padding: 0;
		max-width: 100vw;
		max-height: 100vh;
	}

	/* Native <dialog> backdrop */
	.dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(4px);
		animation: fade-in 200ms ease forwards;
	}

	.dialog-panel {
		position: relative;
		background: #fff;
		border-radius: 12px;
		padding: 2rem;
		min-width: 360px;
		max-width: 90vw;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);

		/* GPU-composited — no layout thrashing */
		will-change: transform, opacity;
		animation: pop-in 220ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
	}

	.dialog:not(.open) .dialog-panel {
		animation: pop-out 180ms ease forwards;
	}

	.close-btn {
		position: absolute;
		top: 0.75rem;
		right: 0.75rem;
		background: none;
		border: none;
		font-size: 1rem;
		cursor: pointer;
		color: #888;
		line-height: 1;
		padding: 0.25rem;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes pop-in {
		from {
			opacity: 0;
			transform: scale(0.93);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	@keyframes pop-out {
		from {
			opacity: 1;
			transform: scale(1);
		}
		to {
			opacity: 0;
			transform: scale(0.93);
		}
	}
</style>
