import StandardButtonItem from '@src/components/buttonitems/StandardButtonItem';
import StatefulButtonItem from '@src/components/buttonitems/StatefulButtonItem';
import SquareButtonList from '@src/components/buttonlist/SquareButtonList';
import { getLayout } from '@src/components/layout/lyric';
import GridWithSideBar from '@src/components/lyric/ui/GridWithSideBar';
import React, { useEffect, useRef, useState } from 'react';

interface ButtonData extends Record<string, any> {
	title: string;
	label: string;
	type: string;
	callback?: string;
	deps?: UserKeys;
}

const btns: ButtonData[] = [
	{ title: 'Name', type: 'keyboard', label: 'name' },
	{ title: '4', type: 'disabled', label: 'id' },
	{ title: 'User Code', type: 'keypad', label: 'usercode' },
	{
		title: 'Z-Wave Lock Control',
		type: 'toggle',
		callback: 'state === true ? "Yes": "No"',
		label: 'zWaveControl',
	},
	{
		title: 'Z-Wave Unlocking Door',
		type: 'toggle',
		callback: 'state=== true ? "Disarm" : "Disabled"',
		deps: 'zWaveControl',
		label: 'zWaveUnlock',
	},
];

// const refCollection = {
// 	name: 'nameRef',
// 	usercode: 'userCodeRef',
// 	zwaveunlockingdoor: 'zWaveUnlockRef',
// 	zwavelockcontrol: 'zWaveControlRef',
// };
type UserKeys = keyof User;
interface User {
	name: string;
	usercode: string;
	id: string;
	zWaveControl: boolean;
	zWaveUnlock: boolean;
}
interface props {
	user: User;
}
const AddUserPage = ({ user }: props) => {
	const [name, setname] = useState(user?.name ?? '');
	const [id, setid] = useState(user?.id ?? 4);
	const [usercode, setusercode] = useState(user?.usercode ?? '');
	const [zwavecontrol, setzwavecontrol] = useState(
		user?.zWaveControl ?? false,
	);
	const [zwaveunlock, setzwaveunlock] = useState(user?.zWaveUnlock ?? false);

	btns.map((item: ButtonData) => {
		console.log('mappingButtons');
		item.state = {
			state: eval(item.label.toLowerCase()),
			setState: eval(`set${item.label.toLowerCase()}`),
		};
		if (typeof item.deps !== 'undefined') {
			item.linkedState = eval(item.deps.toLowerCase());
		}
	});

	return (
		<>
			<GridWithSideBar>
				<SquareButtonList items={btns}>
					<StatefulButtonItem />
				</SquareButtonList>
			</GridWithSideBar>
		</>
	);
};

AddUserPage.getLayout = getLayout;
export default AddUserPage;
