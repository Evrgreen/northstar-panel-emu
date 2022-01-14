import { useRouter } from 'next/router';
import { useDynamicSlug } from '@src/utils/useRouterHelpers';
import React, { useEffect, useState } from 'react';
import { useArmContext, useUserContext, useZoneContext } from '@src/store';
import { STUB_CONSTS } from '@src/data/constants';

type initialStateType = string | undefined;
type initialHandlerType =
	| React.Dispatch<React.SetStateAction<string>>
	| undefined;

export const useKeypadLogic = (
	initialState: initialStateType = undefined,
	initialHandler: initialHandlerType = undefined,
) => {
	const router = useRouter();
	const [state, setState] = useState<string>('');
	const { masterCode, installerCode, getAllUserCodes } = useUserContext();
	const { bypassSelectedZones, clearAllBypass } = useZoneContext();
	const { armAway, armCustom, disarm, armStay } = useArmContext();
	const path = useDynamicSlug();

	const code = initialState ?? state;
	const setCode = initialHandler ?? setState;
	const allUserCodes = getAllUserCodes();

	const buttonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const button: HTMLButtonElement = event.currentTarget;
		let value: string = button.value;
		if (value === 'Clear') {
			setCode('');
		} else if (value === 'Back') {
			setCode((currentCode) => currentCode.slice(0, -1));
		} else {
			setCode((currentCode) => {
				return (currentCode += value);
			});
		}
	};
	const enterToolbox = () => {
		switch (code) {
			case masterCode:
				router.replace('/lyric/ui/toolbox/user');
				break;
			case installerCode:
				router.replace('/lyric/ui/toolbox/installer');
				break;
			default:
				router.push('/lyric/ui/security');
				break;
		}
	};
	const changeArmStatus = () => {
		switch (path) {
			case STUB_CONSTS.AWAY_STUB:
				armAway();
				break;
			case STUB_CONSTS.STAY_STUB:
				armStay();
				break;
			case STUB_CONSTS.CUSTOM_STUB:
				armCustom();
				break;
			case STUB_CONSTS.DISARM_STUB:
				disarm();
				break;
		}
		router.push('/lyric/ui/security');
	};
	useEffect(() => {
		if (code.length != 4) {
			return;
		}
		if (!allUserCodes.includes(code)) {
			router.push('/lyric/ui/security');
			return;
		}
		switch (path) {
			case STUB_CONSTS.AWAY_STUB:
			case STUB_CONSTS.STAY_STUB:
			case STUB_CONSTS.DISARM_STUB:
			case STUB_CONSTS.CUSTOM_STUB:
				changeArmStatus();
				break;
			case STUB_CONSTS.TOOLS_STUB:
				enterToolbox();
				break;
			case STUB_CONSTS.BYPASS_STUB:
				bypassSelectedZones();
				router.back();
				break;
			case STUB_CONSTS.BYPASS_CLEAR_STUB:
				clearAllBypass();
				router.back();
				break;
			default:
				router.push('/lyric/ui/security');
		}
	}, [code]);

	return { code, buttonClick };
};
