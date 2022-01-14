import React, { ReactElement } from 'react';

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactElement[] | ReactElement;
	clickHandler?: any;
	classNames?: string;
	secondary?: boolean;
	center?: boolean;
	full?: boolean;
	revert?: boolean;
	deps?: string;
	disabled?: boolean;
	styles?: string;
}
const styleList = {
	secondary: 'bg-lyric-blue text-ns-white',
	center: 'flex justify-center',
	full: 'aspect-revert col-span-full',
	revert: 'aspect-revert',
};

export type Styles = keyof typeof styleList;
const SquareButton = ({
	children,
	classNames,
	deps,
	disabled,
	clickHandler,
	styles,
	...rest
}: props) => {
	let newStyles;

	if (rest) {
		newStyles = Object.keys(rest)
			.map((style) => styleList[style as Styles])
			.join(' ');
	}
	if (typeof children?.props?.item?.linkedState !== 'undefined') {
		newStyles += styleList['full'];
		if (children.props.item.linkedState === false) return <></>;
	}
	console.log(styles);
	return (
		<button
			className={`bg-ns-white aspect-squarebutton col-span-3 text-2xl shadow-md flex items-center ${styles} ${newStyles}`}
			onClick={clickHandler ? clickHandler : null}>
			{children}
		</button>
	);
};

export default SquareButton;
