import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({ fallback: '404.html' }),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/RiadhAdrani' : ''
		}
	}
};

export default config;
