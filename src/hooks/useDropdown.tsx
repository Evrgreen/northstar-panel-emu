import { useState } from 'react';

type label = string;
type defaultState = string | number | undefined;
type options = string[] | number[];

export const useDropDown = (
	label: label,
	defaultState: defaultState,
	options: options,
) => {
	const [state, setState] = useState(defaultState);
	const id = `use-dropdown-${label.replace(' ', '-').toLowerCase()}`;

	const Dropdown = () => (
		<label htmlFor={id}>
			{label}
			<select
				name={label}
				id={id}
				value={state}
				onChange={(e) => setState(e.target.value)}
				onBlur={(e) => setState(e.target.value)}>
				{options.map((item) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
		</label>
	);
	return [state, Dropdown, setState];
};
