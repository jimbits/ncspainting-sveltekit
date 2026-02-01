<script lang="ts">
	import { MapPin } from 'lucide-svelte';
</script>

<section class="relative isolate overflow-hidden bg-white">
	<!-- Background image -->
	<img
		src="/hero-2.avif"
		alt="Painter holding a paint roller and color swatches on an orange painted background"
		class="absolute inset-0 -z-20 h-full w-full object-cover object-bottom-right"
	/>

	<!-- Overlay for readability -->
	<div class="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/45 to-black/15"></div>

	<div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
		<div class="grid items-stretch gap-10 lg:grid-cols-12">
			<!-- Left: Copy -->
			<div class=" self-start lg:col-span-7">
				<div class="glass bg-stone-300 px-8 py-8 pb-14 text-white">
					<!-- Primary SEO heading -->
					<h1 class="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
						Residential Interior & Exterior House Painting in Edmonton
					</h1>

					<!-- Supporting SEO copy -->
					<p class="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
						NCS Painting helps homeowners upgrade their spaces with clean prep, crisp lines, and professional finishes.
						Get a fast, free quote for interior painting, exterior painting, and repaint projects across Edmonton.
					</p>

					<!-- Trust / value bullets -->
					<ul class="mt-6 grid max-w-2xl gap-y-5 pb-6 sm:grid-cols-2">
						<li class="flex items-start gap-3">
							<span
								class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-500 ring-1 ring-white/20"
								aria-hidden="true"
							>
								✓
							</span>
							<span class="text-sm text-white/90 sm:text-base">Residential interior & exteriors.</span>
						</li>
						<!-- Preparation -->
						<li class="flex items-start gap-3">
							<span
								class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-500 ring-1 ring-white/20"
								aria-hidden="true"
							>
								✓
							</span>
							<span class="text-sm text-white/90 sm:text-base">Careful preparation & clean job sites</span>
						</li>
						<li class="flex items-start gap-3">
							<span
								class="bg-gre/15 mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-500 ring-1 ring-white/20"
								aria-hidden="true"
							>
								✓
							</span>
							<span class="text-sm text-white/90 sm:text-base">Clear communication & scheduling</span>
						</li>
						<li class="flex items-start gap-3">
							<span
								class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-500 ring-1 ring-white/20"
								aria-hidden="true"
							>
								✓
							</span>
							<span class="text-sm text-white/90 sm:text-base">Free estimates</span>
						</li>
						<li class="flex items-start gap-3">
							<span
								class="bg-gre/15 mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-500 ring-1 ring-white/20"
								aria-hidden="true"
							>
								✓
							</span>
							<span class="text-sm text-white/90 sm:text-base">Bonded, licensed, and insured</span>
						</li>
						<li class="flex items-start gap-3">
							<span
								class="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-500 ring-1 ring-white/20"
								aria-hidden="true"
							>
								✓
							</span>
							<span class="text-sm text-white/90 sm:text-base">30+ years experience.</span>
						</li>
					</ul>

					<!-- CTAs -->
					<div class="mt-8 flex flex-col gap-8 sm:flex-row sm:items-center">
						<a
							href="tel:17807225577"
							class="to-purple-800px-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-blue-500 via-sky-600 to-blue-600 px-4 py-3 text-base font-semibold text-white transition-all hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
							aria-label="Call NCS Painting at 780-722-5577"
						>
							Ask The Painter 780-722-5577
						</a>

						<a
							href="mailto:info@ncspainting.com"
							class="inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold text-white ring-1 ring-white/35 transition-all hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
						>
							Online Painting Project Calculator
						</a>
					</div>
				</div>
				<!-- Micro-details (local + helpful) -->
				<dl class="mt-6 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
					<div class="glass rounded-xl bg-stone-200 px-4 py-3 ring-1 ring-white/15">
						<dt class="font-semibold text-white">Hours</dt>
						<dd class="mt-1">Mon–Fri 9am–5pm · Sat–Sun 11am–3pm</dd>
					</div>
					<div class="glass rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/15">
						<dt class="font-semibold text-white">Service Area</dt>
						<dd class="mt-1">Edmonton, Sherwood Park, St Albert, Fort Saskatchewan and surrounding area.</dd>
					</div>
				</dl>
			</div>

			<!-- Right: Quick quote card (optional but high converting) -->
			<div class="lg:col-span-5">
				<div class="rounded-2xl bg-white/95 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur">
					<h2 class="text-xl font-bold text-slate-900" id="free-quote">Request a Free Quote</h2>
					<p class="mt-2 text-sm text-slate-600">Tell us what you’re painting. We’ll respond as soon as possible.</p>

					<form class="mt-5 space-y-4" action="#" method="post" aria-describedby="quote-help">
						<p class="sr-only" id="quote-help">
							All fields are optional, but adding a phone number helps us reach you faster.
						</p>

						<div class="grid gap-4 sm:grid-cols-2">
							<div>
								<label for="name" class="block text-sm font-medium text-slate-900">Name</label>
								<input
									id="name"
									name="name"
									type="text"
									autocomplete="name"
									class="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20"
								/>
							</div>

							<div>
								<label for="phone" class="block text-sm font-medium text-slate-900">Phone</label>
								<input
									id="phone"
									name="phone"
									type="tel"
									autocomplete="tel"
									inputmode="tel"
									class="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20"
									placeholder="780-722-5577"
								/>
							</div>
						</div>

						<div>
							<label for="email" class="block text-sm font-medium text-slate-900">Email</label>
							<input
								id="email"
								name="email"
								type="email"
								autocomplete="email"
								class="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20"
							/>
						</div>

						<div class="grid gap-4 sm:grid-cols-2">
							<div>
								<label for="service" class="block text-sm font-medium text-slate-900">Service</label>
								<select
									id="service"
									name="service"
									class="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20"
								>
									<option value="">Select…</option>
									<option value="interior">Interior Painting</option>
									<option value="exterior">Exterior Painting</option>
									<option value="both">Interior + Exterior</option>
								</select>
							</div>

							<div>
								<label for="area" class="block text-sm font-medium text-slate-900">City</label>
								<select
									id="area"
									name="area"
									class="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20"
								>
									<option value="">Select…</option>
									<option value="edmonton">Edmonton</option>
									<option value="sherwood-park">Sherwood Park</option>
									<option value="st-albert">St. Albert</option>
									<option value="fort-saskatchewan">Fort Saskatchewan</option>
									<option value="other">Other</option>
								</select>
							</div>
						</div>

						<div>
							<label for="details" class="block text-sm font-medium text-slate-900">Project details</label>
							<textarea
								id="details"
								name="details"
								rows="4"
								class="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20"
								placeholder="Example: 3 bedrooms + hallway, walls only, preferred timing next month."
							></textarea>
						</div>

						<button
							type="submit"
							class="inline-flex w-full items-center justify-center rounded-xl bg-linear-to-b from-rose-600 from-55% via-rose-500 via-70% to-red-500 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
						>
							Send Request
						</button>

						<p class="text-xs text-slate-500">
							Prefer calling? <a
								class="font-semibold text-slate-900 underline underline-offset-2"
								href="tel:17807225577"
							>
								780-722-5577
							</a>
						</p>
					</form>
				</div>

				<!-- Optional small “proof strip” under the card -->
				<div class="mt-4 flex flex-wrap items-center gap-2 text-xs text-white/85">
					<span class="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">Interior</span>
					<span class="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">Exterior</span>
					<span class="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">Repaints</span>
					<span class="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">Edmonton Area</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* glass-overlay.css */
	.glass {
		background: #0907051d;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px); /* Safari support */
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 16px;

		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
	}
</style>
