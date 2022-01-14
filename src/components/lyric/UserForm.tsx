	import {
		StatefulButtonItem,
		GridWithSideBar,
		SquareButtonList,
		Modal,
	} from '@src/components/lyric';

	import { useEffect, useState } from 'react';
	import router from 'next/router';
	import { User } from '@src/data/types';
	import { userFormButtonData } from '@src/data';
	import useUserContext from '@src/store/user-context';

	interface props {
		user?: User;
	}
	const UserForm = ({ user }: props) => {
		const { totalUsers, addNewUser, users, activeUser } = useUserContext();

		const [showModal, setShowModal] = useState(false);
	const [name, setname] = useState('');
	const [id, setid] = useState((totalUsers - 1).toString());
	const [usercode, setusercode] = useState('');
	const [zwavecontrol, setzwavecontrol] = useState(false);
	const [zwaveunlock, setzwaveunlock] = useState(false);

	useEffect(() => {
		if (!user) return;
		setname(user.label);
		setid(user.id);
		user.usercode && setusercode(user.usercode as string);
		setzwaveunlock(user.zwaveunlock as boolean);
		setzwavecontrol(user.zwavecontrol as boolean);
	}, [user]);

	const handleAddNewUser = () => {
		for (let user of users) {
			if (usercode === user.usercode && usercode !== activeUser?.id) {
				setShowModal(true);
				return;
			}
		}
		const user = {
			label: name ? name : `User ${id}`,
			id,
			zwaveunlock,
			zwavecontrol,
			usercode,
		};
		addNewUser(user);
		router.back();
	};

	userFormButtonData.forEach((item) => {
		item.state = {
			state: eval(item.label.toLowerCase()),
			setState: eval(`set${item.label.toLowerCase()}`),
		};
		if (item.label === 'id') {
			item.title = item.state;
		}
		if (typeof item.deps !== 'undefined') {
			item.linkedState = eval(item.deps.toLowerCase()) ?? false;
		}
	});
	return (
		<>
			<GridWithSideBar
				sidebarItems={{
					label: 'SAVE',
					clickHandler: handleAddNewUser,
				}}>
				<SquareButtonList items={userFormButtonData}>
					<StatefulButtonItem />
				</SquareButtonList>
				{showModal && (
					<Modal
						content={'User code not accepted'}
						closeHandler={setShowModal}
					/>
				)}
			</GridWithSideBar>
		</>
	);
};

export default UserForm;
