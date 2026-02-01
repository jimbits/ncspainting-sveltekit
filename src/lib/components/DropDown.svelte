<script>
	/** @type {string} */
	export let label = 'Menu';

	/** @type {string} */
	export let href = '#';
</script>

<li class="has-dropdown">
	<a {href}>{label}</a>
	<ul class="dropdown">
		<slot />
	</ul>
</li>

<style>
	.has-dropdown {
		position: relative;
		list-style: none;
	}

	.has-dropdown > a {
		display: block;
		padding: 0.5rem 1rem;
		text-decoration: none;
		color: inherit;
	}

	.dropdown {
		position: absolute;
		top: 100%;
		left: 0;
		min-width: 200px;
		margin: 0;
		padding: 0.5rem 0;
		list-style: none;
		background: white;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		border-radius: 4px;

		/* Animation properties */
		opacity: 0;
		visibility: hidden;
		transform: translateY(-10px);
		transition:
			opacity 0.2s ease,
			transform 0.2s ease,
			visibility 0.2s ease;
	}

	.has-dropdown:hover .dropdown,
	.has-dropdown:focus-within .dropdown {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}

	.dropdown :global(li) {
		list-style: none;
	}

	.dropdown :global(a) {
		display: block;
		padding: 0.5rem 1rem;
		text-decoration: none;
		color: inherit;
		transition: background 0.15s ease;
	}

	.dropdown :global(a:hover) {
		background: rgba(0, 0, 0, 0.05);
	}
</style>
