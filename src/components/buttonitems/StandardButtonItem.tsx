import React from 'react';
import Link from 'next/link';
import { Button } from '@src/data/types';

interface props {
	item?: Button;
}

const StandardButtonItem = ({ item }: props) => {
	if (!item) {
		return <></>;
	}
	let content = item.link ? (
		<Link href={item.link}>
			<a className='w-full h-full flex items-center justify-center bg-yellow-400'>
				{item.label}
			</a>
		</Link>
	) : (
		<span>{item.label}</span>
	);
	return <>{content}</>;
};

export default StandardButtonItem;
