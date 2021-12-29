import { Button } from './types';

export const buttonData: Button[] = [
	{
		link: '/keypad/away',
		label: 'Arm Away',

		icon: 'armedawayDark',
	},
	{
		link: '/keypad/stay',
		label: 'Arm Stay',

		icon: 'armedstay',
	},
	{
		link: '/keypad/custom',
		label: 'Arm Custom',

		icon: 'armedaway',
	},
];
export const disarmButton: Button[] = [
	{ link: '/keypad/disarm', label: 'Disarm', icon: 'disarmed' },
];
export const rightButtonData: Button[] = [
	{ link: '/system', label: 'System', icon: 'notices' },
	{ link: '/keypad/tools', label: 'Tools', icon: 'notices' },
	{ link: '/system', label: 'Messages', icon: 'notices' },
	{ link: '/zones', label: 'Zones', icon: 'notices' },
];
