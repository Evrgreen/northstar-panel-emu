import { getLayout } from '@src/components/layout/lyric';
import React from 'react';
import ZoneForm from '@src/components/lyric/ui/Zoneform';

const AddZonePage = () => {
	return <ZoneForm />;
};

AddZonePage.getLayout = getLayout;
export default AddZonePage;
