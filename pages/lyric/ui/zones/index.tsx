import ZoneButtonItems from '@src/components/buttonitems/ZoneButtonItems';
import ActionButtonContainer from '@src/components/buttonlist/ActionButtonContainer';
import SquareButtonList from '@src/components/buttonlist/SquareButtonList';
import { getLayout } from '@src/components/layout/lyric';
import GridWithSideBar from '@src/components/lyric/ui/GridWithSideBar';
import { ZoneType } from '@src/data/types';
import useZoneContext from '@src/store/zone-context';
import React from 'react';

const actionButton = [
	{ label: 'BYPASS FAULTED' },
	{ label: 'CLEAR BYPASS' },
	{ label: 'BYPASS' },
];
const ZonePage = () => {
	const { zones, selectZoneToBypass, selectAllToBypass } = useZoneContext();
	const handleClick = (item: ZoneType) => {
		selectZoneToBypass(item.zoneNumber);
	};

	const selectAllHandler = () => {
		selectAllToBypass();
	};

	return (
		<GridWithSideBar
			sidebarItems={{
				label: 'Select All',
				clickHandler: selectAllHandler,
			}}>
			<SquareButtonList items={zones} clickHandler={handleClick}>
				<ZoneButtonItems />
			</SquareButtonList>
			<ActionButtonContainer />
		</GridWithSideBar>
	);
};

ZonePage.getLayout = getLayout;

export default ZonePage;
