<script lang="ts">
	import useEmblaCarousel from 'embla-carousel-svelte';
	import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';

	const slides = [
		{ src: '/image-12.png', alt: 'Slide 1' },
		{ src: '/image-13.png', alt: 'Slide 2' },
		{ src: '/image-16.png', alt: 'Slide 3' },
		{ src: '/image-17.png', alt: 'Slide 4' }
	];

	let options: EmblaOptionsType = { loop: false, align: 'start' };

	// Embla instance + UI state
	let emblaApi: EmblaCarouselType | undefined;

	let selectedIndex = $state(0);
	let canPrev = $state(false);
	let canNext = $state(false);
	let snaps = $state<number[]>([]);

	function syncUi() {
		if (!emblaApi) return;
		selectedIndex = emblaApi.selectedScrollSnap();
		canPrev = emblaApi.canScrollPrev();
		canNext = emblaApi.canScrollNext();
	}

	function onInit(event: CustomEvent<EmblaCarouselType>) {
		emblaApi = event.detail;

		// Build dots from snap points
		snaps = emblaApi.scrollSnapList().map((_, i) => i);

		// Keep UI in sync as Embla changes
		syncUi();
		emblaApi.on('select', syncUi);
		emblaApi.on('reInit', () => {
			snaps = emblaApi!.scrollSnapList().map((_, i) => i);
			syncUi();
		});
	}

	function prev() {
		emblaApi?.scrollPrev();
	}
	function next() {
		emblaApi?.scrollNext();
	}
	function goTo(i: number) {
		emblaApi?.scrollTo(i);
	}
</script>

<div class="embla">
	<div class="embla__viewport" use:useEmblaCarousel={{ options }} onemblaInit={onInit}>
		<div class="embla__container">
			{#each slides as s (s.src)}
				<div class="embla__slide">
					<img class="embla__img" src={s.src} alt={s.alt} loading="lazy" />
				</div>
			{/each}
		</div>
	</div>

	<!-- Controls -->
	<div class="embla__controls">
		<button class="embla__btn" onpointerup={prev} disabled={!canPrev} aria-label="Previous slide">Prev</button>

		<div class="embla__dots" role="tablist" aria-label="Choose slide">
			{#each snaps as i}
				<button
					class="embla__dot"
					data-active={i === selectedIndex}
					onpointerup={() => goTo(i)}
					aria-label={`Go to slide ${i + 1}`}
					aria-current={i === selectedIndex ? 'true' : 'false'}
				/>
			{/each}
		</div>

		<button class="embla__btn" onpointerup={next} disabled={!canNext} aria-label="Next slide">Next</button>
	</div>
</div>

<style>
	/* Required structure: viewport -> container (flex) -> slides */
	.embla {
		max-width: 56rem;
		margin: 0 auto;
	}
	.embla__viewport {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
		touch-action: pan-y;
	}
	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
		padding: 0.5rem;
	}
	.embla__img {
		display: block;
		width: 880px;
		height: 550px;
		object-fit: cover;
		border-radius: 0.75rem;
	}

	/* Controls */
	.embla__controls {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		padding: 0.5rem;
	}
	.embla__btn {
		padding: 0.5rem 0.75rem;
		border-radius: 0.75rem;
		border: 1px solid rgba(0, 0, 0, 0.15);
		background: white;
	}
	.embla__btn:disabled {
		opacity: 0.45;
	}

	.embla__dots {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		justify-content: center;
		flex: 1;
	}
	.embla__dot {
		width: 0.65rem;
		height: 0.65rem;
		border-radius: 999px;
		border: 1px solid rgba(0, 0, 0, 0.25);
		background: transparent;
		transition:
			transform 120ms ease,
			background 120ms ease;
	}
	.embla__dot[data-active='true'] {
		transform: scale(1.25);
		background: rgba(0, 0, 0, 0.7);
	}
</style>
