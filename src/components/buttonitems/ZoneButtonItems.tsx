import { ZoneType } from '@src/data/types';
import useZoneContext from '@src/store/zone-context';
import React from 'react';
import { findRouteEnd } from '@src/utils/useRouterHelpers';

interface props {
	item?: ZoneType;
}

const ZoneButtonItems = ({ item }: props) => {
	if (!item) {
		return <></>;
	}

	const { selectedZoneForBypass, selectedZone } = useZoneContext();
	const path = findRouteEnd();
	return (
		<div
			className={`w-full text-left pl-1 h-full flex ${
				(selectedZoneForBypass.includes(item.zoneNumber) ||
					selectedZone === item.zoneNumber) &&
				'bg-blue-400'
			} `}>
			{path === 'zones' && (
				<div className='aspect-square h-full bg-green-400'></div>
			)}
			<div className='my-auto'>
				<p className='inline text-xl'>{`${item.zoneNumber}. `}</p>
				{(item.zoneDesc1 || item.zoneDesc2) && (
					<p className='inline text-lg'>{`${item.zoneDesc1 ?? ''} ${
						item.zoneDesc2 ?? ''
					}`}</p>
				)}
				<p
					className={`${
						item.zoneDesc1 || item.zoneDesc2 ? 'block' : 'inline'
					} text-lg`}>
					{item.device}
				</p>
			</div>
		</div>
	);
};

export default ZoneButtonItems;
