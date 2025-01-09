import type { Config } from "tailwindcss";

const config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				gilroy: ["var(--font-gilroy)", "sans-serif"], // fallback as needed
				psygen: ["var(--font-psygen)", "sans-serif"],
				gildDisplay: ["var(--font-gd)", "sans-serif"],
			},
			animation: {
				'spin-slow': 'spin 2s linear infinite', // Changed from 15s to 10s
			},
			textColor: {
				'primary': '#000000',
				'darkGrey': '#B0B0B0',
				'black': '#000000',
				'white': '#FFFFFF',
			},
			backgroundImage: {
				'size-200': '200% 200%',
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%',
			},
			lineHeight: {
				primary: '50.4px',
				relaxed: '32px',
			},
		},
	},
	plugins: [],
} as Config;

export default config;
