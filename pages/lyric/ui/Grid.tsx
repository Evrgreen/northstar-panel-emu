import React, { ReactNode } from 'react';

interface props {
	children: ReactNode;
}

const Grid = ({ children }: props) => {
	return (
		<div className='grid grid-cols-6 col-span-9 h-full bg-lyric-grey-400 relative gap-2 px-2 py-2 justify-center items-center'>
			{children}
		</div>
	);
};

export default Grid;
