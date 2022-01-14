import React from 'react';
// import moduleName from '@src/components/buttonlist/SquareButtonList'
import SquareButtonList from '@src/components/buttonlist/SquareButtonList';
import EventButtonItem from '@src/components/buttonitems/eventButtonItem';
import GridWithSideBar from '@src/components/lyric/ui/GridWithSideBar';
import ActionButtonContainer from '@src/components/buttonlist/ActionButtonContainer';
import { getLayout } from '@src/components/layout/lyric';

const events = [
	{
		timestamp: 'Mon Feb 14, 2021 04:42',
		zone: 900,
		troubleType: { label: 'Cover Tamper', code: 'E341' },
	},
	{
		timestamp: 'Mon Feb 14, 2021 04:42',
		zone: 900,
		troubleType: { label: 'Cover Tamper', code: 'E341' },
	},
	{
		timestamp: 'Mon Feb 14, 2021 04:42',
		zone: 900,
		troubleType: { label: 'Cover Tamper', code: 'E341' },
	},
	{
		timestamp: 'Mon Feb 14, 2021 04:42',
		zone: 900,
		troubleType: { label: 'Cover Tamper', code: 'E341' },
	},
];

const EventPage = () => {
	return (
		<GridWithSideBar>
			<SquareButtonList items={events}>
				<EventButtonItem />
			</SquareButtonList>
			<ActionButtonContainer
				items={{ label: 'EXPORT LOGS' }}
				full
				secondary
				revert
			/>
		</GridWithSideBar>
	);
};

EventPage.getLayout = getLayout;
export default EventPage;
