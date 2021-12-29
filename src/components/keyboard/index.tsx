import React, { SyntheticEvent, useState } from 'react';

interface Key {
	label: string;
	width?: string;
	symbol?: string;
	clickHandler?: string;
}

const keys = [
	[
		{ label: 'Q', symbol: '1' },
		{ label: 'W', symbol: '1' },
		{ label: 'E', symbol: '1' },
		{ label: 'R', symbol: '1' },
		{ label: 'T', symbol: '1' },
		{ label: 'Y', symbol: '1' },
		{ label: 'U', symbol: '1' },
		{ label: 'I', symbol: '1' },
		{ label: 'O', symbol: '1' },
		{ label: 'P', symbol: '1' },
	],
	[
		{ label: 'A', symbol: '1' },
		{ label: 'S', symbol: '1' },
		{ label: 'D', symbol: '1' },
		{ label: 'F', symbol: '1' },
		{ label: 'G', symbol: '1' },
		{ label: 'H', symbol: '1' },
		{ label: 'J', symbol: '1' },
		{ label: 'K', symbol: '1' },
		{ label: 'L', width: '[width:7rem]', symbol: '1' },
	],
	[
		{
			label: '123@...',
			width: '[width:9rem]',
			symbol: 'ABC',
			clickHandler:
				'(event)=> setShowSymbol((currentState)=> !currentState)',
		},
		{ label: 'Z', symbol: '1' },
		{ label: 'X', symbol: '1' },
		{ label: 'C', symbol: '1' },
		{ label: 'V', symbol: '1' },
		{ label: 'B', symbol: '1' },
		{ label: 'N', symbol: '1' },
		{ label: 'M', symbol: '1' },
		{
			label: 'ABC...',
			width: '[width:10rem]',
			symbol: '_*$...',
			clickHandler: '(event)=>setCapsLock((currentState)=>!currentState)',
		},
	],
	[
		{ label: 'Cancel', width: '[width:12rem]' },
		{ label: '' },
		{ label: '' },
		{ label: 'Space', width: '[width:28rem]' },
		{ label: 'Done', width: '[width:12rem]' },
	],
];

const Keyboard = ({ updateState }: any) => {
	const [capsLock, setCapsLock] = useState(false);
	const [showSymbol, setShowSymbol] = useState(false);
	const defaultClickHandler = (event: any) => {
		const value = event.target.dataset.value;

		updateState(
			(currentState) =>
				(currentState +=
					value.toLowerCase() === 'space'
						? ' '
						: capsLock
						? value
						: value.toLowerCase()),
		);
	};

	return (
		<div className='flex flex-col items-center justify-center'>
			<div
				className='flex item-center absolute top-2 left-5  justify-center items-center h-[5.5rem] border-[1px] border-y-2  border-lyric-grey shadow-md bg-lyric-textPrimary w-[12.75rem]
'>
				<p className='text-3xl text-lyric-grey-400'>Clear</p>
			</div>
			<div
				className='flex item-center absolute top-2 right-5  justify-center items-center h-[5.5rem] border-[1px] border-y-2 border-lyric-grey shadow-md bg-lyric-textPrimary w-[12.75rem]
'>
				<p className='text-3xl text-lyric-grey-400'>Delete</p>
			</div>
			{keys.map((keyRow: Key[], index) => {
				return (
					<div
						key={index}
						className=' flex mt-2 gap-3 justify-center max-w-full'>
						{keyRow.map((key) => (
							<div
								key={key.label + Math.random()}
								data-value={showSymbol ? key.symbol : key.label}
								onClick={
									key.clickHandler
										? eval(key.clickHandler)
										: defaultClickHandler
								}
								className={`text-lyric-grey-400 h-[5.5rem]  flex justify-center items-center  border-[1px] border-y-2 border-lyric-grey  bg-lyric-textPrimary 
 ${key.width ? key.width : 'w-24'}`}>
								{showSymbol && key.symbol
									? key.symbol
									: key.label.length === 1
									? capsLock
										? key.label
										: key.label.toLowerCase()
									: capsLock && key.label.startsWith('A')
									? key.label.toLowerCase()
									: key.label}
							</div>
						))}
					</div>
				);
			})}
		</div>
	);
};

export default Keyboard;
