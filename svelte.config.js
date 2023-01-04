import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		alias:{
			'@components': path.resolve("./src/lib/components"),
			'@lib': path.resolve("./src/lib"),
			'@utils': path.resolve("./src/lib/utils"),
			'@images': path.resolve("./src/images"),
			'@static': path.resolve("./static"),
		}
	}
};

export default config;
