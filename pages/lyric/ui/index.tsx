import { buttondata } from '@src/data/homescreeData';
import Time from '@src/utils/getTime';
import ButtonList from '@src/components/buttonlist/Buttonlist';
import { getLayout } from '@src/components/layout/lyric';

const HomePage = () => {
	const [time, date] = Time;
	return (
		<>
			<section className='w-1/3  h-full  bg-gradient-to-b  from-lyric-blue-900 via-lyric-blue-700  to-lyric-blue  text-ns-white'>
				<div className='h-full w-9/12 flex flex-col justify-around m-auto'>
					<div className='flex align-middle justify-center flex-col w-full'>
						<h3>{time}</h3>
						<small>{date}</small>
					</div>
					<section>
						<div>ICON</div>
						<h2>20 C</h2>
						<small>Sunny</small>
					</section>
					<p>5 Day Forecast</p>
				</div>
			</section>
			<section className='mt-16 w-full'>
				<ButtonList items={buttondata} columns={3} size={1} />
			</section>
		</>
	);
};

HomePage.getLayout = getLayout;
export default HomePage;
