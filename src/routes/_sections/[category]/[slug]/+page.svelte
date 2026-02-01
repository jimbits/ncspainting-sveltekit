<script lang="ts">
	import { page } from '$app/state';

	const modules = import.meta.glob('../../*/*.svelte');

	let category = $derived($page.params.category);
	let slug = $derived($page.params.slug);

	// Find matching component (case-insensitive)
	let componentPath = $derived(
		Object.keys(modules).find((path) => {
			const pathLower = path.toLowerCase();
			const targetPath = `../../${category}/${slug}.svelte`.toLowerCase();
			return pathLower === targetPath;
		})
	);

	let Component = $state(null);

	$effect(() => {
		if (componentPath && modules[componentPath]) {
			modules[componentPath]().then((module) => {
				Component = module.default;
			});
		} else {
			Component = null;
		}
	});
</script>

{#if Component}
	<Component />
{:else}
	<p>Component not found: {category}/{slug}</p>
{/if}
