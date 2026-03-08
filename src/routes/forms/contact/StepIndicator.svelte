<script lang="ts">
	import Step from './Step.svelte';
</script>

<nav aria-label="Progress">
	<h2 class="text-center">Steps</h2>
	<ol role="list" class=" flex">
		<Step label="first step" status="current" step={1} />
		<Step label="Second Step" status="upcomming" step={2} />
	</ol>
</nav>
