/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["'GeneralSans-Variable'", ...defaultTheme.fontFamily.sans],
			mono: ["'JetBrainsMono'", ...defaultTheme.fontFamily.mono],
		},
		colors: {
			white: "#F2F2F2",
			grey: {
				light: "#E1E1E1",
				mid: "#B8BDB8",
				dark: "#8F948F",
			},
			black: "#282828",
		},
		extend: {
			minHeight: {
				screen: "100vh",
			},
		},
	},
	plugins: [],
};
