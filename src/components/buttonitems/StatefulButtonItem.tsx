import { useKeypadLogic } from '@src/hooks/useKeypadLogic';
import React, { ButtonHTMLAttributes, SyntheticEvent, useState } from 'react';
import KeypadKeys from '../buttonlist/keypad/KeypadKeys';
import Keyboard from '../keyboard';
import RightBar from '../lyric/rightBar';
import GridWithSideBar from '../lyric/ui/GridWithSideBar';
interface props {
	item?: {
		title: string;
		label: string;
		value?: string;
		link?: string;
		ref?: any;
		type: string;
		callback?: string;
		styles?: string;
		state: { state: any; setState: any };
	};
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
		setState((prevState: boolean) => !prevState);
	};

	console.log(item);
	const getContent = (type: string) => {
		switch (type) {
			case 'keyboard':
				return (
					<div
						onClick={() => sethidden(true)}
						className='flex flex-col w-full h-full bg-green-300 items-center'>
						<h5 className='text-lyric-grey-700'>{item.title}</h5>
						<p className=' text-3xl text-lyric-textPrimary'>
							{state}
						</p>
						{hidden && (
							<div className='h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lyric-grey-700 border-2 border-lyric-grey-400'>
								<input
									className=' mt-3 h-[5.25rem] w-[58%]'
									type='text'
									value={state}
									onChange={(event) => {
										event.stopPropagation();
										setState(() => event.target.value);
									}}
								/>
								<Keyboard updateState={setState} />
							</div>
						)}
					</div>
				);
			case 'keypad':
				return (
					<div
						onClick={() => sethidden(true)}
						className='flex flex-col w-full h-full bg-green-300 items-center'>
						<h5 className='text-lyric-grey-700'>{item.title}</h5>
						<p className=' text-3xl text-lyric-textPrimary'>
							{state}
						</p>
						{hidden && (
							<div className='h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lyric-grey-400 grid grid-cols-2'>
								<div className=' flex flex-col justify-center items-center'>
									<h3>User Code</h3>
									<input
										className=' w-2/12 text-center mt-12 text-3xl font-semibold bg-transparent tracking-widest'
										type='text'
										value={state}
										onChange={(event) => {
											event.stopPropagation();
											setState(() => event.target.value);
										}}
									/>
								</div>

								<div className='flex'>
									<div className='flex-1 bg-green-300'>
										<KeypadKeys
											clickHandler={(
												event: React.MouseEvent<HTMLButtonElement>,
											) => {
												const button: HTMLButtonElement =
													event.currentTarget;
												let value: string =
													button.value;
												if (value === 'Clear') {
													setState('');
												} else if (value === 'Back') {
													setState(
														(
															currentState: string,
														) =>
															currentState.slice(
																0,
																-1,
															),
													);
												} else {
													setState(
														(
															currentState: string,
														) => {
															return (
																currentState +
																value
															);
														},
													);
												}
											}}
										/>
									</div>
									<div className='w-28'>
										<RightBar
											backFunction={(event) => {
												event.stopPropagation();
												setState('');
												sethidden(false);
												console.log(hidden);
											}}>
											<div
												className='bg-white'
												onClick={(event) =>
													onSubmit(event)
												}>
												Save
											</div>
										</RightBar>
									</div>
								</div>
							</div>
						)}
					</div>
				);
			case 'disabled':
				return (
					<div
						className={`flex flex-col w-full h-full bg-green-300 items-center ${item.styles}`}>
						<h5 className='text-lyric-grey-700'>{state}</h5>
					</div>
				);
			case 'toggle':
				return (
					<>
						<div
							onClick={(event) => onToggle(event)}
							className='flex flex-col w-full h-full bg-green-300 items-center'>
							<h5 className='text-lyric-grey-700'>
								{item.title}
							</h5>
							<p className=' text-3xl text-lyric-textPrimary'>
								{state}
							</p>

							{eval(item.callback!)}
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
