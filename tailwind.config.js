const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./src/app/**/*.html', './src/index.html'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				blue: {
					100: '#D8E6FF',
					200: '#C4DAFF',
					300: '#9DC2FF',
					400: '#76A9FF',
					500: '#4F91FF',
					600: '#2979FF',
					700: '#2264D1',
					800: '#1B4EA3',
					900: '#133774 ',
				},
				green: {
					100: '#DCEDDD',
					200: '#CBE5CC',
					300: '#A9D3AB',
					400: '#87C289',
					500: '#65B168',
					600: '#43A047',
					700: '#37833B',
					800: '#2B662E',
					900: '#1F4921',
				},
				yellow: {
					100: '#FFF1DA',
					200: '#FFEAC1',
					300: '#FFDC99',
					400: '#FFCF70',
					500: '#FFC147',
					600: '#FFB41F',
					700: '#D1941A',
					800: '#A37314',
					900: '#74520F ',
				},
				red: {
					100: '#FDDCDA',
					200: '#FCCBC8',
					300: '#FAA9A3',
					400: '#F8877F',
					500: '#F6655A',
					600: '#F44336',
					700: '#C8372D',
					800: '#9C2B23',
					900: '#6F1F19',
				},
				purple: {
					100: '#c6c8dc',
					200: '#a2a4c4',
					300: '#7f81ab',
					400: '#66669a',
					500: '#4f4c8a',
					600: '#494581',
					700: '#403b76',
					800: '#393269',
					900: '#2b2156',
				},
				black: {
					300: '#424242',
					400: '#333333',
					500: '#44464e',
					600: '#292929',
					700: '#1F1F1F',
					800: '#1B1B1D',
					900: '#000000',
				},
				white: {
					500: '#c4c6d0',
					600: '#E0E0E0',
					700: '#F0F0F0',
					800: '#F2F0F4',
					900: '#FFFFFF',
				},
			},
			boxShadow: {
				button: '0px 1px 4px 0px rgba(0,0,0,0.11), 0px 5px 12px 0px rgba(0,0,0,0.13);',
			},
		},
	},
	variants: {
		extend: {
			opacity: ['disabled'],
			cursor: ['disabled'],
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
