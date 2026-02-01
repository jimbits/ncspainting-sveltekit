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

<section class="relative w-full overflow-hidden bg-gradient-to-br from-blue-100 via-slate-50 to-blue-50 py-16 md:py-24">
	<p class="text-center text-3xl font-bold">{title}</p>
	<!-- Decorative Background Elements -->
	<div class="absolute inset-0 overflow-hidden">
		<div class="absolute top-20 -left-20 h-64 w-64 rounded-full bg-blue-400/30 blur-3xl"></div>
		<div class="absolute top-40 -right-20 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl"></div>
		<div class="absolute bottom-20 left-1/3 h-80 w-80 rounded-full bg-slate-400/20 blur-3xl"></div>
	</div>

	<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-[520px]">
			<!-- Section Header -->
			<div class="mb-10 text-center">
				<h2 class="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">Get a Free Painting Estimate in Edmonton</h2>
				<p class="text-lg text-slate-700 md:text-xl">
					Professional residential and commercial painting services. Free quotes, no obligation.
				</p>
			</div>

			<!-- Glass Form Card -->
			<div class="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-2xl backdrop-blur-2xl md:p-10">
				<form on:submit={handleSubmit} class="space-y-6">
					<!-- Name Input -->
					<div>
						<label for="name" class="mb-2 block text-sm font-semibold text-slate-800">Full Name *</label>
						<input
							type="text"
							id="name"
							required
							bind:value={formData.name}
							class="w-full rounded-2xl border border-white/60 bg-white/50 px-4 py-4 text-slate-900 backdrop-blur-sm transition-all placeholder:text-slate-500 focus:border-blue-400/60 focus:bg-white/70 focus:ring-2 focus:ring-blue-400/30 focus:outline-none"
							placeholder="John Doe"
						/>
					</div>

					<!-- Phone Input -->
					<div>
						<label for="phone" class="mb-2 block text-sm font-semibold text-slate-800">Phone Number *</label>
						<input
							type="tel"
							id="phone"
							required
							bind:value={formData.phone}
							class="w-full rounded-2xl border border-white/60 bg-white/50 px-4 py-4 text-slate-900 backdrop-blur-sm transition-all placeholder:text-slate-500 focus:border-blue-400/60 focus:bg-white/70 focus:ring-2 focus:ring-blue-400/30 focus:outline-none"
							placeholder="(780) 555-0123"
						/>
					</div>

					<!-- Email Input -->
					<div>
						<label for="email" class="mb-2 block text-sm font-semibold text-slate-800">Email Address *</label>
						<input
							type="email"
							id="email"
							required
							bind:value={formData.email}
							class="w-full rounded-2xl border border-white/60 bg-white/50 px-4 py-4 text-slate-900 backdrop-blur-sm transition-all placeholder:text-slate-500 focus:border-blue-400/60 focus:bg-white/70 focus:ring-2 focus:ring-blue-400/30 focus:outline-none"
							placeholder="john@example.com"
						/>
					</div>

					<!-- Preferred Contact Method -->
					<div>
						<label class="mb-3 block text-sm font-semibold text-slate-800">Preferred Contact Method *</label>
						<div class="grid grid-cols-3 gap-3">
							{#each ['Email', 'Phone', 'Both'] as method}
								<button
									type="button"
									on:click={() => toggleSelection('contactMethod', method)}
									class="flex items-center justify-center gap-2 rounded-2xl border px-4 py-4 text-sm font-semibold backdrop-blur-sm transition-all {formData.contactMethod ===
									method
										? 'border-blue-400/60 bg-blue-500/90 text-white shadow-lg shadow-blue-500/30'
										: 'border-white/60 bg-white/40 text-slate-700 hover:bg-white/60 hover:shadow-md'}"
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
						<label class="mb-3 block text-sm font-semibold text-slate-800">Project Type *</label>
						<div class="grid grid-cols-3 gap-3">
							{#each ['Interior', 'Exterior', 'Other'] as type}
								<button
									type="button"
									on:click={() => toggleSelection('projectType', type)}
									class="flex items-center justify-center gap-2 rounded-2xl border px-4 py-4 text-sm font-semibold backdrop-blur-sm transition-all {formData.projectType ===
									type
										? 'border-blue-400/60 bg-blue-500/90 text-white shadow-lg shadow-blue-500/30'
										: 'border-white/60 bg-white/40 text-slate-700 hover:bg-white/60 hover:shadow-md'}"
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
						<label for="description" class="mb-2 block text-sm font-semibold text-slate-800">Project Description</label>
						<textarea
							id="description"
							rows="4"
							maxlength={maxChars}
							bind:value={formData.projectDescription}
							on:input={handleTextarea}
							class="w-full rounded-2xl border border-white/60 bg-white/50 px-4 py-4 text-slate-900 backdrop-blur-sm transition-all placeholder:text-slate-500 focus:border-blue-400/60 focus:bg-white/70 focus:ring-2 focus:ring-blue-400/30 focus:outline-none"
							placeholder="Tell us about your painting project..."
						></textarea>
						<div class="mt-2 text-right text-xs font-medium text-slate-600">
							{charCount}/{maxChars} characters
						</div>
					</div>

					<!-- Service Area -->
					<div>
						<label class="mb-3 block text-sm font-semibold text-slate-800">Service Area *</label>
						<div class="grid grid-cols-2 gap-3">
							{#each ['Edmonton', 'St Albert', 'Fort Saskatchewan', 'Sherwood Park', 'Other'] as area}
								<button
									type="button"
									on:click={() => toggleSelection('serviceArea', area)}
									class="flex items-center justify-center gap-2 rounded-2xl border px-4 py-4 text-sm font-semibold backdrop-blur-sm transition-all {formData.serviceArea ===
									area
										? 'border-blue-400/60 bg-blue-500/90 text-white shadow-lg shadow-blue-500/30'
										: 'border-white/60 bg-white/40 text-slate-700 hover:bg-white/60 hover:shadow-md'}"
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
							class="w-full rounded-2xl border border-blue-400/40 bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-5 text-base font-bold text-white shadow-xl shadow-blue-500/40 backdrop-blur-sm transition-all hover:shadow-2xl hover:shadow-blue-500/50 active:scale-98 md:w-auto"
						>
							Get Your Free Quote
						</button>
					</div>

					<!-- Trust & Privacy -->
					<div class="rounded-2xl border border-white/40 bg-blue-50/60 p-5 backdrop-blur-sm">
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
								<p class="text-xs leading-relaxed text-slate-700">
									<strong class="font-semibold text-slate-900">Your Privacy Matters:</strong>
									We respect your privacy. Your contact information will never be sold or shared with third parties. We only
									use your details to provide you with a personalized painting estimate.
								</p>
							</div>
						</div>
					</div>

					<!-- Legal -->
					<div class="border-t border-white/40 pt-6">
						<p class="text-xs leading-relaxed text-slate-600">
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
