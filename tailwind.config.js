var flattenColorPalette =
	require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = {
	purge: [
		'./pages/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				ns: {
					black: 'var(--clr-ns-neutral-900)',
					blue: 'var(--clr-ns-primary-500)',
					darkblue: 'var(--clr-ns-primary-700)',
					grey: 'var(--clr-ns-neutral-500)',
					white: 'var(--clr-neutral-100)',
				},
				lyric: {
					blue: {
						DEFAULT: 'var(--clr-lyric-200)',
						700: 'var(--clr-lyric-700)',
						900: 'var(--clr-lyric-900)',
					},
					darkRed: 'var(--clr-lyric-alert-700)',
					grey: {
						300: 'var(--clr-lyric-neutral-300)',
						400: 'var(--clr-lyric-neutral-400)',
						DEFAULT: 'var(--clr-lyric-neutral-500)',
						700: 'var(--clr-lyric-neutral-700)',
					},
					red: 'var(--clr-lyric-alert-500)',
					textPrimary: 'var(--clr-lyric-text-primary)',
					textAccent: 'var(--clr-lyric-text-accent)',
					yellow: 'var(--clr-lyric-highlight-400)',
					green: 'var(--clr-lyric-disarmed)',
					white: 'var(--clr-neutral-100)',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		({ addUtilities, e, theme, variants }) => {
			let colors = flattenColorPalette(theme('borderColor'));
			delete colors['default'];

			// Replace or Add custom colors
			if (this.theme?.extend?.colors !== undefined) {
				colors = Object.assign(colors, this.theme.extend.colors);
			}

			const colorMap = Object.keys(colors).map((color) => ({
				[`.border-t-${color}`]: { borderTopColor: colors[color] },
				[`.border-r-${color}`]: { borderRightColor: colors[color] },
				[`.border-b-${color}`]: { borderBottomColor: colors[color] },
				[`.border-l-${color}`]: { borderLeftColor: colors[color] },
			}));
			const utilities = Object.assign({}, ...colorMap);

			addUtilities(utilities, variants('borderColor'));
		},
	],
};
