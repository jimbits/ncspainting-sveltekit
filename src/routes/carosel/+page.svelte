<script lang="ts">
	import PhotoSwipeGallery from '$lib/components/gallery/PhotoSwipeGallery.svelte';

	const slides = [
		{ src: '/image-21.png', thumb: '/image-21.png', w: 240, h: 160, alt: 'my my my' },
		{ src: '/image-22.png', thumb: '/image-22.png', w: 240, h: 160, alt: 'my my my' },
		{ src: '/image-23.png', thumb: '/image-23.png', w: 240, h: 160, alt: 'my my my' },
		{ src: '/image-25.png', thumb: '/image-25.png', w: 240, h: 160, alt: 'my my my' }
	];
</script>

<PhotoSwipeGallery {slides} />

<style>
</style>
