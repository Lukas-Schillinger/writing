import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		imagetools({
			defaultDirectives: () => {
				return new URLSearchParams({
					format: 'avif;webp;',
					picture: true,
					width: '256;384;512;640;'
				});
			}
		})
	]
};

export default config;
