import { getLayout } from '@src/components/layout/lyric';
import React from 'react';

const btns = [
	'q',
	'w',
	'w',
	'w',
	'w',
	'w',
	'w',
	'w',
	'w',
	'w',
	'w',
	'w',
	'w',
	'w',
];

const KeyboardPage = () => {
	return (
		<div className='flex w-full bg-red-400'>
			{btns.map((key) => (
				<div className='p-3 bg-ns-white border-2 border-b-lime-500 h-1/2'>
					{key}
				</div>
			))}
		</div>
	);
};

KeyboardPage.getLayout = getLayout;
export default KeyboardPage;
