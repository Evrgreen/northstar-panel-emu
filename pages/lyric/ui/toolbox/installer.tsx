import StandardButtonItem from '@src/components/buttonitems/StandardButtonItem';
import ActionButtonContainer from '@src/components/buttonlist/ActionButtonContainer';
import SquareButtonList from '@src/components/buttonlist/SquareButtonList';
import { getLayout } from '@src/components/layout/lyric';
import GridWithSideBar from '@src/components/lyric/ui/GridWithSideBar';
import React from 'react';

const button = [
	{ label: 'Program', link: 'program' },
	{ label: 'Test', link: 'lyric/ui/toolbox/installer/test' },
	{ label: 'Events', link: '/lyric/ui/toolbox/user/events' },
	{
		label: 'New Panel Association',
		link: 'lyric/ui/toolbox/installer/associate',
	},
	{
		label: 'Update Firmware',
		link: 'lyric/ui/toolbox/installer/firmwareupdate',
	},
];

const InstallerPage = () => {
	return (
		<GridWithSideBar>
			<SquareButtonList items={button} center>
				<StandardButtonItem />
			</SquareButtonList>
			<div className='text-lyric-grey-700 col-start-1 row-start-2 w-[97%] mx-auto bg-ns-white h-3/5 text-center shadow-md '>
				<h5>Lyric Lock (Use Alarmnet 360 to change)</h5>
				<h5>No</h5>
			</div>
		</GridWithSideBar>
	);
};

InstallerPage.getLayout = getLayout;

export default InstallerPage;
