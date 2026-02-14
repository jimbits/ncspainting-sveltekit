<script lang="ts">
	import useEmblaCarousel from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

	const slides = [
		{ src: '/image-20.png', alt: 'Photo 1' },
		{ src: '/image-21.png', alt: 'Photo 2' },
		{ src: '/image-22.png', alt: 'Photo 3' },
		{ src: '/image-25.png', alt: 'Photo 4' },
		{ src: '/image-24.png', alt: 'Photo 5' }
	];

	// MAIN carousel options (responsive slides-per-view is done with CSS)
	let mainOptions: EmblaOptionsType = {
		align: 'start',
		loop: true
	};

	// THUMB carousel options
	let thumbOptions: EmblaOptionsType = {
		containScroll: 'trimSnaps',
		dragFree: true
	};

	let mainApi: EmblaCarouselType | undefined;
	let thumbApi: EmblaCarouselType | undefined;

	let selected = $state(0);

	// Autoplay plugin instance
	const autoplay = Autoplay(
		{ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true },
		(root) => root.parentElement // ensures hover works on the carousel wrapper
	);

	function syncSelectedFromMain() {
		if (!mainApi) return;
		selected = mainApi.selectedScrollSnap();
		thumbApi?.scrollTo(selected);
	}

	function onMainInit(e: CustomEvent<EmblaCarouselType>) {
		mainApi = e.detail;

		syncSelectedFromMain();
		mainApi.on('select', syncSelectedFromMain);
		mainApi.on('reInit', syncSelectedFromMain);
	}

	function onThumbInit(e: CustomEvent<EmblaCarouselType>) {
		thumbApi = e.detail;
	}

	function goTo(i: number) {
		mainApi?.scrollTo(i);
	}

	function prev() {
		mainApi?.scrollPrev();
	}

	function next() {
		mainApi?.scrollNext();
	}
</script>

<div class="embla">
	<!-- MAIN carousel -->
	<div
		class="embla__viewport"
		use:useEmblaCarousel={{ options: mainOptions, plugins: [autoplay] }}
		onemblaInit={onMainInit}
	>
		<div class="embla__container">
			{#each slides as s (s.src)}
				<div class="embla__slide">
					<img class="embla__img" src={s.src} alt={s.alt} loading="lazy" />
				</div>
			{/each}
		</div>
	</div>

	<!-- Buttons -->
	<div class="controls">
		<button class="btn" onpointerup={prev} aria-label="Previous">Prev</button>
		<button class="btn" onpointerup={next} aria-label="Next">Next</button>
	</div>

	<!-- THUMBNAILS (synced) -->
	<div class="thumbs__viewport" use:useEmblaCarousel={{ options: thumbOptions }} onemblaInit={onThumbInit}>
		<div class="thumbs__container">
			{#each slides as s, i (s.src)}
				<button
					type="button"
					class="thumb"
					data-active={i === selected}
					onpointerup={() => goTo(i)}
					aria-label={`Go to photo ${i + 1}`}
					aria-current={i === selected ? 'true' : 'false'}
				>
					<img class="thumb__img" src={s.src} alt="" loading="lazy" />
				</button>
			{/each}
		</div>
	</div>
</div>

<style>
	/* ===== MAIN (required Embla structure) ===== */
	.embla {
		max-width: 70rem;
		margin: 0 auto;
	}
	.embla__viewport {
		overflow: hidden;
		border-radius: 1rem;
	}
	.embla__container {
		display: flex;
		touch-action: pan-y;
	}

	/* ===== Responsive slides-per-view =====
	   1 per view on small
	   2 per view on medium
	   3 per view on large
	*/
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
		padding: 0.5rem;
	}
	@media (min-width: 768px) {
		.embla__slide {
			flex-basis: 50%;
		}
	}
	@media (min-width: 1024px) {
		.embla__slide {
			flex-basis: 33.3333%;
		}
	}

	.embla__img {
		display: block;
		width: 360px;
		height: 180px;
		object-fit: cover;
		border-radius: 0.9rem;
	}

	/* ===== Buttons ===== */
	.controls {
		display: flex;
		gap: 0.75rem;
		justify-content: center;
		padding: 0.75rem 0.25rem;
	}
	.btn {
		border: 1px solid rgba(0, 0, 0, 0.15);
		background: white;
		padding: 0.5rem 0.75rem;
		border-radius: 0.9rem;
	}

	/* ===== THUMBS ===== */
	.thumbs__viewport {
		overflow: hidden;
	}
	.thumbs__container {
		display: flex;
		gap: 0.5rem;
		padding: 0.25rem;
	}
	.thumb {
		flex: 0 0 auto;
		border: 1px solid rgba(0, 0, 0, 0.15);
		background: transparent;
		border-radius: 0.75rem;
		padding: 0.15rem;
		opacity: 0.7;
		transform: scale(0.98);
		transition:
			opacity 120ms ease,
			transform 120ms ease,
			border-color 120ms ease;
	}
	.thumb[data-active='true'] {
		opacity: 1;
		transform: scale(1);
		border-color: rgba(0, 0, 0, 0.55);
	}
	.thumb__img {
		display: block;
		width: 72px;
		height: 54px;
		object-fit: cover;
		border-radius: 0.6rem;
	}
</style>
