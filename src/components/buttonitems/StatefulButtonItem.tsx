import { MandateProps, squareButtonWithState } from '@src/data/types';
import React, { SyntheticEvent, useState } from 'react';
import Keyboard from '../keyboard';
import CodeEditKeypad from '../keypad/CodeEditKeypad';
import SelectList from '../SelectList';
interface props {
	item?: squareButtonWithState;
}

const StatefulButtonItem = ({ item }: props) => {
	if (!item?.state) {
		return <></>;
	}
	const { state, setState } = item.state;
	const [hidden, sethidden] = useState(false);
	const onSubmit = (event: SyntheticEvent) => {
		event.stopPropagation();
		event.preventDefault();
		sethidden(false);
	};

	const onToggle = (event: SyntheticEvent) => {
		event.preventDefault();
		event.stopPropagation();
		setState((prevState) => !prevState);
	};

	const toggleMultiLabel = (event: SyntheticEvent) => {
		setState((prevState) => {
			return prevState >= item.options?.length! - 1
				? 0
				: (prevState as number) + 1;
		});
	};
	const toggleHidden = (event: SyntheticEvent) => {
		event.preventDefault();
		event.stopPropagation();
		sethidden((currentState) => !currentState);
	};

	const getContent = (type: string) => {
		switch (type) {
			case 'disabled':
				return (
					<div
						className={`flex flex-col w-full h-full  items-center ${item.styles} cursor-not-allowed`}>
						<h5 className='text-lyric-grey-700'>{state}</h5>
					</div>
				);
			case 'keyboard':
				return (
					<Keyboard
						hidden={hidden}
						toggleHidden={toggleHidden}
						title={item.title}
						state={state as string}
						setState={setState}
					/>
				);
			case 'keypad':
				return (
					<CodeEditKeypad
						title={item.title}
						state={state as string}
						mount={hidden}
						toggleMount={toggleHidden}
						setState={setState}
					/>
				);
			case 'multiToggle':
				return (
					<div
						onClick={toggleMultiLabel}
						className='flex flex-col w-full h-full  items-center'>
						<p className=' text-xl text-lyric-grey-700'>{item.title}</p>
						<p className=' text-2xl text-lyric-textPrimary mt-5'>{eval(item.callback!)}</p>
					</div>
				);
			case 'roundKeyboard':
				return (
					<div className='flex flex-col w-full h-full  items-center'>
						<h5 className='text-lyric-grey-700'>{item.title}</h5>
					</div>
				);
			case 'selectList':
				return (
					<SelectList
						toggleHidden={toggleHidden}
						hidden={hidden}
						item={
							item as MandateProps<
								squareButtonWithState,
								'options'
							>
						}
					/>
				);

			case 'toggle':
				return (
					<>
						<div
							onClick={(event) => onToggle(event)}
							className='flex flex-col w-full h-full  items-center'>
							<h5 className='text-lyric-grey-700'>
								{item.title}
							</h5>
							<p className=' text-3xl text-lyric-textPrimary'>
								{eval(item.callback!)}
							</p>
						</div>
					</>
				);
			default:
				return <>fallback</>;
		}
	};
	const content = getContent(item.type);
	return <>{content}</>;
};

export default StatefulButtonItem;
