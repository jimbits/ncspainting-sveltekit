<script lang="ts">
	import { Button } from '$lib/ui/button';
	import { Plus, Minus } from 'lucide-svelte';
	import QuestionDetails from '$lib/components/details/QuestionDetails.svelte';

	const faqData = [
		{
			question: 'How much does it cost to paint a room in Edmonton?',
			answer:
				'Pricing depends on size, wall condition, paint type, and prep time. Request a free quote for an accurate estimate.'
		},
		{
			question: 'Do you offer free estimates in Edmonton?',
			answer: 'Yes—send a few details and we’ll schedule a quick estimate.'
		},
		{
			question: 'How long does interior painting take?',
			answer: 'Many rooms take 1–2 days depending on prep and drying time.'
		},
		{
			question: 'What’s included in your prep work?',
			answer: 'Protection, light patching/sanding as needed, and priming where required.'
		},
		{
			question: 'What time of year is best for exterior painting in Edmonton?',
			answer: 'Late spring through early fall is typical—weather conditions affect curing.'
		},
		{
			question: 'How long does exterior paint last?',
			answer: 'It varies by surface, sun exposure, and prep—good prep helps paint last longer.'
		},
		{
			question: 'Do I need to move furniture before painters arrive?',
			answer: 'Moving small items helps; we’ll confirm what to move during scheduling.'
		},
		{
			question: 'Can you paint cabinets / trim / doors?',
			answer: 'Yes—tell us what you’re updating and we’ll recommend the right approach during the estimate.'
		}
	];
	const faqs = shuffelFaqs(6);
	function shuffelFaqs(pickCount = 3) {
		const numToPick = pickCount;
		const shuffle = [...faqData];
		shuffle.sort(() => 0.5 - Math.random());
		const faqs = shuffle.slice(0, numToPick);
		return faqs;
	}

	let openItem: number | null = null;
</script>

<section class=" bg-[rgb(247_153_7)]">
	<div class="container mx-auto px-4">
		<div class="grid lg:grid-cols-2 lg:gap-16">
			<img src="/faq2.png" alt="" />
			<div class="flex flex-col justify-center pb-12 lg:pb-0">
				<h2 class="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">Frequently Asked Questions</h2>
				<p class="mt-4 max-w-xl text-lg text-stone-600">Quick answers to common questions from Edmonton homeowners.</p>

				<p class="text-base text-stone-600">
					Ready for a quote? Tell us your project and we’ll reply by phone or email.
				</p>

				<div class="w-xl">
					{#each faqs as faq, i}
						<QuestionDetails class="bg-orange-100" question={faq.question} answer={faq.answer} />
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class="border-b-8 border-white"></div>

	<footer>
		<div class="mt-6 flex flex-col items-start gap-4 sm:flex-row">
			<Button href="#quote-form" size="lg">Request a Free Quote</Button>
			<Button href="tel:7807225577" size="lg" variant="outline">Call the Painter</Button>
			<Button href="mailto:info@ncspainting.com" size="lg" variant="ghost">Email</Button>
		</div>
	</footer>
</section>

<!-- Remove This Code -->
<!-- <div class="container mx-auto grid grid-cols-3 py-10">
		{#each faqs as faq, index}
			<div class="rounded-lg border border-stone-200 bg-white shadow-sm">
				<button
					on:click={() => toggleItem(index)}
					class="flex w-full items-center justify-between p-6 text-left"
					aria-expanded={openItem === index}
				>
					<span class="text-base font-medium text-stone-900">{faq.question}</span>
					{#if openItem === index}
						<Minus class="h-6 w-6 flex-shrink-0 text-stone-500" />
					{:else}
						<Plus class="h-6 w-6 flex-shrink-0 text-stone-400" />
					{/if}
				</button>
				{#if openItem === index}
					<div transition:slide={{ duration: 200 }} class="px-6 pb-6">
						<p class="text-base text-stone-600">
							{faq.answer}
						</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>

	<div class="container mx-auto grid grid-cols-3 py-10">
		{#each faqs as faq, index}
			<div class="rounded-lg border border-stone-200 bg-white shadow-sm">
				<span class="text-base font-medium text-stone-900">{faq.question}</span>
				{#if openItem === index}
					<div transition:slide={{ duration: 200 }} class="px-6 pb-6">
						<p class="text-base text-stone-600">
							{faq.answer}
						</p>
					</div>
				{/if}
			</div>
		{/each}
	</div> -->
