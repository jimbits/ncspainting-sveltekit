<script lang="ts">
	import reviews from '$lib/data/reviews.json';
	import { Star } from 'lucide-svelte';

	// Helper to format dates
	function formatDate(dateString: string) {
		if (!dateString) return '';
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Customer Reviews | NCS Painting Edmonton</title>
	<meta
		name="description"
		content="Read reviews from satisfied customers of NCS Painting in Edmonton. See why homeowners trust us for their interior and exterior painting projects."
	/>
</svelte:head>

<div class="bg-white py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h1 class="text-base font-semibold leading-7 text-sky-600">Testimonials</h1>
			<p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
				What Our Clients Say
			</p>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				We take pride in our work and value the feedback from our clients. Read what homeowners and
				businesses in the Edmonton area are saying about NCS Painting.
			</p>
		</div>

		<div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
			{#each reviews as review}
				<div class="flex flex-col rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
					<div class="flex-1">
						<div class="flex items-center gap-x-2">
							{#each { length: 5 } as _, i}
								<Star
									class="h-5 w-5 {i < review.rating / 2 ? 'text-yellow-400' : 'text-gray-300'}"
									fill={i < review.rating / 2 ? 'currentColor' : 'none'}
								/>
							{/each}
						</div>

						<blockquote class="mt-6 text-gray-700">
							<p>{@html review.body.replace(/\r\n/g, '<br>')}</p>
						</blockquote>

						{#if review.response}
							<div class="mt-6 rounded-lg bg-gray-100 p-4">
								<p class="text-sm font-semibold text-gray-800">Our Response:</p>
								<p class="mt-2 text-sm text-gray-600">{review.response}</p>
							</div>
						{/if}
					</div>

					<footer class="mt-8">
						<div class="font-semibold text-gray-900">{review.name || 'Homeowner'}</div>
						<div class="text-gray-600">
							{#if review.location}{review.location},{/if}
							<time datetime={review.date}>{formatDate(review.date)}</time>
						</div>
					</footer>
				</div>
			{/each}
		</div>
	</div>
</div>
