<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let isOpen = false;
</script>

<nav class="relative flex w-full justify-center shadow-[0_1px_2px_1px_var(--box-bottom)]">
	<div class="menu-details relative inline-block">
		<button class="menu-summary" on:click={() => (isOpen = !isOpen)}>Exterior</button>

		{#if isOpen}
			<ul class="submenu" transition:slide={{ duration: 300, easing: quintOut }}>
				<li><a href="/" class="submenu-link">Interior1</a></li>
				<li><a href="/" class="submenu-link">Interior2</a></li>
				<li><a href="/" class="submenu-link">Interior3</a></li>
				<li><a href="/" class="submenu-link">Interior4</a></li>
				<li><a href="/" class="submenu-link">Interior5</a></li>
				<li><a href="/" class="submenu-link">Interior6</a></li>
				<li><a href="/" class="submenu-link">Interior7</a></li>
				<li><a href="/" class="submenu-link">Interior8</a></li>
				<li><a href="/" class="submenu-link">Interior9</a></li>
			</ul>
		{/if}
	</div>
</nav>

<style>
	.menu-details {
		position: relative;
	}

	.menu-summary {
		display: block;
		padding: 0.5rem 1rem;
		color: #1f2937;
		cursor: pointer;
		list-style: none;
		user-select: none;
		transition: background-color 200ms;
		background: none;
		border: none;
	}

	.menu-summary:hover {
		background-color: #f3f4f6;
	}

	.submenu {
		position: absolute;
		left: 0;
		margin-top: 0;
		width: 12rem;
		background-color: white;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
		border: 1px solid #e5e7eb;
	}

	.submenu-link {
		display: block;
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
		color: #374151;
		transition: background-color 200ms;
		border-bottom: 1px solid #f3f4f6;
	}

	.submenu-link:hover {
		background-color: #f3f4f6;
	}

	.submenu li:last-child .submenu-link {
		border-bottom: none;
	}
</style>
