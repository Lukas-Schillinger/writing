const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Inter', ...defaultTheme.fontFamily.sans],
			mono: ['jetbrains-mono', ...defaultTheme.fontFamily.mono],
			serif: [...defaultTheme.fontFamily.serif]
		},
		extend: {
			colors: {
				fjord: {
					DEFAULT: '#475569',
					50: '#DCE1E7',
					100: '#CAD1DB',
					200: '#A5B1C2',
					300: '#8192AA',
					400: '#60738E',
					500: '#475569',
					600: '#3B4657',
					700: '#2E3744',
					800: '#222932',
					900: '#161A20'
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class'
};

module.exports = config;
