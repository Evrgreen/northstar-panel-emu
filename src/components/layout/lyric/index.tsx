import React, { useEffect, useState } from 'react';
import styles from './lyricLayout.module.css';
import TopBar from '@src/components/lyric/topBar';
import Link from 'next/link';

import PropTypes from 'prop-types';
const propTypes = {
	children: PropTypes.node,
};
type IndexProps = PropTypes.InferProps<typeof propTypes>;

const LyricLayout = ({ children }: IndexProps) => {
	return (
		<div className=' p-6 bg-lyric-grey-400 h-screen w-screen flex flex-col justify-around items-center'>
			<TopBar />
			<main className='m-16 mt-0 border-2 border-black border-t-0 h-full  w-9/12 flex bg-lyric-grey  '>
				{children}
			</main>
			<section className=' flex w-6/12  justify-between'>
				<div className='w-12 h-12 bg-lyric-darkRed'></div>
				<p>Honeywell</p>
				<Link href='/lyric/ui'>
					<div className='w-12 h-12 bg-green-700'></div>
				</Link>
			</section>
		</div>
	);
};
export default LyricLayout;
LyricLayout.propTypes = propTypes;
