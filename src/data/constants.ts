
export const ARM_STATUS_CONSTS = {
	ARMED_AWAY: 'armedaway',
	DISARMED: 'disarmed',
	ARMED_STAY: 'armedstay',
	ARMED_CUSTOM: 'armedcustom',
};
export const TITLE_CONSTS = {
	[ARM_STATUS_CONSTS.DISARMED]: 'Ready to Arm',
	[ARM_STATUS_CONSTS.ARMED_AWAY]: 'Armed Away',
	[ARM_STATUS_CONSTS.ARMED_STAY]: 'Armed Stay',
	[ARM_STATUS_CONSTS.ARMED_CUSTOM]: 'Armed Custom',
}