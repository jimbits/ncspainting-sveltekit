<script lang="ts">
	export let title: string;
	export let text: string;
</script>

<div
	class="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
>
	<div class="flex items-start gap-4">
		<div
			class="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
		>
			<slot />
		</div>
		<div>
			<h3 class="text-base font-semibold text-stone-900">
				{title}
			</h3>
			<p
				class="mt-1 text-sm leading-relaxed text-stone-600"
			>
				{text}
			</p>
		</div>
	</div>
</div>
