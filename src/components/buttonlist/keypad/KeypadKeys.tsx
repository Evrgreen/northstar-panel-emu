import React from 'react';

interface props {
	clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const KeypadKeys = ({ clickHandler }: props) => {
	const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Clear', 0, 'Back'];
	return (
		<section className='grid grid-cols-3 gap-2 bg-lyric-grey-300 py-5 h-full'>
			{keys.map((item) => (
				<div className=' text-center text-4xl w-full'>
					<button
						className='bg-ns-white border-4 border-ns-white border-solid hover:border-ns-blue w-3/5 aspect-square rounded-full shadow-md'
						key={item}
						value={item}
						onClick={(event) => clickHandler(event)}>
						{item}
					</button>
				</div>
			))}
		</section>
	);
};

export default KeypadKeys;
