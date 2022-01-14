import { createContext, useContext, useState } from 'react';
import { PartialZoneType, ZoneType } from '@src/data/types';

const defaultZones: ZoneList = [
	{ zoneNumber: 1, device: 'NEW' },
	{ zoneNumber: 2, device: 'NEW', bypassed: false },
	{ zoneNumber: 3, zoneDesc1: 'FRONT', device: 'DOOR' },
	{ zoneNumber: 4, zoneDesc1: 'BACK', device: 'DOOR' },
	{
		zoneNumber: 5,
		device: 'WINDOW',
	},
	{ zoneNumber: 6, device: 'MOTION SENSOR' },
];

type ZoneList = ZoneType[] | PartialZoneType[];

const ZoneContext = createContext({
	zones: defaultZones,
	totalZones: 0,
	areZonesBypassed: false,
	deleteZone: (id: number) => {},
	selectedZone: undefined as number | undefined,
	selectActiveZone: (zoneId: number) => {},
	selectedZoneForBypass: [] as number[],
	selectZoneToBypass: (zoneNumber: number) => {},
	selectAllToBypass: () => {},
	bypassSelectedZones: () => {},
	clearAllBypass: () => {},
});

const useZoneContext = () => {
	return useContext(ZoneContext);
};

export const ZoneContextProvider = (props: any) => {
	const [zoneList, setZoneList] = useState<ZoneList>(defaultZones);
	const [selectedZone, setSelectedZone] = useState<number>();
	const [selectedZoneForBypass, setSelectedZoneForBypass] = useState<
		number[]
	>([]);

	// -----------------bypass related functions--------------------------------
	const selectZoneToBypass = (zoneNumber: number) => {
		const newArray = selectedZoneForBypass.filter(
			(zoneid) => zoneid !== zoneNumber,
		);
		setSelectedZoneForBypass((prevState) => {
			return newArray.length === prevState.length
				? [...prevState, zoneNumber]
				: newArray;
		});
	};
	const selectAllToBypass = () => {
		setSelectedZoneForBypass([...zoneList.map((item) => item.zoneNumber!)]);
	};

	const bypassSelectedZones = () => {
		const newItems = zoneList.filter((zone) =>
			selectedZoneForBypass.includes(zone.zoneNumber as number),
		);
		newItems.forEach((zone) => {
			return (zone.bypassed = true);
		});
		const ids = new Set(selectedZoneForBypass);
		setZoneList((prevZoneList) =>
			[
				...prevZoneList.filter((zone) => !ids.has(zone.zoneNumber!)),
				...newItems,
			].sort((a, b) => (a.zoneNumber! > b.zoneNumber! ? 1 : -1)),
		);
		setSelectedZoneForBypass([]);
	};

	const clearAllBypass = () => {
		setZoneList((prevList) =>
			prevList.map((item) =>
				Object.assign(item, (item.bypassed = false)),
			),
		);
	};
	// ----------------------------------END BYPASS functions-------------------------------------------
	// console.log(zoneList);
	const selectActiveZone = (zoneId: number) => {
		// const [selectedZone] = zoneList.filter(
		// 	(zone) => zone.zoneNumber === zoneId,
		// );

		setSelectedZone(zoneId);
	};
	console.log(`selected zone ${selectedZone}`);
	// const addNewUserHandler = (user: User) => {
	// 	setUserList((prevUsers) => [...prevUsers, user]);
	// };

	// const updateNewUserHandler = (user: User) => {
	// 	let userToUpdate = userList.find(
	// 		(storedUser) => storedUser.id === user.id,
	// 	);
	// };

	const deleteZone = () => {};
	// 	if (!activeUser) return;
	// 	if (['2', '47', '48'].includes(activeUser.id)) {
	// 		const newUser = {
	// 			...activeUser,
	// 			usercode: '',
	// 			zwavecontrol: false,
	// 			zwaveunlock: false,
	// 		};
	// 		setUserList((currentUsers) =>
	// 			currentUsers.map((user) =>
	// 				user.id === activeUser.id ? newUser : user,
	// 			),
	// 		);
	// 	} else {
	// 		setUserList((prevUsers) =>
	// 			prevUsers.filter((user) => user.id !== activeUser.id),
	// 		);
	// 	}
	// 	setActiveUser(undefined);
	// };
	const context = {
		zones: zoneList,
		totalZones: zoneList.length,
		selectActiveZone,
		selectedZone,
		selectedZoneForBypass,
		selectAllToBypass,
		areZonesBypassed: zoneList.some((item) => item.bypassed),
		clearAllBypass,
		selectZoneToBypass,
		bypassSelectedZones,
		deleteZone,
	};
	return (
		<ZoneContext.Provider value={context}>
			{props.children}
		</ZoneContext.Provider>
	);
};

export default useZoneContext;
