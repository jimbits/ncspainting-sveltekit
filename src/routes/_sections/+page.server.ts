export async function load() {
	const modules = import.meta.glob('./*/*.svelte');

	const sections = {};

	for (const path in modules) {
		const match = path.match(/\.\/([^/]+)\/([^/]+)\.svelte$/);
		if (match) {
			const [, category, filename] = match;

			if (!sections[category]) {
				sections[category] = [];
			}

			sections[category].push({
				name: filename,
				slug: filename.toLowerCase(),
				category: category,
				path: `/sections/${category}/${filename.toLowerCase()}`
			});
		}
	}

	return { sections };
}
