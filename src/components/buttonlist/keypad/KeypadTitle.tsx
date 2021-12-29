import React from 'react';
import { useRouter } from 'next/router';

const KeypadTitle = () => {
	const router = useRouter();

	const keypadType = router.query.slug as string;

	return (
		<>
			<h5>
				Arm the System in{' '}
				{keypadType.charAt(0).toUpperCase() + keypadType.slice(1)} mode
			</h5>
			<h3>Enter Code:</h3>
		</>
	);
};

export default KeypadTitle;
