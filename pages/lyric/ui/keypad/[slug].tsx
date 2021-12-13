import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LyricLayout from '@src/components/layout/lyric';
import RightBar from '@src/components/lyric/rightBar';
function KeypadPage() {
	const router = useRouter();
	const [code, setCode] = useState<number[]>([]);
	const [armed, setArmed] = useState(false);
	const useCode = 1234;

	let armType = router.query.slug as string;

	const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Clear', 0, 'Back'];

	const buttonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const button: HTMLButtonElement = event.currentTarget;
		let value: string | number = button.value;
		if (value === 'Clear') {
			setCode([]);
		} else if (value === 'Back') {
			setCode((currentCode) => currentCode.slice(0, -1));
		} else {
			value = parseInt(value);
			setCode((currentCode) => {
				return [...currentCode, value as number];
			});
		}
	};
	useEffect(() => {
		if (code.length === 4) {
			if (parseInt(code.join('')) === useCode) setArmed(true);
		} else if (armed === true && code.length !== 4) {
			setArmed(false);
		}
	}, [code]);

	return (
		<LyricLayout>
			<div className='flex h-full bg-blue-800  w-full max-w-full'>
				<section className='w-[45%] flex flex-col items-center justify-center h-full bg-lyric-grey-300'>
					<h5>
						Arm the System in{' '}
						{armType.charAt(0).toUpperCase() + armType.slice(1)}{' '}
						mode
					</h5>
					<h3>Enter Code:</h3>
					<div className='flex w-1/3'>
						<svg>
							<circle
								cx='25px'
								cy='25px'
								r='10'
								stroke='black'
								strokeWidth='2'
								fill={code.length >= 1 ? 'black' : 'none'}
							/>
						</svg>
						<svg>
							<circle
								cx='25px'
								cy='25px'
								r='10'
								stroke='black'
								strokeWidth='2'
								fill={code.length >= 2 ? 'black' : 'none'}
							/>
						</svg>
						<svg>
							<circle
								cx='25px'
								cy='25px'
								r='10'
								stroke='black'
								strokeWidth='2'
								fill={code.length >= 3 ? 'black' : 'none'}
							/>
						</svg>
						<svg>
							<circle className='fill'
								cx='25px'
								cy='25px'
								r='10'
								stroke='black'
								strokeWidth='2'
								fill={code.length >= 4 ? 'black' : 'none'}
							/>
						</svg>
					</div>
				</section>
				<section className='w-1/2 grid grid-cols-3  bg-lyric-grey-300 pt-5'>
					{keys.map((item) => (
						<div className=' border-solid text-center text-5xl'>
							<button
								className='bg-ns-white border-2 border-ns-white border-solid hover:border-ns-blue w-3/5 aspect-square rounded-full'
								key={item}
								value={item}
								onClick={(event) => buttonClick(event)}>
								{item}
							</button>
						</div>
					))}
				</section>
				<RightBar />
			</div>
		</LyricLayout>
	);
}

export default KeypadPage;
