import { getLayout } from '@src/components/layout/lyric';
import { GridWithSideBar, Modal } from '@src/components/lyric';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const BatteryInstallPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const router = useRouter();

	return (
		<GridWithSideBar>
			<div>
				{currentPage === 1 && (
					<Modal
						content='Would you like to replace the battery?'
						closeHandler={router.back}
						secondaryHandler={() => setCurrentPage(2)}
						buttonLabels={['No', 'Yes']}
					/>
				)}
				{currentPage === 2 && (
					<Modal
						content={`Complete these steps and then press OK.\n- Remove screw located at the bottom of the product.\n- Flex the product slightly and slide up to remove it from back plate.\n- Remove screws to open bracket that holds the battery.\n- Insert battery and connect the cable.\n- Install the bracket to secure battery in place.\n- Install the product on the back plate by sliding down.`}
						closeHandler={router.back}
						secondaryHandler={() => setCurrentPage(3)}
						buttonLabels={['Cancel', 'OK']}
					/>
				)}
				{currentPage === 3 && (
					<Modal
						content={`Battery not installed. Press OK to retry installaion.`}
						closeHandler={router.back}
					/>
				)}
			</div>
		</GridWithSideBar>
	);
};

BatteryInstallPage.getLayout = getLayout;
export default BatteryInstallPage;
