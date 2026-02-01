<script lang="ts" module>
	import ButtonGroup from '$lib/components/forms/quote/ButtonGroup.svelte';
	import { cn } from '$lib/utils/cn';
	import { Check } from 'lucide-svelte';
	type ClickHandler<T extends HTMLElement> = (e: MouseEvent & { currentTarget: T }) => void;
	type ContactMethod = '' | 'Phone' | 'Email' | 'Either';
	type ProjectType = '' | 'interior' | 'exterior' | 'other';
	type ServiceArea = '' | 'edmonton' | 'st-albert' | 'fort-saskatchewan' | 'sherwood-park' | 'other';
	type QuoteFormData = {
		name: string;
		phone: string;
		email: string;
		contactMethod: ContactMethod;
		projectType: ProjectType;
		projectDescription: string;
		serviceArea: ServiceArea;
	};
</script>

<script lang="ts">
	let formData = $state<QuoteFormData>({
		name: '',
		phone: '',
		email: '',
		contactMethod: '',
		projectType: '',
		projectDescription: '',
		serviceArea: ''
	});
	let { class: className } = $props();
	let charCount = $state(0);
	const maxChars = 140;

	function handleTextarea(event: InputEvent) {
		const elm = event.target as HTMLTextAreaElement;
		const value = elm.value;
		if (value.length <= maxChars) {
			formData.projectDescription = value;
			charCount = value.length;
		}
	}

	function toggleSelection(key: keyof QuoteFormData, value: ContactMethod) {
		formData[key] = value;
		console.log(formData[key]);
	}

	function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		console.log('Form submitted:', formData);
		// Add form submission logic here
	}
</script>

<section class={cn('  w-full  bg-slate-200 py-24  ', className)}>
	<div class=" flex items-center justify-center gap-12">
		<!-- Section Header -->
		<div class="mb-8 max-w-[600px] space-y-8">
			<header>
				<h2 class="mb-3 text-4xl font-bold text-slate-900 md:text-5xl">Get a Free Painting Estimate in Edmonton</h2>
				<p class="text-lg text-pretty text-slate-600 md:text-xl">
					Professional residential and commercial painting services. Free quotes, no obligation.
				</p>
			</header>

			<!-- Trust & Privacy Bento Box -->
			<div class="w-lg rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-lg">
				<div class="flex gap-3">
					<div class="flex-shrink-0">
						<div class="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
							<svg class="h-3.5 w-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
					</div>
					<div>
						<p class="text-xs leading-relaxed text-slate-700">
							<strong class="font-bold text-slate-800">Your Privacy Matters:</strong>
							We respect your privacy. Your contact information will never be sold or shared with third parties. We only use
							your details to provide you with a personalized painting estimate.
						</p>
					</div>
				</div>
			</div>
		</div>
		<!-- Bento Grid Form -->
		<form onsubmit={handleSubmit} class=" w-[500px] space-y-4">
			<div
				class="  rounded-3xl border border-slate-200 bg-white px-8 py-12 shadow-sm transition-shadow hover:shadow-md"
			>
				<!-- Personal Info -->
				<div class="space-y-6">
					<div class="mb-6">
						<h3 class="text-lg font-bold tracking-wider text-slate-600 uppercase">Contact Information</h3>
					</div>

					<!-- Name Input -->
					<div>
						<label for="name" class="mb-1.5 block text-xs font-semibold text-slate-600">Full Name *</label>
						<input
							type="text"
							id="name"
							required
							bind:value={formData.name}
							class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-400/20 focus:outline-none"
							placeholder="John Doe"
						/>
					</div>

					<!-- Phone Input -->
					<div>
						<label for="phone" class="mb-1.5 block text-xs font-semibold text-slate-600">Phone Number *</label>
						<input
							type="tel"
							id="phone"
							required
							bind:value={formData.phone}
							class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-400/20 focus:outline-none"
							placeholder="(780) 555-0123"
						/>
					</div>

					<!-- Email Input -->
					<div>
						<label for="email" class="mb-1.5 block text-xs font-semibold text-slate-600">Email Address *</label>
						<input
							type="email"
							id="email"
							required
							bind:value={formData.email}
							class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-400/20 focus:outline-none"
							placeholder="john@example.com"
						/>
					</div>

					<!-- Contact Preference Bento Box -->
					<div class="mt-12 flex items-center gap-3">
						<h3 class="  text-sm font-bold tracking-wider text-slate-800 uppercase">Contact Preference:</h3>
						<ButtonGroup />
					</div>
				</div>

				<!-- Project Description Bento Box -->
				<div
					class="hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
				>
					<div>
						<h3 class="mb-3 text-sm font-bold tracking-wider text-slate-500 uppercase">Project Details</h3>
						<div>
							<label for="description" class="mb-1.5 block text-xs font-semibold text-slate-600">
								Project Description
							</label>
							<textarea
								id="description"
								rows="4"
								maxlength={maxChars}
								bind:value={formData.projectDescription}
								oninput={handleTextarea}
								class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-400/20 focus:outline-none"
								placeholder="Tell us about your painting project..."
							></textarea>
							<div class="mt-1.5 text-right text-xs font-semibold text-slate-500">
								{charCount}/{maxChars}
							</div>
						</div>
					</div>
					<!-- Project Type Bento Box -->
					<div>
						<h3 class="mb-3 text-sm font-bold tracking-wider text-slate-500 uppercase">Project Type</h3>
						<div class="grid grid-cols-3 gap-2">
							{#each ['Interior', 'Exterior', 'Other'] as type}
								<button
									type="button"
									onclick={() => toggleSelection('projectType', type)}
									class="flex items-center justify-center gap-1.5 rounded-2xl border px-3 py-3.5 text-xs font-bold transition-all {formData.projectType ===
									type
										? 'border-blue-500 bg-blue-500 text-white shadow-md shadow-blue-500/20'
										: 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100'}"
								>
									<span>{type}</span>
									{#if formData.projectType === type}
										<Check size={14} strokeWidth={3} />
									{/if}
								</button>
							{/each}
						</div>
					</div>
				</div>

				<!-- Service Area Bento Box -->
				<div
					class="hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
				>
					<h3 class="mb-3 text-sm font-bold tracking-wider text-slate-500 uppercase">Service Area</h3>
					<div class="grid grid-cols-2 gap-2">
						{#each ['Edmonton', 'St Albert', 'Fort Saskatchewan', 'Sherwood Park', 'Other'] as area}
							<button
								type="button"
								onclick={() => toggleSelection('serviceArea', area)}
								class="flex items-center justify-center gap-1.5 rounded-2xl border px-3 py-3.5 text-xs font-bold transition-all {formData.serviceArea ===
								area
									? 'border-blue-500 bg-blue-500 text-white shadow-md shadow-blue-500/20'
									: 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100'}"
							>
								<span class="text-center leading-tight">
									{area}
								</span>
								{#if formData.serviceArea === area}
									<Check size={14} strokeWidth={3} class="flex-shrink-0" />
								{/if}
							</button>
						{/each}
					</div>
				</div>

				<!-- Submit Button Bento Box -->
				<div class="mt-12">
					<button
						type="submit"
						class="w-full rounded-lg bg-blue-500 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl active:scale-95 md:w-auto"
					>
						Get Your Free Quote
					</button>
				</div>
			</div>
		</form>
	</div>
</section>

<style>
</style>
