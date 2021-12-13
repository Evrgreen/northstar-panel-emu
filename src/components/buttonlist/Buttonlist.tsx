import React, { useRef } from 'react';
import RoundedButton from '@src/components/RoundedButton/RoundButton';
import styles from './buttonlist.module.css';
import { Button } from '@src/data/types';
import Icon from '../lyric/icons/SecurtyIcon';

interface props {
	items: Button[];
	columns?: number;
	size?: number;
}

const Buttonlist = ({ items, columns = 3, size }: props) => {
	let cols = `cols-${columns}`;
	console.log(cols);
	return (
		<section className={`${styles.container} ${styles[cols]}`}>
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
