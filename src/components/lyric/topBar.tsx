import React, { ReactElement, useContext, useState, useEffect } from 'react';
import SettingsContext from '@src/store/settings-context';
import ArmContext from '@src/store/arm-context';
import { ARM_STATUS_CONSTS } from '@src/data/constants';
const topBar = () => {
	const [title, setTitle] = useState(<></>);

	const SettingsCtx = useContext(SettingsContext);

	const { armState } = useContext(ArmContext);
	let exitCountdown = true;

	useEffect(() => {
		switch (armState) {
			case ARM_STATUS_CONSTS.ARMED_AWAY:
				setTitle(<>Armed Away</>);
				break;
			case ARM_STATUS_CONSTS.ARMED_STAY:
				setTitle(<>Armed Stay</>);
				break;
			case ARM_STATUS_CONSTS.ARMED_CUSTOM:
				setTitle(
					<>Armed Custom {exitCountdown && <span>-Exit Now</span>}</>,
				);
				break;
			default:
				setTitle(
					<>
						Ready to Arm
						{SettingsCtx.settings.chime && <span>-Chime</span>}
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
				{title}
			</h5>
		</div>
	);
};

export default topBar;
