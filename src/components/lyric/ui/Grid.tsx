import React, { ReactNode } from 'react';

interface props {
	children: ReactNode;
}

const Grid = ({ children }: props) => {
	return (
		<div className='grid w-full  col-span-9 grid-cols-6 h-full bg-lyric-grey relative gap-2 py-[.80rem] px-2'>
			{children}
		</div>
	);
};

export default Grid;
