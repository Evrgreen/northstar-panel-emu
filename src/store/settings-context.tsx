import { createContext, useContext, useState } from 'react';

const initialSettings = {
	entryDelay: true,
	exitWarning: false,
	forceBypass: false,
	restartExitTime: true,
	entryDelay1: 45,
	entryDelay2: 45,
	exitDelay: 45,
	backlightTimeout: null,
	quickArm: true,
	quickExit: true,
	autoStayArming: true,
	chime: true,
};
type SettingsType = keyof typeof initialSettings;
const SettingsContext = createContext({
	settings: initialSettings,
	toggleSetting: (key: SettingsType) => {},
});

export const SettingsContextProvider = (props: any) => {
	const [settings, setSettings] = useState(initialSettings);

	const toggleSetting = (key: SettingsType): void => {
		setSettings((prevState) =>
			Object.assign({}, { ...prevState, [key]: !prevState[key] }),
		);
	};
	const context = {
		settings,
		toggleSetting,
	};
	return (
		<SettingsContext.Provider value={context}>
			{props.children}
		</SettingsContext.Provider>
	);
};

export default SettingsContext;
