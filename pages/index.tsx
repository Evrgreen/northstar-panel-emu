import Dropdown from '@src/components/dropdown/Dropdown';

const panels = [{ title: 'Lyric Controller', subTitle: 'LCP-500' }];

export default function Home() {
	return (
		<main className='bg-ns-blue h-screen center'>
			<div className='background-green'>
				<Dropdown label={'Security Panels'} options={panels} />
			</div>
		</main>
	);
}
