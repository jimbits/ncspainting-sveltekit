<script lang="ts">
  import { fade } from 'svelte/transition';

  type Category = 'Interior' | 'Exterior' | 'Additional';

  interface GalleryImage {
    src: string;
    category: Category;
    description: string;
    location: string;
    reviewLink: string;
  }

  const images: GalleryImage[] = [
    { src: '/hero-1.jpg', category: 'Interior', description: 'Living room walls', location: 'Edmonton, AB', reviewLink: '#' },
    { src: '/hero-2.jpg', category: 'Interior', description: 'Kitchen cabinets', location: 'Sherwood Park, AB', reviewLink: '#' },
    { src: '/hero-3.jpg', category: 'Interior', description: 'Bedroom accent wall', location: 'St. Albert, AB', reviewLink: '#' },
    { src: '/hero-4.jpg', category: 'Interior', description: 'Basement renovation', location: 'Edmonton, AB', reviewLink: '#' },
    { src: '/hero-5.webp', category: 'Interior', description: 'Ceiling painting', location: 'Fort Saskatchewan, AB', reviewLink: '#' },
    { src: '/hero-6.jpg', category: 'Interior', description: 'Trim and moulding', location: 'Edmonton, AB', reviewLink: '#' },
    { src: '/hero-7.jpg', category: 'Interior', description: 'Open concept living area', location: 'Sherwood Park, AB', reviewLink: '#' },
    { src: '/hero-8.jpg', category: 'Interior', description: 'Staircase and railing', location: 'St. Albert, AB', reviewLink: '#' },
    { src: '/hero-9.jpg', category: 'Exterior', description: 'Full house exterior', location: 'Edmonton, AB', reviewLink: '#' },
    { src: '/hero-10.jpg', category: 'Exterior', description: 'Siding and trim', location: 'Sherwood Park, AB', reviewLink: '#' },
    { src: '/hero-11.jpg', category: 'Exterior', description: 'Deck and fence staining', location: 'St. Albert, AB', reviewLink: '#' },
    { src: '/hero-12.jpg', category: 'Exterior', description: 'Garage door painting', location: 'Edmonton, AB', reviewLink: '#' },
    { src: '/hero-13.jpg', category: 'Exterior', description: 'Brick exterior', location: 'Fort Saskatchewan, AB', reviewLink: '#' },
    { src: '/hero-14.jpg', category: 'Exterior', description: 'Modern home exterior', location: 'Edmonton, AB', reviewLink: '#' },
    { src: '/hero-15.jpg', category: 'Exterior', description: 'Vinyl siding painting', location: 'Sherwood Park, AB', reviewLink: '#' },
    { src: '/hero-16.jpg', category: 'Exterior', description: 'Porch and railings', location: 'St. Albert, AB', reviewLink: '#' },
    { src: '/image-1.png', category: 'Additional', description: 'Cabinet refinishing', location: 'Edmonton, AB', reviewLink: '#' },
    { src: '/image-2.png', category: 'Additional', description: 'Popcorn ceiling removal', location: 'Sherwood Park, AB', reviewLink: '#' },
    { src: '/image-3.png', category: 'Additional', description: 'Drywall repair', location: 'St. Albert, AB', reviewLink: '#' },
    { src: '/image-4.png', category: 'Additional', description: 'Wallpaper removal', location: 'Edmonton, AB', reviewLink: '#' },
    { src: '/image-5.png', category: 'Additional', description: 'Epoxy flooring', location: 'Fort Saskatchewan, AB', reviewLink: '#' },
    { src: '/image-6.png', category: 'Additional', description: 'Power washing', location: 'Edmonton, AB', reviewLink: '#' },
    { src: '/image-7.png', category: 'Additional', description: 'Color consultation', location: 'Sherwood Park, AB', reviewLink: '#' },
    { src: '/image-8.png', category: 'Additional', description: 'Minor carpentry repairs', location: 'St. Albert, AB', reviewLink: '#' },
  ];

  let selectedCategory: Category | 'All' = 'All';
  let filteredImages = images;

  let showModal = false;
  let currentImageIndex = 0;

  function filterImages(category: Category | 'All') {
    selectedCategory = category;
    if (category === 'All') {
      filteredImages = images;
    } else {
      filteredImages = images.filter(img => img.category === category);
    }
  }

  function openModal(index: number) {
    currentImageIndex = index;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
  }
</script>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold text-center mb-8">Project Gallery</h1>

  <div class="flex justify-center space-x-2 md:space-x-4 mb-8">
    <button class="btn {selectedCategory === 'All' ? 'btn-primary' : 'btn-outline'}" on:click={() => filterImages('All')}>All</button>
    <button class="btn {selectedCategory === 'Interior' ? 'btn-primary' : 'btn-outline'}" on:click={() => filterImages('Interior')}>Interior</button>
    <button class="btn {selectedCategory === 'Exterior' ? 'btn-primary' : 'btn-outline'}" on:click={() => filterImages('Exterior')}>Exterior</button>
    <button class="btn {selectedCategory === 'Additional' ? 'btn-primary' : 'btn-outline'}" on:click={() => filterImages('Additional')}>Additional</button>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {#each filteredImages as image, index}
      <div class="w-full h-64 bg-gray-200 rounded-lg overflow-hidden cursor-pointer" on:click={() => openModal(index)}>
        <img src={image.src} alt={image.description} class="w-full h-full object-cover">
      </div>
    {/each}
  </div>
</div>

{#if showModal}
  <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" transition:fade on:click={closeModal}>
    <div
      class="relative bg-white p-4 rounded-lg w-[90vw] max-w-[800px] h-[80vh] max-h-[600px] grid grid-cols-1 md:grid-cols-3 gap-4"
      on:click|stopPropagation
    >
      <button class="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 z-20" on:click={closeModal}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="md:col-span-2 w-full h-full relative">
        {#each [filteredImages[currentImageIndex]] as image (image.src)}
          <div class="absolute inset-0" in:fade>
            <img src={image.src} alt={image.description} class="w-full h-full object-cover rounded-lg">
          </div>
        {/each}
      </div>

      <div class="text-black text-sm p-4 bg-gray-100 rounded-lg overflow-y-auto">
          <h3 class="text-lg font-bold mb-2">{filteredImages[currentImageIndex].category}</h3>
          <p class="mb-2">{filteredImages[currentImageIndex].description}</p>
          <p class="text-xs text-gray-600 mb-4">{filteredImages[currentImageIndex].location}</p>
          <a href={filteredImages[currentImageIndex].reviewLink} class="text-blue-500 hover:underline">View Review</a>
      </div>

      <button class="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10" on:click|stopPropagation={prevImage}>
        &lt;
      </button>
      <button class="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10" on:click|stopPropagation={nextImage}>
        &gt;
      </button>
    </div>
  </div>
{/if}

<style>
  .btn {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 0.5rem;
    font-weight: 600;
  }
  .btn-primary {
    background-color: #3b82f6;
    color: #ffffff;
  }
  .btn-outline {
    background-color: transparent;
    border: 1px solid #3b82f6;
    color: #3b82f6;
  }
</style>
