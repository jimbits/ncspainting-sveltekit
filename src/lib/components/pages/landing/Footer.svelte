<script lang="ts">
	import { cn } from '$lib/utils/cn';

	export let className: string = '';
</script>

<footer class={cn('bg-gray-900 py-14 text-white', className)}>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			<!-- Contact & Business Info -->
			<div class="lg:col-span-1">
				<h3 class="mb-4 text-xl font-bold text-white">NCS Painting</h3>
				<p class="mb-4 text-sm leading-relaxed text-gray-300">
					Professional residential painting services serving Edmonton and surrounding communities since 2009.
				</p>

				<div class="mb-4 space-y-2">
					<p class="text-sm">
						<span class="font-semibold">Phone:</span>
						<a href="tel:15872084445" class="text-blue-400 transition-colors hover:text-blue-300">(587) 208-4445</a>
					</p>
					<p class="text-sm">
						<span class="font-semibold">Email:</span>
						<a href="mailto:info@ncspainting.com" class="text-blue-400 transition-colors hover:text-blue-300">
							info@ncspainting.com
						</a>
					</p>
					<p class="text-sm">
						<span class="font-semibold">Service Areas:</span>
						Edmonton, Sherwood Park, Fort Saskatchewan, St. Albert
					</p>
				</div>

				<div class="text-sm text-green-400">
					<p>✓ Licensed & Insured ✓ Work Guaranteed ✓ Free Estimates</p>
				</div>
			</div>

			<!-- Services -->
			<div>
				<h4 class="mb-4 text-lg font-semibold text-white">Painting Services</h4>
				<ul class="space-y-2 text-sm">
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">Interior Painting</a>
					</li>
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">Exterior House Painting</a>
					</li>
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">Cabinet Refinishing</a>
					</li>
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">Deck &amp; Fence Staining</a>
					</li>
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">Drywall Repair</a>
					</li>
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">Power Washing</a>
					</li>
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">Commercial Painting</a>
					</li>
				</ul>
			</div>

			<!-- Service Areas -->
			<div>
				<h4 class="mb-4 text-lg font-semibold text-white">Service Areas</h4>
				<ul class="mb-6 space-y-2 text-sm">
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">Edmonton House Painters</a>
					</li>
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">Sherwood Park Painting</a>
					</li>
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">Fort Saskatchewan Painters</a>
					</li>
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">St. Albert Painting Services</a>
					</li>
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">Beaumont Painting Services</a>
					</li>
				</ul>

				<h5 class="text-md mb-3 font-medium text-white">Edmonton Neighborhoods</h5>
				<ul class="grid grid-cols-2 gap-1 text-xs text-gray-400">
					<li>Terwillegar</li>
					<li>Windermere</li>
					<li>Castle Downs</li>
					<li>Mill Creek</li>
					<li>Riverbend</li>
					<li>Summerside</li>
				</ul>
			</div>

			<!-- Company & Resources -->
			<div>
				<h4 class="mb-4 text-lg font-semibold text-white">Company</h4>
				<ul class="mb-6 space-y-2 text-sm">
					<li>
						<a href="#about-us" class="text-gray-300 transition-colors hover:text-white">About NCS Painting</a>
					</li>
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">Project Gallery</a>
					</li>
					<li>
						<a href="#reviews" class="text-gray-300 transition-colors hover:text-white">Customer Reviews</a>
					</li>
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">Painting Tips &amp; Blog</a>
					</li>
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">Contact Us</a>
					</li>
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">Free Estimate</a>
					</li>
					<li>
						<a href="/" class="text-gray-300 transition-colors hover:text-white">Work Warranty</a>
					</li>
				</ul>

				<div>
					<h5 class="text-md mb-3 font-medium text-white">Follow Us</h5>
					<div class="flex space-x-4 text-sm">
						<a href="/" class="text-gray-300 transition-colors hover:text-blue-400" aria-label="Facebook">Facebook</a>
						<a href="/" class="text-gray-300 transition-colors hover:text-red-400" aria-label="Google Business">
							Google
						</a>
						<a href="/" class="text-gray-300 transition-colors hover:text-yellow-400" aria-label="HomeStars">
							HomeStars
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom Footer Bar -->
</footer>
<div class="border-t border-gray-800 bg-gray-950">
	<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
		<div class="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
			<div class="text-sm text-gray-400">
				<p>
					&copy; 2024 NCS Painting. Professional house painters serving Edmonton, Sherwood Park, Fort Saskatchewan, and
					St. Albert since 2009.
				</p>
			</div>

			<div class="text-sm">
				<p class="text-gray-300">
					<span class="font-semibold text-white">Ready to transform your home?</span>
					<a href="tel:15872084445" class="font-medium text-blue-400 transition-colors hover:text-blue-300">
						Call (587) 208-4445
					</a>
					for your free painting estimate!
				</p>
			</div>
		</div>
	</div>
</div>
