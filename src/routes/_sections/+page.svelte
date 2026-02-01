<script lang="ts">
	import { page } from '$app/stores';
	let { data } = $props();
	let selectedComponent = $state();
	let slug = $derived($page.params.slug);
</script>

{#each Object.entries(data.sections) as [category, items]}
	<section>
		<h2 class="text-xl font-bold">{category}</h2>
		<nav>
			<ul>
				{#each items as item}
					<li><a href="/sections/{item.category}/{item.slug}">{item.name}</a></li>
				{/each}
			</ul>
		</nav>
	</section>
{/each}

<header>
	<h1 class="py-4 text-center text-4xl font-bold">Page Sections</h1>
</header>

<!-- <main>

</main> -->
