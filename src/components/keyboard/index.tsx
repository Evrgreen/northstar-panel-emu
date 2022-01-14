import KeyboardKeys from './KeyboardKeys';

interface props {
	toggleHidden: any;
	title: string;
	state: string;
	setState: any;
	hidden: boolean;
}

const Keyboard = ({ setState, state, title, toggleHidden, hidden }: props) => {
	return (
		<div
			onClick={toggleHidden}
			className='flex flex-col w-full h-full  items-center'>
			<h5 className='text-lyric-grey-700'>{title}</h5>
			<p className=' text-3xl text-lyric-textPrimary'>{state}</p>
			{hidden && (
				<div className='h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lyric-grey-700 border-2 border-lyric-grey-400'>
					<KeyboardKeys
						intialState={state}
						updateState={setState}
						showKeyboard={toggleHidden}
					/>
				</div>
			)}
		</div>
	);
};

export default Keyboard;
