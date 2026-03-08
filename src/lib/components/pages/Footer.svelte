<!-- Footer.svelte -->
<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
    class?: string;
  }

  let { children, class: className = '' }: Props = $props();

  const navigation = {
    solutions: [
      { name: 'Marketing', href: '/' },
      { name: 'Analytics', href: '/' },
      { name: 'Automation', href: '/' },
      { name: 'Commerce', href: '/' },
      { name: 'Insights', href: '/' },
    ],
    support: [
      { name: 'Submit ticket', href: '/' },
      { name: 'Documentation', href: '/' },
      { name: 'Guides', href: '/' },
    ],
    company: [
      { name: 'About', href: '/' },
      { name: 'Blog', href: '/' },
      { name: 'Jobs', href: '/' },
      { name: 'Press', href: '/' },
    ],
    legal: [
      { name: 'Terms of service', href: '/' },
      { name: 'Privacy policy', href: '/' },
      { name: 'License', href: '/' },
    ],
  };
</script>

<footer class="bg-gray-900 py-14 text-white {className}">
  <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

      <!-- Contact & Business Info -->
      <div class="lg:col-span-1">
        <h3 class="mb-4 text-xl font-bold text-white">NCS Painting</h3>
        <p class="mb-4 text-sm leading-relaxed text-gray-300">
          Professional residential painting services serving Edmonton and
          surrounding communities since 2009.
        </p>

        <div class="mb-4 space-y-2">
          <p class="text-sm">
            <span class="font-semibold">Phone:</span>
            <a href="tel:7807225544" class="text-blue-400 transition-colors hover:text-blue-300">
              (780) 722-5544
            </a>
          </p>
          <p class="text-sm">
            <span class="font-semibold">Email:</span>
            <a href="mailto:info@ncspainting.com" class="text-blue-400 transition-colors hover:text-blue-300">
              info@ncspainting.com
            </a>
          </p>
          <p class="text-sm">
            <span class="font-semibold">Service Areas:</span> Edmonton,
            Sherwood Park, Fort Saskatchewan, St. Albert
          </p>
        </div>

        <div class="text-sm text-green-400">
          <p>✓ Licensed & Insured ✓ Work Guaranteed ✓ Free Estimates</p>
        </div>
      </div>

      <!-- Services -->
      <div>
        <h4 class="mb-4 text-lg font-semibold text-white">Painting Services</h4>
        <ul class="space-y-2 text-sm">
          {#each ['Interior Painting','Exterior House Painting','Cabinet Refinishing','Deck & Fence Staining','Drywall Repair','Power Washing','Commercial Painting'] as service}
            <li>
              <a href="/" class="text-gray-300 transition-colors hover:text-white">{service}</a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Service Areas -->
      <div>
        <h4 class="mb-4 text-lg font-semibold text-white">Service Areas</h4>
        <ul class="mb-6 space-y-2 text-sm">
          {#each [
            { label: 'Edmonton House Painters', href: '/' },
            { label: 'Sherwood Park Painting', href: '/' },
            { label: 'Fort Saskatchewan Painters', href: '/' },
            { label: 'St. Albert Painting Services', href: '/' },
          ] as area}
            <li>
              <a href={area.href} class="text-gray-300 transition-colors hover:text-white">
                {area.label}
              </a>
            </li>
          {/each}
        </ul>

        <h5 class="text-md mb-3 font-medium text-white">Edmonton Neighborhoods</h5>
        <ul class="grid grid-cols-2 gap-1 text-xs text-gray-400">
          {#each ['Terwillegar','Windermere','Castle Downs','Mill Creek','Riverbend','Summerside'] as hood}
            <li>{hood}</li>
          {/each}
        </ul>
      </div>
