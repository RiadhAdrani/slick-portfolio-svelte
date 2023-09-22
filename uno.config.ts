import extractorSvelte from '@unocss/extractor-svelte';
import { defineConfig, presetTypography, presetUno, presetWebFonts } from 'unocss';

export default defineConfig({
	extractors: [extractorSvelte()],
	presets: [
		presetUno(),
		presetWebFonts({
			fonts: {
				sans: {
					name: 'Inter',
					weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
					italic: true,
					provider: 'google'
				}
			}
		}),
		presetTypography()
	],
	shortcuts: [
		{
			col: 'flex flex-col',
			row: 'flex flex-row',

			'col-center': 'col justify-center items-center',
			'row-center': 'row justify-center items-center'
		}
	]
});
