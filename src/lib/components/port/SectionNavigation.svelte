<script lang="ts" module>
	type Sections = {
		name: string;
		slug: string;
		category: string;
	};
</script>

<script lang="ts">
	let { sections = {} } = $props();

	// Track which dropdown is open
	let openCategory = $state(null);

	function toggleCategory(category: Sections) {
		openCategory = openCategory === category ? null : category;
	}

	// Close dropdown when clicking outside
	function handleClickOutside(event: MouseEvent) {
		const elem = event.currentTarget as HTMLButtonElement;

		if (!event.target.closest('.nav-item')) {
			openCategory = null;
		}
	}
	console.log(sections);
</script>

<svelte:window onclick={handleClickOutside} />

<nav class="  bg-white dark:border-gray-700 dark:bg-gray-800">
	<div class="mx-auto max-w-screen-xl px-4 py-3">
		<div class="flex items-center">
			<ul class="mt-0 flex flex-row space-x-8 text-sm font-medium">
				<li>
					<a href="/sections" class="hover:text-primary-600 dark:hover:text-primary-500 text-gray-900 dark:text-white">
						All Sections
					</a>
				</li>

				{#each Object.entries(sections) as [category, items]}
					<li class="nav-item relative">
						<button
							onclick={() => toggleCategory(category)}
							class="hover:text-primary-600 dark:hover:text-primary-500 flex w-full items-center justify-between py-2 text-gray-900 dark:text-white"
						>
							{category}
							<svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>

						{#if openCategory === category}
							<div
								class="absolute left-0 z-10 mt-2 w-56 rounded-lg border border-gray-100 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-700"
							>
								<div class="p-2">
									<ul class="space-y-1">
										{#each items as item}
											<li>
												<a
													href="/sections/{item.category}/{item.slug}"
													class="flex items-center rounded-lg p-2 text-sm text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600"
												>
													<svg
														class="mr-2 h-4 w-4 text-gray-400"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
														></path>
													</svg>
													{item.name}
												</a>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>

<style>
	/* Ensure dropdown appears above other content */
	.nav-item {
		position: relative;
	}
</style>
