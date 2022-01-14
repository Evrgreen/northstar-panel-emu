import { Key } from './types';

export const keys: Key[][] = [
	[
		{ label: 'Q', symbol: '1', extraSymbol: '_' },
		{ label: 'W', symbol: '2', extraSymbol: '-' },
		{ label: 'E', symbol: '3', extraSymbol: '?' },
		{ label: 'R', symbol: '4', extraSymbol: '=' },
		{ label: 'T', symbol: '5', extraSymbol: '%' },
		{ label: 'Y', symbol: '6', extraSymbol: '+' },
		{ label: 'U', symbol: '7' },
		{ label: 'I', symbol: '8' },
		{ label: 'O', symbol: '9' },
		{ label: 'P', symbol: '0' },
	],
	[
		{ label: 'A', symbol: '!' },
		{ label: 'S', symbol: '@' },
		{ label: 'D', symbol: '#' },
		{ label: 'F', symbol: '$' },
		{ label: 'G', symbol: '&' },
		{ label: 'H', symbol: '(' },
		{ label: 'J', symbol: ')' },
		{ label: 'K', symbol: ',' },
		{ label: 'L', width: '[width:9.5%]', symbol: '*' },
	],
	[
		{
			label: '123!@#',
			width: '[width:15%]',
			symbol: 'ABC...',
			extraSymbol: 'ABC...',
			clickHandler:
				'(event)=> {setShowExtraSymbols(false);setShowSymbol((currentState)=> !currentState)}',
		},
		{ label: 'Z', symbol: '`' },
		{ label: 'X', symbol: "'" },
		{ label: 'C', symbol: '^' },
		{ label: 'V', symbol: '.' },
		{ label: 'B', symbol: ':' },
		{ label: 'N', symbol: ';' },
		{ label: 'M', symbol: '"' },
		{
			label: 'ABC...',
			width: '[width:15%]',
			symbol: '_-...',
			extraSymbol: '123!@#',
			clickHandler:
				'()=>{showSymbol? setShowExtraSymbols(currentState=>!currentState):setCapsLock((currentState)=>!currentState)}',
		},
	],
	[
		{
			label: 'Cancel',
			extraSymbol: 'Cancel',
			width: '[width:19.05%]',
			clickHandler: '(event) => showKeyboard(event)',
		},
		{ label: '' },
		{ label: '' },
		{
			label: 'Space',
			extraSymbol: 'Space',

			width: '[width:41%]',
		},
		{
			label: 'Done',
			extraSymbol: 'Done',
			width: '[width:19.05%]',
			clickHandler:
				'(event)=>  {updateState(state); showKeyboard(event)}',
		},
	],
];
