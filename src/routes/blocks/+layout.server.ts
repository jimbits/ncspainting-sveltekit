import type { LayoutServerLoad } from './$types';

import { getProfileMenuData } from '$lib/server/generateMenuData';

export const load: LayoutServerLoad = async ({ url }) => {
	// Fetch data, interact with a database, etc.
	const menu = await getProfileMenuData();

	return { menu };
};
