import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';
// Define this outside the defineConfig
const svgoConfig = {
	multipass: true,
	plugins: [
		{
			name: 'preset-default',
			params: {

			}
		}
	]
};
export default defineConfig({
	server: {
		port: 3000
	},
	plugins: [
		tailwindcss(),
		sveltekit(),
		svg({
			includePaths: ['./src/lib/assets/'],
			svgoOptions: svgoConfig as any // Usually still needs 'as any' due to the internal library types
		})
	]
	// ... rest of config
});
