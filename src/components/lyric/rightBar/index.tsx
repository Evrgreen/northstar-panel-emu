import React from 'react';
import { useRouter } from 'next/router';

function RightBar() {
	const router = useRouter();

	return (
		<div className='h-full w-[5%] text-white bg-gradient-to-b  from-lyric-blue-900 via-lyric-blue-700  to-lyric-blue'>
			<div className='w-100' onClick={() => router.back()}>
				Back
			</div>
		</div>
	);
}

export default RightBar;
