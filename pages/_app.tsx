import { FC } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import styles from '@styles/global.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>
			<Component {...pageProps} />;
		</>
	);
};

export default MyApp;
