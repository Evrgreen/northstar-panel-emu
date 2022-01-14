import useUserContext from '@src/store/user-context';
import React from 'react';
import Link from 'next/link';

interface props {
	toggleModal: () => void;
	openModal: (message: string) => void;
}

const UserActionButtons = ({ toggleModal, openModal }: props) => {
	const { deleteUser, activeUser } = useUserContext();
	const currentUser = activeUser;
	const handleDelete = () => {
		if (!currentUser) return;
		openModal('Are you sure');
		deleteUser(currentUser.id);
	};

	const noUser = activeUser === undefined;
	const newUserDisabled =
		activeUser?.id === '2' ||
		activeUser?.id === '47' ||
		activeUser?.id === '48' ||
		!noUser;

	return (
		<>
			<button
				className='bg-lyric-blue  text-ns-white text-2xl shadow-md rounded-sm'
				onClick={noUser ? toggleModal : () => {}}>
				{noUser ? (
					<span>EDIT</span>
				) : (
					<Link href={`users/edituser/${activeUser?.id}`}>
						<a className='w-full h-full flex items-center justify-center'>
							EDIT
						</a>
					</Link>
				)}
			</button>
			<button
				disabled={newUserDisabled}
				className='bg-lyric-blue text-ns-white text-2xl shadow-md disabled:bg-gray-500 disabled:bg-opacity-50 disabled:text-gray-300 rounded-sm'>
				{newUserDisabled ? (
					<span>ADD NEW</span>
				) : (
					<Link href='users/adduser'>
						<a className='w-full h-full flex items-center justify-center'>
							ADD NEW
						</a>
					</Link>
				)}
			</button>
			<button
				disabled={activeUser?.id === '2'}
				onClick={noUser ? toggleModal : handleDelete}
				className={`bg-lyric-blue text-ns-white text text-2xl disabled:bg-gray-500 disabled:bg-opacity-50 disabled:text-gray-300 rounded-sm`}>
				DELETE
			</button>
		</>
	);
};

export default UserActionButtons;
