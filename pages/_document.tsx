import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html className='max-h-screen'>
				<Head />
				<body id='body'>
					<Main />
					<NextScript />
					<div id='portal-root'></div>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
