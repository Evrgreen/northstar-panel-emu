import * as React from 'react';
import { SVGProps } from 'react';
import { icons, iconType } from './icons';

type colors = keyof typeof colorDict;
const colorDict = {
	dark: 'textPrimary',
	green: 'green',
	light: 'white',
	red: 'red',
};

const sizes = {};
interface customProps {
	icon: iconType;
	color?: colors;
}
const SvgComponent = ({
	icon,
	color = 'dark',

	...props
}: SVGProps<SVGSVGElement> & customProps) => {
	let content = <p>No Icon found</p>;
	if (icon !== undefined) {
		content = icons[icon];
	}
	let clr = colorDict[color];
	return (
		<svg
			className={`text-lyric-${clr}`}
			xmlns='http://www.w3.org/2000/svg'
			width='100%'
			height='80'
			viewBox='0 0 100 100'
			preserveAspectRatio='xMinYmin meet'>
			{content}
		</svg>
	);
};
export default SvgComponent;
