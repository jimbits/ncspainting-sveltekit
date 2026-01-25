<script
	lang="ts"
	module
>
	import Logo from '$lib/assets/svg/logo-12.svg?component';
</script>

<script lang="ts">
	import {
		Castle,
		DollarSign,
		Fence,
		HouseHeart,
		PaintBucket,
		TreeDeciduous,
		PaintbrushVertical,
		PaintRoller,
		Container,
		UserStar,
		Archive,
		X,
		Focus
	} from 'lucide-svelte';
</script>

<section
	class="menu-height via-neutral-400-300 hidden bg-linear-to-b from-neutral-50 via-neutral-100 to-neutral-200"
>
	<header
		class="py-.5 mb-8 flex items-center justify-between px-3"
	>
		<Logo class="  h-auto w-10 fill-stone-400" />
		<h2 class=" text-center text-xl text-stone-500">
			Menu
		</h2>
		<X class="h-auto w-4.5 text-stone-500" />
	</header>
	<div class="space-y-5">
		<!-- Services -->
		<div>
			<div class="  mb-2 px-18">
				<h3
					class="menu-item-title text-xl font-bold text-stone-950"
				>
					Services
				</h3>
			</div>
			<ul>
				<li class="px-14 pt-1 pb-2 hover:bg-stone-200">
					<a
						href="/"
						class="menu-item"
					>
						<div class=" menu-item-logo self-center">
							<div
								class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-stone-50 bg-stone-200 text-white"
							>
								<PaintBucket
									class="h-auto w-4.5 text-stone-500"
								/>
							</div>
						</div>

						<h4
							class="menu-item-title font-medium text-stone-600"
						>
							Interior Home Painting
						</h4>
					</a>
				</li>
				<li class="px-14 pt-1 pb-2 hover:bg-stone-200">
					<a
						href="/"
						class="menu-item"
					>
						<div class=" menu-item-logo self-center">
							<div
								class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-stone-50 bg-stone-200 text-white"
							>
								<PaintbrushVertical
									class="h-auto w-4.5 text-stone-500"
								/>
							</div>
						</div>

						<h4
							class="menu-item-title font-medium text-stone-600"
						>
							Exterior Home Painting
						</h4>
					</a>
				</li>
				<li class="px-14 pt-1 pb-2 hover:bg-stone-200">
					<a
						href="/"
						class="menu-item"
					>
						<div class=" menu-item-logo self-center">
							<div
								class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-stone-50 bg-stone-200 text-white"
							>
								<Archive
									class="h-auto w-4.5 text-stone-500"
								/>
							</div>
						</div>

						<h4
							class="menu-item-title font-medium text-stone-600"
						>
							Cabinet Painting
						</h4>
					</a>
				</li>
				<li class="px-14 pt-1 pb-2 hover:bg-stone-200">
					<a
						href="/"
						class="menu-item"
					>
						<div class=" menu-item-logo self-center">
							<div
								class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-stone-50 bg-stone-200 text-white"
							>
								<Fence
									class="h-auto w-4.5 text-stone-500"
								/>
							</div>
						</div>

						<h4
							class="menu-item-title font-medium text-stone-600"
						>
							Decks & Fences
						</h4>
					</a>
				</li>
			</ul>
		</div>
		<!-- Locations -->
		<div>
			<div class="  px-18">
				<h3
					class="menu-item-title text-xl font-semibold text-stone-600"
				>
					Service Locations
				</h3>
			</div>
			<ul>
				<li class="px-14 pt-1 pb-2 hover:bg-stone-200">
					<a
						href="/"
						class="menu-item"
					>
						<div class=" menu-item-logo self-center">
							<div
								class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-stone-50 bg-stone-200 text-white"
							>
								<TreeDeciduous
									class="h-auto w-4.5 text-stone-500"
								/>
							</div>
						</div>

						<h4
							class="menu-item-title font-medium text-stone-600"
						>
							Sherwood Park
						</h4>
					</a>
				</li>
				<li class="px-14 pt-1 pb-2 hover:bg-stone-200">
					<a
						href="/"
						class="menu-item"
					>
						<div class=" menu-item-logo self-center">
							<div
								class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-stone-50 bg-stone-200 text-white"
							>
								<Castle class="h-auto w-5 text-stone-500" />
							</div>
						</div>

						<h4
							class="menu-item-title font-medium text-stone-600"
						>
							Fort Saskatchewan
						</h4>
					</a>
				</li>
				<li class="px-14 pt-1 pb-2 hover:bg-stone-200">
					<a
						href="/"
						class="menu-item"
					>
						<div class=" menu-item-logo self-center">
							<div
								class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-stone-50 bg-stone-200 text-white"
							>
								<Container
									class="h-auto w-4.5 text-stone-500"
								/>
							</div>
						</div>

						<h4
							class="menu-item-title font-medium text-stone-600"
						>
							Saint Albert
						</h4>
					</a>
				</li>
			</ul>
		</div>
		<!-- Portfolio -->
		<div>
			<div class="menu-item px-14">
				<div class="w-8"></div>
				<h3
					class="menu-item-title text-2xl font-bold text-stone-950"
				>
					Service Locations
				</h3>
			</div>
			<ul>
				<li class="px-14 pt-1 pb-2 hover:bg-stone-200">
					<a
						href="/"
						class="menu-item"
					>
						<div class=" menu-item-logo self-center">
							<div
								class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-stone-50 bg-stone-200 text-white"
							>
								<UserStar
									class="h-auto w-4.5 text-stone-500"
								/>
							</div>
						</div>

						<h4
							class="menu-item-title font-medium text-stone-600"
						>
							Reviews
						</h4>
						<p
							class="menu-item-details text-xs text-stone-600"
						>
							Lorem ipsum, dolor sit amet consectetur
							adipisicing elit. Modi possimus voluptates id.
						</p>
					</a>
				</li>
				<li class="px-14 pt-1 pb-2 hover:bg-stone-200">
					<a
						href="/"
						class="menu-item"
					>
						<div class=" menu-item-logo self-center">
							<div
								class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-stone-50 bg-stone-200 text-white"
							>
								<Focus
									class="h-auto w-4.5 text-stone-500"
								/>
							</div>
						</div>

						<h4
							class="menu-item-title font-medium text-stone-600"
						>
							Gallery
						</h4>
						<p
							class="menu-item-details text-xs text-stone-600"
						>
							secte tur adip isicing el it idem quaer at duc
							imus fugiat id iste of fic ii s arc hit ecto
							modi ab?
						</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
</section>

<style>
	.menu-height {
		position: absolute;
		height: 100dvh;
		inset: 0;
	}
	.menu-item {
		display: grid;
		grid-template-columns: min-content 1fr;
		column-gap: 0.75rem;
	}
	.menu-item-title {
		grid-area: 1 / 2 / 2 / 3;
	}
	.menu-item-logo {
		grid-area: 1 / 1 / 3 / 2;
	}
	.menu-item-details {
		grid-area: 2 / 2 / 3 / 3;
	}
</style>
