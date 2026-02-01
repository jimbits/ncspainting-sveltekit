<script lang="ts">
	let characterCount = $state(0);
	const maxCharacters = 140;

	function handleInput(event: Event) {
		const target = event.target as HTMLTextAreaElement;
		characterCount = target.value.length;
	}
</script>

<section
	id="quote"
	class="flex items-center justify-center bg-gray-200"
	aria-labelledby="quote-heading"
>
	<img
		class="   object-cover object-bottom-right"
		src="/hero-15.jpg"
		alt=""
	/>
	<div class=" max-w-[550px] px-4 sm:px-6">
		<!-- Form Card -->
		<div
			class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
		>
			<form
				class="space-y-8"
				method="post"
				action="/"
			>
				<!-- Group 1: Contact Information -->
				<div class="space-y-5">
					<h3 class="text-xl font-medium text-gray-900">
						Contact Information
					</h3>

					<div class="grid gap-5 sm:grid-cols-2">
						<div>
							<label
								for="name"
								class="block text-sm font-medium text-gray-500"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								autocomplete="name"
								required
								class="mt-1.5 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
								placeholder="Your full name"
							/>
						</div>

						<div>
							<label
								for="phone"
								class="block text-sm font-medium text-gray-700"
							>
								Phone Number
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								autocomplete="tel"
								inputmode="tel"
								required
								class="mt-1.5 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
								placeholder="(780) 555-1234"
							/>
						</div>
					</div>

					<div>
						<label
							for="email"
							class="block text-sm font-medium text-gray-700"
						>
							Email Address
						</label>
						<input
							type="email"
							id="email"
							name="email"
							autocomplete="email"
							required
							class="mt-1.5 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
							placeholder="you@example.com"
						/>
					</div>

					<div
						class="contact-method-grid gap-x-3 rounded-md bg-sky-50 px-2 py-1"
					>
						<h2
							class="  pr-4 text-sm font-medium text-gray-800"
						>
							Preferred Contact Method
						</h2>

						<label
							class="flex items-center gap-2 text-sm text-gray-500"
						>
							<input
								type="radio"
								name="contactMethod"
								value="email"
								required
								class="h-4 w-4 border-gray-300 text-blue-500 accent-blue-500 focus:ring-blue-500"
							/>
							Email
						</label>
						<label
							class="flex items-center gap-2 text-sm text-gray-500"
						>
							<input
								type="radio"
								name="contactMethod"
								value="phone"
								class="h-4 w-4 text-blue-500 accent-blue-500 focus:ring-blue-500"
							/>
							Phone
						</label>
						<label
							class="flex items-center gap-2 text-sm text-gray-500"
						>
							<input
								type="radio"
								name="contactMethod"
								defaultChecked
								value="both"
								class="h-4 w-4 border-gray-300 text-blue-500 accent-blue-500 focus:ring-blue-500"
							/>
							Either
						</label>
					</div>
				</div>

				<hr class="border-gray-200" />

				<hr class="border-gray-200" />
				<!-- Group 3: Submit -->
				<div>
					<button
						type="submit"
						class="w-full rounded-md bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
					>
						Request Free Quote
					</button>
				</div>

				<!-- Group 4: Legal & Privacy -->
				<div class="space-y-3 text-xs text-gray-500">
					<p>
						<strong class="font-medium text-gray-600">
							Your privacy is important.
						</strong>
						We never sell or share your personal information.
						Your details are used only to respond to your request.
					</p>
					<p>
						By submitting, you agree to be contacted by NCS
						Painting via your preferred method regarding
						your quote request. Message and data rates may
						apply. Reply STOP to opt out.
					</p>
				</div>
			</form>
		</div>

		<!-- Call link -->
		<p class="mt-6 text-center text-sm text-gray-600">
			Prefer to talk? Call us at
			<a
				href="tel:780-722-5577"
				class="font-medium text-blue-500 hover:text-blue-600"
			>
				780-722-5577
			</a>
		</p>
	</div>
</section>

<style>
	.contact-method-grid {
		display: grid;
		grid-template-columns: repeat(4, max-content);
	}
</style>
