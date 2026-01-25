<script lang="ts" module>
	import { CheckCheck, Mail, Phone } from 'lucide-svelte';
	import { cn } from '$lib/helpers/cn';
	import { Check } from '@lucide/svelte';
	interface Item {
		id: number;
	}
</script>

<script lang="ts">
	let emailRef;
	let phoneRef;
	let eitherRef;
	let emailClass = '';
	let phoneClass = '';
	let eitherClass = '';
	let selectedStyles = 'bg-blue-500 text-white hover:bg-blue-50 hover:text-blue-700';
	let baseStyles = 'text-stone-600 hover:bg-blue-50 hover:text-blue-700';
	let className = '';
	function handleClick(item: Item) {
		switch (item.id) {
			case 1:
				emailClass = selectedStyles;
				break;
			case 2:
				phoneClass = baseStyles;
				break;
			case 3:
				break;
			default:
				console.log('erro');
		}
	}
</script>

<main class="    pt-72">
	<div class="border">
		<div class=" my mx-auto w-fit">
			<button
				bind:this={emailRef}
				onclick={() => handleClick({ id: 1 })}
				class={cn(
					' flex items-center gap-2 rounded px-4 transition-colors hover:bg-blue-50  hover:text-blue-700',
					emailClass
				)}
				data-state="defalut"
			>
				<Mail class="w-5" />
				<span>Email</span>
			</button>

			<button
				bind:this={phoneRef}
				onclick={() => handleClick({ id: 2 })}
				class={cn(
					' flex items-center gap-2 rounded px-4  transition-colors hover:bg-blue-50  hover:text-blue-700',
					phoneClass
				)}
				data-state="default"
			>
				<Phone class="w-5" />
				<span>Phone</span>
			</button>

			<button
				bind:this={eitherRef}
				onclick={(e) => handleClick({ id: 3 })}
				class={cn(
					'flex items-center gap-2 rounded px-4  transition-colors hover:bg-blue-50  hover:text-blue-700',
					eitherClass
				)}
				data-state="selected"
			>
				<span>Either</span>
				<Check class="w-5" />
			</button>
		</div>
	</div>
</main>

<style>
	.my {
		display: grid;
		grid-template-columns: repeat(3, max-content);
		grid-template-rows: auto;
		justify-items: end;
	}
</style>
