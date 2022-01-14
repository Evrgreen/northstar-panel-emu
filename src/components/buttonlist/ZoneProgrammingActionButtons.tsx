import useZoneContext from '@src/store/zone-context';
import React from 'react';
import Link from 'next/link';

interface props {
	toggleModal: () => void;
	openModal: (message: string) => void;
}
const ZoneProgrammingActionButtons = ({ toggleModal, openModal }: props) => {
	const { zones, selectedZone, deleteZone, selectActiveZone } =
		useZoneContext();
	const currentZone = selectedZone;
	const handleDelete = () => {
		if (!currentZone) return;
		openModal('Are you sure');
	};

	const noZone = selectedZone === undefined;
	// const newDisabled =
	// 	activeZone?.id === '2' ||
	// 	activeZone?.id === '47' ||
	// 	activeZone?.id === '48' ||
	!noZone;

	return (
		<>
			<button
				disabled={noZone}
				className='bg-lyric-blue  text-ns-white text-2xl shadow-md rounded-sm disabled:bg-gray-500 disabled:bg-opacity-50 disabled:text-gray-300'
				onClick={noZone ? toggleModal : () => {}}>
				{noZone ? (
					<span>EDIT</span>
				) : (
					<Link href={`zoneprogramming/${selectedZone}`}>
						<a className='w-full h-full flex items-center justify-center'>
							EDIT
						</a>
					</Link>
				)}
			</button>
			<button
				onClick={() => selectActiveZone(zones.length + 1)}
				className='bg-lyric-blue text-ns-white text-2xl shadow-md disabled:bg-gray-500 disabled:bg-opacity-50 disabled:text-gray-300 rounded-sm'>
				<Link href='zoneprogramming/addzone'>
					<a className='w-full h-full flex items-center justify-center'>
						ADD NEW
					</a>
				</Link>
			</button>
			<button
				disabled={noZone}
				onClick={noZone ? toggleModal : handleDelete}
				className={`bg-lyric-blue text-ns-white text text-2xl disabled:bg-gray-500 disabled:bg-opacity-50 disabled:text-gray-300 rounded-sm`}>
				DELETE
			</button>
		</>
	);
};

export default ZoneProgrammingActionButtons;
