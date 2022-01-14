import React, { SyntheticEvent, useState } from 'react';
import { keys } from '@src/data/keyboardbuttonData';

const KeyboardKeys = ({ intialState = '', updateState, showKeyboard }: any) => {
	const [state, setState] = useState<string>(intialState);
	const [capsLock, setCapsLock] = useState(false);
	const [showSymbol, setShowSymbol] = useState(false);
	const [showExtraSymbols, setShowExtraSymbols] = useState(false);
	




	const defaultClickHandler = (event: any) => {
		event.stopPropagation();
		const value = event.target.dataset.value;
		switch (value.toLowerCase()) {
			case 'space':
				setState((currentState) => (currentState += ' '));
				break;
			case 'clear':
				setState('');
				break;
			case 'delete':
				setState((currentState) => currentState.slice(0, -1));
				break;
			default:
				setState(
					(currentState) =>
						(currentState += capsLock
							? value
							: value.toLowerCase()),
				);
		}
	};

	return (
		<div
			className='flex flex-col items-center justify-center h-[99.5%] w-full mx-auto'
			onClick={(e) => {
				e.stopPropagation();
			}}>
			<div className='h-1/5 flex justify-between items-center w-[99%]'>
				<div
					data-value='clear'
					onClick={defaultClickHandler}
					className='text-lyric-grey-400 text-3xl flex item-center  top-0 left-0  justify-center items-center h-[95%] border-[2px]   border-gray-500 shadow-md bg-lyric-textPrimary w-[18.75%]
				'>
					Clear
				</div>

				{/* <input
					list='auto-complete-list'
					id='auto-complete-choice'
					name='auto-complete-choice'
					className=' h-[92%] w-[58%] px-5'
					type='text'
					value={state}
					onChange={(event) => {
						event.stopPropagation();
						setState(() => event.target.value);
					}}
				/> */}

				<input
					list='auto-complete-list'
					id='auto-complete-choice'
					name='auto-complete-choice'
					className=' h-[92%] w-[58%] px-5'
					type='text'
					value={state}
					onChange={(event) => {
						event.stopPropagation();
						setState(() => event.target.value);
					}}
				/>

				<div
					data-value='delete'
					onClick={defaultClickHandler}
					className=' text-lyric-grey-400 text-3xl flex item-center   justify-center items-center h-[95%] border-2 border-gray-500 shadow-md bg-lyric-textPrimary w-[18.75%]
				'>
					Delete
				</div>
			</div>
			{keys.map((keyRow, index) => {
				return (
					<div
						key={`keyboard-key-${index}`}
						className=' flex mt-1 gap-1 justify-center max-w-full w-full h-1/5 '>
						{keyRow.map((key) => (
							<div
								key={key.label + Math.random()}
								data-value={showSymbol ? key.symbol : key.label}
								onClick={
									key.clickHandler
										? eval(key.clickHandler)
										: defaultClickHandler
								}
								className={`text-lyric-grey-400 h-full  flex justify-center items-center  border-2 border-gray-500  bg-lyric-textPrimary 
 ${key.width ? key.width : 'w-[9.55%]'}`}>
								{showSymbol && key.symbol
									? showExtraSymbols
										? key.extraSymbol
											? key.extraSymbol
											: ''
										: key.symbol
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

export default KeyboardKeys;
