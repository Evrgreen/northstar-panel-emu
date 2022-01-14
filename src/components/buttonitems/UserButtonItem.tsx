import { User } from '@src/data/types';
import useUserContext from '@src/store/user-context';
import UserContext from '@src/store/user-context';
import React, { useContext } from 'react';

interface props {
	item?: User;
}

const UserButtonItem = ({ item }: props) => {
	if (!item) {
		return <></>;
	}
	const { activeUser } = useUserContext();
	return (
		<div
			className={` w-full h-full flex justify-start items-center ${
				activeUser?.id === item.id && 'bg-blue-400  shadow-sky-700 '
			}`}>
			<span className='[font-size:var(--h5)] pl-5'>{item.label}</span>
			{item.usercode && <span className='pl-3 text-2xl'>{'****'}</span>}
		</div>
	);
};

export default UserButtonItem;
