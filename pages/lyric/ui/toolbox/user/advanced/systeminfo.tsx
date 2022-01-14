import { getLayout } from '@src/components/layout/lyric';
import { GridWithSideBar, Modal } from '@src/components/lyric';
import { useRouter } from 'next/router';
import React from 'react';

const content = `
	Prod. Id.:0109 Sw. Rev.:01.09.07755.49 
	Connection Manger Version Number:02.03
	ISOM Lib Version Number: b93cdbec6a proto rev:
	9da4d195541
	Radio Manger Version Number: Unavailable
	SiX AP Version Number: SW:3.0.14 HW:1.0 CH:11
	PN:50DC 
	5800 RF Version Number: 4.08 CK=646c`;

const SystemInfoPage = () => {
	const router = useRouter();

	return (
		<GridWithSideBar>
			<Modal content={content} closeHandler={router.back} />;
		</GridWithSideBar>
	);
};

SystemInfoPage.getLayout = getLayout;

export default SystemInfoPage;
