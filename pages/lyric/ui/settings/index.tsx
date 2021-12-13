import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
type SettingsProps = PropTypes.InferProps<typeof propTypes>;
import ButtonList from '@src/components/buttonlist/Buttonlist';
import { buttondata } from '@src/data/homescreeData';

const Settings = ({}: SettingsProps) => {
	return (
		<>
			<h1>Settings Page</h1>
			<ButtonList items={buttondata} col={3} size={1} />
		</>
	);
};
export default Settings;
Settings.propTypes = propTypes;
