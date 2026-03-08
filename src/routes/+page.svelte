<script lang="ts">
	import InteriorPaintingServices from '$lib/components/pages/landing/InteriorPaintingServices.svelte';
	import WhyChooseUs from '$lib/components/pages/landing/WhyChooseUs.svelte';

	import Process from '$lib/components/pages/landing/Process.svelte';
	import Hero from '../lib/components/pages/landing/Hero.svelte';

	import EcoFriendly from '$lib/components/pages/landing/EcoFriendly.svelte';
	import LetUsHelp from '$lib/components/pages/landing/LetUsHelp.svelte';

	import ExteriorPaintingServices from '$lib/components/pages/landing/ExteriorPaintingServices.svelte';

	import AdditionalPaintingServices from '$lib/components/pages/landing/AdditionalPaintingServices.svelte';
	import Faq from '$lib/components/pages/landing/Faq.svelte';

	import QuoteRequestForm from '$lib/components/forms/quote/QuoteRequestForm.svelte';
	import Footer from '$lib/components/pages/landing/Footer.svelte';
	import ServiceAreas from '$lib/components/pages/landing/ServiceAreas.svelte';
</script>

<Hero />
<WhyChooseUs />
<InteriorPaintingServices />
<ExteriorPaintingServices />
<AdditionalPaintingServices />
<QuoteRequestForm />
<ServiceAreas />
<Process />
<EcoFriendly />
<Faq />
<LetUsHelp />
<Footer />
