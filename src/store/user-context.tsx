import { createContext, ReactNode, useState } from 'react';
const defaultUsers: UserList = [
	{ label: 'Installer', code: 4112, id: 1 },
	{ label: 'Master', code: 1234, id: 2 },
	{ label: 'Guest', id: 47 },
	{ label: 'Duress', code: 2480, id: 48 },
];

interface User {
	label: string;
	code?: number | undefined;
	id?: number;
}
type UserList = User[];

const UserContext = createContext({
	users: defaultUsers,
	totalUsers: 0,
	masterCode: undefined as number | undefined,
	installerCode: undefined as number | undefined,
	addNewUser: (user: User) => {},
	deleteUser: (userId: number) => {},
});

export const UserContextProvider = (props: any) => {
	const [userList, setUserList] = useState<UserList>(defaultUsers);
	const [activeUser, setActiveUser] = useState();
	const [installercode, setInstallerCode] = useState(defaultUsers[0].code);
	const [mastercode, setMastercode] = useState(defaultUsers[1].code);

	const selectActiveUser = () => {};
	const addNewUserHandler = (user: User) => {
		setUserList((prevUsers) => [...prevUsers, user]);
	};
	const deleteUser = (userId: number) => {
		setUserList((prevUsers) => {
			return prevUsers.filter((user) => user.id !== userId);
		});
	};

	const context = {
		users: userList,
		totalUsers: userList.length,
		masterCode: mastercode,
		installerCode: installercode,
		addNewUser: addNewUserHandler,
		deleteUser,
	};
	return (
		<UserContext.Provider value={context}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContext;
