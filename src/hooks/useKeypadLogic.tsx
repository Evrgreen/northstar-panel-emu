import UserContext from '@src/store/user-context';
import ArmContext from '@src/store/arm-context';
import { useRouter } from 'next/router';
import { useDynamicSlug } from '@src/utils/useDynamicSlug';
import React, { useContext, useEffect, useState } from 'react';

export const useKeypadLogic = () => {
	const router = useRouter();
	const [code, setCode] = useState<number[]>([]);
	const { masterCode, installerCode } = useContext(UserContext);
	const path = useDynamicSlug();
	const ArmCtx = useContext(ArmContext);

	const buttonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const button: HTMLButtonElement = event.currentTarget;
		let value: string | number = button.value;
		if (value === 'Clear') {
			setCode([]);
		} else if (value === 'Back') {
			setCode((currentCode) => currentCode.slice(0, -1));
		} else {
			value = parseInt(value);
			setCode((currentCode) => {
				return [...currentCode, value as number];
			});
		}
	};
	const enterToolbox = (enteredCode: number) => {
		if (enteredCode === masterCode) {
			router.replace('/lyric/ui/toolbox/user');
		} else if (enteredCode === installerCode) {
			router.replace('/lyric/ui/toolbox/installer');
		} else {
			router.push('/lyric/ui/security');
		}
	};
	const changeArmStatus = (enteredCode: number) => {
		if (path === 'away') {
			ArmCtx.armAway();
		} else if (path === 'stay') {
			ArmCtx.armStay();
		} else if (path === 'custom') {
			ArmCtx.armCustom();
		} else if (path === 'disarm') {
			ArmCtx.disarm();
		}
		router.push('/lyric/ui/security');
	};
	useEffect(() => {
		if (code.length != 4) {
			return;
		}
		const enteredCode = parseInt(code.join(''));
		if (path !== 'tools') {
			changeArmStatus(enteredCode);
		} else {
			enterToolbox(enteredCode);
		}
	}, [code]);

	return { code, buttonClick };
};
