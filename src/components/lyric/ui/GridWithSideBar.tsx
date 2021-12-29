import React, { ReactNode } from 'react';
import RightBar from '../rightBar';

interface props {
	children: ReactNode;
}

const GridWithSideBar = ({ children }: props) => {
	return (
		<div className='w-full grid [grid-template-columns:90%_10%] [grid-template-rows:80%_20%] bg-lyric-grey relative'>
			{children}
			<RightBar />
		</div>
	);
};

export default GridWithSideBar;
