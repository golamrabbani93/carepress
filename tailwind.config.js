import {nextui} from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			keyframes: {
				shake: {
					'0%, 100%': {transform: 'translateX(0)'},
					'25%': {transform: 'translateX(-5px)'},
					'50%': {transform: 'translateX(5px)'},
					'75%': {transform: 'translateX(-5px)'},
				},
			},

			animation: {
				shake: 'shake 0.5s ease-in-out infinite',
			},

			boxShadow: {
				'custom-all-around': '0 0 15px 5px rgba(0, 0, 0, 0.1)',
			},
			fontFamily: {
				sans: ['var(--font-sans)'],
				mono: ['var(--font-mono)'],
			},
			colors: {
				primary: '#ff4880',
				secondary: '#a855f7',
				white: '#ffffff',
				black: '#07080a',
				accent: '#c6c6c6',
				neutral: '#3D4451',
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
};
