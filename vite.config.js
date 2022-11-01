import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(), 
		imagetools({
			defaultDirectives: () => {
				// automatically convert all images to webp at build
				return new URLSearchParams({'format': 'webp'})
			}
		})
	]
};

export default config;
