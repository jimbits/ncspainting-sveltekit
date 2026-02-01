// export type Category = {
// 	name: string;
// 	slug: string;
// 	category: string;
// };

export type Categories =
	| 'hero'
	| 'interior'
	| 'layouts'
	| 'marketing'
	| 'process'
	| 'selection'
	| 'service';
export async function load() {
	const modules = import.meta.glob('./*/*.svelte', {
		eager: false
	});

	const sections: Record<string, Array<{ name: string; slug: string; category: string }>> = {};

	for (const path in modules) {
		// Skip the components folder
		if (path.includes('/components/')) continue;

		const match = path.match(/\.\/([^/]+)\/([^/]+)\.svelte$/);
		if (match) {
			const [, category, filename] = match;

			if (!sections[category]) {
				sections[category] = [];
			}

			sections[category].push({
				name: filename,
				slug: filename.toLowerCase(),
				category: category
			});
		}
	}

	console.log('Layout sections:', sections); // Debug log
	return { sections }; // Make sure this line exists!
}
