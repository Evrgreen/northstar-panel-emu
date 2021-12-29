import React from 'react';
import CodeDisplay from './CodeDisplay';
import KeypadActionButtons from './KeypadActionButtons';
import KeypadTitle from './KeypadTitle';
interface props {
	code: number[];
}

const KeypadInfo = ({ code }: props) => {
	return (
		<>
			<section className='w-full flex flex-col justify-center h-full bg-lyric-grey-300 '>
				<div className=' flex flex-col justify-center items-center my-28'>
					<KeypadTitle />
					<CodeDisplay codeLength={code.length} />
				</div>
				<KeypadActionButtons />
			</section>
		</>
	);
};

export default KeypadInfo;
