import useUserContext from '@src/store/user-context';
import UserContext from '@src/store/user-context';
import { useContext } from 'react';

const EditButton = (item: any) => {
	const { activeUser } = useUserContext();
	let newLink;
	if (activeUser !== undefined) {
		newLink = item.link + activeUser?.id!;
	}

	return newLink;
};

export default EditButton;
