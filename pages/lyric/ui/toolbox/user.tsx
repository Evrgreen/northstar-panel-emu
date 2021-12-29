import React from 'react';
import { userToolboxdata } from '@src/data/toolboxData';
import ButtonList from '@src/components/buttonlist/Buttonlist';
import { getLayout } from '@src/components/layout/lyric';
import BottomBar from '@src/components/buttonlist/BottomBar';

const UserToolboxPage = () => {
	return (
		<>
			<div className='relative w-full py-5'>
				<ButtonList items={userToolboxdata} columns={4} />
				<BottomBar />
			</div>
		</>
	);
};
UserToolboxPage.getLayout = getLayout;
export default UserToolboxPage;
