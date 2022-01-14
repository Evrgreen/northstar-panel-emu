import ZoneButtonItems from '@src/components/buttonitems/ZoneButtonItems';
import ActionButtonContainer from '@src/components/buttonlist/ActionButtonContainer';
import { getLayout } from '@src/components/layout/lyric';
import { GridWithSideBar, SquareButtonList } from '@src/components/lyric';
import { PartialZoneType } from '@src/data/types';
import useZoneContext from '@src/store/zone-context';

const ZoneProgrammingPage = () => {
	const { zones, selectActiveZone } = useZoneContext();
	const selectZone = (item: PartialZoneType) => {
		selectActiveZone(item.zoneNumber!);
	};
	return (
		<GridWithSideBar>
			<SquareButtonList items={zones} clickHandler={selectZone}>
				<ZoneButtonItems />
			</SquareButtonList>

			<ActionButtonContainer />
		</GridWithSideBar>
	);
};

ZoneProgrammingPage.getLayout = getLayout;
export default ZoneProgrammingPage;
