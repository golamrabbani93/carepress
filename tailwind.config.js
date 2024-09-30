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
