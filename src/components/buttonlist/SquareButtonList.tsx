import React, { ReactElement } from 'react';
import SquareButton, { Styles } from '@src/components/buttons/SquareButton';

interface props {
	children?: ReactElement[] & any;
	clickHandler?: any;
	items?: any;
	center?: boolean;
	secondary?: boolean;
}

const SquareButtonList = ({
	children,
	items,
	clickHandler,
	...rest
}: props) => {
	const renderItems = Array.isArray(items) ? items : [items];

	return (
		<>
			<section className='w-full grid grid-cols-6 gap-2 p-2 [grid-auto-rows:fit-content(100%)]'>
				{renderItems.map((item: any, index) => {
					console.log(item);
					return (
						<SquareButton
							clickHandler={
								clickHandler
									? () => clickHandler(item)
									: () => {}
							}
							key={`btn_item-+${index}`}
							styles={item?.additionalstyles}
							{...rest}
							deps={item?.deps}>
							{React.cloneElement(children, { item: item })}
						</SquareButton>
					);
				})}
			</section>
		</>
	);
};

export default SquareButtonList;
