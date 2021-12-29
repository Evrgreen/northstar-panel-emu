import { useState, useEffect } from 'react';
import { icons, iconType } from './icons';
interface props {
	armState: 'disarmed' | 'armedaway' | 'armedstay';
}

const ArmedIcon = ({ armState }: props) => {
	const [state, setState] = useState<iconType>(armState);
	if (!state) return <p>loading...</p>;

	useEffect(() => {
		setState(armState);
	}, [armState]);

	return icons[state];
};

export default ArmedIcon;
