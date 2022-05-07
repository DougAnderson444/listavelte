// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

import sveltePreprocess from 'svelte-preprocess';
import path from 'path';
import purgecss from '@fullhuman/postcss-purgecss';
import postcss from 'rollup-plugin-postcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		postcss: true, // set postcss: true if postcss-load-config is installed and svelte-preprocess will look for a PostCSS config file in your project.,
		// postcss: {
		// 	plugins: [
		// 		purgecss({
		// 			content: ['./package/**/*.svelte']
		// 		})
		// 	]
		// }
		globalStyle: {} // enables us to have :global css
	}),
	prerender: { default: true },

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		prerender: { default: true },
		paths: {
			// change below to your repo name
			base: process.env.NODE_ENV === 'development' ? '' : '/listavelte'
		},
		vite: {
			resolve: {
				alias: {
					'@douganderson444/listavelte': path.resolve('src/lib')
				}
			},
			build: {
				rollupOptions: {
					// plugins: [postcss({ extract: true, minimize: true })] // no effect?
				}
			}
			// plugins: [postcss({ extract: true, minimize: true })]
		}
	}
};

export default config;
