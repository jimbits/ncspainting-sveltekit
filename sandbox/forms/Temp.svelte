<!-- src/lib/sections/QuoteFormSection.svelte -->
<section
	id="quote"
	class="relative overflow-hidden bg-stone-950 py-16 sm:py-20"
	aria-labelledby="quote-heading"
>
	<!-- subtle background glow -->
	<div class="pointer-events-none absolute inset-0">
		<div
			class="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl"
		></div>
		<div
			class="absolute right-0 -bottom-24 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl"
		></div>
		<div
			class="absolute inset-0 bg-linear-to-b from-white/[0.03] via-transparent to-black/20"
		></div>
	</div>

	<div
		class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
	>
		<div class="grid gap-10 lg:grid-cols-2 lg:items-start">
			<!-- copy -->
			<div class="max-w-xl">
				<p
					class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
				>
					<span
						class="h-1.5 w-1.5 rounded-full bg-amber-300/80"
					></span>
					Free Quote
				</p>

				<h2
					id="quote-heading"
					class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
				>
					Get a free painting estimate in Edmonton
				</h2>

				<p
					class="mt-4 text-base leading-relaxed text-white/70"
				>
					Share a few details and we’ll follow up with next
					steps and a written estimate.
				</p>

				<div
					class="mt-6 flex flex-wrap gap-3 text-sm text-white/70"
				>
					<span
						class="rounded-full border border-white/10 bg-white/5 px-3 py-1"
					>
						Fast response
					</span>
					<span
						class="rounded-full border border-white/10 bg-white/5 px-3 py-1"
					>
						Written estimate
					</span>
					<span
						class="rounded-full border border-white/10 bg-white/5 px-3 py-1"
					>
						Local Edmonton team
					</span>
				</div>

				<p class="mt-6 text-sm text-white/60">
					Prefer calling? <a
						class="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60"
						href="tel:780-722-5577"
					>
						780-722-5577
					</a>
				</p>
			</div>

			<!-- glass form card -->
			<div class="lg:pl-6">
				<div
					class="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6"
				>
					<form
						class="space-y-5"
						method="post"
						action="/api/quote"
					>
						<!-- name + phone -->
						<div class="grid gap-4 sm:grid-cols-2">
							<div>
								<label
									for="name"
									class="block text-sm font-medium text-white/80"
								>
									Name
								</label>
								<input
									id="name"
									name="name"
									type="text"
									autocomplete="name"
									required
									class="mt-1 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-white transition outline-none placeholder:text-white/40 focus:border-white/30 focus:bg-white/15"
									placeholder="Your name"
								/>
							</div>

							<div>
								<label
									for="phone"
									class="block text-sm font-medium text-white/80"
								>
									Phone
								</label>
								<input
									id="phone"
									name="phone"
									type="tel"
									autocomplete="tel"
									inputmode="tel"
									class="mt-1 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-white transition outline-none placeholder:text-white/40 focus:border-white/30 focus:bg-white/15"
									placeholder="(780) 555-1234"
								/>
							</div>
						</div>

						<!-- email -->
						<div>
							<label
								for="email"
								class="block text-sm font-medium text-white/80"
							>
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								autocomplete="email"
								class="mt-1 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-white transition outline-none placeholder:text-white/40 focus:border-white/30 focus:bg-white/15"
								placeholder="you@email.com"
							/>
						</div>

						<!-- preferred contact -->
						<fieldset class="space-y-2">
							<legend
								class="text-sm font-medium text-white/80"
							>
								Preferred contact method
							</legend>

							<div class="grid gap-2 sm:grid-cols-3">
								<label
									class="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
								>
									<input
										type="radio"
										name="preferredContact"
										value="Phone"
										required
										class="h-4 w-4 accent-indigo-300"
									/>
									Phone
								</label>

								<label
									class="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
								>
									<input
										type="radio"
										name="preferredContact"
										value="Email"
										class="h-4 w-4 accent-indigo-300"
									/>
									Email
								</label>

								<label
									class="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
								>
									<input
										type="radio"
										name="preferredContact"
										value="Text"
										class="h-4 w-4 accent-indigo-300"
									/>
									Text
								</label>
							</div>

							<p class="text-xs text-white/55">
								Tip: if you pick <span
									class="text-white/70"
								>
									Text
								</span>
								, include a mobile number.
							</p>
						</fieldset>

						<!-- project type checkboxes -->
						<fieldset class="space-y-2">
							<legend
								class="text-sm font-medium text-white/80"
							>
								Project type
							</legend>

							<div class="grid gap-2 sm:grid-cols-3">
								<label
									class="flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10"
								>
									<input
										type="checkbox"
										name="projectType[]"
										value="Interior"
										class="h-4 w-4 accent-indigo-300"
									/>
									Interior
								</label>

								<label
									class="flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10"
								>
									<input
										type="checkbox"
										name="projectType[]"
										value="Exterior"
										class="h-4 w-4 accent-indigo-300"
									/>
									Exterior
								</label>

								<label
									class="flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/80 hover:bg-white/10"
								>
									<input
										type="checkbox"
										name="projectType[]"
										value="Other"
										class="h-4 w-4 accent-indigo-300"
									/>
									Other
								</label>
							</div>

							<p class="text-xs text-white/55">
								Select all that apply.
							</p>
						</fieldset>

						<!-- service needed -->
						<div>
							<label
								for="service"
								class="block text-sm font-medium text-white/80"
							>
								Service needed
							</label>
							<select
								id="service"
								name="service"
								required
								class="mt-1 w-full rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-white transition outline-none focus:border-white/30 focus:bg-white/15"
							>
								<option
									value=""
									disabled
									selected
									class="bg-stone-800"
								>
									Select a service
								</option>
								<option
									value="Interior Painting"
									class="bg-stone-800"
								>
									Interior Painting
								</option>
								<option
									value="Exterior Painting"
									class="bg-stone-800"
								>
									Exterior Painting
								</option>
								<option
									value="Cabinet Painting"
									class="bg-stone-800"
								>
									Cabinet Painting
								</option>
								<option
									value="Commercial Painting"
									class="bg-stone-800"
								>
									Commercial Painting
								</option>
								<option
									value="Other"
									class="bg-stone-800"
								>
									Other
								</option>
							</select>
						</div>

						<!-- short details textarea -->
						<div>
							<label
								for="details"
								class="block text-sm font-medium text-white/80"
							>
								Additional project details
							</label>
							<textarea
								id="details"
								name="details"
								rows="3"
								class="mt-1 w-full resize-y rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-white transition outline-none placeholder:text-white/40 focus:border-white/30 focus:bg-white/15"
								placeholder="Example: 3 bedrooms + hallway, ceilings included, prefer April/May, currently occupied."
							></textarea>
							<p class="mt-2 text-xs text-white/55">
								Keep it short — we’ll confirm the rest on
								follow-up.
							</p>
						</div>

						<!-- submit -->
						<div
							class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
						>
							<button
								type="submit"
								class="inline-flex items-center justify-center rounded-xl bg-indigo-300 px-5 py-3 text-sm font-semibold text-stone-900 shadow-lg shadow-black/20 transition hover:bg-indigo-200 focus:ring-2 focus:ring-indigo-200/70 focus:outline-none"
							>
								Request Quote
							</button>

							<p class="text-xs text-white/60">
								Fast response • Written estimate • Local
								Edmonton team
							</p>
						</div>

						<!-- privacy / legal -->
						<p
							class="border-t border-white/10 pt-4 text-xs leading-relaxed text-white/50"
						>
							By submitting this form, you consent to NCS
							Painting contacting you about your request by
							your selected method. We only use your
							information to respond to your quote request
							and for related follow-up. We do not sell your
							personal information.
						</p>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
