import { SyntheticEvent, useContext } from 'react';

import UserContext from '@src/store/user-context';
import UserButtonItem from '@src/components/buttonitems/UserButtonItem';
import ActionButtonContainer from '@src/components/buttonlist/ActionButtonContainer';
import SquareButtonList from '@src/components/buttonlist/SquareButtonList';
import GridWithSideBar from '@src/components/lyric/ui/GridWithSideBar';
import { Modal } from '@src/components/lyric';
import { getLayout } from '@src/components/layout/lyric';
import { User } from '@src/data/types';
import useUserContext from '@src/store/user-context';

const UserPage = () => {
	const { activeUser, selectActiveUser, users } = useUserContext();

	const clickHandler = (item: User) => {
		selectActiveUser(item.id);
		console.log('setting selected');
	};
	console.log('Selcted' + activeUser?.label);
	return (
		<GridWithSideBar>
			<SquareButtonList
				items={users.slice(1)}
				clickHandler={clickHandler}>
				<UserButtonItem />
			</SquareButtonList>
			<ActionButtonContainer />
		</GridWithSideBar>
	);
};

UserPage.getLayout = getLayout;

export default UserPage;
