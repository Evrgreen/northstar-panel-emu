import React, { ReactNode } from 'react';
import RightBar from '../rightBar';

type sidebarItem = { label: string; clickHandler: any };
interface props {
	children: ReactNode;
	sidebarItems?: sidebarItem[] | sidebarItem;
}

const GridWithSideBar = ({ children, sidebarItems }: props) => {
	let extraitems: ReactNode[] = [];

	console.log(sidebarItems);
	if (sidebarItems) {
		const renderItems = Array.isArray(sidebarItems)
			? sidebarItems
			: [sidebarItems];
		extraitems = renderItems.map((item) => (
			<div className='cursor-pointer' onClick={item.clickHandler}>
				{item.label}
			</div>
		));
	}
	return (
		<div className='w-full grid [grid-template-columns:90%_10%]  bg-lyric-grey relative'>
			{children}
			<RightBar>
				{extraitems.map((item) => (
					<>{item}</>
				))}
			</RightBar>
		</div>
	);
};

export default GridWithSideBar;
