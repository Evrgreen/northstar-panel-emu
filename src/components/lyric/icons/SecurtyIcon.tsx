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

interface customProps {
	icon: iconType;
	color?: colors;
	size?: string;
}
const SvgComponent = ({
	icon,
	color = 'dark',
	size = '80',
	...props
}: SVGProps<SVGSVGElement> & customProps) => {
	let content = icons[icon] ?? <p>No Icon found</p>;

	let clr = colorDict[color];
	return (
		<svg
			className={`[fill:lyric-${clr}]`}
			xmlns='http://www.w3.org/2000/svg'
			width='100%'
			height={size}
			viewBox='0 0 100 100'>
			{content}
		</svg>
	);
};
export default SvgComponent;
