import type { ComponentType, SvelteComponent } from 'svelte';
import type { SVGAttributes } from 'svelte/elements';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// 1. The Component Import (The "Poppanator" specialty)
	// Use this for: <MyIcon class="text-red-500" />
	declare module '*.svg?component' {
		const content: ComponentType<SvelteComponent<SVGAttributes<SVGSVGElement>>>;
		export default content;
	}

	// 2. The URL Import
	// Use this for: <img src={logoUrl} />
	declare module '*.svg?url' {
		const content: string;
		export default content;
	}

	// 3. The Raw String Import
	// Use this for: {@html svgString}
	declare module '*.svg?raw' {
		const content: string;
		export default content;
	}

	// 4. Default SVG (matches your Poppanator includePaths)
	// If you import without a suffix, it usually defaults to a component
	declare module '*.svg' {
		const content: ComponentType<SvelteComponent<SVGAttributes<SVGSVGElement>>>;
		export default content;
	}
}

export {};
