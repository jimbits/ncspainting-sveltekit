# Example Animated Details Element

## Markup

```html
<main class="page-layout">
	<section class="faq">
		<div>
			<span class="section-icon" aria-hidden="true">🤔</span>
			<h2 class="section-title">Frequently asked questions</h2>
		</div>
		<div class="questions-and-answers">
			<details>
				<summary>Can I animate details/summary elements?</summary>
				<p>
					This used to be something that was impossible, but now thanks to modern CSS, it's actually
					pretty easy to do!
				</p>
			</details>

			<details>
				<summary>How is it possible?</summary>
				<p>
					There are a few different ways that you can do it. One of them is using
					<code>calc-size()</code>, which has some extra things you could do with it, but right now
					the easiest way is to use a combination of
					<code>interpolate-size: allow-keywords;</code> and
					<code>transition-behavior: allow-discrete</code>.
				</p>
			</details>

			<details>
				<summary>What about browser support?</summary>
				<p>
					Browser support isn't great as of the time of creating this demo, but it'll only get
					better from here. Also, it is a great <em>progressive enhancement</em>. This means that it
					won't break anything for people on older browsers, they just won't get the fancy animation
					you've created, while people on newer browser will get it!
				</p>
			</details>

			<details>
				<summary>What's the catch?</summary>
				<p>
					There is none! It's easy to do and it works great! I feel like that's too short, and I
					want to use this demo to show the animations and need a longer box to show it properly so
					here's a little bit of extra filler text lorem ipsum dolor sit amet consectetur
					adipisicing elit. Modi at ipsum dolor tempore impedit corrupti ad fugiat voluptate
					reiciendis voluptatum!
				</p>
			</details>
		</div>
	</section>
</main>
```

## CSS

```css
:root {
	interpolate-size: allow-keywords;
}

details {
	background: hsl(0 0% 5%);
	border: 1px solid hsl(0 0% 12%);
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;

	overflow: hidden;
}

/* don't add margin/padding to this, add it to the actual
   stuff inside the details content */
details::details-content {
	color: hsl(0 0% 78%);
	font-size: 1rem;
	block-size: 0;
	transition:
		block-size 1s,
		content-visibility 1s;
	transition-behavior: allow-discrete;
}

details:open::details-content {
	block-size: auto;
}

@layer general-styling {
	html {
		font-family: system-ui;
		color-scheme: dark;
	}

	body {
		margin: 0;
		font-size: 1.5rem;
		line-height: 1.6;
		min-height: 100dvh;

		background-image: radial-gradient(
			in oklch circle at top left,
			hsl(303, 100%, 26%, 0.08),
			transparent
		);
		background-repeat: no-repeat;
	}

	h1,
	h2,
	h3,
	h4,
	p,
	details,
	summary {
		margin-block-end: 0;
	}

	.page-layout {
		display: grid;
		grid-template-columns:
			minmax(2rem, 1fr)
			min(960px, 100% - 4rem)
			minmax(2rem, 1fr);

		& > * {
			grid-column: 2 / 3;
		}

		margin-block: 5rem;
		container-type: inline-size;
		container-name: page-layout;
	}

	.section-title {
		font-size: 2rem;
		margin: 0;
		line-height: 1;
	}

	.section-icon {
		font-size: 3rem;
	}

	.faq {
		display: grid;
		gap: clamp(1rem, 10vw, 2.5rem);

		@container (width > 650px) {
			grid-template-columns: 250px 1fr;
		}
	}

	.questions-and-answers {
		margin-block-start: 3.5rem;
	}

	.questions-and-answers {
		display: grid;
		gap: 1rem;
	}

	details * {
		margin: 0;
	}

	details > p {
		padding-block: 1rem;
	}

	summary {
		color: hsl(0 0% 98%);
		line-height: 1.3;
		margin-inline-start: 1rem;
		list-style-position: outside;
	}

	summary::marker {
		font-size: 0.75em;
		color: hsl(0 0% 40%);
	}
}
```

## JavaScript

```js
const navToggle = document.querySelector('[aria-controls="primary-navigation"]');

navToggle.addEventListener('click', () => {
	const navOpened = navToggle.getAttribute('aria-expanded');

	if (navOpened === 'false') {
		navToggle.setAttribute('aria-expanded', true);
	} else {
		navToggle.setAttribute('aria-expanded', false);
	}
});
```
