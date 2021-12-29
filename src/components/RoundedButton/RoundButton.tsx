import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './roundedButton.module.css';

const propTypes = {
	label: PropTypes.string,
	link: PropTypes.string,
	children: PropTypes.node.isRequired,
	armStatus: PropTypes.string,
	size: PropTypes.number,
};
type RoundButtonsProps = PropTypes.InferProps<typeof propTypes>;
const RoundButtons = ({
	label,
	children,
	link,
	size,
	armStatus = '',
}: RoundButtonsProps) => {
	let content = (
		<button className={`${styles.btn} bg-white`}>
			<div className='text-4xl'>{children}</div>
		</button>
	);
	if (link) {
		content = (
			<>
				<Link href={`/lyric/ui${link}`}>
					<a
						className={`${styles.btn} ${
							armStatus === 'armedaway' ||
							armStatus === 'armedstay'
								? 'bg-red-800'
								: armStatus === 'disarmed'
								? 'bg-green-700 text-ns-white'
								: 'bg-white'
						}`}>
						{children}
					</a>
				</Link>
				<div>
					<p>{label}</p>
				</div>
			</>
		);
	}
	return <div className={styles.container}>{content}</div>;
};
export default RoundButtons;
RoundButtons.propTypes = propTypes;
