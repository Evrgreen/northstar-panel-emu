import { getLayout } from '@src/components/layout/lyric';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const CellInstallPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const router = useRouter();
	return (
		<div className='my-auto ml-[8%] h-4/5 flex flex-col justify-around p-3 '>
			{currentPage === 1 && (
				<>
					<h3>Would you like to install cellular module?</h3>
					<div className='   flex justify-center gap-x-40'>
						<button
							onClick={() => setCurrentPage(2)}
							className='px-8 py-2 text-lg bg-ns-white shadow-md'>
							Yes
						</button>
						<button
							onClick={router.back}
							className='px-8 py-2 text-lg bg-ns-white shadow-md'>
							No
						</button>
					</div>
				</>
			)}
			{currentPage === 2 && (
				<>
					<h3>Complete these steps and the press "OK"</h3>
					<div>
						<p className='text-3xl'>1 - Remove panel side cover</p>
						<p className='text-3xl'>
							2 - Remove existing cellular module (if present)
						</p>
						<p className='text-3xl'>
							3 - Install new cellular module
						</p>
						<p className='text-3xl'>4 - Attach panel side cover</p>
					</div>
					<div className=' w-full flex justify-center gap-x-40'>
						<button
							onClick={() => setCurrentPage(3)}
							className='px-8 py-2 text-lg bg-ns-white shadow-md'>
							OK
						</button>
						<button
							onClick={router.back}
							className='px-8 py-2 text-lg bg-ns-white shadow-md'>
							Cancel
						</button>
					</div>
				</>
			)}
			{currentPage === 3 && (
				<>
					<h3 className='whitespace-pre-wrap'>
						{`Cellular Module Detected. Please contact your\nsecurity professional to activate.`}
					</h3>

					<div className=' w-1/2 flex justify-center gap-x-40'>
						<button
							onClick={router.back}
							className='px-8 py-2 text-lg bg-ns-white shadow-md'>
							Ok
						</button>
					</div>
				</>
			)}
		</div>
	);
};

CellInstallPage.getLayout = getLayout;
export default CellInstallPage;
