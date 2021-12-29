import React, { useRef } from 'react';
import RoundedButton from '@src/components/RoundedButton/RoundButton';
import { setComputedValueOnRoot } from '@src/utils/handleComputedValue';
import { Button } from '@src/data/types';
import Icon from '../lyric/icons/SecurtyIcon';

interface props {
	items: Button[];
	columns?: number;
	size?: number;
}

const Buttonlist = ({ items, columns = 3, size }: props) => {
	const columnAmount = {
		'--cols': columns.toString(),
	} as React.CSSProperties;
	return (
		<section
			className={`w-full grid [grid-template-columns:repeat(var(--cols),1fr)]      h-full`}
			style={columnAmount}>
			{items.map((item: Button) => (
				<RoundedButton
					size={50}
					key={item.label}
					link={item.link}
					label={item.label}
					armStatus={item.armStatus}>
					<Icon icon={item.icon} />
				</RoundedButton>
			))}
		</section>
	);
};

export default Buttonlist;
