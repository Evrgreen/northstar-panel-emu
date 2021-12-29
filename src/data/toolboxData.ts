import { Button, squareButton } from './types';

const userPath = '/toolbox/user';

const techPath = '/toolbox/installer';

export const userToolboxdata: Button[] = [
	{ label: 'Users', icon: 'armedawayDark', link: `${userPath}/users` },

	{ label: 'Events', icon: 'armedawayDark', link: `${userPath}/events` },
	{ label: 'Advanced', icon: 'armedawayDark', link: `${userPath}/advanced` },
	{ label: 'Keypad', icon: 'armedawayDark', link: `${userPath}/remotes` },
	{ label: 'Date Time', icon: 'armedawayDark', link: `${userPath}/date` },
	{
		label: 'Reminders',
		icon: 'armedawayDark',
		link: `${userPath}/reminders`,
	},
	{
		label: 'Voice Command',
		icon: 'armedawayDark',
		link: `${userPath}voicecommand`,
	},
	{ label: 'WIFI Config', icon: 'armedawayDark', link: `${userPath}/wifi` },
];

export const installerToolboxData: squareButton[] = [
	{ label: 'Program', link: '/programming' },

	{ label: 'Test', link: `${techPath}/test` },
	{ label: 'Events', link: `${userPath}/events` },
	{ label: 'New Panel Association' },
	{ label: 'Program', link: `${techPath}/programming` },
];
