<script lang="ts">
	import QuoteRequestForm from '$lib/components/forms/quote/QuoteRequestForm.svelte';
	let { form } = $props();
</script>

<QuoteRequestForm {form} />
