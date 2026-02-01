import { files } from '$service-worker';
import { Glob } from 'bun';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const ignoreList = new Set(['components', '[category]']);
// read all the files in the current directory
const allItems = await readdir(import.meta.dir);
let data = {};

// // 2. The Regex for SvelteKit structural noise
const structuralNoise = /[.+[\]]/;

// const folders = files.filter((item) => folderRegex.test(item));
// 3. One efficient pass
const categories = allItems.filter((item) => !structuralNoise.test(item) && !ignoreList.has(item));
const glob = new Glob('*.svelte'); // Matches all TypeScript files
const searchPath = './' + categories[0];

categories.forEach((category, index) => {
	const searchPath = './' + category;
	console.log(join(import.meta.dir, category));
	let componentFiles = [];
	for (const file of glob.scanSync(searchPath)) {
		componentFiles.push(file);
		/*
	 {
	    category:[items, items]
	 }
	*/
	}

	data[category] = componentFiles;
});
