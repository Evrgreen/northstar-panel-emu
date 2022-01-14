import { useRouter } from 'next/router';
import getTime from '@src/utils/getTime';
import { useSettingsContext } from '@src/store';
import { findRouteEnd } from '@src/utils/useRouterHelpers';
import { STUB_CONSTS } from '@src/data/constants';

const BottomBar = () => {
	const [time, date, year] = getTime;
	const { settings, toggleSetting } = useSettingsContext();
	const path = findRouteEnd();
	const router = useRouter();

	const content =
		path === STUB_CONSTS.SECURITY ? (
			<>
				<time className='[font-size:clamp(4px,_1vw_+_1rem,_32px)] mx-auto text-lyric-textAccent'>{`${time} ${date}, ${year}`}</time>
				<button
					className='ml-5 text-ns-white'
					onClick={() => {
						toggleSetting('entryDelay');
					}}>
					Entry Delay: {settings.entryDelay ? 'On' : 'Off'}
				</button>
			</>
		) : (
			<div className='w-full text-right px-5 py-2'>
				<button
					className='text-ns-white '
					onClick={() => router.back()}>
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
