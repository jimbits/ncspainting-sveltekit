<script>
	let {
		heading = 'Reliable House Painters in Edmonton',
		subheading = 'NCS Painting provides professional residential interior and exterior painting across Edmonton. Expect careful prep, clean workspaces, and a durable finish—backed by clear communication and written estimates.',
		serviceAreas = 'Serving Edmonton • Sherwood Park • St. Albert • Fort Saskatchewan',
		primaryCta = { text: 'Get a Free Quote', href: '#quote' },
		secondaryCta = { text: 'Call 780-722-5577', href: 'tel:17807225577' },
		heroImage = '/hero-image.jpg',
		heroImageAlt = 'Professional house painters in Edmonton working on interior painting',
		googleRating = '5.0',
		googleReviews = '50+'
	} = $props();

	const features = [
		{
			icon: 'experience',
			title: '35+ Years Experience',
			description:
				'With decades of expertise in residential painting, we deliver quality results that stand the test of time.'
		},
		{
			icon: 'warranty',
			title: 'Licensed & Insured',
			description: 'Fully licensed and insured for your peace of mind. Written estimates provided for every project.'
		}
	];
</script>

<section class="hero">
	<div class="hero-container">
		<!-- Image Column -->
		<div class="hero-image-column">
			<div class="image-wrapper">
				<img src="/image-37.png" alt={heroImageAlt} class="hero-image" />
				<!-- Google Review Badge -->
				<div class="google-badge">
					<div class="google-icon">
						<svg viewBox="0 0 24 24" width="32" height="32">
							<path
								fill="#4285F4"
								d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
							/>
							<path
								fill="#34A853"
								d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
							/>
							<path
								fill="#FBBC05"
								d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
							/>
							<path
								fill="#EA4335"
								d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
							/>
						</svg>
					</div>
					<div class="rating-content">
						<div class="rating-row">
							<svg class="star-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
							<span class="rating-number">{googleRating}</span>
						</div>
						<div class="rating-text">Rated Best Over {googleReviews} Reviews</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Content Column -->
		<div class="hero-content-column">
			<div class="content-wrapper">
				<!-- Label -->
				<div class="section-label">
					<span class="label-line"></span>
					<span class="label-text">EDMONTON'S TRUSTED PAINTERS</span>
				</div>

				<!-- Main Heading -->
				<h1 class="hero-heading">{heading}</h1>

				<!-- Supporting Paragraph -->
				<p class="hero-description">{subheading}</p>

				<!-- CTA Button -->
				<a href={primaryCta.href} class="btn-primary">
					<span>{primaryCta.text}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M7 17L17 7" />
						<path d="M7 7h10v10" />
					</svg>
				</a>

				<!-- Feature Cards -->
				<div class="feature-cards">
					{#each features as feature}
						<div class="feature-card">
							<div class="feature-icon">
								{#if feature.icon === 'experience'}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="28"
										height="28"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<circle cx="12" cy="8" r="6" />
										<path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
									</svg>
								{:else if feature.icon === 'warranty'}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="28"
										height="28"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
										/>
										<path d="m9 12 2 2 4-4" />
									</svg>
								{/if}
							</div>
							<div class="feature-content">
								<h3 class="feature-title">{feature.title}</h3>
								<p class="feature-description">{feature.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* ============================================
	   CSS Custom Properties
	   ============================================ */
	.hero {
		--color-primary: #1a4b8c;
		--color-primary-dark: #143d73;
		--color-primary-light: #2563a8;
		--color-text-dark: #1a1a2e;
		--color-text-body: #4a4a5a;
		--color-text-muted: #6b7280;
		--color-background: #ffffff;
		--color-surface: #f8fafc;
		--color-border: #e5e7eb;
		--color-star: #fbbf24;

		--font-display: 'Playfair Display', Georgia, 'Times New Roman', serif;
		--font-body: 'Inter', system-ui, -apple-system, sans-serif;

		--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
		--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);

		--radius-md: 0.5rem;
		--radius-lg: 0.75rem;
		--radius-xl: 1rem;
		--radius-2xl: 1.25rem;
	}

	/* ============================================
	   Base Hero Styles
	   ============================================ */
	.hero {
		background-color: var(--color-background);
		min-height: 100vh;
		min-height: 100dvh;
		display: flex;
		align-items: center;
		padding: 1.5rem;
		font-family: var(--font-body);
	}

	.hero-container {
		width: 100%;
		max-width: 1320px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		align-items: start;
	}

	/* ============================================
	   Image Column
	   ============================================ */
	.hero-image-column {
		order: 1;
	}

	.image-wrapper {
		position: relative;
		border-radius: var(--radius-xl);
		overflow: visible;
	}

	.hero-image {
		width: 100%;
		height: auto;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		display: block;
		border-radius: var(--radius-xl);
	}

	/* Google Badge */
	.google-badge {
		position: absolute;
		bottom: -1rem;
		right: -0.5rem;
		background: white;
		border-radius: var(--radius-lg);
		padding: 0.75rem 1rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
		box-shadow: var(--shadow-xl);
		z-index: 10;
	}

	.google-icon {
		flex-shrink: 0;
	}

	.rating-content {
		display: flex;
		flex-direction: column;
		gap: 0.125rem;
	}

	.rating-row {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.star-icon {
		color: var(--color-star);
	}

	.rating-number {
		font-size: 0.9375rem;
		font-weight: 700;
		color: var(--color-text-dark);
	}

	.rating-text {
		font-size: 0.6875rem;
		color: var(--color-text-muted);
		font-weight: 500;
	}

	/* ============================================
	   Content Column
	   ============================================ */
	.hero-content-column {
		order: 2;
	}

	.content-wrapper {
		max-width: 100%;
	}

	/* Section Label */
	.section-label {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.label-line {
		width: 2rem;
		height: 2px;
		background-color: var(--color-primary);
		border-radius: 1px;
	}

	.label-text {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		color: var(--color-primary);
		text-transform: uppercase;
	}

	/* Heading */
	.hero-heading {
		font-family: var(--font-display);
		font-size: clamp(2rem, 5vw + 0.5rem, 3.25rem);
		font-weight: 500;
		line-height: 1.15;
		color: var(--color-text-dark);
		margin: 0 0 1.25rem 0;
		letter-spacing: -0.01em;
	}

	/* Description */
	.hero-description {
		font-size: 0.9375rem;
		line-height: 1.7;
		color: var(--color-text-body);
		margin: 0 0 1.75rem 0;
		max-width: 520px;
	}

	/* ============================================
	   CTA Button
	   ============================================ */
	.btn-primary {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background-color: var(--color-primary);
		color: white;
		padding: 0.875rem 1.5rem;
		border-radius: var(--radius-md);
		font-size: 0.875rem;
		font-weight: 600;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		transition: all 0.2s ease;
		border: none;
		cursor: pointer;
		margin-bottom: 2.5rem;
	}

	.btn-primary:hover {
		background-color: var(--color-primary-dark);
		transform: translateY(-1px);
		box-shadow: var(--shadow-md);
	}

	.btn-primary:active {
		transform: translateY(0);
	}

	.btn-primary svg {
		transition: transform 0.2s ease;
	}

	.btn-primary:hover svg {
		transform: translate(2px, -2px);
	}

	/* ============================================
	   Feature Cards
	   ============================================ */
	.feature-cards {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.feature-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-xl);
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.feature-icon {
		width: 3rem;
		height: 3rem;
		background: white;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-primary);
	}

	.feature-content {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}

	.feature-title {
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text-dark);
		margin: 0;
		line-height: 1.3;
	}

	.feature-description {
		font-size: 0.8125rem;
		line-height: 1.6;
		color: var(--color-text-muted);
		margin: 0;
	}

	/* ============================================
	   Tablet Breakpoint (768px+)
	   ============================================ */
	@media (min-width: 768px) {
		.hero {
			padding: 2rem;
		}

		.hero-container {
			grid-template-columns: 1fr 1fr;
			gap: 3rem;
			align-items: center;
		}

		.hero-image-column {
			order: 1;
		}

		.hero-content-column {
			order: 2;
		}

		.hero-image {
			aspect-ratio: 3 / 4;
			max-height: 500px;
		}

		.google-badge {
			bottom: 1.5rem;
			right: -1rem;
			padding: 0.875rem 1.25rem;
		}

		.feature-cards {
			grid-template-columns: 1fr 1fr;
			gap: 1rem;
		}

		.feature-card {
			padding: 1.5rem;
		}
	}

	/* ============================================
	   Desktop Breakpoint (1024px+)
	   ============================================ */
	@media (min-width: 1024px) {
		.hero {
			padding: 2rem 3rem;
		}

		.hero-container {
			grid-template-columns: 1fr 1.1fr;
			gap: 4rem;
		}

		.section-label {
			margin-bottom: 1.25rem;
		}

		.label-line {
			width: 2.5rem;
		}

		.label-text {
			font-size: 0.8125rem;
		}

		.hero-heading {
			margin-bottom: 1.5rem;
		}

		.hero-description {
			font-size: 1rem;
			margin-bottom: 2rem;
		}

		.btn-primary {
			padding: 1rem 1.75rem;
			font-size: 0.875rem;
			margin-bottom: 3rem;
		}

		.hero-image {
			aspect-ratio: 4 / 5;
			max-height: 580px;
		}

		.google-badge {
			bottom: 2rem;
			right: -1.5rem;
			padding: 1rem 1.5rem;
			gap: 1rem;
		}

		.rating-number {
			font-size: 1rem;
		}

		.rating-text {
			font-size: 0.75rem;
		}

		.feature-cards {
			gap: 1.25rem;
		}

		.feature-card {
			padding: 1.75rem;
		}

		.feature-icon {
			width: 3.25rem;
			height: 3.25rem;
		}

		.feature-title {
			font-size: 1.0625rem;
		}

		.feature-description {
			font-size: 0.875rem;
		}
	}

	/* ============================================
	   Large Desktop (1280px+)
	   ============================================ */
	@media (min-width: 1280px) {
		.hero-container {
			gap: 5rem;
		}

		.hero-image {
			max-height: 640px;
		}

		.content-wrapper {
			max-width: 580px;
		}
	}
</style>
