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

<section class="w-full bg-gradient-to-br from-blue-50 to-slate-50 py-16 md:py-24">
	<p class="text-center text-3xl font-bold">{title}</p>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-[520px]">
			<!-- Section Header -->
			<div class="mb-10 text-center">
				<h2 class="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
					Get a Free Painting Estimate in Edmonton
				</h2>
				<p class="text-lg text-slate-600 md:text-xl">
					Professional residential and commercial painting services. Free quotes, no obligation.
				</p>
			</div>

			<!-- Form Card -->
			<div class="rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm md:p-8">
				<form on:submit={handleSubmit} class="space-y-6">
					<!-- Name Input -->
					<div>
						<label for="name" class="mb-2 block text-sm font-semibold text-slate-700">Full Name *</label>
						<input
							type="text"
							id="name"
							required
							bind:value={formData.name}
							class="w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:ring-0 focus:outline-none"
							placeholder="John Doe"
						/>
					</div>

					<!-- Phone Input -->
					<div>
						<label for="phone" class="mb-2 block text-sm font-semibold text-slate-700">Phone Number *</label>
						<input
							type="tel"
							id="phone"
							required
							bind:value={formData.phone}
							class="w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:ring-0 focus:outline-none"
							placeholder="(780) 555-0123"
						/>
					</div>

					<!-- Email Input -->
					<div>
						<label for="email" class="mb-2 block text-sm font-semibold text-slate-700">Email Address *</label>
						<input
							type="email"
							id="email"
							required
							bind:value={formData.email}
							class="w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:ring-0 focus:outline-none"
							placeholder="john@example.com"
						/>
					</div>

					<!-- Preferred Contact Method -->
					<div>
						<label class="mb-3 block text-sm font-semibold text-slate-700">Preferred Contact Method *</label>
						<div class="grid grid-cols-3 gap-3">
							{#each ['Email', 'Phone', 'Both'] as method}
								<button
									type="button"
									on:click={() => toggleSelection('contactMethod', method)}
									class="flex items-center justify-center gap-2 rounded-lg border border-stone-200 py-1.5 text-sm font-medium shadow transition-all {formData.contactMethod ===
									method
										? 'border-blue-500 bg-blue-500 text-white shadow-md'
										: 'border-slate-300 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50'}"
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
						<label class="mb-3 block text-sm font-semibold text-slate-700">Project Type *</label>
						<div class="grid grid-cols-3 gap-3">
							{#each ['Interior', 'Exterior', 'Other'] as type}
								<button
									type="button"
									on:click={() => toggleSelection('projectType', type)}
									class="flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all {formData.projectType ===
									type
										? 'border-blue-500 bg-blue-500 text-white shadow-md'
										: 'border-slate-300 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50'}"
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
						<label for="description" class="mb-2 block text-sm font-semibold text-slate-700">Project Description</label>
						<textarea
							id="description"
							rows="4"
							maxlength={maxChars}
							bind:value={formData.projectDescription}
							on:input={handleTextarea}
							class="w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-slate-900 transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:ring-0 focus:outline-none"
							placeholder="Tell us about your painting project..."
						></textarea>
						<div class="mt-1 text-right text-xs text-slate-500">
							{charCount}/{maxChars} characters
						</div>
					</div>

					<!-- Service Area -->
					<div>
						<label class="mb-3 block text-sm font-semibold text-slate-700">Service Area *</label>
						<div class="grid grid-cols-2 gap-3">
							{#each ['Edmonton', 'St Albert', 'Fort Saskatchewan', 'Sherwood Park', 'Other'] as area}
								<button
									type="button"
									on:click={() => toggleSelection('serviceArea', area)}
									class="flex items-center justify-center gap-2 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all {formData.serviceArea ===
									area
										? 'border-blue-500 bg-blue-500 text-white shadow-md'
										: 'border-slate-300 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50'}"
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
					<div class="pt-4">
						<button
							type="submit"
							class="w-full rounded-lg bg-blue-500 px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl active:scale-95 md:w-auto"
						>
							Get Your Free Quote
						</button>
					</div>

					<!-- Trust & Privacy -->
					<div class="rounded-lg bg-slate-50 p-4">
						<p class="text-xs text-slate-600">
							<strong class="text-slate-700">🔒 Your Privacy Matters:</strong>
							We respect your privacy. Your contact information will never be sold or shared with third parties. We only use
							your details to provide you with a personalized painting estimate.
						</p>
					</div>

					<!-- Legal -->
					<div class="border-t border-slate-200 pt-4">
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
