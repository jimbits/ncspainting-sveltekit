import { readdir, readFile, writeFile } from 'node:fs/promises';
import path, { join } from 'node:path';

export type MenuCategory = {
	category: CategoryTypes;
	items: string[];
};

export type CategoryTypes =
	| 'hero'
	| 'interior'
	| 'layouts'
	| 'marketing'
	| 'process'
	| 'selection'
	| 'service';

const folderRegEx = /^[\_\[\(]/;
const fileRegEx = /^(?!\+).+\.svelte$/i;

async function getFolderList(path: string): Promise<CategoryTypes[]> {
	const folderPath = join(process.cwd(), 'src/routes/portfolio');

	try {
		const entries = await readdir(folderPath, { withFileTypes: true });
		const foldersList = entries
			.filter((item) => item.isDirectory())
			.filter((dir) => !folderRegEx.test(dir.name))
			.map((folder) => folder.name);
		return foldersList;
	} catch (error) {
		throw new Error('something went wrong');
	}
}
async function getFileList(folderName: string): Promise<string[]> {
	const folderPath = join(process.cwd(), 'src/routes/portfolio', folderName);

	try {
		const files = (await readdir(folderPath)).filter((file) => fileRegEx.test(file));
		return files;
	} catch (error) {
		throw new Error('something went wrong');
	}
}

async function createMenuData() {
	const folders = await getFolderList('portfolio');

	const menuData: MenuCategory[] = await Promise.all(
		folders.map(async (folderName, index) => {
			return {
				category: folderName,
				items: await getFileList(folderName)
			};
		})
	);
	return menuData;
}

async function writeMenuData(menuData: MenuCategory[]): Promise<MenuCategory[]> {
	const data = menuData;
	const menuDataFilePath = join(process.cwd(), 'src/lib/data/menu.json');
	try {
		await writeFile(menuDataFilePath, JSON.stringify(data, null, 2), 'utf-8');
		return menuData;
	} catch (error) {
		throw new Error('Error writing menu data failed with exit code 3');
	}
}

async function getProfileMenuData() {
	const menuData = await createMenuData();
	return await writeMenuData(menuData);
}

export { getProfileMenuData };
