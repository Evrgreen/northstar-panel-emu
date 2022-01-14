import React, { Dispatch, SetStateAction } from 'react';

interface props {
	content: string;
	closeHandler: any;
	secondaryHandler?: any;
	buttonLabels?: string[];
}

const Modal = ({
	content,
	closeHandler,
	secondaryHandler = undefined,
	buttonLabels = ['Ok'],
}: props) => {
	const handleClose = () => {
		closeHandler();
	};
	return (
		<>
			<div className='absolute inset-0 bg-slate-800 opacity-40  m-auto'></div>

			<div className='absolute inset-0 bg-black text-white w-3/4 m-auto mt-12  h-3/4 rounded-lg border-4 border-white px-10 py-8 text-2xl flex flex-col justify-between'>
				<p className='whitespace-pre-wrap text-xl max-h-full '>
					{content}
				</p>
				<div className='w-full flex justify-center gap-x-11'>
					{secondaryHandler && (
						<button
							onClick={secondaryHandler}
							className='  bg-sky-500 text-ns-white text-2xl shadow-md py-3 px-16'>
							{buttonLabels[1]}
						</button>
					)}

					<button
						onClick={handleClose}
						className='  bg-sky-500 text-ns-white text-2xl shadow-md py-3 px-16'>
						{buttonLabels[0]}
					</button>
				</div>
			</div>
		</>
	);
};

export default Modal;
