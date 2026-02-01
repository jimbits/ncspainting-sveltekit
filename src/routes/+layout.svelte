<script lang="ts">
	import '$lib/css/global.css';
	import favicon from '$lib/assets/favicon.svg?url';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
