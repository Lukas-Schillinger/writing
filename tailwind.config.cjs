const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['inter', ...defaultTheme.fontFamily.sans], 
			mono: ['jetbrains-mono', ...defaultTheme.fontFamily.mono], 
			serif: [...defaultTheme.fontFamily.serif], 
		},
		extend: {
			colors: {
				github: {
					light: '#adbac7', 
					regular: '#373e47',  
					dark: '#22272e', 
					contrast: "#539bf5", 
					hovercolor: 'rgba(144,157,171,0.12)',
					bordercolor: '#444c56', 
					python: '#3572A5', 
					svelte: '#ff3e00',  
				} 
			}
		}
	},

	plugins: []
};

module.exports = config;
