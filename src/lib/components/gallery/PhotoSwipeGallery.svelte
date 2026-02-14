<!-- src/lib/components/PhotoSwipeGallery.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';

	type Slide = {
		src: string;
		thumb: string;
		w: number;
		h: number;
		alt?: string;
	};

	let { slides } = $props<{ slides: Slide[] }>();

	let galleryId = `pswp-${crypto.randomUUID()}`;

	// Store actual <img> DOM nodes by index
	let thumbEls: (HTMLImageElement | null)[] = [];

	onMount(() => {
		const lightbox = new PhotoSwipeLightbox({
			gallery: `#${galleryId}`,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});

		// Tell PhotoSwipe how to find the thumbnail element for the clicked item
		lightbox.addFilter('thumbEl', (thumbEl, data) => {
			// data.index is the slide index in the gallery
			return thumbEls[data.index] ?? thumbEl;
		});

		lightbox.init();
		return () => lightbox.destroy();
	});
</script>

<div id={galleryId} class="ps-grid" aria-label="Photo gallery">
	{#each slides as s, i (s.src)}
		<a href={s.src} data-pswp-width={s.w} data-pswp-height={s.h} target="_blank" rel="noreferrer">
			<img bind:this={thumbEls[i]} src={s.thumb} alt={s.alt ?? ''} loading="lazy" />
		</a>
	{/each}
</div>

<style>
	.ps-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.75rem;
	}
	@media (min-width: 768px) {
		.ps-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	@media (min-width: 1024px) {
		.ps-grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
	.ps-grid a {
		display: block;
		border-radius: 0.9rem;
		overflow: hidden;
	}
	.ps-grid img {
		width: 100%;
		height: 180px;
		object-fit: cover;
		display: block;
	}
</style>
