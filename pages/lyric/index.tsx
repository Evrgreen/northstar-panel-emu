import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import LyricLayout from '@src/components/layout/lyric';
const propTypes = {};
type IndexProps = PropTypes.InferProps<typeof propTypes>;
const Index = ({}: IndexProps) => {
	return (
		<>
			<h1>Lyric Page</h1>
			<Image
				src='/LCP500.png'
				alt='lyric controller'
				width={400}
				height={300}
			/>
			<Link href='/lyric/ui'>Explore The Panel</Link>
		</>
	);
};
export default Index;
Index.propTypes = propTypes;
