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

export interface squareButtonWithLink {
	label: string;
	link?: string;
	callBack?: () => void;
}

export interface squareButtonWithState extends Record<string, any> {
	title: string;
	label: string;
	type: string;
	callback?: string;
	deps?: UserKeys;
	styles?: string;
	value?: string;
	link?: string;
	ref?: any;
	options?: string[];
	state?: {
		state: string | boolean | number;
		setState: React.Dispatch<
			React.SetStateAction<string | boolean | number>
		>;
	};
}

export type MandateProps<T extends {}, K extends keyof T> = Omit<T, K> & {
	[MK in K]-?: NonNullable<T[MK]>;
};

export type UserKeys = keyof User;
export interface User {
	id: string;
	label: string;
	usercode: string;
	zwavecontrol?: boolean;
	zwaveunlock?: boolean;
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
	zoneDesc1: string;
	zoneDesc2: string;
	device: deviceType;
	response: string;
	alarmReport: boolean;
	chime: string;
	supervision: boolean;
	bypassed: boolean;
}

export type PartialZoneType = Partial<ZoneType>;
type deviceType =
	| 'NEW'
	| 'DOOR'
	| 'WINDOW'
	| 'MOTION SENSOR'
	| 'GLASS BREAK'
	| 'smokedetector'
	| 'carbonmonodet'
	| 'flood'
	| 'temperature'
	| 'tiltsensor'
	| 'enivronmental';
export interface Key {
	label: string;
	width?: string;
	symbol?: string;
	extraSymbol?: string;
	clickHandler?: string;
}
