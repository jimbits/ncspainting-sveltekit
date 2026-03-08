<script>
	import { createEventDispatcher } from 'svelte';

	// --- Props ---
	export let open = false;
	export let title = '';
	export let closeOnBackdrop = true;

	// --- Internals ---
	const dispatch = createEventDispatcher();
	let dialogEl;

	// Sync prop → native dialog open/close
	$: if (dialogEl) {
		if (open) {
			dialogEl.showModal();
		} else {
			dialogEl.close();
		}
	}

	// Close on native 'close' event (Escape key triggers this)
	function onNativeClose() {
		open = false;
		dispatch('close');
	}

	// Close when user clicks the backdrop (outside dialog box)
	function onBackdropClick(e) {
		if (!closeOnBackdrop) return;
		const rect = dialogEl.getBoundingClientRect();
		const clickedOutside =
			e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom;
		if (clickedOutside) {
			open = false;
			dispatch('close');
		}
	}

	function closeDialog() {
		open = false;
		dispatch('close');
	}
</script>

<!-- Native <dialog> element -->
<dialog
	bind:this={dialogEl}
	class="dialog"
	class:is-open={open}
	on:close={onNativeClose}
	on:click={onBackdropClick}
	aria-labelledby={title ? 'dialog-title' : undefined}
	aria-modal="true"
>
	<!-- Inner wrapper stops backdrop clicks propagating inward -->
	<div class="dialog__inner" on:click|stopPropagation>
		<header class="dialog__header">
			{#if title}
				<h2 id="dialog-title" class="dialog__title">{title}</h2>
			{/if}
			<button class="dialog__close" on:click={closeDialog} aria-label="Close dialog">✕</button>
		</header>

		<div class="dialog__body">
			<slot />
		</div>

		{#if $$slots.footer}
			<footer class="dialog__footer">
				<slot name="footer" />
			</footer>
		{/if}
	</div>
</dialog>

<style>
	/* ── Tokens ─────────────────────────────────────── */
	.dialog {
		--dialog-bg: #0f0f12;
		--dialog-border: rgba(255 255 255 / 0.08);
		--dialog-accent: #e8ff5a;
		--dialog-text: #e8e6df;
		--dialog-muted: rgba(232 230 223 / 0.45);
		--dialog-radius: 1rem;
		--dialog-shadow: 0 32px 80px rgba(0 0 0 / 0.7), 0 0 0 1px var(--dialog-border);
		--dialog-width: min(560px, 92vw);
		--transition-speed: 250ms;
	}

	/* ── Reset native dialog chrome ─────────────────── */
	.dialog {
		background: transparent;
		border: none;
		padding: 0;
		max-width: var(--dialog-width);
		width: var(--dialog-width);
		/* Hide until CSS animation runs */
		opacity: 0;
		transform: scale(0.94) translateY(8px);
		transition:
			opacity var(--transition-speed) cubic-bezier(0.16, 1, 0.3, 1),
			transform var(--transition-speed) cubic-bezier(0.16, 1, 0.3, 1),
			display var(--transition-speed) allow-discrete,
			overlay var(--transition-speed) allow-discrete;
	}

	/* Open state — fade + scale in */
	.dialog.is-open,
	.dialog[open] {
		opacity: 1;
		transform: scale(1) translateY(0);
	}

	/* Starting style for @starting-style (Chrome 117+) */
	@starting-style {
		.dialog[open] {
			opacity: 0;
			transform: scale(0.94) translateY(8px);
		}
	}

	/* ── Backdrop ────────────────────────────────────── */
	.dialog::backdrop {
		background: rgba(0 0 0 / 0);
		backdrop-filter: blur(0px);
		transition:
			background var(--transition-speed) ease,
			backdrop-filter var(--transition-speed) ease,
			display var(--transition-speed) allow-discrete,
			overlay var(--transition-speed) allow-discrete;
	}

	.dialog[open]::backdrop {
		background: rgba(0 0 0 / 0.65);
		backdrop-filter: blur(4px);
	}

	@starting-style {
		.dialog[open]::backdrop {
			background: rgba(0 0 0 / 0);
			backdrop-filter: blur(0px);
		}
	}

	/* ── Inner card ──────────────────────────────────── */
	.dialog__inner {
		background: var(--dialog-bg);
		border-radius: var(--dialog-radius);
		box-shadow: var(--dialog-shadow);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		/* Subtle top accent line */
		border-top: 2px solid var(--dialog-accent);
	}

	/* ── Header ─────────────────────────────────────── */
	.dialog__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.25rem 1.5rem 0;
		gap: 1rem;
	}

	.dialog__title {
		font-family: 'Georgia', 'Times New Roman', serif;
		font-size: 1.2rem;
		font-weight: 600;
		color: var(--dialog-text);
		letter-spacing: -0.02em;
		margin: 0;
	}

	.dialog__close {
		appearance: none;
		background: rgba(255 255 255 / 0.06);
		border: 1px solid var(--dialog-border);
		color: var(--dialog-muted);
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
		display: grid;
		place-items: center;
		cursor: pointer;
		font-size: 0.75rem;
		flex-shrink: 0;
		margin-left: auto;
		transition:
			background 150ms,
			color 150ms;
	}

	.dialog__close:hover {
		background: rgba(255 255 255 / 0.12);
		color: var(--dialog-text);
	}

	/* ── Body ────────────────────────────────────────── */
	.dialog__body {
		padding: 1.25rem 1.5rem;
		color: var(--dialog-muted);
		font-family: 'Georgia', serif;
		font-size: 0.95rem;
		line-height: 1.65;
	}

	/* ── Footer ──────────────────────────────────────── */
	.dialog__footer {
		display: flex;
		justify-content: flex-end;
		gap: 0.75rem;
		padding: 0 1.5rem 1.5rem;
		border-top: 1px solid var(--dialog-border);
		padding-top: 1.25rem;
		margin-top: 0.25rem;
	}
</style>
