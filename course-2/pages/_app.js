import { Fragment } from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import '../styles/globals.css'

function corePageLayout({ Component, pageProps }) {
	console.log();
	return <Fragment>
		<Head>
			<title>{ pageProps.title }</title>
			<meta name="description" content='Browse loaded pizzas'/>
		</Head>
		<Layout>
			<Component { ... pageProps } />
		</Layout>
	</Fragment>
}

export default corePageLayout;
