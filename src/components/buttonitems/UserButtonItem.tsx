import { User } from '@src/data/types';
import React from 'react';

interface props {
	item?: User;
}

const UserButtonItem = ({ item }: props) => {
	if (!item) {
		return <></>;
	}
	return (
		<>
			<span className='[font-size:var(--h5)] pl-5'>{item.label}</span>
			{item.code && <span className='pl-3 text-2xl'>{'****'}</span>}
		</>
	);
};

export default UserButtonItem;
