import React, { useEffect, useState, useContext } from 'react';
import { getLayout } from '@src/components/layout/lyric';
import RightBar from '@src/components/lyric/rightBar';
import KeypadKeys from '@src/components/buttonlist/keypad/KeypadKeys';
import KeypadInfo from '@src/components/buttonlist/keypad/KeypadInfo';
import { useKeypadLogic } from '@src/hooks/useKeypadLogic';
const KeypadPage = () => {
	const { code, buttonClick } = useKeypadLogic();
	return (
		<div className='grid [grid-template-columns:40%_60%] max-w-full'>
			<KeypadInfo code={code} />
			<div className='box-border   w-full bg-lyric-grey-300 col-start-2 grid [grid-template-columns:85%_15%]'>
				<KeypadKeys clickHandler={buttonClick} />
				<div className='max-w-full w-full'>
					<RightBar />
				</div>
			</div>
		</div>
	);
};

KeypadPage.getLayout = getLayout;

export default KeypadPage;
