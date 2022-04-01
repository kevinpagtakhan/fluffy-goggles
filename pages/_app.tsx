import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as amplitude from './amplitude';

amplitude.init('', 'fluffy-googles');

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
