<script lang="ts">
	import {
		Award,
		Eye,
		Handshake,
		Heart,
		Star,
		Users,
		Home,
		Droplets,
		Building,
		Leaf,
		Trophy,
		CheckSquare
	} from 'lucide-svelte';
</script>

<svelte:head>
	<title>About NCS Painting | Your Trusted Edmonton Painting Company</title>
	<meta
		name="description"
		content="Learn about NCS Painting, a locally owned and operated painting company in Edmonton with over 30 years of experience. We are committed to quality, integrity, and customer satisfaction."
	/>
</svelte:head>

<div class="bg-white text-gray-800">
	<!-- 1. Hero Section -->
	<div class="relative h-96 bg-gray-800">
		<img
			src="/hero-2.jpg"
			alt="NCS Painting team working on a project"
			class="absolute h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-slate-900/50"></div>
		<div class="relative flex h-full flex-col items-center justify-center px-4 text-center">
			<h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
				About NCS Painting
			</h1>
			<p class="mt-6 max-w-3xl text-xl text-slate-200">
				Your trusted local painting company in Edmonton, committed to quality and customer satisfaction
				for over 30 years.
			</p>
		</div>
	</div>

	<!-- 2. Introduction Section -->
	<section class="py-16 sm:py-24">
		<div class="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 lg:gap-20">
			<div class="prose prose-lg max-w-none text-gray-600">
				<h2 class="text-3xl font-extrabold text-gray-900">
					A Tradition of Excellence in Edmonton
				</h2>
				<p>
					For over 30 years, NCS Painting has been the go-to painting company for homeowners across
					Edmonton who value quality, integrity, and a professional finish. As a locally owned and
					operated business, we are deeply committed to our community and to delivering a seamless
					painting experience from the initial quote to the final walkthrough.
				</p>
				<p>
					We aren't just another team of house painters; we are a dedicated crew of professionals who
					believe that a superior paint job starts long before the first coat is applied. Our
					reputation is built on decades of consistent, high-quality work and a focus on customer
					satisfaction.
				</p>
			</div>
			<div>
				<img
					src="/ncs-painting-1.jpg"
					alt="NCS Painting van and equipment"
					class="rounded-lg shadow-lg"
				/>
			</div>
		</div>
	</section>

	<!-- 3. Core Values Section -->
	<section class="bg-sky-50 py-16 sm:py-24">
		<div class="container mx-auto px-4">
			<div class="mx-auto max-w-3xl text-center">
				<h2 class="text-3xl font-extrabold text-gray-900">Our Core Values</h2>
				<p class="mt-4 text-lg text-gray-600">
					The principles that guide every brushstroke and client interaction.
				</p>
			</div>

			<div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				<div class="text-center">
					<div
						class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white"
					>
						<Star size={24} />
					</div>
					<h3 class="mt-6 text-lg font-semibold text-gray-900">Quality & Craftsmanship</h3>
					<p class="mt-2 text-base text-gray-600">
						From meticulous prep to the final coat, we ensure every detail is perfect for a finish
						that lasts.
					</p>
				</div>
				<div class="text-center">
					<div
						class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white"
					>
						<Users size={24} />
					</div>
					<h3 class="mt-6 text-lg font-semibold text-gray-900">Professionalism & Respect</h3>
					<p class="mt-2 text-base text-gray-600">
						We treat your home with care, maintaining clean work areas and ensuring a respectful,
						professional presence.
					</p>
				</div>
				<div class="text-center">
					<div
						class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white"
					>
						<Eye size={24} />
					</div>
					<h3 class="mt-6 text-lg font-semibold text-gray-900">Clear Communication</h3>
					<p class="mt-2 text-base text-gray-600">
						We provide clear scopes, transparent timelines, and keep you informed every step of the
						way.
					</p>
				</div>
				<div class="text-center">
					<div
						class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white"
					>
						<Handshake size={24} />
					</div>
					<h3 class="mt-6 text-lg font-semibold text-gray-900">Integrity & Honesty</h3>
					<p class="mt-2 text-base text-gray-600">
						Our written estimates are detailed and transparent. We do what we say we will do, with no
						surprises.
					</p>
				</div>
				<div class="text-center">
					<div
						class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white"
					>
						<Award size={24} />
					</div>
					<h3 class="mt-6 text-lg font-semibold text-gray-900">Reliability</h3>
					<p class="mt-2 text-base text-gray-600">
						We respect your time. Our team is punctual, efficient, and dedicated to completing your
						project on schedule.
					</p>
				</div>
				<div class="text-center">
					<div
						class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white"
					>
						<Heart size={24} />
					</div>
					<h3 class="mt-6 text-lg font-semibold text-gray-900">Local Expertise</h3>
					<p class="mt-2 text-base text-gray-600">
						As an Edmonton-based company, we understand the climate and use the best materials to
						protect your home.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Commitment to Excellence Section -->
	<section class="bg-white py-16 sm:py-24">
		<div class="container mx-auto px-4">
			<div class="mx-auto max-w-3xl text-center">
				<h2 class="text-3xl font-extrabold text-gray-900">Our Commitment to Excellence</h2>
				<p class="mt-4 text-lg text-gray-600">
					We blend expert craftsmanship with top-tier materials and a customer-first approach to deliver exceptional results on every project.
				</p>
			</div>
			<div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				<!-- Exterior Experts -->
				<div class="rounded-lg bg-gray-50 p-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0"><Home class="h-6 w-6 text-sky-600" /></div>
						<div>
							<h3 class="text-lg font-semibold">Exterior Residential Painting Experts</h3>
							<p class="mt-1 text-gray-600">We specialize in transforming vinyl, stucco, wood, and metal siding with a fresh, durable coat.</p>
						</div>
					</div>
				</div>
				<!-- Top-Quality Materials -->
				<div class="rounded-lg bg-gray-50 p-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0"><Droplets class="h-6 w-6 text-sky-600" /></div>
						<div>
							<h3 class="text-lg font-semibold">Top-Quality Materials</h3>
							<p class="mt-1 text-gray-600">We use only premium-grade paints and coatings to ensure durability, vibrancy, and long-lasting results.</p>
						</div>
					</div>
				</div>
				<!-- Experienced Professionals -->
				<div class="rounded-lg bg-gray-50 p-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0"><Award class="h-6 w-6 text-sky-600" /></div>
						<div>
							<h3 class="text-lg font-semibold">Experienced Professionals</h3>
							<p class="mt-1 text-gray-600">With years of expertise, our skilled team delivers flawless finishes tailored to your needs.</p>
						</div>
					</div>
				</div>
				<!-- Custom Solutions -->
				<div class="rounded-lg bg-gray-50 p-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0"><Building class="h-6 w-6 text-sky-600" /></div>
						<div>
							<h3 class="text-lg font-semibold">Custom Solutions For Every Industry</h3>
							<p class="mt-1 text-gray-600">From industrial coatings to retail interiors, we customize our services to fit your requirements.</p>
						</div>
					</div>
				</div>
				<!-- Eco-Friendly Practices -->
				<div class="rounded-lg bg-gray-50 p-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0"><Leaf class="h-6 w-6 text-sky-600" /></div>
						<div>
							<h3 class="text-lg font-semibold">Eco-Friendly Practices</h3>
							<p class="mt-1 text-gray-600">Our environmentally friendly paints and processes minimize environmental impact without sacrificing quality.</p>
						</div>
					</div>
				</div>
				<!-- Proven Track Record -->
				<div class="rounded-lg bg-gray-50 p-6">
					<div class="flex items-start gap-4">
						<div class="flex-shrink-0"><Trophy class="h-6 w-6 text-sky-600" /></div>
						<div>
							<h3 class="text-lg font-semibold">Proven Track Record</h3>
							<p class="mt-1 text-gray-600">Trusted by businesses and homeowners in Edmonton, our portfolio speaks for itself.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- 4. Team Section (Placeholder) -->
	<section class="py-16 sm:py-24 bg-gray-50">
		<div class="container mx-auto px-4">
			<div class="mx-auto max-w-3xl text-center">
				<h2 class="text-3xl font-extrabold text-gray-900">Meet the Team</h2>
				<p class="mt-4 text-lg text-gray-600">
					The dedicated professionals behind our quality work.
				</p>
			</div>
			<div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				<div class="text-center">
					<div
						class="mx-auto h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center"
					>
						<img src="/image-13.png" alt="Team member placeholder" class="h-40 w-40 rounded-full object-cover"/>
					</div>
					<h3 class="mt-4 text-lg font-semibold text-gray-900">John Doe</h3>
					<p class="text-sky-600">Founder</p>
				</div>
				<div class="text-center">
					<div
						class="mx-auto h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center"
					>
						<img src="/image-14.png" alt="Team member placeholder" class="h-40 w-40 rounded-full object-cover"/>
					</div>
					<h3 class="mt-4 text-lg font-semibold text-gray-900">Jane Smith</h3>
					<p class="text-sky-600">Lead Painter</p>
				</div>
				<div class="text-center">
					<div
						class="mx-auto h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center"
					>
						<img src="/image-15.png" alt="Team member placeholder" class="h-40 w-40 rounded-full object-cover"/>
					</div>
					<h3 class="mt-4 text-lg font-semibold text-gray-900">Peter Jones</h3>
					<p class="text-sky-600">Exterior Specialist</p>
				</div>
			</div>
		</div>
	</section>

	<!-- 5. Final CTA Section -->
	<section class="bg-white">
		<div
			class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
		>
			<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
				<span class="block">Ready to start your project?</span>
				<span class="block text-sky-600">Get a free, no-obligation quote today.</span>
			</h2>
			<div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
				<div class="inline-flex rounded-md shadow">
					<a
						href="/contact"
						class="inline-flex items-center justify-center rounded-md border border-transparent bg-sky-600 px-5 py-3 text-base font-medium text-white hover:bg-sky-700"
					>
						Request a Quote
					</a>
				</div>
				<div class="ml-3 inline-flex rounded-md shadow">
					<a
						href="tel:780-722-5577"
						class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-sky-600 hover:bg-sky-50"
					>
						Call Us
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
