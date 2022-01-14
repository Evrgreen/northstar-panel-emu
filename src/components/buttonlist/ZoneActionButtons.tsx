import useZoneContext from '@src/store/zone-context';
import React from 'react';
import Link from 'next/link';

const ZoneActionButtons = () => {
	const { selectedZoneForBypass, areZonesBypassed } = useZoneContext();
	console.log(areZonesBypassed);
	return (
		<>
			<button
				disabled={true}
				className={`bg-lyric-blue text-ns-white text text-2xl disabled:bg-gray-500 disabled:bg-opacity-50 disabled:text-gray-300 rounded-sm`}>
				{false ? (
					<span>BYPASS FAULTED</span>
				) : (
					<Link href='keypad/bypass'>
						<a className=' w-full h-full flex items-center justify-center'>
							BYPASS FAULTED
						</a>
					</Link>
				)}
			</button>
			<button
				disabled={!areZonesBypassed}
				className={`bg-lyric-blue text-ns-white text text-2xl disabled:bg-gray-500 disabled:bg-opacity-50 disabled:text-gray-300 rounded-sm`}>
				{false ? (
					<span>CLEAR BYPASS</span>
				) : (
					<Link href='keypad/clearbypass'>
						<a className='w-full h-full flex items-center justify-center'>
							CLEAR BYPASS
						</a>
					</Link>
				)}
			</button>
			<button
				disabled={!selectedZoneForBypass.length}
				className={`bg-lyric-blue text-ns-white text text-2xl disabled:bg-gray-500 disabled:bg-opacity-50 disabled:text-gray-300 rounded-sm`}>
				{selectedZoneForBypass.length === 0 ? (
					<span>BYPASS</span>
				) : (
					<Link href='keypad/bypass'>
						<a className=' w-full h-full flex items-center justify-center'>
							BYPASS
						</a>
					</Link>
				)}
			</button>
		</>
	);
};

export default ZoneActionButtons;
