import React, { useRef } from 'react';
import RoundedButton from '@src/components/RoundedButton/RoundButton';
import { Button } from '@src/data/types';
import Icon from '@src/components/lyric/icons/SecurtyIcon';
import { setComputedValuePerElement } from '@src/utils/handleComputedValue';
interface props {
	items: Button[];
	columns: number;
	size: string | number;
}

const ButtonList = ({ items, columns = 3, size = '' }: props) => {
	const listRef = useRef<HTMLElement>(null);

	listRef.current?.style?.setProperty('background-color', 'black');
	return (
		<section
			className=' grid grid-cols-3 w-4/5 gap-10  justify-center'
			ref={listRef}>
			{items.map((item) => (
				<RoundedButton
					link={item.link}
					label={item.label}
					armStatus={item.armStatus}>
					<Icon icon={item.icon}></Icon>
				</RoundedButton>
			))}
		</section>
	);
};

export default ButtonList;
