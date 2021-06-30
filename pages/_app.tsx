import React from 'react';
import Head from 'next/head';
import GlobalStyle from '../globalStyles';
import wrapper from '../store/configureStore';
import { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>CallBus Project</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default wrapper.withRedux(App);
