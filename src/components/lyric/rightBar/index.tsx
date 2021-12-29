import React, { ReactNode, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';

interface props {
	children?: ReactNode;
	backFunction?: (event: SyntheticEvent) => void;
}

function RightBar({ children, backFunction }: props) {
	const router = useRouter();

	return (
		<div className='row-span-2 h-full text-white bg-gradient-to-b  from-lyric-blue-900 via-lyric-blue-700  to-lyric-blue'>
			<div
				onClick={(event) =>
					backFunction ? backFunction(event) : router.back()
				}>
				Back
			</div>
			{children}
		</div>
	);
}

export default RightBar;
