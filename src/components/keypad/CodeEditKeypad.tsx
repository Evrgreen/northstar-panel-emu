import { useKeypadLogic } from '@src/hooks/useKeypadLogic';
import React, { SetStateAction } from 'react';
import KeypadKeys from '../buttonlist/keypad/KeypadKeys';
import RightBar from '../lyric/rightBar';

interface props {
	state: string;
	mount: boolean;
	toggleMount: any;
	setState: any;
	title: string;
}

const CodeEditKeypad = ({
	mount,
	state,
	setState,
	toggleMount,
	title,
}: props) => {
	const { code, buttonClick } = useKeypadLogic(
		state as string,
		setState as React.Dispatch<SetStateAction<string>>,
	);

	return (
		<div
			onClick={toggleMount}
			className='flex flex-col w-full h-full  items-center'>
			<h5 className='text-lyric-grey-700'>{title}</h5>
			<p className=' text-3xl text-lyric-textPrimary'>{state}</p>
			{mount && (
				<div
					onClick={(event) => event.stopPropagation()}
					className='h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lyric-grey-400 grid grid-cols-2'>
					<div className=' flex flex-col justify-center items-center'>
						<h3>User Code</h3>
						<input
							className=' w-2/12 text-center mt-12 text-3xl font-semibold bg-transparent tracking-widest'
							type='text'
							value={state as string}
							onChange={(event) => {
								event.stopPropagation();
								setState(() => event.target.value);
							}}
						/>
					</div>

					<div className='flex'>
						<div className='flex-1 '>
							<KeypadKeys clickHandler={buttonClick} />
						</div>
						<div className='w-28'>
							<RightBar
								backFunction={(event) => {
									setState('');
									toggleMount(event);
								}}>
								<div
									className='cursor-pointer text-xl'
									onClick={toggleMount}>
									SAVE
								</div>
							</RightBar>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CodeEditKeypad;
