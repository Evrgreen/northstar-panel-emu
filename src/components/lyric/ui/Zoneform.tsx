import {
	StatefulButtonItem,
	GridWithSideBar,
	SquareButtonList,
	Modal,
} from '@src/components/lyric';

import { useEffect, useState } from 'react';
import router from 'next/router';
import { ZoneType } from '@src/data/types';
import { userFormButtonData } from '@src/data';
import { useZoneContext } from '@src/store';
import { zoneFormButtonData } from '@src/data/ZoneFormButtonData';
import Grid from '@pages/lyric/ui/Grid';
interface props {
	zone?: ZoneType;
}
const ZoneForm = ({ zone }: props) => {
	const { totalZones, zones, selectedZone } = useZoneContext();

	const [showModal, setShowModal] = useState(false);
	const [serial, setserial] = useState();
	const [zonenumber, setzonenumber] = useState(totalZones - 1);
	const [loopnumber, setloopnumber] = useState<number>(0);
	const [zonedesc, setzonedesc] = useState('');
	const [zonedesc2, setzonedesc2] = useState('');

	const [devicetype, setdevicetype] = useState('');

	const [response, setresponse] = useState('');
	const [alarmreport, setalarmreport] = useState(true);

	const [chime, setchime] = useState('');
	const [supervision, setsupervision] = useState(true);

	// useEffect(() => {
	// 	if (!zone) return;
	// 	setname(zon.label);
	// 	setid(user.id);
	// 	user.usercode && setusercode(user.usercode as string);
	// 	setzwaveunlock(user.zwaveunlock as boolean);
	// 	setzwavecontrol(user.zwavecontrol as boolean);
	// }, [user]);

	// const handleAddNewUser = () => {
	// 	for (let user of users) {
	// 		if (usercode === user.usercode && usercode !== activeUser?.id) {
	// 			setShowModal(true);
	// 			return;
	// 		}
	// 	}
	// 	const user = {
	// 		label: name ? name : `User ${id}`,
	// 		id,
	// 		zwaveunlock,
	// 		zwavecontrol,
	// 		usercode,
	// 	};
	// 	addNewUser(user);
	// 	router.back();
	// };

	zoneFormButtonData.forEach((item) => {
		item.state = {
			state: eval(item.label.toLowerCase()),
			setState: eval(`set${item.label.toLowerCase()}`),
		};
	});
	return (
		<>
			<GridWithSideBar>
				<SquareButtonList items={zoneFormButtonData}>
					<StatefulButtonItem />
				</SquareButtonList>
				{showModal && (
					<Modal
						content={'User code not accepted'}
						closeHandler={setShowModal}
					/>
				)}
			</GridWithSideBar>
		</>
	);
};

export default ZoneForm;
