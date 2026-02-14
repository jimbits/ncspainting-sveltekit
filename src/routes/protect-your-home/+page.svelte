<script>
	import { onMount } from 'svelte';

	let scrollY = $state(0);
	let activeAccordion = $state(null);

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div class="min-h-screen bg-white">
	<!-- Hero Section -->
	<section class="relative bg-gradient-to-br from-zinc-900 to-zinc-800 px-6 py-32">
		<div class="absolute inset-0 opacity-20">
			<img src="/hero-22.jpg" alt="Exterior painting" class="h-full w-full object-cover" />
		</div>
		<div class="relative z-10 mx-auto max-w-7xl text-center">
			<div class="mb-8 inline-block rounded-full bg-orange-500 px-6 py-2 text-sm font-bold text-white shadow-md">
				Edmonton's Exterior Painting Specialists
			</div>
			<h1 class="mb-8 text-7xl leading-tight font-bold text-white md:text-8xl">
				Exterior Painting
				<br />
				Built for Alberta
			</h1>
			<p class="mx-auto mb-12 max-w-4xl text-2xl leading-relaxed text-zinc-300">
				Proper prep and durable coatings designed to withstand Edmonton's extreme weather. From -40°C winters to blazing
				summer sun, we protect your investment.
			</p>
			<div class="flex flex-col justify-center gap-6 sm:flex-row">
				<button
					class="rounded-lg bg-orange-500 px-12 py-5 text-xl font-bold text-white shadow-lg transition-all hover:bg-orange-600"
				>
					Request Free Quote
				</button>
				<button
					class="rounded-lg border-2 border-white/20 bg-white/10 px-12 py-5 text-xl font-semibold text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/20"
				>
					Call: (780) 555-0123
				</button>
			</div>
		</div>
	</section>

	<!-- Edmonton Weather Challenges -->
	<section class="bg-white px-6 py-24">
		<div class="mx-auto max-w-7xl">
			<div class="grid items-center gap-16 lg:grid-cols-2">
				<div>
					<h2 class="mb-8 text-6xl font-bold text-zinc-900">Why Edmonton Exteriors Require Special Care</h2>
					<div class="space-y-8">
						<div class="rounded-xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
							<h3 class="mb-4 text-3xl font-bold text-zinc-900">Extreme Temperature Swings</h3>
							<p class="text-lg leading-relaxed text-zinc-700">
								Edmonton experiences over 80°C temperature variation annually - from -40°C winter lows to +35°C summer
								highs. This constant expansion and contraction causes paint to crack, peel, and fail prematurely. We use
								flexible, premium coatings specifically formulated for thermal cycling, ensuring your paint moves with
								your home's exterior surfaces rather than breaking apart. Our multi-coat system provides superior
								adhesion and flexibility that standard paints simply can't match.
							</p>
						</div>

						<div class="rounded-xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
							<h3 class="mb-4 text-3xl font-bold text-zinc-900">Intense UV Exposure</h3>
							<p class="text-lg leading-relaxed text-zinc-700">
								Alberta's high elevation and clear skies mean intense UV radiation year-round. Summer days with 16+
								hours of sunlight accelerate paint fade and chalking. We combat this with UV-resistant exterior coatings
								featuring advanced pigment technology that maintains color vibrancy for 10-15 years. Our paints include
								UV blockers and stabilizers that protect both the coating and your home's substrate from sun damage.
								South and west-facing walls receive special attention with our premium UV-protection formulas.
							</p>
						</div>

						<div class="rounded-xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
							<h3 class="mb-4 text-3xl font-bold text-zinc-900">Freeze-Thaw Cycles & Chinooks</h3>
							<p class="text-lg leading-relaxed text-zinc-700">
								Edmonton's chinooks create rapid temperature fluctuations - sometimes 20°C in hours. Combined with
								freeze-thaw cycles, moisture penetrates cracks and expands, causing catastrophic paint failure. Our
								preparation process includes thorough caulking of all gaps, proper priming of bare wood, and
								moisture-resistant coatings that create a breathable yet waterproof barrier. We use elastomeric sealants
								that remain flexible through temperature extremes, preventing moisture infiltration that leads to rot,
								mold, and paint delamination.
							</p>
						</div>
					</div>
				</div>
				<div class="space-y-6">
					<img src="/image-42.png" alt="Exterior painting prep" class="h-96 w-full rounded-xl object-cover shadow-lg" />
					<img
						src="/image-43.png"
						alt="Professional application"
						class="h-96 w-full rounded-xl object-cover shadow-lg"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Surfaces We Paint -->
	<section class="bg-zinc-50 px-6 py-24">
		<div class="mx-auto max-w-7xl">
			<h2 class="mb-6 text-center text-6xl font-bold text-zinc-900">Surfaces We Paint</h2>
			<p class="mx-auto mb-16 max-w-3xl text-center text-2xl text-zinc-600">
				Complete exterior painting services for all residential surfaces in Edmonton
			</p>

			<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				<div class="rounded-xl border border-zinc-200 bg-white p-8 shadow-md transition-shadow hover:shadow-xl">
					<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-orange-500 shadow-md">
						<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-2xl font-bold text-zinc-900">Siding</h3>
					<p class="mb-4 leading-relaxed text-zinc-700">
						Vinyl, wood, aluminum, and fiber cement siding. Each material requires specific primers and application
						techniques for optimal adhesion and longevity.
					</p>
					<ul class="space-y-2 text-zinc-600">
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Wood & cedar siding</span>
						</li>
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Vinyl siding refresh</span>
						</li>
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Fiber cement & HardiePlank</span>
						</li>
					</ul>
				</div>

				<div class="rounded-xl border border-zinc-200 bg-white p-8 shadow-md transition-shadow hover:shadow-xl">
					<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-orange-500 shadow-md">
						<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-2xl font-bold text-zinc-900">Stucco & EIFS</h3>
					<p class="mb-4 leading-relaxed text-zinc-700">
						Specialized coatings for stucco and synthetic stucco systems. Our elastomeric paints flex with the surface,
						preventing cracks and maintaining waterproof integrity.
					</p>
					<ul class="space-y-2 text-zinc-600">
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Traditional stucco</span>
						</li>
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>EIFS systems</span>
						</li>
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Crack repair & sealing</span>
						</li>
					</ul>
				</div>

				<div class="rounded-xl border border-zinc-200 bg-white p-8 shadow-md transition-shadow hover:shadow-xl">
					<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-orange-500 shadow-md">
						<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-2xl font-bold text-zinc-900">Trim & Details</h3>
					<p class="mb-4 leading-relaxed text-zinc-700">
						Window casings, door frames, corner boards, and decorative trim. Hand-brushed for crisp lines and thorough
						coverage in crevices.
					</p>
					<ul class="space-y-2 text-zinc-600">
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Window & door trim</span>
						</li>
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Corner boards & fascia</span>
						</li>
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Decorative millwork</span>
						</li>
					</ul>
				</div>

				<div class="rounded-xl border border-zinc-200 bg-white p-8 shadow-md transition-shadow hover:shadow-xl">
					<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-orange-500 shadow-md">
						<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-2xl font-bold text-zinc-900">Soffits & Fascia</h3>
					<p class="mb-4 leading-relaxed text-zinc-700">
						Underside eaves and fascia boards. Critical areas for preventing moisture infiltration and maintaining your
						home's weather barrier.
					</p>
					<ul class="space-y-2 text-zinc-600">
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Vinyl soffit panels</span>
						</li>
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Wood fascia boards</span>
						</li>
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Eavestrough painting</span>
						</li>
					</ul>
				</div>

				<div class="rounded-xl border border-zinc-200 bg-white p-8 shadow-md transition-shadow hover:shadow-xl">
					<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-orange-500 shadow-md">
						<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-2xl font-bold text-zinc-900">Doors & Garage Doors</h3>
					<p class="mb-4 leading-relaxed text-zinc-700">
						Front doors, side doors, and garage doors. High-traffic areas requiring durable coatings that resist
						scuffing, fading, and weathering.
					</p>
					<ul class="space-y-2 text-zinc-600">
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Entry doors</span>
						</li>
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Steel garage doors</span>
						</li>
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Wood door refinishing</span>
						</li>
					</ul>
				</div>

				<div class="rounded-xl border border-zinc-200 bg-white p-8 shadow-md transition-shadow hover:shadow-xl">
					<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-orange-500 shadow-md">
						<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
							/>
						</svg>
					</div>
					<h3 class="mb-4 text-2xl font-bold text-zinc-900">Decks & Railings</h3>
					<p class="mb-4 leading-relaxed text-zinc-700">
						Deck staining, painting, and sealing. Specialized coatings for horizontal surfaces exposed to standing
						water, foot traffic, and UV damage.
					</p>
					<ul class="space-y-2 text-zinc-600">
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Deck staining & sealing</span>
						</li>
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Railing painting</span>
						</li>
						<li class="flex items-center gap-2">
							<span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
							<span>Pressure washing prep</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- 2025-2026 Paint Technology Trends -->
	<section class="bg-white px-6 py-24">
		<div class="mx-auto max-w-7xl">
			<div class="mb-16 text-center">
				<div class="mb-6 inline-block rounded-full bg-orange-100 px-6 py-2 text-sm font-bold text-orange-600">
					2025-2026 Industry Innovations
				</div>
				<h2 class="mb-6 text-6xl font-bold text-zinc-900">Next-Generation Exterior Coatings</h2>
				<p class="mx-auto max-w-3xl text-2xl text-zinc-600">
					Advanced paint technologies designed for Edmonton's extreme climate
				</p>
			</div>

			<div class="grid gap-12 lg:grid-cols-2">
				<div class="rounded-xl border border-zinc-200 bg-zinc-50 p-10 shadow-sm">
					<div class="mb-6 flex items-start gap-6">
						<div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500 shadow-md">
							<svg class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="mb-4 text-3xl font-bold text-zinc-900">Self-Cleaning Exterior Paint</h3>
							<p class="text-lg leading-relaxed text-zinc-700">
								Photocatalytic nano-coatings that use UV light to break down organic dirt, pollen, and grime. Rain
								naturally washes away residue, keeping your home cleaner between washings. Particularly effective on
								white and light-colored surfaces that show Edmonton's prairie dust. These advanced coatings reduce
								maintenance frequency by 40-50% and maintain curb appeal with minimal effort. The technology works
								through titanium dioxide nanoparticles that create a hydrophilic surface - water sheets off instead of
								beading, carrying dirt with it.
							</p>
						</div>
					</div>
				</div>

				<div class="rounded-xl border border-zinc-200 bg-zinc-50 p-10 shadow-sm">
					<div class="mb-6 flex items-start gap-6">
						<div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500 shadow-md">
							<svg class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="mb-4 text-3xl font-bold text-zinc-900">Heat-Reflective Technology</h3>
							<p class="text-lg leading-relaxed text-zinc-700">
								Infrared-reflective pigments that reduce surface temperatures by up to 20°C on hot summer days. Lower
								heat absorption means reduced thermal stress on siding, extended paint life, and lower air conditioning
								costs. Especially beneficial for dark colors that traditionally absorb excessive heat. These "cool roof"
								pigments reflect near-infrared wavelengths while maintaining vibrant color appearance. Edmonton's
								intense summer sun causes significant thermal expansion - heat-reflective coatings minimize this stress,
								preventing premature cracking and peeling.
							</p>
						</div>
					</div>
				</div>

				<div class="rounded-xl border border-zinc-200 bg-zinc-50 p-10 shadow-sm">
					<div class="mb-6 flex items-start gap-6">
						<div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500 shadow-md">
							<svg class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
								/>
							</svg>
						</div>
						<div>
							<h3 class="mb-4 text-3xl font-bold text-zinc-900">Eco-Friendly Zero-VOC Formulas</h3>
							<p class="text-lg leading-relaxed text-zinc-700">
								Water-based, zero-VOC exterior paints with no harmful emissions. Safe for your family, neighbors, and
								the environment without compromising durability. These sustainable formulations perform identically to
								traditional oil-based paints but contain no toxic solvents or heavy metals. Alberta's environmental
								regulations increasingly favor low-impact products. Modern zero-VOC exterior paints offer excellent
								adhesion, flexibility through freeze-thaw cycles, and 10-15 year durability ratings. They're odor-free
								during application and safe around children, pets, and gardens.
							</p>
						</div>
					</div>
				</div>

				<div class="rounded-xl border border-zinc-200 bg-zinc-50 p-10 shadow-sm">
					<div class="mb-6 flex items-start gap-6">
						<div class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500 shadow-md">
							<svg class="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="mb-4 text-3xl font-bold text-zinc-900">Smart Moisture Detection Integration</h3>
							<p class="text-lg leading-relaxed text-zinc-700">
								Compatible with emerging smart home moisture sensors embedded beneath paint. These systems monitor
								trapped moisture, alerting homeowners to potential issues before they cause rot or mold. Particularly
								valuable in Edmonton where ice damming and rapid temperature changes can create hidden moisture
								problems. While the sensors are separate installations, modern paints are formulated to work with these
								systems - maintaining breathability while providing waterproof protection. Early detection prevents
								costly repairs and extends your home's lifespan significantly.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="bg-gradient-to-br from-orange-500 to-orange-600 px-6 py-24">
		<div class="mx-auto max-w-5xl text-center">
			<h2 class="mb-8 text-6xl font-bold text-white">Ready to Protect Your Home?</h2>
			<p class="mb-12 text-2xl text-white/90">Get a detailed quote for your exterior painting project</p>
			<div class="flex flex-col justify-center gap-6 sm:flex-row">
				<button
					class="rounded-lg bg-white px-14 py-6 text-xl font-bold text-orange-600 shadow-lg transition-all hover:bg-zinc-50"
				>
					Request Free Estimate
				</button>
				<button
					class="rounded-lg border-2 border-white bg-white/10 px-14 py-6 text-xl font-semibold text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/20"
				>
					Call: (780) 555-0123
				</button>
			</div>
		</div>
	</section>
</div>
