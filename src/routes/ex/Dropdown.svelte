<!-- src/lib/components/Dropdown.svelte -->
<script>
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	let isOpen = $state(false);
	let buttonRef = $state(null);

	const menuItems = [
		{ id: 'marketing-1', label: 'Marketing 1' },
		{ id: 'marketing-2', label: 'Marketing 2' },
		{ id: 'marketing-3', label: 'Marketing 3' },
		{ id: 'marketing-4', label: 'Marketing 4' },
		{ id: 'marketing-5', label: 'Marketing 5' }
	];
	$effect(() => {
		console.log('Menu Items:', menuItems);
	});

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function closeDropdown() {
		isOpen = false;
		buttonRef?.focus();
	}

	// Close dropdown when clicking outside
	function handleClickOutside(event) {
		if (!event.target.closest('.dropdown-container')) {
			closeDropdown();
		}
	}

	// Smooth scroll to section
	function navigateToSection(sectionId) {
		closeDropdown();

		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});

			// Update URL without page jump
			history.pushState(null, '', `#${sectionId}`);
		}
	}

	// Keyboard navigation
	function handleKeydown(event) {
		if (event.key === 'Escape' && isOpen) {
			event.preventDefault();
			closeDropdown();
		}
	}
</script>

<svelte:window onclick={handleClickOutside} onkeydown={handleKeydown} />

<div class="dropdown-container relative inline-block">
	<!-- Dropdown trigger button -->
	<button
		bind:this={buttonRef}
		onclick={(e) => {
			e.stopPropagation();
			toggleDropdown();
		}}
		type="button"
		aria-haspopup="true"
		aria-expanded={isOpen}
		class="flex items-center gap-2 rounded-lg bg-blue-600 px-6
           py-3 text-white shadow-md transition-all duration-200 hover:bg-blue-700
           hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
           focus:outline-none"
	>
		Marketing
		<svg
			class="h-4 w-4 transition-transform duration-300 {isOpen ? 'rotate-180' : ''}"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
		</svg>
	</button>

	<!-- Animated dropdown menu -->
	{#if isOpen}
		<div
			transition:slide={{ duration: 300, easing: quintOut }}
			role="menu"
			aria-label="Marketing sections"
			class="absolute left-0 z-50 mt-2 w-56 overflow-hidden rounded-lg
             border border-gray-200 bg-white shadow-xl"
		>
			<div class="py-1">
				{#each menuItems as item, i}
					<a
						href="#{item.id}"
						role="menuitem"
						onclick={(e) => {
							e.preventDefault();
							navigateToSection(item.id);
						}}
						class="block border-b border-gray-100 px-4
                   py-3 text-gray-700
                   transition-colors duration-150
                   last:border-b-0 hover:bg-blue-50 hover:text-blue-600
                   focus:bg-blue-50 focus:text-blue-600 focus:outline-none"
						style="animation-delay: {i * 50}ms"
					>
						{item.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</div>
