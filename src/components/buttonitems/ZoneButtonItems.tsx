import React from 'react';

interface ZoneItem {
	label: string;
	zone: number;
	deviceType: string;
}

interface props {
	item?: ZoneItem;
}

const ZoneButtonItems = ({ item }: props) => {
	if (!item) {
		return <></>;
	}
	return (
		<div>
			<p>{`${item.zone}. ${item.label}`}</p>
			<span>{item.deviceType}</span>
		</div>
	);
};

export default ZoneButtonItems;
