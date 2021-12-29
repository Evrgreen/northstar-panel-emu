import { useContext } from 'react';
import { useRouter } from 'next/router';
import getTime from '@src/utils/getTime';
import SettingsContext from '@src/store/settings-context';

const BottomBar = () => {
	const router = useRouter();
	const [time, date, year] = getTime;
	const SettingsCtx = useContext(SettingsContext);
	const content = router.pathname.includes('security') ? (
		<>
			<time className=' mx-auto pr-40 text-lyric-textAccent'>{`${time} ${date}, ${year}`}</time>
			<button
				className='ml-5 text-ns-white'
				onClick={() => {
					SettingsCtx.toggleSetting('entryDelay');
				}}>
				Entry Delay: {SettingsCtx.settings.entryDelay ? 'On' : 'Off'}
			</button>
		</>
	) : (
		<div className='w-full text-right px-5 py-2'>
			<button className='text-ns-white ' onClick={() => router.back()}>
				Back
			</button>
		</div>
	);

	return (
		<div className='absolute bottom-0 w-full  bg-gradient-to-b from-lyric-blue-900 to-lyric-blue text-2xl items-center justify-center flex flex-row-reverse '>
			{content}
		</div>
	);
};

export default BottomBar;
