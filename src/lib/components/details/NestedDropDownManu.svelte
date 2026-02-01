<!-- InteriorMenu.svelte -->
<script lang="ts">
	// No JavaScript needed
</script>

<div class="menu-item group relative">
	<button type="button" class="block cursor-pointer px-4 py-2 text-gray-800 transition-colors hover:bg-gray-100">
		Interior
	</button>

	<ul class="submenu">
		<li><a href="/" class="submenu-link">Interior1</a></li>
		<li><a href="/" class="submenu-link">Interior2</a></li>
		<li><a href="/" class="submenu-link">Interior3</a></li>

		<!-- Nested submenu item -->
		<li class="nested-menu-item">
			<button type="button" class="submenu-link">
				<span>Interior4</span>
				<svg class="inline-block h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>

			<ul class="nested-submenu">
				<li><a href="/" class="submenu-link">Bento1</a></li>
				<li><a href="/" class="submenu-link">Bento1</a></li>
				<li><a href="/" class="submenu-link">Bento1</a></li>
				<li><a href="/" class="submenu-link">Bento1</a></li>
				<li><a href="/" class="submenu-link">Bento1</a></li>
			</ul>
		</li>

		<li><a href="/" class="submenu-link">Interior5</a></li>
		<li><a href="/" class="submenu-link">Interior6</a></li>
		<li><a href="/" class="submenu-link">Interior7</a></li>
		<li><a href="/" class="submenu-link">Interior8</a></li>
		<li><a href="/" class="submenu-link">Interior9</a></li>
	</ul>
</div>

<style>
	.submenu {
		position: absolute;
		left: 0;
		margin-top: 0;
		width: 12rem;
		background-color: white;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
		border: 1px solid #e5e7eb;
		opacity: 0;
		visibility: hidden;
		max-height: 0;
		overflow: visible;
		transition: all 300ms ease-in-out;
		transform: translateY(-10px);
		z-index: 50;
	}

	.group:hover .submenu,
	.group:focus-within .submenu {
		opacity: 1;
		visibility: visible;
		max-height: 500px;
		transform: translateY(0);
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

	/* Nested submenu styles */
	.nested-menu-item {
		position: relative;
	}

	/* Fix for Interior4 button with arrow */
	.nested-menu-item button.submenu-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		text-align: left;
	}

	.nested-submenu {
		position: absolute;
		left: 100%;
		top: 0;
		margin-left: 0;
		width: 12rem;
		background-color: white;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
		border: 1px solid #e5e7eb;
		opacity: 0;
		visibility: hidden;
		max-height: 0;
		overflow: hidden;
		transition: all 300ms ease-in-out;
		transform: translateX(-10px);
		z-index: 60;
	}

	.nested-menu-item:hover .nested-submenu,
	.nested-menu-item:focus-within .nested-submenu {
		opacity: 1;
		visibility: visible;
		max-height: 500px;
		transform: translateX(0);
	}
</style>
