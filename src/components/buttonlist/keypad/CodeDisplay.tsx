import React from 'react';

interface props {
	codeLength: number;
}

const CodeDisplay = ({ codeLength }: props) => {
	const [...items] = Array(4).keys();
	return (
		<div className='flex w-1/3   max-h-16 '>
			{items.map((item) => {
				return (
					<>
						<svg>
							<circle
								className={`${
									codeLength >= item + 1
										? 'fill-lyric-textPrimary'
										: 'fill-[none]'
								} stroke-[3] stroke-lyric-textPrimary `}
								cx='25px'
								cy='25px'
								r='10'
							/>
						</svg>
					</>
				);
			})}
		</div>
	);
};

export default CodeDisplay;
