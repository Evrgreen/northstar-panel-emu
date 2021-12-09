import React from 'react';
import PropTypes from 'prop-types';
import LyricLayout from '@src/components/layout/lyric/index';
import ButtonList from '@src/components/buttonlist/Buttonlist';
import { buttonData, rightButtonData } from '@src/data/armScreenData';
import Icon from '@src/components/lyric/icons/SecurtyIcon';
const propTypes = {};
type IndexProps = PropTypes.InferProps<typeof propTypes>;
const Index = ({}: IndexProps) => {
	return (
		<LyricLayout>
			<div className='w-3/5 border-2 border-solid'>
				<section>
					<Icon icon={'disarmgreen'} />
					<h2>Ready to Arm</h2>
				</section>
				<ButtonList items={buttonData} size={1} />
			</div>
			<div className=' w-2/4'>
				<ButtonList items={rightButtonData} size={2} columns={2} />
			</div>
		</LyricLayout>
	);
};
export default Index;
Index.propTypes = propTypes;
