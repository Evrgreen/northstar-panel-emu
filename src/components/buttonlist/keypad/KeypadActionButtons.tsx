import React, { useContext } from 'react';
import { useDynamicSlug } from '@src/utils/useDynamicSlug';
import SettingsContext from '@src/store/settings-context';
import ArmContext from '@src/store/arm-context'
const actionButtonTypes = {
	away: [
		{ label: 'Quick Arm', callback: () => {} },
		{ label: 'Silent Exit', callback: () => {} },
	],
	stay: [{ label: 'Quick Arm', callback: () => {} }],
	custom: [
		{ label: 'Entry Delay', callback: () => {} },
		{ label: 'Silent Exit', callback: () => {} },
	],
};
type actionButtons = keyof typeof actionButtonTypes;
const KeypadActionButtons = () => {
	const armType = useDynamicSlug() as actionButtons;
	const { settings } = useContext(SettingsContext);
	const ArmCtx = useContext(ArmContext)
	let content = actionButtonTypes[armType];
	if (!content) {
		return <div></div>;
	}
	settings.quickArm = true;
	if (!settings.quickArm) {
		content = content.filter((item) => item.label !== 'Quick Arm');
	}

	return (
		<div className='w-11/12    mx-auto  grid grid-cols-2 gap-11'>
			{content.map((item) => (
				<button key={item.label} className=' bg-ns-white py-5  shadow-md text-lyric-textAccent text-xl '>
					{item.label}
				</button>
			))}
		</div>
	);
};

export default KeypadActionButtons;
