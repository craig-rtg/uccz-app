// import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import adapter from '@sveltejs/adapter-static';


// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
// 		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// 		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
// 		// adapter: adapter(),
// 		adapter: adapter({
// 			fallback: '200.html' // may differ from host to host
// 		})

// 	},
// 	preprocess: vitePreprocess()
// };

// export default config;







import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: adapter({
			// see below for options that can be set here
		})
	}
};











// export default {
// 	kit: {
// 		adapter: adapter({
// 			// default options are shown. On some platforms
// 			// these options are set automatically — see below
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: undefined,
// 			precompress: false,
// 			strict: true
// 		}),
// 		prerender: {
// 			// Exclude pages with actions from prerendering
// 			entries: ['/', '/about-us', '/donate','/events','/news','/contact-us',]
// 		}
// 	},
// 	preprocess: vitePreprocess()
// };
