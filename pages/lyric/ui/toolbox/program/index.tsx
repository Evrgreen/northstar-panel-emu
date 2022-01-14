import StandardButtonItem from '@src/components/buttonitems/StandardButtonItem';
import SquareButtonList from '@src/components/buttonlist/SquareButtonList';
import { getLayout } from '@src/components/layout/lyric';
import GridWithSideBar from '@src/components/lyric/ui/GridWithSideBar';
import React from 'react';

const buttons = [
	{ label: 'Installer Code', link: 'keypad' },
	{ label: 'System Type', link: 'keypad' },
	{ label: 'Date Time', link: 'keypad' },
	{ label: 'Communicator', link: 'keypad' },
	{ label: 'Zones', link: 'program/zoneprogramming' },
	{ label: 'Comm. Diagnostics', link: 'keypad' },
	{ label: 'Keys', link: 'keypad' },
	{ label: 'Reporter', link: 'keypad' },
	{ label: 'Sounder', link: 'keypad' },
	{ label: 'System Settings', link: 'keypad' },
];

const ProgramPage = () => {
	return (
		<GridWithSideBar>
			<SquareButtonList items={buttons} center>
				<StandardButtonItem />
			</SquareButtonList>
		</GridWithSideBar>
	);
};
ProgramPage.getLayout = getLayout;
export default ProgramPage;
