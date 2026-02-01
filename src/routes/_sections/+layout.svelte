<script>
	let { data = { sections: {} }, children } = $props();
	import SectionNavigation from './components//SectionNavigation.svelte';
	import FlowbiteMenu from './components/FlowbiteMenu.svelte';
	import ButtonLoad from './components/ButtonLoad.svelte';
</script>

<div class="sections-layout">
	<FlowbiteMenu />

	<aside class="bg-zinc-100"></aside>

	<main>
		{@render children()}
	</main>
</div>
