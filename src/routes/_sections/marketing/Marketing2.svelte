<script lang="ts">
	import Services from '$lib/assets/svg/promise-guarantee.svg';
</script>

<section class="  bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
		<div class="mb-8 grid items-center gap-8 lg:mb-16 lg:grid-cols-12 lg:gap-12">
			<div class="col-span-6 text-center sm:mb-6 lg:mb-0 lg:text-left">
				<a
					href="/"
					class="mb-6 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
				>
					<span class="bg-primary-600 mr-3 rounded-full px-3 py-1 text-xs text-white">New</span>
					<span class="text-sm font-medium">Quick Quote Calculator</span>
					<svg class="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
							clip-rule="evenodd"
						></path>
					</svg>
				</a>
				<p class="mb-2 text-xl font-semibold">NCS Painting</p>
				<h1
					class="mb-4 text-4xl leading-none font-extrabold tracking-tight text-pretty text-gray-900 md:text-5xl xl:text-6xl dark:text-white"
				>
					Professional House Painters in Edmonton
				</h1>
				<p
					class="mx-auto mb-6 max-w-xl font-light text-gray-500 md:text-lg lg:mx-0 xl:mb-8 xl:text-xl dark:text-gray-400"
				>
					Looking for reliable house painters in Edmonton you can trust? NCS Painting provides professional interior and
					exterior painting services for homeowners and businesses in Edmonton
				</p>

				<div class="flex">
					<button
						type="submit"
						class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-white focus:ring-4 focus:outline-none"
					>
						<svg class="mr-2 -ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path
								fill-rule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clip-rule="evenodd"
							></path>
						</svg>
						Call For Free Estimate
					</button>
					<button
						type="submit"
						class=" text-primary-700 border-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium focus:ring-4 focus:outline-none"
					>
						Call To Action
					</button>
				</div>
			</div>

			<div class="col-span-6">
				<img
					src="https://res.cloudinary.com/jimbits/image/upload/v1755013927/ncs-painting-edmonton/banner_wgfnse.jpg"
					alt="mockup"
				/>
			</div>
		</div>
		<div class="grid grid-cols-3">
			<div>
				<figure class=" ">
					<figcapiton>
						<h3 class="mb-1 text-2xl leading-tight font-semibold text-rose-500 uppercase dark:text-white">
							<span class="block text-7xl font-extrabold">30+</span>
							 Years Experience
						</h3>
					</figcapiton>
				</figure>
				<p class="font-light text-gray-500 dark:text-gray-400">
					With 30+ years experince we deliver detailed workmanship using high-quality materials designed to last in
					Alberta’s climate.
				</p>
			</div>
			<div class="flex justify-center">
				<figure>
					<figcaption>
						<h3 class="mb-1 text-lg leading-tight font-semibold text-gray-900 dark:text-white">Services</h3>
					</figcaption>
					<p class="font-light text-gray-500 dark:text-gray-400">
						Whether you need interior wall painting, exterior house painting, cabinet refinishing, or commercial
						painting services,
					</p>
				</figure>
			</div>
			<div class="flex justify-center">
				<div>
					<figure class="flex flex-col">
						<Services class="w-24 fill-rose-500" />
						<figcaption>
							<h3 class="mb-1 text-2xl leading-tight font-semibold text-rose-500 uppercase dark:text-white">
								Promise Guarantee
							</h3>
						</figcaption>
					</figure>
					<p class="font-light text-gray-500 dark:text-gray-400">
						we focus on clear communication, honest pricing, and results that increase your property’s value.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.test {
		background-image: url('https://res.cloudinary.com/jimbits/image/upload/v1756171559/ncs-painting-edmonton/painting-wall-yellow-room-before-after-restoration-refurbishment_157125-6684_1_scistr.avif');
		background-repeat: no-repeat;
		background-size: 100% 400px;
	}
</style>
