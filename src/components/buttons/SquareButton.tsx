import React, { ReactElement, useEffect, useState } from 'react';

interface props {
	children: ReactElement[] | ReactElement;
	classNames?: string;
	secondary?: boolean;
	center?: boolean;
	full?: boolean;
	revert?: boolean;
	deps?: string;
}
const styleList = {
	secondary: 'bg-lyric-blue text-ns-white',
	center: 'flex justify-center',
	full: 'aspect-revert col-span-full',
	revert: 'aspect-revert',
};

export type Styles = keyof typeof styleList;
const SquareButton = ({ children, classNames, deps, ...rest }: props) => {
	const [hidden, sethidden] = useState(() => {
		return typeof deps === 'boolean' ? deps : true;
	});

	let styles;

	if (rest) {
		styles = Object.keys(rest)
			.map((style) => styleList[style as Styles])
			.join(' ');
	}
	if (typeof children.props.item.linkedState !== 'undefined') {
		styles += styleList['full'];
		if (children.props.item.linkedState === false) return <></>;
	}
	return (
		<button
			className={`bg-ns-white w-full aspect-squarebutton text-2xl shadow-md flex items-center  ${styles} `}>
			{children}
		</button>
	);
};

export default SquareButton;
