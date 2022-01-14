import { ArmType } from '@src/data/types';
import { createContext, useContext, useState } from 'react';
import { ARM_STATUS_CONSTS } from '@src/data/constants';

const ArmContext = createContext({
	armState: ARM_STATUS_CONSTS.DISARMED,
	changeArmStatus: (newState: ArmType) => {},
	exitCountdown: () => {},
	disarm: () => {},
	armStay: () => {},
	armAway: () => {},
	armCustom: () => {},
});

export const ArmContextProvider = (props: any) => {
	const [armedStatus, setArmedStatus] = useState(ARM_STATUS_CONSTS.DISARMED);

	const armStatehandler = (newState: ArmType) => {
		console.log(newState);
	};
	const exitCountdown = () => {};
	const disarm = () => {
		setArmedStatus(ARM_STATUS_CONSTS.DISARMED);
	};
	const armAway = () => {
		setArmedStatus(ARM_STATUS_CONSTS.ARMED_AWAY);
	};
	const armStay = () => {
		setArmedStatus(ARM_STATUS_CONSTS.ARMED_STAY);
	};
	const armCustom = () => {
		setArmedStatus(ARM_STATUS_CONSTS.ARMED_CUSTOM);
	};
	const context = {
		armState: armedStatus,
		changeArmStatus: armStatehandler,
		exitCountdown,
		disarm,
		armStay,
		armAway,
		armCustom,
	};

	return (
		<ArmContext.Provider value={context}>
			{props.children}
		</ArmContext.Provider>
	);
};

const useArmContext = () => useContext(ArmContext);

export default useArmContext;
