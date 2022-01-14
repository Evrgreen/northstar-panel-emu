import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
type SettingsProps = PropTypes.InferProps<typeof propTypes>;
import ButtonList from '@src/components/buttonlist/Buttonlist';
import { buttondata } from '@src/data/homescreeData';
import { getLayout } from '@src/components/layout/lyric';
import { GridWithSideBar } from '@src/components/lyric';
import RightBar from '@src/components/lyric/rightBar';

const SettingsPage = ({}: SettingsProps) => {
	return (
		<div className='grid [grid-template-columns:90%_10%] w-full bg-orange-400 h-full'>
			<div className=' grid grid-cols-2 bg-slate-500 h-full w-full'>
				<div>
					
				</div>
			</div>
			<RightBar />
			<div className=' col-start-1 w-full bg-green-300'></div>
		</div>
	);
};

SettingsPage.getLayout = getLayout;
export default SettingsPage;
