import React, { useState, useEffect } from 'react';
import { ARM_STATUS_CONSTS } from '@src/data/constants';
import { useArmContext, useSettingsContext, useZoneContext } from '@src/store';
import {
	findKeyInPath,
	findKeysInPath,
	findRouteEnd,
} from '@src/utils/useRouterHelpers';
import { STUB_CONSTS } from '@src/data/constants';

interface props {
	intialTitle?: string;
}

const topBar = ({ intialTitle = '' }: props) => {
	const [title, setTitle] = useState(() => {
		if (intialTitle) {
			return <>{intialTitle}</>;
		}
		return undefined;
	});

	const { settings } = useSettingsContext();
	const { selectedZone } = useZoneContext();
	const { armState } = useArmContext();

	let exitCountdown = true;
	useEffect(() => {
		if (title !== undefined)
			switch (armState) {
				case ARM_STATUS_CONSTS.ARMED_AWAY:
					setTitle(<>Armed Away</>);
					break;
				case ARM_STATUS_CONSTS.ARMED_STAY:
					setTitle(<>Armed Stay</>);
					break;
				case ARM_STATUS_CONSTS.ARMED_CUSTOM:
					setTitle(
						<>
							Armed Custom{' '}
							{exitCountdown && <span>-Exit Now</span>}
						</>,
					);
					break;
				default:
					setTitle(
						<>
							Ready to Arm
							{settings.chime && <span>-Chime</span>}
						</>,
					);
					break;
			}
	}, [armState]);
	return (
		<div className='mt-12 w-9/12 bg-ns-white p-3 border-2  border-ns-black border-b-4 border-b-ns-grey grid  grid-cols-3 '>
			<div className='h-full w-min '>icong</div>
			<h5
				className={`text-center font-semibold ${
					armState === ARM_STATUS_CONSTS.DISARMED
						? 'text-lyric-green'
						: 'text-lyric-red'
				}`}>
				{selectedZone &&
				findRouteEnd() !== STUB_CONSTS.ZONE_PROGRAMMING ? (
					<>Zone {selectedZone}</>
				) : (
					title
				)}
			</h5>
		</div>
	);
};

export default topBar;
