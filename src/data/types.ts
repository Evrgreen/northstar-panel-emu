import { icons } from '@src/components/lyric/icons/icons';

export interface Button {
	link: string;
	label: string;
	armStatus?: 'disarmed' | 'armedaway' | 'armedstay';
	icon: IconType;
	color?: string;
	
}

export type IconType = keyof typeof icons;
