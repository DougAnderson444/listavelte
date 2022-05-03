import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import pkg from './package.json';
import { addBundleExports } from './tools/addBundleExports.js';
import postcss from 'rollup-plugin-postcss';

const production = !process.env.ROLLUP_WATCH;
const packageFolder = 'package';
const file = path.join(packageFolder, pkg.module);
const sourcemapFile = file + '.map';

addBundleExports(packageFolder, file, sourcemapFile);

export default {
	input: 'src/lib/index.js',
	output: [
		// this destination is for npm
		{
			file,
			format: 'es',
			sourcemap: true,
			inlineDynamicImports: true
		},
		// this destination is for github
		{
			file: pkg.module,
			format: 'es',
			sourcemap: true,
			inlineDynamicImports: true
		}
	],
	plugins: [
		postcss({ extract: true }),
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			},

			// we want to embed the CSS in the generated JS bundle
			emitCss: false,

			preprocess: sveltePreprocess()
		}),

		resolve({
			browser: true
		}),
		commonjs(),
		json(),

		typescript(),

		// minify
		production && terser()
	]
};
