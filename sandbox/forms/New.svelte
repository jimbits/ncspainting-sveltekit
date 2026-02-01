<script>
	import { Check } from 'lucide-svelte';
	export let title;
	let formData = {
		name: '',
		phone: '',
		email: '',
		contactMethod: '',
		projectType: '',
		projectDescription: '',
		serviceArea: ''
	};

	let charCount = 0;
	const maxChars = 140;

	function handleTextarea(event) {
		const value = event.target.value;
		if (value.length <= maxChars) {
			formData.projectDescription = value;
			charCount = value.length;
		}
	}

	function toggleSelection(field, value) {
		formData[field] = value;
	}

	function handleSubmit(event) {
		event.preventDefault();
		console.log('Form submitted:', formData);
		// Add form submission logic here
	}
</script>

<section class="w-full bg-slate-200 py-16 md:py-24">
	<p class="text-center text-3xl font-bold">{title}</p>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-[520px]">
			<!-- Section Header -->
			<div class="mb-10 text-center">
				<h2
					class="mb-4 text-4xl font-bold text-slate-700 md:text-5xl"
					style="text-shadow: 2px 2px 4px rgba(255,255,255,0.8), -2px -2px 4px rgba(0,0,0,0.1);"
				>
					Get a Free Painting Estimate in Edmonton
				</h2>
				<p class="text-lg text-slate-600 md:text-xl">
					Professional residential and commercial painting services. Free quotes, no obligation.
				</p>
			</div>

			<!-- Neumorphic Form Card -->
			<div
				class="rounded-[2rem] bg-slate-200 p-6 md:p-10"
				style="box-shadow: 12px 12px 24px rgba(0,0,0,0.15), -12px -12px 24px rgba(255,255,255,0.9);"
			>
				<form on:submit={handleSubmit} class="space-y-6">
					<!-- Name Input -->
					<div>
						<label for="name" class="mb-3 block text-sm font-bold tracking-wide text-slate-600 uppercase">
							Full Name *
						</label>
						<input
							type="text"
							id="name"
							required
							bind:value={formData.name}
							class="w-full rounded-2xl border-0 bg-slate-200 px-5 py-4 text-slate-800 transition-all placeholder:text-slate-400 focus:outline-none"
							style="box-shadow: inset 6px 6px 12px rgba(0,0,0,0.1), inset -6px -6px 12px rgba(255,255,255,0.8);"
							placeholder="John Doe"
						/>
					</div>

					<!-- Phone Input -->
					<div>
						<label for="phone" class="mb-3 block text-sm font-bold tracking-wide text-slate-600 uppercase">
							Phone Number *
						</label>
						<input
							type="tel"
							id="phone"
							required
							bind:value={formData.phone}
							class="w-full rounded-2xl border-0 bg-slate-200 px-5 py-4 text-slate-800 transition-all placeholder:text-slate-400 focus:outline-none"
							style="box-shadow: inset 6px 6px 12px rgba(0,0,0,0.1), inset -6px -6px 12px rgba(255,255,255,0.8);"
							placeholder="(780) 555-0123"
						/>
					</div>

					<!-- Email Input -->
					<div>
						<label for="email" class="mb-3 block text-sm font-bold tracking-wide text-slate-600 uppercase">
							Email Address *
						</label>
						<input
							type="email"
							id="email"
							required
							bind:value={formData.email}
							class="w-full rounded-2xl border-0 bg-slate-200 px-5 py-4 text-slate-800 transition-all placeholder:text-slate-400 focus:outline-none"
							style="box-shadow: inset 6px 6px 12px rgba(0,0,0,0.1), inset -6px -6px 12px rgba(255,255,255,0.8);"
							placeholder="john@example.com"
						/>
					</div>

					<!-- Preferred Contact Method -->
					<div>
						<label class="mb-4 block text-sm font-bold tracking-wide text-slate-600 uppercase">
							Preferred Contact Method *
						</label>
						<div class="grid grid-cols-3 gap-4">
							{#each ['Email', 'Phone', 'Both'] as method}
								<button
									type="button"
									on:click={() => toggleSelection('contactMethod', method)}
									class="flex items-center justify-center gap-2 rounded-2xl bg-slate-200 px-4 py-4 text-sm font-bold transition-all {formData.contactMethod ===
									method
										? 'text-blue-600'
										: 'text-slate-600 hover:text-slate-700'}"
									style={formData.contactMethod === method
										? 'box-shadow: inset 6px 6px 12px rgba(0,0,0,0.15), inset -6px -6px 12px rgba(255,255,255,0.7);'
										: 'box-shadow: 6px 6px 12px rgba(0,0,0,0.1), -6px -6px 12px rgba(255,255,255,0.9);'}
								>
									<span>{method}</span>
									{#if formData.contactMethod === method}
										<Check size={18} strokeWidth={3} />
									{/if}
								</button>
							{/each}
						</div>
					</div>

					<!-- Project Type -->
					<div>
						<label class="mb-4 block text-sm font-bold tracking-wide text-slate-600 uppercase">Project Type *</label>
						<div class="grid grid-cols-3 gap-4">
							{#each ['Interior', 'Exterior', 'Other'] as type}
								<button
									type="button"
									on:click={() => toggleSelection('projectType', type)}
									class="flex items-center justify-center gap-2 rounded-2xl bg-slate-200 px-4 py-4 text-sm font-bold transition-all {formData.projectType ===
									type
										? 'text-blue-600'
										: 'text-slate-600 hover:text-slate-700'}"
									style={formData.projectType === type
										? 'box-shadow: inset 6px 6px 12px rgba(0,0,0,0.15), inset -6px -6px 12px rgba(255,255,255,0.7);'
										: 'box-shadow: 6px 6px 12px rgba(0,0,0,0.1), -6px -6px 12px rgba(255,255,255,0.9);'}
								>
									<span>{type}</span>
									{#if formData.projectType === type}
										<Check size={18} strokeWidth={3} />
									{/if}
								</button>
							{/each}
						</div>
					</div>

					<!-- Project Description -->
					<div>
						<label for="description" class="mb-3 block text-sm font-bold tracking-wide text-slate-600 uppercase">
							Project Description
						</label>
						<textarea
							id="description"
							rows="4"
							maxlength={maxChars}
							bind:value={formData.projectDescription}
							on:input={handleTextarea}
							class="w-full rounded-2xl border-0 bg-slate-200 px-5 py-4 text-slate-800 transition-all placeholder:text-slate-400 focus:outline-none"
							style="box-shadow: inset 6px 6px 12px rgba(0,0,0,0.1), inset -6px -6px 12px rgba(255,255,255,0.8);"
							placeholder="Tell us about your painting project..."
						></textarea>
						<div class="mt-2 text-right text-xs font-bold text-slate-500">
							{charCount}/{maxChars} characters
						</div>
					</div>

					<!-- Service Area -->
					<div>
						<label class="mb-4 block text-sm font-bold tracking-wide text-slate-600 uppercase">Service Area *</label>
						<div class="grid grid-cols-2 gap-4">
							{#each ['Edmonton', 'St Albert', 'Fort Saskatchewan', 'Sherwood Park', 'Other'] as area}
								<button
									type="button"
									on:click={() => toggleSelection('serviceArea', area)}
									class="flex items-center justify-center gap-2 rounded-2xl bg-slate-200 px-4 py-4 text-sm font-bold transition-all {formData.serviceArea ===
									area
										? 'text-blue-600'
										: 'text-slate-600 hover:text-slate-700'}"
									style={formData.serviceArea === area
										? 'box-shadow: inset 6px 6px 12px rgba(0,0,0,0.15), inset -6px -6px 12px rgba(255,255,255,0.7);'
										: 'box-shadow: 6px 6px 12px rgba(0,0,0,0.1), -6px -6px 12px rgba(255,255,255,0.9);'}
								>
									<span>{area}</span>
									{#if formData.serviceArea === area}
										<Check size={18} strokeWidth={3} />
									{/if}
								</button>
							{/each}
						</div>
					</div>

					<!-- Submit Button -->
					<div class="pt-6">
						<button
							type="submit"
							class="w-full rounded-2xl bg-slate-200 px-8 py-5 text-base font-bold tracking-wide text-blue-600 uppercase transition-all hover:text-blue-700 active:text-blue-800 md:w-auto"
							style="box-shadow: 8px 8px 16px rgba(0,0,0,0.15), -8px -8px 16px rgba(255,255,255,0.9);"
						>
							Get Your Free Quote
						</button>
					</div>

					<!-- Trust & Privacy -->
					<div
						class="rounded-2xl bg-slate-200 p-5"
						style="box-shadow: inset 4px 4px 8px rgba(0,0,0,0.08), inset -4px -4px 8px rgba(255,255,255,0.7);"
					>
						<div class="flex gap-3">
							<div class="flex-shrink-0">
								<svg class="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
							<div>
								<p class="text-xs leading-relaxed text-slate-600">
									<strong class="font-bold text-slate-700">Your Privacy Matters:</strong>
									We respect your privacy. Your contact information will never be sold or shared with third parties. We only
									use your details to provide you with a personalized painting estimate.
								</p>
							</div>
						</div>
					</div>

					<!-- Legal -->
					<div class="border-t-2 border-slate-300/50 pt-6">
						<p class="text-xs leading-relaxed text-slate-500">
							By submitting this form, you agree to be contacted by our team regarding your painting project. We may
							contact you via phone, email, or text message. You can opt out at any time. This form does not constitute
							a binding contract or commitment to services.
						</p>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
