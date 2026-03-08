<script lang="ts" module>
	import Logo from '$lib/assets/brand/Logo.svelte';
	import ButtonGroup from '$lib/components/ui/ButtonGroup.svelte';
	type QuoteFormProps = {
		class?: string;
	};
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
	let { class: className }: QuoteFormProps = $props();
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

<section
	class=" mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm transition-shadow hover:shadow-md sm:px-8 sm:py-12"
>
	<header class="mx-auto mb-12 w-md">
		<figure class="mb-2 flex flex-col items-center gap-2">
			<Logo
				class="h-12 w-12"
				brush="fill-blue-500"
				hilt="fill-slate-500/40"
				rings="fill-sky-400"
				handle="fill-gray-500/30"
			/>
			<figcaption>
				<h2 class="text-3xl font-bold text-slate-900">NCS Painting Quote Request</h2>
			</figcaption>
		</figure>

		<p class="  text-center text-sm text-pretty text-gray-500">
			In order to book your no obligation free quote please provide a contact name, a valid email address and your home
			or cell number.
		</p>
		<!-- Contact Preference Bento Box -->
		<div class="mt-10 flex flex-col items-center">
			<h3 class="mb-1.5 font-semibold text-slate-600">Prefered Method of Contact</h3>
			<ButtonGroup />
		</div>
	</header>

	<!-- Bento Grid Form -->
	<form onsubmit={handleSubmit} class="w-full space-y-4">
		<!-- Personal Info -->
		<div class="space-y-6">
			<!-- Name Input -->
			<div>
				<label for="name" class="mb-1.5 font-semibold text-slate-600">Contact Name</label>
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
			<div class="flex flex-col">
				<label for="phone" class="mb-1.5 font-semibold text-slate-600">Phone Number</label>
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
				<label for="email" class="mb-1.5 font-semibold text-slate-600">Email Address</label>
				<input
					type="email"
					id="email"
					required
					bind:value={formData.email}
					class="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 transition-all placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-400/20 focus:outline-none"
					placeholder="john@example.com"
				/>
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
	</form>

	<footer class="mt-10">
		<!-- Trust & Privacy Bento Box -->

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
					We respect your privacy. Your contact information will never be sold or shared with third parties. We only use your
					details to provide you with a personalized painting estimate.
				</p>
			</div>
		</div>
	</footer>
</section>

<style>
</style>
