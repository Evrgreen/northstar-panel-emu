import { createContext, ReactNode, useContext, useState } from 'react';
import { User } from '@src/data/types';
const defaultUsers: UserList = [
	{
		label: 'Installer',
		usercode: '4112',
		id: '1',
		zwavecontrol: true,
		zwaveunlock: true,
	},
	{ label: 'Master', usercode: '1234', id: '2' },
	{ label: 'Guest', id: '47', usercode: '' },
	{ label: 'Duress', usercode: '2480', id: '48' },
];

type UserList = User[];

const UserContext = createContext({
	users: defaultUsers,
	totalUsers: 0,
	masterCode: '',
	installerCode: '',
	activeUser: undefined as User | undefined,
	addNewUser: (user: User) => {},
	deleteUser: (userId: string) => {},
	updateUser: (user: User) => {},
	selectActiveUser: (userId: string) => {},
	getAllUserCodes: (): string[] => [],
});

export const UserContextProvider = (props: any) => {
	const [userList, setUserList] = useState<UserList>(defaultUsers);
	const [activeUser, setActiveUser] = useState<User>();
	const [installercode, setInstallerCode] = useState(
		defaultUsers[0].usercode,
	);
	const [mastercode, setMastercode] = useState(defaultUsers[1].usercode);

	const selectActiveUser = (id: string) => {
		for (let user of userList) {
			console.log(user.id, id, user.id === id);
		}
		const [selectedUser] = userList.filter((user) => user.id === id);

		setActiveUser(selectedUser);
	};
	const addNewUserHandler = (user: User) => {
		setUserList((prevUsers) => [...prevUsers, user]);
	};

	const updateNewUserHandler = (user: User) => {
		let userToUpdate = userList.find(
			(storedUser) => storedUser.id === user.id,
		);
	};
	const getAllUserCodes = () => {
		return userList.map((user) => user.usercode);
	};
	const deleteUser = () => {
		if (!activeUser) return;
		if (['2', '47', '48'].includes(activeUser.id)) {
			const newUser = {
				...activeUser,
				usercode: '',
				zwavecontrol: false,
				zwaveunlock: false,
			};
			setUserList((currentUsers) =>
				currentUsers.map((user) =>
					user.id === activeUser.id ? newUser : user,
				),
			);
		} else {
			setUserList((prevUsers) =>
				prevUsers.filter((user) => user.id !== activeUser.id),
			);
		}
		setActiveUser(undefined);
	};
	console.log(userList);
	const context = {
		users: userList,
		totalUsers: userList.length,
		masterCode: mastercode,
		installerCode: installercode,
		activeUser: activeUser,
		addNewUser: addNewUserHandler,
		updateUser: updateNewUserHandler,
		deleteUser,
		selectActiveUser,
		getAllUserCodes,
	};
	return (
		<UserContext.Provider value={context}>
			{props.children}
		</UserContext.Provider>
	);
};

const useUserContext = () => {
	return useContext(UserContext);
};

export default useUserContext;
