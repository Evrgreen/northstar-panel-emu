import React from 'react';
import Link from 'next/link';
import { Button } from '@src/data/types';
import EditButton from './EditButton';

interface props {
	item?: { label: string; link?: string };
}

const StandardButtonItem = ({ item }: props) => {
	if (!item) {
		return <></>;
	}
	let { link, label, ...rest } = item;

	console.log(rest);
	if ('options' in rest) {
		link = EditButton(item);
	}
	let content = link ? (
		<Link href={link}>
			<a className='w-full h-full flex items-center justify-center bg-yellow-400'>
				{label}
			</a>
		</Link>
	) : (
		<span>{label}</span>
	);
	return <>{content}</>;
};

export default StandardButtonItem;
