import { squareButtonWithState } from './types';
const deviceOptions = [
	'New',
	'New',
	'New',
	'New',
	'New',
	'New',
	'Door',
	'Window',
	'Door',
	'Window',
	'Door',
	'Window',
	'Door',
	'Motion',
	'Glass Break',
	'Thermostat',
	'Window',
	'Door',
	'Window',
	'Door',
	'Window',
	'Door',
	'Smoke Sensor',
	'New',
	'Door',
	'Window',
	'Door',
	'Window',
	'Door',
	'Window',
	'Door',
	'Motion',
	'Glass Break',
	'Thermostat',
	'Window',
	'Door',
	'Window',
	'Door',
	'Window',
	'Door',
	'Smoke Sensor',
	'New',
	'Door',
	'Window',
	'Door',
	'Window',
	'Door',
	'Window',
	'Door',
	'Motion',
	'Glass Break',
	'Thermostat',
	'Window',
	'Door',
	'Window',
	'Door',
	'Window',
	'Door',
	'Smoke Sensor',
	'New',
	'Door',
	'Window',
	'Door',
	'Window',
	'Door',
	'Window',
	'Door',
	'Motion',
	'Glass Break',
	'Thermostat',
	'Window',
	'Door',
	'Window',
	'Door',
	'Window',
	'Door',
	'Smoke Sensor',
	'New',
	'Door',
	'Window',
	'Door',
	'Window',
	'Door',
	'Window',
	'Door',
	'Motion',
	'Glass Break',
	'Thermostat',
	'Window',
	'Door',
	'Window',
	'Door',
	'Window',
	'Door',
	'Smoke Sensor',
];

const responseOptions = ['Entry Exit 1'];
const chimeOptions = ['Disabled', 'Standard'];
export const zoneFormButtonData: squareButtonWithState[] = [
	{ title: 'Serial Number', label: 'serial', type: 'roundKeyboard' },
	{
		title: 'Loop Number',
		label: 'loopnumber',
		type: 'multiToggle',
		options: ['1', '2', '3', '4'],
		callback: 'item.options[state]',
	},
	{ title: 'Zone Description 1', label: 'zonedesc', type: 'keyboard' },
	{ title: 'Zone Description 2', label: 'zonedesc2', type: 'keyboard' },
	{
		title: 'Device Type',
		label: 'devicetype',
		type: 'selectList',
		options: deviceOptions,
	},
	{
		title: 'Response Type',
		label: 'response',
		type: 'selectList',
		options: responseOptions,
	},

	{
		title: 'Alarm Reporting',
		label: 'alarmreport',
		type: 'toggle',
		callback: 'state === true ? "Yes": "No"',
		additionalstyles: 'col-span-2 aspect-revert h-[80px]',
	},

	{
		title: 'Chime',
		label: 'chime',
		type: 'multiToggle',
		callback: 'item.options[state]',
		options: chimeOptions,
		additionalstyles: 'col-span-2 aspect-revert h-[80px]',
	},

	{
		title: 'Supervision',
		label: 'supervision',
		type: 'toggle',
		callback: 'state === true ? "Supervised": "Unsupervised"',
		additionalstyles: 'col-span-2 aspect-revert h-[80px]',
	},
];
