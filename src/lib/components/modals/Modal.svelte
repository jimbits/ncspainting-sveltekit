<script lang="ts">
	import type { Snippet } from 'svelte';

	type ModalProps = {
		isOpen: boolean;
		children: Snippet;
		title: string;
	};

	let { isOpen = $bindable(false), children, title }: ModalProps = $props();
	let dialogRef = $state<HTMLDialogElement>();

	// Sync the native dialog state with the Svelte prop
	$effect(() => {
		if (!dialogRef) return;

		if (isOpen) {
			// Check if already open to avoid redundant calls
			if (!dialogRef.open) dialogRef.showModal();
		} else {
			if (dialogRef.open) dialogRef.close();
		}
	});

	const closeModal = () => (isOpen = false);

	// Close on clicking the backdrop (not the content)
	const handleBackdropClick = (e: MouseEvent) => {
		if (e.target === dialogRef) closeModal();
	};
</script>

<dialog bind:this={dialogRef} onclick={handleBackdropClick} onclose={closeModal} class="custom-modal">
	<div class="modal-content">
		<header>
			<h3>{title}</h3>
			<button type="button" class="close-btn" onclick={closeModal}>&times;</button>
		</header>
		<hr />
		<article>
			{@render children()}
		</article>
	</div>
</dialog>

<style>
	/* Use CSS variables for easy customization */
	.custom-modal {
		margin: auto;
		display: flex; /* Makes the modal a flex container for its children */
		flex-direction: column;
		border: none;

		max-height: 90vh;
		max-width: 500px;
		width: 90%;
		padding: 0;
		border-radius: 8px;
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

		/* Initial state for animation */
		opacity: 0;
		transform: translateY(20px) scale(0.95);
		transition:
			opacity 0.3s ease-out,
			transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
			display 0.3s allow-discrete;
	}

	/* The 'open' pseudo-class is applied by the browser when showModal() is called */
	.custom-modal[open] {
		opacity: 1;
		transform: translateY(0) scale(1);
	}

	/* Starting point for the animation when the dialog opens */
	@starting-style {
		.custom-modal[open] {
			opacity: 0;
			transform: translateY(20px) scale(0.95);
		}
	}

	/* Backdrop styling */
	.custom-modal::backdrop {
		background: rgba(0, 0, 0, 0);
		transition:
			background-color 0.3s ease-out,
			display 0.3s allow-discrete;
	}

	.custom-modal[open]::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}

	@starting-style {
		.custom-modal[open]::backdrop {
			background: rgba(0, 0, 0, 0);
		}
	}

	/* Layout Styles */
	.modal-content {
		display: flex;
		flex-direction: column;
		height: 100%; /* Fill the dialog height */
		overflow: hidden; /* We'll let the 'article' handle the scroll */
		padding: 2rem;
	}
	header {
		margin-bottom: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.close-btn {
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
	}
</style>
