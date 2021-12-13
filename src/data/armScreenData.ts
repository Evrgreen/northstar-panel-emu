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

		icon: 'armedawayDark',
	},
	{
		link: '/keypad/custom',
		label: 'Arm Custom',

		icon: 'armedawayDark',
	},
];

export const rightButtonData: Button[] = [
	{ link: '/system', label: 'System', icon: 'notices' },
	{ link: '/toolKeypad', label: 'Tools', icon: 'notices' },
	{ link: '/system', label: 'Messages', icon: 'notices' },
	{ link: '/zones', label: 'Zones', icon: 'notices' },
];
