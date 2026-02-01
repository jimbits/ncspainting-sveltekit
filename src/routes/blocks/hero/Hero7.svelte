<script>
	// Props for customization
	let {
		heading = 'Reliable house painters in Edmonton',
		subheading = 'NCS Painting provides professional residential interior and exterior painting across Edmonton. Expect careful prep, clean workspaces, and a durable finish—backed by clear communication and written estimates.',
		serviceAreas = 'Serving Edmonton • Sherwood Park • St. Albert • Fort Saskatchewan',
		primaryCta = { text: 'Get a Free Quote', href: '#quote' },
		secondaryCta = { text: 'Call 780-722-5577', href: 'tel:17807225577' },
		heroImage = '/image-34.png',
		heroImageAlt = 'Professional house painters in Edmonton working on interior painting'
	} = $props();

	const trustSignals = [
		{ icon: 'shield', label: 'Licensed & Insured' },
		{ icon: 'clipboard', label: 'Written Estimates' },
		{ icon: 'award', label: '35+ Years Experience' },
		{ icon: 'check', label: 'Workmanship Warranty' }
	];
</script>

<section class="hero">
	<div class="hero-container">
		<!-- Content Column -->
		<div class="hero-content">
			<div class="content-wrapper">
				<!-- Service Area Badge -->
				<div class="service-badge">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
						<circle cx="12" cy="10" r="3" />
					</svg>
					<span>{serviceAreas}</span>
				</div>

				<!-- Main Heading -->
				<h1 class="hero-heading">{heading}</h1>

				<!-- Supporting Paragraph -->
				<p class="hero-description">{subheading}</p>

				<!-- CTA Buttons -->
				<div class="cta-group">
					<a href={primaryCta.href} class="btn-primary">
						{primaryCta.text}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M5 12h14" />
							<path d="m12 5 7 7-7 7" />
						</svg>
					</a>
					<a href={secondaryCta.href} class="btn-secondary">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path
								d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
							/>
						</svg>
						{secondaryCta.text}
					</a>
				</div>

				<!-- Trust Signals -->
				<div class="trust-signals">
					{#each trustSignals as signal}
						<div class="trust-item">
							{#if signal.icon === 'shield'}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path
										d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
									/>
									<path d="m9 12 2 2 4-4" />
								</svg>
							{:else if signal.icon === 'clipboard'}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
									<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
									<path d="M12 11h4" />
									<path d="M12 16h4" />
									<path d="M8 11h.01" />
									<path d="M8 16h.01" />
								</svg>
							{:else if signal.icon === 'award'}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<circle cx="12" cy="8" r="6" />
									<path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
								</svg>
							{:else if signal.icon === 'check'}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="22"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path
										d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
									/>
									<path d="m9 12 2 2 4-4" />
								</svg>
							{/if}
							<span>{signal.label}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Image Column -->
		<div class="hero-image-wrapper">
			<div class="image-container">
				<img src="/image-24.png" alt={heroImageAlt} class="hero-image" />
				<!-- Decorative accent -->
				<div class="image-accent"></div>
			</div>
		</div>
	</div>
</section>

<style>
	/* ============================================
	   CSS Custom Properties (Tailwind v4 style)
	   ============================================ */
	.hero {
		--color-slate-900: #0f172a;
		--color-slate-800: #1e293b;
		--color-slate-700: #334155;
		--color-slate-600: #475569;
		--color-slate-500: #64748b;
		--color-slate-100: #f1f5f9;

		--color-primary: #1e3a5f;
		--color-primary-dark: #152a45;
		--color-accent: #d4a84b;
		--color-accent-light: #e8c77b;
		--color-background: #faf8f5;
		--color-background-warm: #f5f0e8;
		--color-text: #2d2d2d;
		--color-text-muted: #5a5a5a;

		--font-display: 'DM Serif Display', Georgia, 'Times New Roman', serif;
		--font-body: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;

		--shadow-soft: 0 4px 24px rgba(30, 58, 95, 0.08);
		--shadow-medium: 0 8px 32px rgba(30, 58, 95, 0.12);
		--shadow-strong: 0 16px 48px rgba(30, 58, 95, 0.16);

		--radius-sm: 0.375rem;
		--radius-md: 0.5rem;
		--radius-lg: 0.75rem;
		--radius-xl: 1rem;
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
		max-width: 1400px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.5rem;
		align-items: center;
	}

	/* ============================================
	   Content Column
	   ============================================ */
	.hero-content {
		order: 2;
	}

	.content-wrapper {
		max-width: 600px;
		margin: 0 auto;
	}

	/* Service Badge */
	.service-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 100px;
		font-size: 0.8125rem;
		font-weight: 500;
		letter-spacing: 0.01em;
		margin-bottom: 1.5rem;
		box-shadow: var(--shadow-soft);
	}

	.service-badge svg {
		flex-shrink: 0;
		opacity: 0.9;
	}

	/* Heading */
	.hero-heading {
		font-family: var(--font-display);
		font-size: clamp(2.25rem, 5vw + 1rem, 3.5rem);
		font-weight: 400;
		line-height: 1.1;
		color: var(--color-slate-900);
		margin: 0 0 1.25rem 0;
		letter-spacing: -0.02em;
	}

	/* Description */
	.hero-description {
		font-size: 1.0625rem;
		line-height: 1.7;
		color: var(--color-text-muted);
		margin: 0 0 2rem 0;
		max-width: 540px;
	}

	/* ============================================
	   CTA Buttons
	   ============================================ */
	.cta-group {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 2.5rem;
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.625rem;
		background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%);
		color: var(--color-slate-900);
		padding: 1rem 1.75rem;
		border-radius: var(--radius-lg);
		font-size: 1rem;
		font-weight: 600;
		text-decoration: none;
		box-shadow:
			var(--shadow-medium),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
		transition: all 0.2s ease;
		border: none;
		cursor: pointer;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow:
			var(--shadow-strong),
			inset 0 1px 0 rgba(255, 255, 255, 0.2);
	}

	.btn-primary:active {
		transform: translateY(0);
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.625rem;
		background: white;
		color: var(--color-primary);
		padding: 1rem 1.75rem;
		border-radius: var(--radius-lg);
		font-size: 1rem;
		font-weight: 600;
		text-decoration: none;
		box-shadow: var(--shadow-soft);
		border: 2px solid var(--color-slate-100);
		transition: all 0.2s ease;
		cursor: pointer;
	}

	.btn-secondary:hover {
		border-color: var(--color-primary);
		background: var(--color-slate-100);
	}

	/* ============================================
	   Trust Signals
	   ============================================ */
	.trust-signals {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.trust-item {
		display: flex;
		align-items: center;
		gap: 0.625rem;
		padding: 0.75rem;
		background: white;
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-soft);
		border: 1px solid rgba(30, 58, 95, 0.06);
	}

	.trust-item svg {
		flex-shrink: 0;
		color: var(--color-primary);
	}

	.trust-item span {
		font-size: 0.8125rem;
		font-weight: 500;
		color: var(--color-text);
		line-height: 1.3;
	}

	/* ============================================
	   Image Column
	   ============================================ */
	.hero-image-wrapper {
		order: 1;
	}

	.image-container {
		position: relative;
		border-radius: var(--radius-xl);
		overflow: hidden;
		box-shadow: var(--shadow-strong);
	}

	.hero-image {
		width: 100%;
		height: auto;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		display: block;
	}

	.image-accent {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-light) 100%);
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
		}

		.hero-content {
			order: 1;
		}

		.hero-image-wrapper {
			order: 2;
		}

		.content-wrapper {
			margin: 0;
		}

		.cta-group {
			flex-direction: row;
			flex-wrap: wrap;
		}

		.btn-primary,
		.btn-secondary {
			width: auto;
		}

		.hero-image {
			aspect-ratio: 3 / 4;
			max-height: 520px;
		}

		.trust-signals {
			grid-template-columns: 1fr 1fr;
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
			grid-template-columns: 1fr 1fr;
			gap: 4rem;
		}

		.service-badge {
			margin-bottom: 2rem;
		}

		.hero-heading {
			margin-bottom: 1.5rem;
		}

		.hero-description {
			font-size: 1.125rem;
			margin-bottom: 2.5rem;
		}

		.cta-group {
			gap: 1.25rem;
			margin-bottom: 3rem;
		}

		.btn-primary,
		.btn-secondary {
			padding: 1.125rem 2rem;
		}

		.trust-signals {
			gap: 1rem;
		}

		.trust-item {
			padding: 0.875rem 1rem;
		}

		.trust-item span {
			font-size: 0.875rem;
		}

		.hero-image {
			aspect-ratio: 4 / 5;
			max-height: 600px;
		}

		.image-container {
			border-radius: var(--radius-xl);
		}
	}

	/* ============================================
	   Large Desktop (1280px+)
	   ============================================ */
	@media (min-width: 1280px) {
		.hero-container {
			gap: 5rem;
		}

		.content-wrapper {
			max-width: 560px;
		}

		.hero-image {
			max-height: 680px;
		}
	}
</style>
