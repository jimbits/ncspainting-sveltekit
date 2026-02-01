<script lang="ts">
	import logo from '$lib/assets/icons/logo.svg?url';

	const navItems = [
		{ label: 'Services', href: '#services' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'About', href: '#why-choose-us' },
		{ label: 'Service Areas', href: '#service-areas' },
		{ label: 'Contact', href: '#quote-form' }
	];

	const serviceCards = [
		{
			title: 'Interior Painting',
			copy: 'Walls, ceilings, trim, and doors with careful prep and clean lines.',
			image: '/image-26.png',
			alt: 'Interior wall and trim painting',
			link: '/interior-painting-edmonton'
		},
		{
			title: 'Exterior Painting',
			copy: 'Prep-first exterior painting built to handle Alberta weather.',
			image: '/hero-12.jpg',
			alt: 'Exterior siding and trim painting',
			link: '/exterior-painting-edmonton'
		}
	];

	const exteriorBullets = [
		'Surface cleaning + scraping/sanding where needed',
		'Priming for strong adhesion',
		'Caulking and sealing details',
		'Durable exterior coatings',
		'Neat masking and tidy cleanup'
	];

	const interiorBullets = [
		'Light patching, sanding, surface prep',
		'Protection for floors and furniture',
		'Crisp cut lines on trim and corners',
		'Priming where needed for even coverage',
		'Daily cleanup and final walkthrough'
	];

	const processSteps = [
		{ title: 'Estimate & Scope', copy: 'Clear quote and scope before work begins.' },
		{ title: 'Prep & Protection', copy: 'Protect surfaces and prep for clean adhesion.' },
		{ title: 'Paint & Detail', copy: 'Careful application with crisp cut lines.' },
		{ title: 'Walkthrough & Cleanup', copy: 'Final check, touch-ups, and tidy finish.' }
	];

	const projectImages = [
		{ src: '/image-10.png', alt: 'Interior painting project in Edmonton' },
		{ src: '/image-11.png', alt: 'Exterior painting project in Edmonton' },
		{ src: '/image-12.png', alt: 'Trim detail painting project' },
		{ src: '/image-13.png', alt: 'Staircase painting project' },
		{ src: '/image-14.png', alt: 'Living room painting project' },
		{ src: '/image-15.png', alt: 'Exterior siding painting project' }
	];

	const testimonials = [
		{
			quote: 'Clean prep, crisp lines, and a tidy jobsite. Exactly what we wanted.',
			name: 'J. Morrison',
			city: 'Edmonton',
			service: 'Interior Painting'
		},
		{
			quote: 'Clear estimate, on-time crew, and the exterior looks brand new.',
			name: 'A. Patel',
			city: 'Sherwood Park',
			service: 'Exterior Painting'
		},
		{
			quote: 'Professional from start to finish. We would hire them again.',
			name: 'L. Chen',
			city: 'St. Albert',
			service: 'Interior + Trim'
		}
	];

	const serviceAreas = ['Edmonton', 'St. Albert', 'Fort Saskatchewan', 'Sherwood Park'];

	const faqItems = [
		{
			q: 'How much does it cost to paint a room in Edmonton?',
			a: 'Pricing depends on room size, wall condition, paint type, and prep time. Request a free quote for an accurate estimate.'
		},
		{
			q: 'Do you offer free estimates in Edmonton?',
			a: 'Yes. Share a few details and we will schedule a quick estimate.'
		},
		{
			q: 'How long does interior painting take?',
			a: 'Many rooms can be completed in 1–2 days depending on prep and drying time.'
		},
		{
			q: 'What time of year is best for exterior painting in Edmonton?',
			a: 'Late spring through early fall is typical. Weather conditions affect curing and adhesion.'
		}
	];

	const tips = [
		{
			title: 'How to choose the right paint sheen',
			copy: 'Eggshell for walls, satin for high-traffic, semi-gloss for trim.',
			link: '/ask-the-painter'
		},
		{
			title: 'How to prep a room for painters',
			copy: 'Clear walls and small items to reduce disruption and speed up prep.',
			link: '/ask-the-painter'
		},
		{
			title: 'What affects the cost of interior painting?',
			copy: 'Size, prep, paint choice, and wall condition drive pricing.',
			link: '/ask-the-painter'
		}
	];

	const articles = [
		{
			title: 'Refinishing Kitchen Cabinets: What to Expect',
			copy: 'Prep, coatings, timelines, and a smooth finish.',
			link: '/ask-the-painter'
		},
		{
			title: 'How Much Does It Cost to Paint a House in Edmonton?',
			copy: 'Key cost factors and how to plan your budget.',
			link: '/ask-the-painter'
		},
		{
			title: 'Exterior Painting Seasons in Edmonton',
			copy: 'Temperature, humidity, and curing conditions.',
			link: '/ask-the-painter'
		}
	];

	const additionalServices = [
		'Cabinet painting / refinishing',
		'Trim and door painting',
		'Deck and fence staining',
		'Drywall patching before painting',
		'Small commercial touch-ups'
	];
