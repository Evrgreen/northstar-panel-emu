import React, {
	SetStateAction,
	SyntheticEvent,
	useEffect,
	useState,
} from 'react';
import { GridWithSideBar, Grid } from '@src/components/lyric';
import { MandateProps, squareButtonWithState } from '@src/data/types';
import RightBar from '../lyric/rightBar';

interface props {
	hidden: boolean;
	toggleHidden: (event: SyntheticEvent) => void;
	item: MandateProps<squareButtonWithState, 'options'>;
}

const SelectList = ({ toggleHidden, hidden, item }: props) => {
	const [pointer, setPointer] = useState(0);
	const [shownOptions, setShownOptions] = useState(() => {
		if (item.options.length > 10) {
			setPointer(10);
			return item.options.slice(0, 10);
		} else {
			return item.options;
		}
	});
	const pageOptionsDown = (event: SyntheticEvent) => {
		event.stopPropagation();
		if (pointer) {
			setShownOptions(item.options.slice(pointer, pointer + 10));
			setPointer((pointer) => pointer + 10);
		}
	};
	const pageOptionsUp = (event: SyntheticEvent) => {
		event.stopPropagation();
		if (pointer) {
			setShownOptions(item.options.slice(pointer - 20, pointer - 10));
			setPointer((pointer) => pointer - 10);
		}
	};

	const submitSelection = (event: SyntheticEvent, label: string) => {
		event.stopPropagation();
		item.state.setState(label);
		toggleHidden(event);
	};

	return (
		<div
			className='flex flex-col w-full h-full  items-center'
			onClick={toggleHidden}>
			<h5 className='text-lyric-grey-700'>{item.title}</h5>
			<h5>{item.state.state}</h5>
			{hidden && (
				<div className='absolute w-full h-full inset-0 bg-red-400 grid grid-cols-10'>
					<Grid>
						{shownOptions?.map((option) => {
							return (
								<div
									onClick={(event) =>
										submitSelection(event, option)
									}
									className='col-span-3 bg-ns-white shadow-md aspect-squarebutton'>
									<p>{option}</p>
								</div>
							);
						})}
					</Grid>
					<RightBar>
						<div className={`h-2/3 flex flex-col`}>
							<button
								disabled={pointer - 10 <= 0}
								className='h-[10%] m-2 '
								onClick={(event) => pageOptionsUp(event)}>
								<p
									className={`${
										pointer - 10 <= 0 && 'hidden'
									}`}>
									UP
								</p>
							</button>
							<button
								disabled={pointer >= item.options.length}
								className='h-[10%] m-2'
								onClick={(event) => pageOptionsDown(event)}>
								<p
									className={`${
										pointer >= item.options.length &&
										'hidden'
									}`}>
									DOWN
								</p>
							</button>
						</div>
					</RightBar>
				</div>
			)}
		</div>
	);
};

export default SelectList;
