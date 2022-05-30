import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Head from '../components/Head'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
