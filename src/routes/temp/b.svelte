<script>
	const reviews = [
		{
			id: 1,
			name: 'Margaret & Tom Ellison',
			location: 'Oakwood, IL',
			projectType: 'Interior',
			date: 'January 2025',
			rating: 5,
			review:
				"NCS transformed our living room and kitchen completely. The team was meticulous — every edge crisp, no drips, no mess. We've had painters before but never at this level of care.",
			avatar: 'https://placehold.co/64x64/e2e8f0/64748b?text=ME'
		},
		{
			id: 2,
			name: 'David Fontaine',
			location: 'Riverside, OH',
			projectType: 'Exterior',
			date: 'March 2025',
			rating: 5,
			review:
				"Our home's exterior hadn't been painted in 12 years. NCS handled the prep work thoroughly — scraped, primed, and two full coats. Looks like a brand new build. Neighbours keep asking who we used.",
			avatar: 'https://placehold.co/64x64/e2e8f0/64748b?text=DF'
		},
		{
			id: 3,
			name: 'Sandra Cho',
			location: 'Lakeside, WI',
			projectType: 'Interior',
			date: 'November 2024',
			rating: 5,
			review:
				'I was nervous about colour choices but the NCS team walked me through everything. The finished result — a deep sage in the office and warm white throughout — is exactly what I had in mind.',
			avatar: 'https://placehold.co/64x64/e2e8f0/64748b?text=SC'
		},
		{
			id: 4,
			name: 'James & Priya Okafor',
			location: 'Elmhurst, IL',
			projectType: 'Exterior',
			date: 'September 2024',
			rating: 5,
			review:
				"Competitive quote, on-time start, finished a day early. The surface prep alone was impressive — you can tell they take pride in doing things right. We'll be calling them again for the garage.",
			avatar: 'https://placehold.co/64x64/e2e8f0/64748b?text=JO'
		},
		{
			id: 5,
			name: 'Carol Whitmore',
			location: 'Geneva, IL',
			projectType: 'Interior',
			date: 'February 2025',
			rating: 5,
			review:
				'Hired NCS to repaint the entire upper floor before listing our home. Realtor said it was the best pre-sale investment we made. Received three offers above asking within the first weekend.',
			avatar: 'https://placehold.co/64x64/e2e8f0/64748b?text=CW'
		},
		{
			id: 6,
			name: 'Robert & Lynn Hargrove',
			location: 'St. Charles, IL',
			projectType: 'Exterior',
			date: 'October 2024',
			rating: 5,
			review:
				'Friendly, professional, and genuinely skilled. They moved all our patio furniture, masked every detail, and left the property spotless. The finish has held up beautifully through a rough winter.',
			avatar: 'https://placehold.co/64x64/e2e8f0/64748b?text=RH'
		}
	];

	function renderStars(count) {
		return Array(count).fill('★').join('');
	}
</script>

<section class="bg-stone-50 px-6 py-20">
	<!-- Section Header -->
	<div class="mx-auto mb-14 max-w-6xl text-center">
		<p class="mb-3 text-xs font-semibold tracking-[0.2em] text-amber-600 uppercase">Client Testimonials</p>
		<h2 class="mb-4 text-4xl font-light tracking-tight text-stone-800" style="font-family: 'Georgia', serif;">
			What Our Clients Say
		</h2>
		<p class="mx-auto max-w-xl text-base leading-relaxed text-stone-500">
			We let our work — and the people we've worked for — speak for themselves.
		</p>
		<div class="mx-auto mt-6 h-px w-12 bg-amber-500"></div>
	</div>

	<!-- Review Grid -->
	<div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each reviews as review (review.id)}
			<article
				class="flex flex-col gap-5 rounded-sm border border-stone-200 bg-white p-7
               transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
			>
				<!-- Top Row: Stars + Project Badge -->
				<div class="flex items-center justify-between">
					<span class="text-lg tracking-tight text-amber-400" aria-label="{review.rating} out of 5 stars">
						{renderStars(review.rating)}
					</span>
					<span
						class="rounded-sm px-2.5 py-1 text-[11px] font-semibold tracking-widest uppercase
            {review.projectType === 'Interior' ? 'bg-sky-50 text-sky-700' : 'bg-emerald-50 text-emerald-700'}"
					>
						{review.projectType}
					</span>
				</div>

				<!-- Quote -->
				<blockquote class="relative flex-1 text-sm leading-relaxed text-stone-600">
					<span
						class="absolute -top-1 -left-1 font-serif text-4xl leading-none text-stone-200 select-none"
						aria-hidden="true"
					>
						"
					</span>
					<p class="relative z-10 pl-4">{review.review}</p>
				</blockquote>

				<!-- Divider -->
				<div class="h-px w-full bg-stone-100"></div>

				<!-- Reviewer Info -->
				<footer class="flex items-center gap-3">
					<img
						src={review.avatar}
						alt="Avatar for {review.name}"
						class="h-10 w-10 rounded-full border border-stone-200 object-cover"
					/>
					<div class="min-w-0 flex-1">
						<p class="truncate text-sm font-semibold text-stone-800">{review.name}</p>
						<p class="text-xs text-stone-400">{review.location}</p>
					</div>
					<time class="text-xs whitespace-nowrap text-stone-400">{review.date}</time>
				</footer>
			</article>
		{/each}
	</div>

	<!-- Bottom CTA -->
	<div class="mt-14 text-center">
		<p class="mb-4 text-sm text-stone-500">Ready to see results like these at your home?</p>
		<a
			href="/contact"
			class="inline-block rounded-sm bg-stone-800 px-8 py-3 text-sm
             font-medium tracking-wide text-white transition-colors duration-200 hover:bg-amber-600"
		>
			Get a Free Quote
		</a>
	</div>
</section>
