import React, { FC, ReactNode } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { NextPage } from 'next';
import LyricLayout from '@src/components/layout/lyric';

type GetLayout = (page: ReactNode) => ReactNode;

type Page<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: GetLayout;
};

type MyAppProps<P = {}> = AppProps<P> & {
	Component: Page<P>;
};

const defaultGetLayout: GetLayout = (page: ReactNode): ReactNode => (
	<>
		<h1>Default Layout</h1>
		{page}
	</>
);

const MyApp: FC<AppProps> = ({
	Component,
	pageProps,
}: MyAppProps): JSX.Element => {
	const getLayout = Component.getLayout ?? defaultGetLayout;
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>

			{getLayout(<Component {...pageProps} />)}
		</>
	);
};

export default MyApp;
