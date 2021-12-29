import React, { ReactElement } from 'react';
import SquareButton, { Styles } from '@src/components/buttons/SquareButton';

interface props {
	children?: ReactElement[] & any;
	items?: any;
	center?: boolean;
	secondary?: boolean;
}

const SquareButtonList = ({ children, items, ...rest }: props) => {
	const renderItems = Array.isArray(items) ? items : [items];

	return (
		<>
			<section className='w-full grid grid-cols-2 gap-2 p-2 [grid-auto-rows:fit-content(100%)]'>
				{renderItems.map((item: any) => {
					return (
						<SquareButton
							key={item.label}
							{...rest}
							deps={item.deps}>
							{React.cloneElement(children, { item: item })}
						</SquareButton>
					);
				})}
			</section>
		</>
	);
};

export default SquareButtonList;
