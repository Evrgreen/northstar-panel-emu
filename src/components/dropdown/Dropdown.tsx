import { SyntheticEvent, useState } from 'react';

import React from 'react';
import router from 'next/router';

interface Option {
	title: string;
	subTitle: string;
}
interface Props {
	label: string;
	options: Option[];
}
const Dropdown = ({ label, options }: Props) => {
	const [state, setState] = useState<string>('');

	const id = `dropdown-${label.replace(' ', '-').toLowerCase()}`;

	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();
		const link = state.split(' ')[0].toLowerCase();
		router.push(`/${link}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor={id}>
				<input
					id={id}
					value={state}
					onChange={(e) => setState(e.target.value)}
					onBlur={(e) => setState(e.target.value)}
					list={label}
					placeholder='Select a Panel'
				/>
				<datalist id={label}>
					{options.map((item) => (
						<option key={item.title} value={item.title}>
							{item.subTitle}
						</option>
					))}
				</datalist>
			</label>
			<button>Go</button>
		</form>
	);
};
export default Dropdown;
