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

<section class="w-full bg-gradient-to-b from-slate-100 via-slate-50 to-white py-16 md:py-24">
	<p class="text-center text-3xl font-bold">{title}</p>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-[520px]">
			<!-- Section Header -->
			<div class="mb-10 text-center">
				<h2
					class="mb-4 bg-gradient-to-b from-slate-800 to-slate-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
				>
					Get a Free Painting Estimate in Edmonton
				</h2>
				<p class="text-lg text-slate-600 md:text-xl">
					Professional residential and commercial painting services. Free quotes, no obligation.
				</p>
			</div>

			<!-- Skeuomorphic Form Card -->
			<div
				class="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 shadow-2xl"
			>
				<div class="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white px-6 py-4 md:px-10">
					<h3 class="text-center text-lg font-bold text-slate-700">Request Your Quote</h3>
				</div>

				<form on:submit={handleSubmit} class="space-y-6 p-6 md:p-10">
					<!-- Name Input -->
					<div>
						<label for="name" class="mb-2 block text-sm font-semibold text-slate-700">Full Name *</label>
						<div class="relative">
							<input
								type="text"
								id="name"
								required
								bind:value={formData.name}
								class="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-slate-900 shadow-inner transition-all placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none"
								placeholder="John Doe"
								style="background: linear-gradient(to bottom, #fafafa 0%, #ffffff 100%);"
							/>
						</div>
					</div>

					<!-- Phone Input -->
					<div>
						<label for="phone" class="mb-2 block text-sm font-semibold text-slate-700">Phone Number *</label>
						<div class="relative">
							<input
								type="tel"
								id="phone"
								required
								bind:value={formData.phone}
								class="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-slate-900 shadow-inner transition-all placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none"
								placeholder="(780) 555-0123"
								style="background: linear-gradient(to bottom, #fafafa 0%, #ffffff 100%);"
							/>
						</div>
					</div>

					<!-- Email Input -->
					<div>
						<label for="email" class="mb-2 block text-sm font-semibold text-slate-700">Email Address *</label>
						<div class="relative">
							<input
								type="email"
								id="email"
								required
								bind:value={formData.email}
								class="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-slate-900 shadow-inner transition-all placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none"
								placeholder="john@example.com"
								style="background: linear-gradient(to bottom, #fafafa 0%, #ffffff 100%);"
							/>
						</div>
					</div>

					<!-- Preferred Contact Method -->
					<div>
						<label class="mb-3 block text-sm font-semibold text-slate-700">Preferred Contact Method *</label>
						<div class="grid grid-cols-3 gap-3">
							{#each ['Email', 'Phone', 'Both'] as method}
								<button
									type="button"
									on:click={() => toggleSelection('contactMethod', method)}
									class="relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border px-4 py-4 text-sm font-semibold transition-all {formData.contactMethod ===
									method
										? 'border-blue-500 text-white shadow-lg'
										: 'border-slate-300 bg-gradient-to-b from-white to-slate-50 text-slate-700 shadow-md hover:from-slate-50 hover:to-slate-100'}"
									style={formData.contactMethod === method
										? 'background: linear-gradient(to bottom, #3b82f6 0%, #2563eb 100%); box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 8px rgba(59,130,246,0.3);'
										: 'box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.1);'}
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
									class="relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border px-4 py-4 text-sm font-semibold transition-all {formData.projectType ===
									type
										? 'border-blue-500 text-white shadow-lg'
										: 'border-slate-300 bg-gradient-to-b from-white to-slate-50 text-slate-700 shadow-md hover:from-slate-50 hover:to-slate-100'}"
									style={formData.projectType === type
										? 'background: linear-gradient(to bottom, #3b82f6 0%, #2563eb 100%); box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 8px rgba(59,130,246,0.3);'
										: 'box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.1);'}
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
							class="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 text-slate-900 shadow-inner transition-all placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 focus:outline-none"
							placeholder="Tell us about your painting project..."
							style="background: linear-gradient(to bottom, #fafafa 0%, #ffffff 100%);"
						></textarea>
						<div class="mt-2 text-right text-xs font-semibold text-slate-500">
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
									class="relative flex items-center justify-center gap-2 overflow-hidden rounded-xl border px-4 py-4 text-sm font-semibold transition-all {formData.serviceArea ===
									area
										? 'border-blue-500 text-white shadow-lg'
										: 'border-slate-300 bg-gradient-to-b from-white to-slate-50 text-slate-700 shadow-md hover:from-slate-50 hover:to-slate-100'}"
									style={formData.serviceArea === area
										? 'background: linear-gradient(to bottom, #3b82f6 0%, #2563eb 100%); box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 4px 8px rgba(59,130,246,0.3);'
										: 'box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.1);'}
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
							class="relative w-full overflow-hidden rounded-xl border border-blue-600 px-8 py-5 text-base font-bold text-white shadow-xl transition-all hover:shadow-2xl active:scale-98 md:w-auto"
							style="background: linear-gradient(to bottom, #3b82f6 0%, #2563eb 100%); box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 6px 12px rgba(59,130,246,0.4);"
						>
							<span class="relative z-10">Get Your Free Quote</span>
							<div class="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
						</button>
					</div>

					<!-- Trust & Privacy -->
					<div class="rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-5 shadow-inner">
						<div class="flex gap-3">
							<div class="flex-shrink-0">
								<div
									class="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-blue-500 to-blue-600 shadow-md"
								>
									<svg class="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
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
									We respect your privacy. Your contact information will never be sold or shared with third parties. We only
									use your details to provide you with a personalized painting estimate.
								</p>
							</div>
						</div>
					</div>

					<!-- Legal -->
					<div class="border-t border-slate-200 pt-6">
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
