import { Event } from '@src/data/types';
import React from 'react';

interface props {
	item?: Event;
}

function EventButtonItem({ item }: props) {
	if (!item) {
		return <></>;
	}
	return (
		<>
			<div className='pl-5 text-left text-lg'>
				<div className=''>{`${item.timestamp},  Zone:${item.zone}`}</div>
				<span className=''>{`${item.troubleType.label}, ${item.troubleType.code}`}</span>
			</div>
		</>
	);
}

export default EventButtonItem;
