import { squareButtonWithState } from './types';
const btns: squareButtonWithState[] = [
	{ title: 'Name', type: 'keyboard', label: 'name' },
	{ title: '9', type: 'disabled', label: 'id' },
	{ title: 'User Code', type: 'keypad', label: 'usercode' },
	{
		title: 'Z-Wave Lock Control',
		type: 'toggle',
		callback: 'state === true ? "Yes": "No"',
		label: 'zwavecontrol',
	},
	{
		title: 'Z-Wave Unlocking Door',
		type: 'toggle',
		callback: 'state=== true ? "Disarm" : "Disabled"',
		deps: 'zwavecontrol',
		label: 'zwaveunlock',
	},
];

export default btns;
