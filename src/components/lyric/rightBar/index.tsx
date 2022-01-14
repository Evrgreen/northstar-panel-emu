import React, { ReactNode, SyntheticEvent } from 'react';
import { useRouter } from 'next/router';

interface props {
	children?: ReactNode[] | ReactNode;
	backFunction?: (event: SyntheticEvent) => void;
	sidebarItems?: { label: string; clickHandler: () => void };
}

function RightBar({ children, backFunction, sidebarItems }: props) {
	const router = useRouter();

	console.log('children of right bar', children);
	return (
		<div
			onClick={(event) => event.stopPropagation()}
			className=' h-full text-white bg-gradient-to-b  from-lyric-blue-900 via-lyric-blue-700  to-lyric-blue flex flex-col justify-between p-5 items-center text-xl text-center row-span-2'>
			<div
				className='cursor-pointer'
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