</script>

<a class="sr-only focus:not-sr-only" href="#main-content">Skip to content</a>

<header class="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
		<a href="/" class="inline-flex items-center gap-3">
			<img src={logo} alt="NCS Painting" class="h-8 w-auto" />
			<span class="text-sm font-semibold tracking-wide text-slate-900">NCS Painting</span>
		</a>
		<nav aria-label="Primary" class="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
			{#each navItems as item}
				<a class="transition hover:text-slate-900" href={item.href}>{item.label}</a>
			{/each}
		</nav>
		<div class="hidden items-center gap-3 lg:flex">
			<a
				href="#quote-form"
				class="rounded-full bg-black px-5 py-2 text-xs font-semibold text-white transition hover:bg-slate-900"
			>
				Request a Free Quote
			</a>
			<a
				href="tel:7807225577"
				class="rounded-full border border-slate-300 px-5 py-2 text-xs font-semibold text-slate-900 transition hover:border-slate-400"
			>
				Call the Painter
			</a>
		</div>
	</div>
</header>

<main id="main-content" class="bg-white text-slate-900">
	<section class="relative overflow-hidden bg-white pb-16 pt-16 sm:pt-20">
		<div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#f8fafc,_#ffffff)]"></div>
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<div class="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
				<div>
					<p class="mb-4 text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">
						Local Edmonton Painters
					</p>
					<h1 class="mb-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
						House Painters in Edmonton
					</h1>
					<p class="max-w-xl text-lg text-slate-600">
						Interior and exterior painting with clean prep, clear communication, and a finish you’ll love.
					</p>
					<ul class="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
						<li>Fast, free estimates</li>
						<li>Careful prep + protected floors</li>
						<li>Clean lines on trim and edges</li>
						<li>Daily cleanup + final walkthrough</li>
					</ul>
					<div class="mt-8 flex flex-col gap-3 sm:flex-row">
						<a
							href="#quote-form"
							class="rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-900"
						>
							Request a Free Quote
						</a>
						<a
							href="tel:7807225577"
							class="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-400"
						>
							Call the Painter
						</a>
						<a
						href="mailto:naill@ncspainting.com"
							class="rounded-full border border-slate-200 px-6 py-3 text-center text-sm font-semibold text-slate-500 transition hover:text-slate-700"
						>
							Email the Painter
						</a>
					</div>
					<p class="mt-4 text-xs text-slate-500">
						Serving Edmonton, St. Albert, Fort Saskatchewan & Sherwood Park.
					</p>
				</div>
				<div class="relative">
					<picture>
						<img
							src="/hero-16.jpg"
							alt="Professional painting team working on a home"
							class="h-full w-full rounded-[28px] object-cover shadow-lg"
							loading="eager"
							decoding="async"
						/>
					</picture>
					<div class="absolute -bottom-6 left-6 rounded-2xl bg-white px-4 py-3 text-xs text-slate-600 shadow">
						Free estimates • Clean prep • Clear timelines
					</div>
				</div>
			</div>
		</div>
	</section>

	<section id="services" class="bg-slate-50 py-16">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<div class="mb-10 flex flex-col gap-4">
				<h2 class="text-3xl font-bold">Residential Painting Services in Edmonton</h2>
				<p class="max-w-2xl text-slate-600">
					Interior and exterior painting services designed for Edmonton homes, with prep-first work and
					clear quotes.
				</p>
			</div>
			<div class="grid gap-6 lg:grid-cols-2">
				{#each serviceCards as card}
					<article class="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
						<div class="overflow-hidden rounded-2xl">
							<picture>
								<img src={card.image} alt={card.alt} class="h-56 w-full object-cover" loading="lazy" />
							</picture>
						</div>
						<h3 class="mt-5 text-xl font-semibold">{card.title}</h3>
						<p class="mt-2 text-sm text-slate-600">{card.copy}</p>
						<a class="mt-4 inline-flex text-sm font-semibold text-slate-900" href={card.link}>
							Explore {card.title}
						</a>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section id="why-choose-us" class="py-16">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
				<div>
					<p class="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase">Why Choose Us</p>
					<h2 class="mt-3 text-3xl font-bold">Local painters who focus on prep and clean results.</h2>
					<p class="mt-4 text-slate-600">
						We keep the process simple: clear scope, careful prep, and tidy job sites so your home feels
						fresh from start to finish.
					</p>
					<ul class="mt-6 space-y-3 text-sm text-slate-600">
						<li>Locally owned and operated</li>
						<li>Clean prep and protected work areas</li>
						<li>Clear timelines and communication</li>
						<li>Respectful, professional crews</li>
					</ul>
				</div>
				<div>
					<picture>
						<img
							src="/ncs-painting-1.jpg"
							alt="NCS Painting team on site"
							class="h-full w-full rounded-[28px] object-cover shadow"
							loading="lazy"
						/>
					</picture>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-slate-50 py-16">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<div class="grid gap-6 lg:grid-cols-2">
				<article class="rounded-[28px] bg-black p-8 text-white">
					<h3 class="text-2xl font-semibold">Exterior Painting Services</h3>
					<p class="mt-3 text-white/70">
						Exterior painting in Edmonton that starts with proper prep so your finish holds up through the
						seasons.
					</p>
					<ul class="mt-6 space-y-2 text-sm text-white/80">
						{#each exteriorBullets as bullet}
							<li>{bullet}</li>
						{/each}
					</ul>
					<div class="mt-6 flex flex-col gap-2 sm:flex-row">
						<a href="#quote-form" class="rounded-full bg-white px-5 py-2 text-xs font-semibold text-black">
							Request a Free Quote
						</a>
						<a
							href="tel:7807225577"
							class="rounded-full border border-white/40 px-5 py-2 text-xs font-semibold text-white"
						>
							Call the Painter
						</a>
					</div>
				</article>
				<article class="rounded-[28px] border border-slate-200 bg-white p-6">
					<picture>
						<img src="/hero-12.jpg" alt="Exterior painting detail" class="h-56 w-full rounded-2xl object-cover" loading="lazy" />
					</picture>
					<div class="mt-6 rounded-2xl border border-slate-200 p-5">
						<p class="text-sm font-semibold text-slate-900">Exterior FAQ</p>
						<p class="mt-2 text-sm text-slate-600">
							Late spring through early fall is typically best for exterior painting in Edmonton.
						</p>
					</div>
				</article>
			</div>
		</div>
	</section>

	<section class="py-16">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<div class="grid gap-6 lg:grid-cols-2">
				<article class="rounded-[28px] border border-slate-200 bg-white p-6">
					<picture>
						<img src="/image-26.png" alt="Interior painting detail" class="h-56 w-full rounded-2xl object-cover" loading="lazy" />
					</picture>
					<div class="mt-6 rounded-2xl border border-slate-200 p-5">
						<p class="text-sm font-semibold text-slate-900">Interior FAQ</p>
						<p class="mt-2 text-sm text-slate-600">Many rooms can be completed in 1–2 days depending on prep.</p>
					</div>
				</article>
				<article class="rounded-[28px] bg-white p-8 shadow-sm">
					<h3 class="text-2xl font-semibold">Interior Painting Services</h3>
					<p class="mt-3 text-slate-600">
						Interior painting in Edmonton for walls, ceilings, trim, and doors with careful prep and a clean finish.
					</p>
					<ul class="mt-6 space-y-2 text-sm text-slate-600">
						{#each interiorBullets as bullet}
							<li>{bullet}</li>
						{/each}
					</ul>
					<div class="mt-6 flex flex-col gap-2 sm:flex-row">
						<a href="#quote-form" class="rounded-full bg-black px-5 py-2 text-xs font-semibold text-white">
							Request a Free Quote
						</a>
						<a
							href="tel:7807225577"
							class="rounded-full border border-slate-300 px-5 py-2 text-xs font-semibold text-slate-900"
						>
							Call the Painter
						</a>
					</div>
				</article>
			</div>
		</div>
	</section>

	<section id="process" class="bg-slate-50 py-16">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<h2 class="text-3xl font-bold">Our Painting Process</h2>
			<p class="mt-3 max-w-2xl text-slate-600">
				A simple, predictable process so you know what to expect from estimate to walkthrough.
			</p>
			<div class="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				{#each processSteps as step}
					<div class="rounded-2xl border border-slate-200 bg-white p-5">
						<p class="text-sm font-semibold text-slate-900">{step.title}</p>
						<p class="mt-2 text-sm text-slate-600">{step.copy}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="projects" class="py-16">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
				<div>
					<h2 class="text-3xl font-bold">Recent Painting Projects</h2>
					<p class="mt-2 text-slate-600">Real results from Edmonton and surrounding communities.</p>
				</div>
				<a class="text-sm font-semibold text-slate-900" href="/projects">View More Projects</a>
			</div>
			<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each projectImages as image}
					<picture>
						<img src={image.src} alt={image.alt} class="h-52 w-full rounded-2xl object-cover" loading="lazy" />
					</picture>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-slate-50 py-16">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<h2 class="text-3xl font-bold">Reviews from Edmonton Homeowners</h2>
			<p class="mt-2 text-slate-600">Short feedback from homeowners who wanted clean prep and a great finish.</p>
			<div class="mt-8 grid gap-4 md:grid-cols-3">
				{#each testimonials as item}
					<article class="rounded-2xl border border-slate-200 bg-white p-6">
						<p class="text-sm text-slate-600">“{item.quote}”</p>
						<p class="mt-4 text-xs font-semibold text-slate-900">
							{item.name} · {item.city} · {item.service}
						</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section id="service-areas" class="py-16">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<h2 class="text-3xl font-bold">Service Areas</h2>
			<p class="mt-2 text-slate-600">Local painting service for Edmonton and surrounding communities.</p>
			<div class="mt-6 flex flex-wrap gap-3">
				{#each serviceAreas as area}
					<span class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700">
						{area}
					</span>
				{/each}
			</div>
			<div class="mt-8 flex flex-col gap-3 sm:flex-row">
				<a href="#quote-form" class="rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white">
					Request a Free Quote
				</a>
				<a
					href="tel:7807225577"
					class="rounded-full border border-slate-300 px-6 py-3 text-center text-sm font-semibold text-slate-900"
				>
					Call the Painter
				</a>
			</div>
		</div>
	</section>

	<section class="bg-slate-50 py-16">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<h2 class="text-3xl font-bold">FAQ</h2>
			<p class="mt-2 text-slate-600">Quick answers to common questions from Edmonton homeowners.</p>
			<div class="mt-8 grid gap-4 md:grid-cols-2">
				{#each faqItems as item}
					<div class="rounded-2xl border border-slate-200 bg-white p-6">
						<h3 class="text-sm font-semibold text-slate-900">{item.q}</h3>
						<p class="mt-2 text-sm text-slate-600">{item.a}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="quote-form" class="py-16">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<div class="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
				<div>
					<h2 class="text-3xl font-bold">Request a Free Quote</h2>
					<p class="mt-2 text-slate-600">Tell us your project and we will reply by phone or email.</p>
					<div class="mt-6 space-y-4 text-sm text-slate-600">
						<p>Free estimates • No obligation • Response within 24 hours</p>
						<p>Call us directly: <a class="font-semibold text-slate-900" href="tel:7807225577">780-722-5577</a></p>
					</div>
				</div>
				<form class="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm" aria-label="Request a quote">
					<div class="grid gap-4 sm:grid-cols-2">
						<label class="text-xs font-semibold text-slate-600">
							Name
							<input class="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" type="text" />
						</label>
						<label class="text-xs font-semibold text-slate-600">
							Phone Number
							<input class="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" type="tel" />
						</label>
						<label class="text-xs font-semibold text-slate-600">
							Email Address
							<input class="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" type="email" />
						</label>
						<label class="text-xs font-semibold text-slate-600">
							Project Type
							<select class="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm">
								<option>Interior</option>
								<option>Exterior</option>
								<option>Cabinets</option>
								<option>Deck/Fence</option>
								<option>Other</option>
							</select>
						</label>
					</div>
					<label class="mt-4 block text-xs font-semibold text-slate-600">
						Project Details
						<textarea class="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm" rows="4"></textarea>
					</label>
					<button type="submit" class="mt-6 w-full rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
						Request Quote
					</button>
				</form>
			</div>
		</div>
	</section>

	<section class="bg-slate-50 py-16">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<h2 class="text-3xl font-bold">Additional Painting Services</h2>
			<p class="mt-2 text-slate-600">Need more than walls? We also handle specialty add-ons.</p>
			<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each additionalServices as service}
					<div class="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
						{service}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
				<div>
					<h2 class="text-3xl font-bold">Let Us Help</h2>
					<p class="mt-2 text-slate-600">Quick tips from local Edmonton painters.</p>
					<div class="mt-6 space-y-4">
						{#each tips as tip}
							<article class="rounded-2xl border border-slate-200 bg-white p-5">
								<h3 class="text-sm font-semibold text-slate-900">{tip.title}</h3>
								<p class="mt-2 text-sm text-slate-600">{tip.copy}</p>
								<a class="mt-3 inline-flex text-sm font-semibold text-slate-900" href={tip.link}>
									Read more
								</a>
							</article>
						{/each}
					</div>
				</div>
				<div>
					<picture>
						<img src="/image-18.png" alt="Paint color samples" class="h-full w-full rounded-[28px] object-cover" loading="lazy" />
					</picture>
				</div>
			</div>
		</div>
	</section>

	<section class="bg-slate-50 py-16">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
				<div>
					<h2 class="text-3xl font-bold">Ask The Painter</h2>
					<p class="mt-2 text-slate-600">Answers to real painting questions from Edmonton homeowners.</p>
				</div>
				<a class="text-sm font-semibold text-slate-900" href="/ask-the-painter">View all guides</a>
			</div>
			<div class="mt-8 grid gap-4 md:grid-cols-3">
				{#each articles as article}
					<article class="rounded-2xl border border-slate-200 bg-white p-5">
						<h3 class="text-sm font-semibold text-slate-900">{article.title}</h3>
						<p class="mt-2 text-sm text-slate-600">{article.copy}</p>
						<a class="mt-3 inline-flex text-sm font-semibold text-slate-900" href={article.link}>
							Read guide
						</a>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section class="py-16">
		<div class="mx-auto max-w-7xl px-4 lg:px-8">
			<div class="rounded-[28px] border border-slate-200 bg-white p-8 text-center">
				<h2 class="text-2xl font-bold">Ready to refresh your home?</h2>
				<p class="mt-2 text-slate-600">Free estimates for Edmonton and nearby communities.</p>
				<div class="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
					<a href="#quote-form" class="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
						Request a Free Quote
					</a>
					<a
						href="tel:7807225577"
						class="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900"
					>
						Call the Painter
					</a>
				</div>
				<div class="mt-4 flex flex-wrap justify-center gap-3 text-xs text-slate-500">
					<span class="rounded-full border border-slate-200 px-3 py-1">Locally owned</span>
					<span class="rounded-full border border-slate-200 px-3 py-1">Free estimates</span>
					<span class="rounded-full border border-slate-200 px-3 py-1">Clean prep</span>
				</div>
			</div>
		</div>
	</section>
</main>

<footer class="border-t border-slate-200 bg-white py-12">
	<div class="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.1fr_1fr_1fr] lg:px-8">
		<div>
			<img src={logo} alt="NCS Painting" class="h-8 w-auto" />
			<p class="mt-4 text-sm text-slate-600">
				Local Edmonton painters focused on clean prep, crisp lines, and a smooth finish.
			</p>
		</div>
		<div>
			<h3 class="text-sm font-semibold text-slate-900">Contact</h3>
			<address class="mt-3 not-italic text-sm text-slate-600">
				NCS Painting<br />
				Edmonton, AB (Postal: T6A 2N9)<br />
				<a class="font-semibold text-slate-900" href="tel:7807225577">780-722-5577</a><br />
				<a class="text-slate-600" href="mailto:naill@ncspainting.com">naill@ncspainting.com</a>
			</address>
		</div>
		<div>
			<h3 class="text-sm font-semibold text-slate-900">Service Areas</h3>
			<ul class="mt-3 space-y-1 text-sm text-slate-600">
				<li>Edmonton</li>
				<li>St. Albert</li>
				<li>Fort Saskatchewan</li>
				<li>Sherwood Park</li>
			</ul>
		</div>
	</div>
</footer>
