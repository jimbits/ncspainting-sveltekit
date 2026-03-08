<script lang="ts">
	// import { cva } from 'class-variance-authority';
	// import { cva, type VariantProps } from "class-variance-authority";
	//   import { cn } from "$lib/utils/cn"

	import { Check } from '@lucide/svelte';

	//   import type { Snippet } from "svelte";
	type StepStatus = 'current' | 'completed' | 'upcomming' | 'incomplete';
	type StepProps = {
		label: string;
		status?: StepStatus;
		step?: number;
	};
	let { label, step, status, ...rest }: StepProps = $props();

	// const StepVariants = cva();
</script>

{#if status === 'completed'}
	<li class=" ">
		<button class="group">
			<span class="flex flex-col items-center font-medium">
				<span
					class="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-green-300 bg-green-50 group-hover:border-green-400"
				>
					<span class="  group-hover:text-teal-500 dark:text-gray-400 dark:group-hover:text-white">
						<Check class="stroke-teal-400" />
					</span>
				</span>
				<span
					class="text-xs font-medium text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				>
					{label && 'Completed'}
				</span>
			</span>
		</button>
	</li>
{:else if status === 'upcomming'}
	<!-- Upcoming Step -->
	<li class=" ">
		<button class="group">
			<span class="flex flex-col items-center font-medium">
				<span
					class="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400 dark:border-white/15 dark:group-hover:border-white/25"
				>
					<span class="text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">1</span>
				</span>
				<span
					class="text-xs font-medium text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				>
					{label && 'Upcoming'}
				</span>
			</span>
		</button>
	</li>
{:else}
	<li class=" ">
		<button class="group">
			<span class="flex flex-col items-center font-medium">
				<span
					class="flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-red-300 bg-red-50 group-hover:border-red-400 group-hover:bg-red-100"
				>
					<span class=" text-red-500 group-hover:text-red-500 dark:text-gray-400 dark:group-hover:text-white">
						{step}
					</span>
				</span>
				<span
					class="text-xs font-medium text-red-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				>
					{label}
				</span>
			</span>
		</button>
	</li>
{/if}

<style>
</style>
