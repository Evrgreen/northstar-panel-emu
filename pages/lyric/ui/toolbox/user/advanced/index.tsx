import StandardButtonItem from '@src/components/buttonitems/StandardButtonItem';
import SquareButtonList from '@src/components/buttonlist/SquareButtonList';
import { getLayout } from '@src/components/layout/lyric';
import GridWithSideBar from '@src/components/lyric/ui/GridWithSideBar';
import React from 'react';

const buttons = [
	{ label: 'System Information', link: 'lyric/ui/toolbox/user/systeminfo' },
	{ label: 'Walk Test', link: 'lyric/ui/toolbox/user/systeminfo' },
	{
		label: 'Install Cellular Module',
		link: 'lyric/ui/toolbox/user/systeminfo',
	},
	{ label: 'Comm. Test', link: 'lyric/ui/toolbox/user/systeminfo' },
	{
		label: 'Install Backup Battery',
		link: 'lyric/ui/toolbox/user/systeminfo',
	},
	{ label: 'Reboot', link: 'lyric/ui/toolbox/user/systeminfo' },
	{
		label: 'Update Sensor Firmware',
		link: 'lyric/ui/toolbox/user/systeminfo',
	},
	{
		label: 'Update Keyfob Firmware',
		link: 'lyric/ui/toolbox/user/systeminfo',
	},
];

const AdvancedPage = () => {
	return (
		<GridWithSideBar>
			<SquareButtonList items={buttons} center>
				<StandardButtonItem />
			</SquareButtonList>
		</GridWithSideBar>
	);
};

AdvancedPage.getLayout = getLayout;

export default AdvancedPage;
