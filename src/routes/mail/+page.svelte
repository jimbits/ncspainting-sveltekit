<script lang="ts">
	let { form } = $props();
</script>

<h1>Resend test</h1>

<form method="POST">
	<button class="rounded-lg bg-blue-500 px-4 py-1 text-blue-50" type="submit">Send test email</button>
</form>

{#if form?.success}
	<p>{form.message}</p>
	{#if form.emailId}
		<p>Email ID: {form.emailId}</p>
	{/if}
{:else if form?.message}
	<p>{form.message}</p>
{/if}
