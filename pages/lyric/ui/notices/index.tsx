import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
type IndexProps = PropTypes.InferProps<typeof propTypes>;
const Index = ({}: IndexProps) => {
	return (
		<>
			<h1>Notices Page</h1>
		</>
	);
};
export default Index;
Index.propTypes = propTypes;
