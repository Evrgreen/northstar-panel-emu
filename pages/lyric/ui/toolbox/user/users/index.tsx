import { useContext } from 'react';

import UserContext from '@src/store/user-context';
import UserButtonItem from '@src/components/buttonitems/UserButtonItem';
import ActionButtonContainer from '@src/components/buttonlist/ActionButtonContainer';
import SquareButtonList from '@src/components/buttonlist/SquareButtonList';
import GridWithSideBar from '@src/components/lyric/ui/GridWithSideBar';
import { getLayout } from '@src/components/layout/lyric';

const actionButtons = [
	{ label: 'EDIT' },
	{ label: 'ADD NEW', link: 'users/adduser' },
	{ label: 'DELETE' },
];

const UserPage = () => {
	const UserCtx = useContext(UserContext);

	return (
		<GridWithSideBar>
			<SquareButtonList items={UserCtx.users.slice(1)}>
				<UserButtonItem />
			</SquareButtonList>

			<button
				onClick={() =>
					UserCtx.addNewUser({ label: 'Sammy', code: 1111, id: 30 })
				}>
				Click
			</button>
			<ActionButtonContainer items={actionButtons} secondary revert />
		</GridWithSideBar>
	);
};

UserPage.getLayout = getLayout;

export default UserPage;
