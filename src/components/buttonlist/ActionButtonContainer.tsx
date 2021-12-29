import React, { ReactElement } from 'react';
import StandardButtonItem from '../buttonitems/StandardButtonItem';
import SquareButton from '../buttons/SquareButton';

interface props {
	children?: ReactElement[] & any;
	items?: any;
	center?: boolean;
	secondary?: boolean;
	full?: boolean;
	revert?: boolean;
}

const ActionButtonContainer = ({ children, items, ...rest }: props) => {
	const renderItems = Array.isArray(items) ? items : [items];
	return (
		<>
			<section className='row-start-2 col-span-1  grid grid-cols-3 gap-3 py-2	 px-3'>
				{renderItems.map((item: any) => {
					return (
						<SquareButton {...rest} center>
							<StandardButtonItem item={item} />
						</SquareButton>
					);
				})}
			</section>
		</>
	);
};

export default ActionButtonContainer;
