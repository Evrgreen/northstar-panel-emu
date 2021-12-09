import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './roundedButton.module.css';

const propTypes = {
	label: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	armStatus: PropTypes.string,
	size:PropTypes.number
};
type RoundButtonsProps = PropTypes.InferProps<typeof propTypes>;
const RoundButtons = ({
	label,
	children,
	link,
	size,
	armStatus = '',
}: RoundButtonsProps) => {
	if (size) {
		
	}

	return (
		<div className={styles.container}>
			<Link href={`/lyric/ui${link}`}>
				<a
					className={`${styles.btn} ${
						armStatus === 'armedaway' || armStatus === 'armedstay'
							? 'bg-red-800'
							: armStatus === 'disarmed'
							? 'bg-green-700'
							: 'bg-white'
					}`}>
					{children}
				</a>
			</Link>
			<div>
				<p>{label}</p>
			</div>
		</div>
	);
};
export default RoundButtons;
RoundButtons.propTypes = propTypes;
