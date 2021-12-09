// export const getComputedValue = (key: string) => {
// 	return getComputedStyle(
// 		document.querySelector(':root') as HTMLElement,
// 	).getPropertyValue(key);
// };

export const setComputedValueOnRoot = (key: string, value: string | number) => {
	value = value.toString();
	document.documentElement.style.setProperty(key, value);
};

export const setComputedValuePerElement = (
	key: string,
	value: string | number,
	id: string,
) => {
	value = value.toString();
	document.getElementById(id)?.style.setProperty(key, value);
};
