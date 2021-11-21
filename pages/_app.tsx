import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { store } from '../controler/redux/store/configureStore'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  console.log(store);
  return (
    <Provider store={store}>
      <Head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
              />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
              />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

// useEffect(()=>{
  
// });
/*
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
              />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
              />
        { { <link rel="icon" href={images.favicon} /> } }
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
*/

export default MyApp
