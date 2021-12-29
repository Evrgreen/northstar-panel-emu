import { icons } from '@src/components/lyric/icons/icons';

export type ArmType = 'disarmed' | 'armedaway' | 'armedstay' | 'armcustom';
export interface Button {
	link: string;
	label: string;
	armStatus?: ArmType;
	icon: IconType;
	color?: string;
}

export type IconType = keyof typeof icons;

export interface squareButton {
	label: string;
	link?: string;
	callBack?: () => void;
}

export interface User {
	id: number;
	label: string;
	code?: number;
	zwaveControl: boolean;
	zwaveDoor: boolean;
}

interface Trouble {
	label: string;
	code: string;
}
export interface Event {
	timestamp: string;
	zone: number;
	troubleType: Trouble;
}

export interface ZoneType {
	zoneNumber: number;
	serial: number;
	zoneDesc1?: string;
	zoneDesc2?: string;
	device: string;
	response: string;
	alarmReport: boolean;
	chime: string;
	supervision: boolean;
}
