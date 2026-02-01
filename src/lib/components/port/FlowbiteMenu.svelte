<script>
	import { onMount } from 'svelte';
	import { Dropdown } from 'flowbite';

	onMount(() => {
		// Initialize dropdowns after component mounts
		const dropdownButton = document.getElementById('dropdown-button');
		const dropdownMenu = document.getElementById('dropdown');

		const submenuButton = document.getElementById('submenu-dropdown-button');
		const submenuDropdown = document.getElementById('submenu-dropdown');

		// Create Flowbite dropdown instances
		if (dropdownButton && dropdownMenu) {
			new Dropdown(dropdownMenu, dropdownButton);
		}

		if (submenuButton && submenuDropdown) {
			new Dropdown(submenuDropdown, submenuButton, {
				placement: 'right-end'
			});
		}
	});
</script>

<!-- <button bind:this={buttonElement}>get ref</button> -->
<header class="w-full">
	<nav class="  bg-white px-4 py-2.5 lg:px-6 dark:bg-gray-800">
		<div class="   flex flex-wrap items-center justify-between">
			<a href="https://flowbite.com" class="flex items-center">
				<img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
				<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
			</a>

			<!-- LINKS -->

			<div class="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto" id="mobile-menu-2">
				<ul class="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
					<li>
						<a
							href="/sections"
							class="text-primary-600 lg:hover:text-primary-600 dark:text-primary-500 lg:dark:hover:text-primary-500 dark:hover:text-primary-500 block border-b border-gray-100 py-2 pr-4 pl-3 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent"
							aria-current="page"
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="/sections"
							class="lg:hover:text-primary-600 lg:dark:hover:text-primary-500 dark:hover:text-primary-500 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent"
						>
							Marketing
						</a>
					</li>
					<li>
						<a
							href="/sections"
							class="lg:hover:text-primary-600 lg:dark:hover:text-primary-500 dark:hover:text-primary-500 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent"
						>
							Hero
						</a>
					</li>
					<li>
						<a
							href="/sections"
							class="lg:hover:text-primary-600 lg:dark:hover:text-primary-500 dark:hover:text-primary-500 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent"
						>
							Process
						</a>
					</li>
					<li>
						<button
							type="button"
							id="dropdown-button"
							data-dropdown-toggle="dropdown"
							class="lg:hover:text-primary-600 lg:dark:hover:text-primary-500 dark:hover:text-primary-500 flex w-full items-center justify-between border-b border-gray-100 py-2 pr-4 pl-3 font-medium text-gray-700 hover:bg-gray-50 lg:w-auto lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent"
						>
							Marketing <svg
								class="ml-1 h-5 w-5 lg:h-4 lg:w-4"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>
						<div id="dropdown" class="z-10 hidden divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700">
							<ul class="py-1 text-sm font-light text-gray-500 dark:text-gray-400" aria-labelledby="dropdown-button">
								<li>
									<a
										href="/sections"
										class="hover:text-primary-600 dark:hover:text-primary-500 flex w-full items-center px-4 py-2"
									>
										<svg
											class="mr-2 h-4 w-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
												clip-rule="evenodd"
											></path>
										</svg>
										Audience
									</a>
								</li>
								<li>
									<a
										href="/sections"
										class="hover:text-primary-600 dark:hover:text-primary-500 flex w-full items-center px-4 py-2"
									>
										<svg
											class="mr-2 h-4 w-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
											></path>
										</svg>
										Marketing Automation
									</a>
								</li>
								<li>
									<button
										id="submenu-dropdown-button"
										data-dropdown-toggle="submenu-dropdown"
										data-dropdown-placement="right-end"
										type="button"
										class="hover:text-primary-600 dark:hover:text-primary-500 flex w-full items-center justify-between px-4 py-2"
									>
										<span class="flex items-center">
											<svg
												class="mr-2 h-4 w-4"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fill-rule="evenodd"
													d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
													clip-rule="evenodd"
												></path>
											</svg>
											Creative Tools
										</span>
										<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
											<path
												fill-rule="evenodd"
												d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
												clip-rule="evenodd"
											></path>
										</svg>
									</button>
									<div
										id="submenu-dropdown"
										class="z-10 hidden divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700"
									>
										<ul
											class="py-1 text-sm font-light text-gray-500 dark:text-gray-400"
											aria-labelledby="dropdown-button"
										>
											<li>
												<a
													href="/sections"
													class="hover:text-primary-600 dark:hover:text-primary-500 flex w-full items-center px-4 py-2"
												>
													Marketing CRM
												</a>
											</li>
											<li>
												<a
													href="/sections"
													class="hover:text-primary-600 dark:hover:text-primary-500 flex w-full items-center px-4 py-2"
												>
													Sign up forms
												</a>
											</li>
											<li>
												<a
													href="/sections"
													class="hover:text-primary-600 dark:hover:text-primary-500 flex w-full items-center px-4 py-2"
												>
													Segmentation
												</a>
											</li>
											<li>
												<a
													href="/sections"
													class="hover:text-primary-600 dark:hover:text-primary-500 flex w-full items-center px-4 py-2"
												>
													Dynamic content
												</a>
											</li>
											<li>
												<a
													href="/sections"
													class="hover:text-primary-600 dark:hover:text-primary-500 flex w-full items-center px-4 py-2"
												>
													A/B Testing
												</a>
											</li>
											<li>
												<a
													href="/sections"
													class="hover:text-primary-600 dark:hover:text-primary-500 flex w-full items-center px-4 py-2"
												>
													Behavioural targeting
												</a>
											</li>
											<li>
												<a
													href="/sections"
													class="hover:text-primary-600 dark:hover:text-primary-500 flex w-full items-center px-4 py-2"
												>
													Integrations
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li>
									<a
										href="/sections"
										class="hover:text-primary-600 dark:hover:text-primary-500 flex w-full items-center px-4 py-2"
									>
										<svg
											class="mr-2 h-4 w-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
												clip-rule="evenodd"
											></path>
										</svg>
										Insights & Analytics
									</a>
								</li>
								<li>
									<a
										href="/sections"
										class="hover:text-primary-600 dark:hover:text-primary-500 flex w-full items-center px-4 py-2"
									>
										<svg
											class="mr-2 h-4 w-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
											<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
										</svg>
										Demographics
									</a>
								</li>
								<li>
									<a
										href="/sections"
										class="hover:text-primary-600 dark:hover:text-primary-500 flex w-full items-center px-4 py-2"
									>
										<svg
											class="mr-2 h-4 w-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
											></path>
										</svg>
										Contact Profiles
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<a
							href="/sections"
							class="lg:hover:text-primary-600 lg:dark:hover:text-primary-500 dark:hover:text-primary-500 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent"
						>
							Interior
						</a>
					</li>
					<li>
						<a
							href="/sections"
							class="lg:hover:text-primary-600 lg:dark:hover:text-primary-500 dark:hover:text-primary-500 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 lg:dark:hover:bg-transparent"
						>
							Layouts
						</a>
					</li>
				</ul>
			</div>
			<!-- Login Signup -->
			<div class="flex items-center lg:order-2">
				<a
					href="/sections"
					class="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none lg:px-5 lg:py-2.5 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
				>
					Login
				</a>
				<a
					href="/sections"
					class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 focus:ring-4 focus:outline-none lg:px-5 lg:py-2.5"
				>
					Sign up
				</a>
				<button
					data-collapse-toggle="mobile-menu-2"
					type="button"
					class="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="mobile-menu-2"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						></path>
					</svg>
					<svg class="hidden h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>
		</div>
	</nav>
</header>
