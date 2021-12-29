import React, { useContext } from 'react';
import { getLayout } from '@src/components/layout/lyric/index';
import ButtonList from '@src/components/buttonlist/Buttonlist';
import {
	buttonData,
	rightButtonData,
	disarmButton,
} from '@src/data/armScreenData';
import Icon from '@src/components/lyric/icons/SecurtyIcon';
import ArmContext from '@src/store/arm-context';
import BottomBar from '@src/components/buttonlist/BottomBar';
import { ARM_STATUS_CONSTS, TITLE_CONSTS } from '@src/data/constants';

const SecurityPage = () => {
	const { armState } = useContext(ArmContext);
	const title = TITLE_CONSTS[armState];

	return (
		<>
			<div className='flex flex-wrap w-full   relative'>
				<div className='  w-2/4 flex flex-col justify-between bg-lyric-grey-400 pt-5'>
					<section className=' text-center '>
						<Icon icon={'disarmgreen'} size={'180'} />
						<h4>{title}</h4>
					</section>
					<div className='pb-12'>
						{armState === ARM_STATUS_CONSTS.DISARMED ? (
							<ButtonList items={buttonData} size={1} />
						) : (
							<ButtonList items={disarmButton} columns={1} />
						)}
					</div>
				</div>
				<div className=' w-2/4 mx-auto bg-lyric-grey pt-16'>
					<ButtonList items={rightButtonData} size={2} columns={2} />
				</div>
				<BottomBar />
			</div>
		</>
	);
};
SecurityPage.getLayout = getLayout;
export default SecurityPage;
