import ZoneButtonItems from '@src/components/buttonitems/ZoneButtonItems';
import ActionButtonContainer from '@src/components/buttonlist/ActionButtonContainer';
import SquareButtonList from '@src/components/buttonlist/SquareButtonList';
import GridWithSideBar from '@src/components/lyric/ui/GridWithSideBar';
import React from 'react';

const buttons = [
	{ label: 'Perimeter Garage', zone: 3, deviceType: 'Door' },
	{ label: 'Perimeter Garage', zone: 4, deviceType: 'Door' },
	{ label: 'Perimeter Garage', zone: 5, deviceType: 'Door' },
	{ label: 'Perimeter Garage', zone: 6, deviceType: 'Door' },
];
const actionButton = [
	{ label: 'BYPASS FAULTED' },
	{ label: 'CLEAR BYPASS' },
	{ label: 'BYPASS' },
];
const index = () => {
	return (
		<GridWithSideBar>
			<SquareButtonList items={buttons}>
				<ZoneButtonItems />
			</SquareButtonList>
			<ActionButtonContainer items={actionButton} secondary />
		</GridWithSideBar>
	);
};

export default index;
